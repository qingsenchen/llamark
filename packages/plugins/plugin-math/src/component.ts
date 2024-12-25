import { c, html, useEffect, useRef, useState } from 'atomico'
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
  selected: boolean
  config: InlineMathConfig
}

export const inlineMathComponent: Component<InlineMathComponentProps> = ({
  latex = 'x',
  title = '',
  selected = false,
  setAttr,
  config,
}) => {

  const ref = useRef()
  const refKatex = useRef()

  useEffect(() => {
    const dom = document.createElement('span')
    dom.dataset.type = 'mathInlineId'
    dom.dataset.value = latex
    katex.render(latex, dom)
    refKatex.current?.appendChild(dom)
  }, [])
  
  const onKeydown = (e: KeyboardEvent) => {
    
    if ('ArrowLeft' === e.key) {
      e.preventDefault()
      e.stopPropagation()
      const editor = ref.current.querySelector('script')
      const selection = window.getSelection();

      // 检查当前是否有选区（光标存在）
      if (!selection?.rangeCount) return;

      const range = selection.getRangeAt(0);  // 获取当前选区的Range对象

      // 获取光标位置
      const startContainer = range.startContainer;  // 光标的起始容器
      const startOffset = range.startOffset;      // 光标的偏移量（即光标所在字符的位置）

      // 如果光标已经在开头，就不做任何操作
      if (startOffset === 0) {
          alert("Cannot move cursor further forward (it's at the start).");
          return;
      }

      // 创建一个新的Range对象，光标向前移动
      const newRange = document.createRange();

      // 将新的Range的起始位置设置为当前位置的前一个字符
      newRange.setStart(startContainer, startOffset - 1);
      newRange.setEnd(startContainer, startOffset - 1);

      // 清除当前选区，并设置为新的选区
      selection.removeAllRanges();
      selection.addRange(newRange);
    } else if ('ArrowRight' === e.key) {
      e.preventDefault()
    e.stopPropagation()
      const editor = ref.current.querySelector('script')
        const selection = window.getSelection();

        // 检查是否存在选区
        if (!selection?.rangeCount) return;

        const range = selection.getRangeAt(0);  // 获取当前选区的Range对象

        // 获取光标的位置
        const startContainer = range.startContainer;  // 光标的起始容器
        const startOffset = range.startOffset;      // 光标的偏移量（即光标所在字符的位置）

        // 如果光标已经在文本末尾，就无法再向后移动
        if (startContainer.nodeType === 3 && startOffset === startContainer.textContent?.length) {
            alert("Cannot move cursor further backward (it's at the end).");
            return;
        }

        // 创建一个新的Range对象，光标向后移动
        const newRange = document.createRange();

        // 将新的Range的起始位置设置为当前位置的后一个字符
        newRange.setStart(startContainer, startOffset + 1);
        newRange.setEnd(startContainer, startOffset + 1);

        // 清除当前选区并设置新的选区
        selection.removeAllRanges();
        selection.addRange(newRange);

    } else if ('Backspace'=== e.key)  {
      e.preventDefault()
    e.stopPropagation()
      const editor = ref.current.querySelector('script')
      const selection = window.getSelection();

      // 检查当前是否有选区（光标存在）
      if (!selection?.rangeCount) return;

      const range = selection.getRangeAt(0);  // 获取当前选区的Range对象

      // 获取光标位置
      const startContainer = range.startContainer;  // 光标的起始容器
      const startOffset = range.startOffset;      // 光标的偏移量（即光标所在字符的位置）

      // 如果光标已经在开头，就不做任何操作
      if (startOffset === 0) {
          alert("Cannot move cursor further forward (it's at the start).");
          return;
      }

      // 创建一个新的Range对象，光标向前移动
      const newRange = document.createRange();

      // 将新的Range的起始位置设置为当前位置的前一个字符
      newRange.setStart(startContainer, startOffset - 1);
      newRange.setEnd(startContainer, startOffset);

      newRange.deleteContents()

      // 清除当前选区，并设置为新的选区
      selection.removeAllRanges();
      selection.addRange(newRange);
    }

    console.log(e.key)
  }

  const preventDrag = (e: Event) => {
    e.preventDefault()
    e.stopPropagation()
  }

  return html`
  <host class=${clsx(selected && 'selected', !latex && 'empty')}>
    <div ref=${ref} 
      draggable="true"
      ondragstart=${preventDrag}
      onkeydown=${onKeydown} style="display:inline;user-select: text;" contenteditable="true"><span style=" color:#888">$</span><script style="display:inline; color:#8421A2" type="math/tex"> ${latex} </script><span style=" color:#888">$</span>
    </div>
    <span ref=${refKatex}>
    </span>
  </host>`
}

inlineMathComponent.props = {
  latex: String,
  title: String,
  selected: Boolean,
  setAttr: Function,
  config: Object,
}

export const InlineMathElement = c(inlineMathComponent)
