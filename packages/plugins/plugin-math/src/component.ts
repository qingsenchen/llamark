import { c, html, useEffect, useProp, useRef, useState, useCallback, useHost, useMemo } from 'atomico'
import type { Component } from 'atomico'
import clsx from 'clsx'
import type { InlineMathConfig } from './config'
import katex from 'katex'

export interface Attrs {
  latex: string
  title: string
}

export type InlineMathComponentProps = Attrs & {
  setAttr: <T extends keyof Attrs>(attr: T, value: Attrs[T]) => void
  maybeEscape: (unit: 'line' | 'char', dir: -1 | 1) => boolean
  isEditorReadonly: () => boolean
  onChange: (latex: string) => void
  selected: boolean
  preview: boolean
  config: InlineMathConfig
}

export const inlineMathComponent: Component<InlineMathComponentProps> = ({
  latex = 'x',
  title = '',
  selected = false,
  maybeEscape = () => { },
  onChange = () => { },
  setAttr,
  config,
}) => {

  const refMathInlineEdit = useRef()
  const refMathInlinePreview = useRef()
  const refTex = useRef()

  const [tex, setTex] = useState(latex)

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


  const forwardCursor = (dir: number) => {
    const selection = window.getSelection();

    
    if (!selection) return
    const range = selection.getRangeAt(0); // 获取当前选区的范围

    let startContainer = range.startContainer;
    let startOffset = range.startOffset;

    if (startContainer.textContent && range.startOffset < startContainer.textContent.length) {
      const newRange = document.createRange();
      newRange.setStart(startContainer, startOffset+1); // 从文本节点的开头开始
      newRange.setEnd(startContainer, startOffset+1); // 可以根据需要设置 endOffset
      selection.removeAllRanges();
        selection.addRange(newRange);
        return
    }
    
    // 获取 startContainer 的下一个兄弟节点
    let nextNode = startContainer.nextSibling;
    
    if (!nextNode || !nextNode.textContent) {
        // 如果没有下一个兄弟节点，尝试找到父节点的下一个兄弟节点
        let parent = startContainer.parentNode;
        nextNode = parent ? parent.nextSibling : null;
    }


    // 如果找到了下一个节点
    if (nextNode) {
        const newRange = document.createRange();
        
        if (nextNode.nodeType === 3) { // 如果是文本节点
            newRange.setStart(nextNode.childNodes[1] ?? nextNode, 1); // 从文本节点的开头开始
            newRange.setEnd(nextNode.childNodes[1] ?? nextNode, 1); // 可以根据需要设置 endOffset
        } else if (nextNode.nodeType === 1 && nextNode.childNodes.length > 2) {
          newRange.setStart(nextNode.childNodes[1] ?? nextNode, 1); // 从文本节点的开头开始
          newRange.setEnd(nextNode.childNodes[1] ?? nextNode, 1); // 可以根据需要设置 endOffset
        }

        // 清除现有的选区，并设置新的选区
        selection.removeAllRanges();
        selection.addRange(newRange);
    } else {
        console.log("没有下一个节点可供选择");
    }
  }

  const host = useHost()
  const root = useMemo(() => host.current.getRootNode() as HTMLElement, [host])

  const onKeydown = useCallback((e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === 'Escape') {
      e.preventDefault()
      return
    }

    if (e.key === 'ArrowLeft') {
      //  e.preventDefault()
      maybeEscape('char', -1)
    }

    if (e.key === 'ArrowRight') {
      //e.preventDefault()
      maybeEscape('char', 1)
      //forwardCursor(1)
    }

    if (e.key === 'Enter') {
      e.preventDefault()
    }

    if (e.key === 'Backspace') {
      // e.preventDefault()
      // const selection = window.getSelection();

      // // 检查当前是否有选区（光标存在）
      // if (!selection?.rangeCount) return;

      // const range = selection.getRangeAt(0);  // 获取当前选区的Range对象

      // // 获取光标位置
      // const startContainer = range.startContainer;  // 光标的起始容器
      // const startOffset = range.startOffset;      // 光标的偏移量（即光标所在字符的位置）

      // // 如果光标已经在开头，就不做任何操作
      // if (startOffset === 0) {
      //   alert("Cannot move cursor further forward (it's at the start).");
      //   return;
      // }

      // // 创建一个新的Range对象，光标向前移动
      // const newRange = document.createRange();

      // // 将新的Range的起始位置设置为当前位置的前一个字符
      // newRange.setStart(startContainer, startOffset - 1);
      // newRange.setEnd(startContainer, startOffset);

      // newRange.deleteContents()

      // // 清除当前选区，并设置为新的选区
      // selection.removeAllRanges();
      // selection.addRange(newRange);
    }
  }, [maybeEscape])

  const onInput = useCallback((e: InputEvent) => {
debugger
    //console.log(e.data, refMathInlineEdit.current?.querySelector('script')?.innerText)
    //const value = refMathInlineEdit.current?.querySelector('script')?.innerText
    const value = refMathInlineEdit.current?.innerText
    const regex = /(?:\$)([^$]+)(?:\$)$/
    let match
    if ((match = regex.exec(value)) !== null) {
      console.log(match[1]); // 分别输出: "123456", "789"
      onChange(value)
      setTex(match[1] ?? value)
    }
    
  })






  useEffect(() => {
    
    if (selected) {
      root.addEventListener('keydown', onKeydown, { capture: true })
      refMathInlineEdit.current?.addEventListener('input', onInput)
    }
    else {
      root.removeEventListener('keydown', onKeydown, { capture: true })
      refMathInlineEdit.current?.removeEventListener('input', onInput)
    }

    return () => {
      root.removeEventListener('keydown', onKeydown, { capture: true })
      refMathInlineEdit.current?.removeEventListener('input', onInput)
    }
  }, [selected, onKeydown])


  const preventDrag = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return html`
  <host class=${clsx(selected && 'selected', !latex && 'empty')}>

    <div contenteditable="true" ref=${refMathInlineEdit} oninput=${onInput} class=${clsx(!selected && 'hidden', 'math-inline-edit')}>
        <span class="math-dollar-head">$</span>
        ${tex}
        <span class="math-dollar-tail">$</span>
    </div>


    <span class=${clsx(selected && 'hidden', 'math-inline-preview')}
      ref=${refMathInlinePreview}>
    </span>
  </host>`
}

inlineMathComponent.props = {
  latex: String,
  title: String,
  selected: Boolean,
  preview: Boolean,
  setAttr: Function,
  onChange: Function,
  isEditorReadonly: Boolean,
  maybeEscape: Function,
  config: Object,
}

export const InlineMathElement = c(inlineMathComponent)
