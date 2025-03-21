import { c, html, useEffect, useProp, useRef, useState, useCallback, useHost, useMemo, h } from 'atomico'
import type { Component } from 'atomico'
import clsx from 'clsx'
import type { MathInlineConfig } from './config'
import katex from 'katex'
import { EditorView } from '@milkdown/prose/view'

export interface Attrs {
  latex: string
  title: string
}

export type MathInlineComponentProps = Attrs & {
  setAttr: <T extends keyof Attrs>(attr: T, value: Attrs[T]) => void
  maybeEscape: (unit: 'line' | 'char', dir: -1 | 1) => boolean
  isEditorReadonly: () => boolean
  onChange: (latex: string) => void
  editView: EditorView
  selected: boolean
  preview: boolean
  config: MathInlineConfig
}

export const mathInlineComponent: Component<MathInlineComponentProps> = ({
  latex = '',
  title = '',
  selected = false,
  editView,
  preview = false,
  maybeEscape = () => { },
  onChange = () => { },
  setAttr,
  config,
}) => {

  const refMathInlineEdit = useRef()
  const refMathInlinePreview = useRef()
  const refTex = useRef()

  const [tex, setTex] = useState(latex)

  const [readOnly, setReadOnly] = useProp('preview')

  const dom = document.createElement('span')
  dom.dataset.type = 'mathInlineId'


  useEffect(() => {
    
    dom.dataset.value = tex
    katex.render(tex, dom)
    refMathInlinePreview.current?.appendChild(dom)
  }, [])

  useEffect(() => {
    refMathInlinePreview.current.innerHTML = ''
    const dom = document.createElement('span')
    dom.dataset.type = 'mathInlineId'
    dom.dataset.value = tex
    katex.render(tex, dom)
    refMathInlinePreview.current?.appendChild(dom)
  }, [tex])

  useEffect(() => {
    setTex(latex)
  }, [latex])


  const host = useHost()
  const root = useMemo(() => host.current.getRootNode() as HTMLElement, [host])


  const preventDrag = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return html`
  <host class=${clsx(selected && 'selected', !latex && 'empty')}>
    <div class="math-inline-preview ${clsx(selected && 'hidden')}" 
      ref=${refMathInlinePreview}
      onclick=${() => setReadOnly(false)}>
    </div>
    <div class="math-inline-edit ${clsx(!selected && 'hidden')}">
      ${h(editView?.dom, {})}
    </div>
  </host>`
}

mathInlineComponent.props = {
  latex: String,
  title: String,
  editView: Object,
  selected: Boolean,
  preview: Boolean,
  setAttr: Function,
  onChange: Function,
  isEditorReadonly: Boolean,
  maybeEscape: Function,
  config: Object,
}

export const MathInlineElement = c(mathInlineComponent)
