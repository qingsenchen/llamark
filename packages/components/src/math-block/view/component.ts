import type { EditorView as CodeMirror } from '@codemirror/view'
import type { Component } from 'atomico'
import { c, h, html, useEffect, useHost, useLayoutEffect, useMemo, useRef, useState, useProp } from 'atomico'
import { computePosition } from '@floating-ui/dom'
import clsx from 'clsx'
import type { MathBlockConfig } from '../config'
import type { LanguageInfo } from './loader'
import katex from 'katex'

export interface MathComponentProps {
  selected: boolean
  focused: boolean
  codemirror: CodeMirror
  language: string
  content: string
  getAllLanguages: () => Array<LanguageInfo>
  setLanguage: (language: string) => void
  setFocused: (focus: boolean) => void
  isEditorReadonly: () => boolean
  config: Omit<MathBlockConfig, 'languages' | 'extensions'>
}

export const mathComponent: Component<MathComponentProps> = ({
  selected = false,
  focused,
  codemirror,
  getAllLanguages,
  setLanguage,
  setFocused,
  language,
  content,
  config,
  isEditorReadonly,
}) => {
  const host = useHost()
  const triggerRef = useRef<HTMLButtonElement>()
  const pickerRef = useRef<HTMLDivElement>()
  const searchRef = useRef<HTMLInputElement>()
  const [filter, setFilter] = useState('')
  const [showPicker, setShowPicker] = useState(false)
  const [formula, setFormula] = useProp('content')
  const [hasFocus, setHasFocus] = useProp('focused')

  const root = useMemo(() => host.current.getRootNode() as HTMLElement, [host])

  useEffect(() => {
    const lang = getAllLanguages?.()?.find(languageInfo =>
      languageInfo.alias.some(alias =>
        alias.toLowerCase() === language?.toLowerCase()))

    if (lang && lang.name !== language)
      setLanguage?.(lang.name)
  }, [language])

  useEffect(() => {
    setShowPicker(false)
  }, [language])

  useEffect(() => {
    const focus = focused ?? false
    setHasFocus(focus)
    setFocused?.(focus)
  }, [focused])
  

  let renderKatex = useMemo(() => {
    
    try {
      const renderString = katex.renderToString(formula ?? codemirror?.state.doc.toString())

      return renderString
    } catch (error) {
      if (error instanceof katex.ParseError || error instanceof TypeError) {
        
        return error.message
      }

      throw error;
    }
  }, [formula]);

  useEffect(() => {
    const clickHandler = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      if (triggerRef.current && triggerRef.current.contains(target))
        return

      const picker = pickerRef.current
      if (!picker)
        return

      if (picker.dataset.expanded !== 'true')
        return

      if (!picker.contains(target))
        setShowPicker(false)
    }

    root.addEventListener('click', clickHandler)

    return () => {
      root.removeEventListener('click', clickHandler)
    }
  }, [])

  useLayoutEffect(() => {
    setFilter('')
    const picker = triggerRef.current
    const languageList = pickerRef.current
    if (!picker || !languageList)
      return

    computePosition(picker, languageList, {
      placement: 'bottom-start',
    }).then(({ x, y }) => {
      Object.assign(languageList.style, {
        left: `${x}px`,
        top: `${y}px`,
      })
    })
  }, [showPicker])

  const languages = useMemo(() => {
    if (!showPicker)
      return []

    const all = getAllLanguages?.() ?? []

    const selected = all.find(languageInfo => languageInfo.name.toLowerCase() === language?.toLowerCase())

    const filtered = all.filter((languageInfo) => {
      return (languageInfo.name.toLowerCase().includes(filter.toLowerCase())
        || languageInfo.alias.some(alias => alias.toLowerCase().includes(filter.toLowerCase()))) && languageInfo !== selected
    })

    if (filtered.length === 0)
      return []

    if (!selected)
      return filtered

    return [selected, ...filtered]
  }, [filter, showPicker, language])

  const changeFilter = (e: InputEvent) => {
    const target = e.target as HTMLInputElement
    setFilter(target.value)
  }

  const onTogglePicker = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
    if (isEditorReadonly?.())
      return

    setShowPicker((show) => {
      if (!show) {
        setTimeout(() => searchRef.current?.focus(), 0);
      }
      return !show
    })
  }

  const onClear = (e: MouseEvent) => {
    e.preventDefault()
    setFilter('')
  }

  const onSearchKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Escape')
      setFilter('')
  }

  const onListKeydown = (e: KeyboardEvent) => {
    if (e.key === 'Enter') {
      const active = document.activeElement
      if (active instanceof HTMLElement && active.dataset.language)
        setLanguage?.(active.dataset.language)
    }
  }

  const onPreviewClick = () => {
    if (!hasFocus) {
      setHasFocus(true)
      codemirror?.focus()
      codemirror?.dispatch({ selection: { anchor:0, head:0 } })
    }
  }

  const renderedLanguageList = useMemo(() => {
    if (!languages?.length)
      return html`<li class="language-list-item no-result">${config?.noResultText}</li>`

    return languages.map(languageInfo =>
      html`<li
        role="listitem"
        tabindex="0"
        class="language-list-item"
        aria-selected=${languageInfo.name.toLowerCase() === language?.toLowerCase()}
        data-language=${languageInfo.name}
        onclick=${() => setLanguage?.(languageInfo.name)}
      >
        ${config?.renderLanguage?.(languageInfo.name, languageInfo.name.toLowerCase() === language?.toLowerCase())}
      </li>`,
    )
  }, [languages])

  return html`<host class=${clsx(hasFocus && 'cm-focused', selected && 'selected')}>
    <div contenteditable="false" class=${clsx('tools', !hasFocus && 'hidden')}>
      <button
        type="button"
        ref=${triggerRef}
        class="language-button"
        onpointerdown=${onTogglePicker}
        data-expanded=${showPicker}
      >
        ${language || 'Text'}
        <div class="expand-icon">
          ${config?.expandIcon?.()}
        </div>
      </button>
      <div ref=${pickerRef} data-expanded=${showPicker} class=${clsx('language-picker', showPicker && 'show')}>
        <div class="list-wrapper">
          <div class="search-box">
            <div class="search-icon">
              ${config?.searchIcon?.()}
            </div>
            <input
              ref=${searchRef}
              class="search-input"
              placeholder=${config?.searchPlaceholder}
              value=${filter}
              oninput=${changeFilter}
              onkeydown=${onSearchKeydown}
            />
            <div class=${clsx('clear-icon', filter.length === 0 && 'hidden')} onmousedown=${onClear}>
              ${config?.clearSearchIcon?.()}
            </div>
          </div>
          <ul class="language-list" role="listbox" onkeydown=${onListKeydown}>
            ${renderedLanguageList}
          </ul>
        </div>
      </div>
    </div>
    <div class=${clsx('codemirror-host', !hasFocus && 'hidden')}>${h(codemirror?.dom, {})}</div>
    <div class="math-formula-preview" onmousedown=${onPreviewClick} innerHTML=${renderKatex}>
    </div>
  </host>`
}

mathComponent.props = {
  selected: Boolean,
  focused: Boolean,
  codemirror: Object,
  language: String,
  content: String,
  getAllLanguages: Function,
  setLanguage: Function,
  setFocused: Function,
  isEditorReadonly: Function,
  config: Object,
}

export const MathElement = c(mathComponent)
