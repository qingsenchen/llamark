import type { Component } from 'atomico'
import { c, html, useEffect, useProp, useRef, useState } from 'atomico'
import clsx from 'clsx'
import { Ctx } from '@milkdown/ctx'
import type { AssistantConfig } from '../slices'
import { assistantAPI } from '../slices'
import { editorViewCtx } from '@milkdown/core'

export interface AssistantEditProps {
  ctx: Ctx
  config: AssistantConfig
  question: string
  state: 'edit'| 'writing'| 'writed' | null
  onConfirm: (question: string) => void
  onStop: () => void
  onCancel: () => void
}

export const assistantEditComponent: Component<AssistantEditProps> = ({
  ctx,
  question,
  state,
  onConfirm,
  onStop,
  onCancel,
  config,
}) => {
  const questionInput = useRef<HTMLInputElement>()
  const writingTips = useRef<HTMLParagraphElement>()

  const [input, setInput] = useProp('question')
  const [tips, setTips] = useState('Thinking...')
  
  useEffect(() => {
    setInput(question ?? '')
  }, [question])

  // useEffect(() => {
  //   setTips(question ?? '')
  // }, [tips])

  const onConfirmEdit = () => {
    onConfirm?.(questionInput.current?.value ?? '')
  }

  const onChange = (fn: (ctx: Ctx) => void) => (e: InputEvent) => {
    const value = (e.target as HTMLInputElement).value
    setInput(value)
    question = value
    ctx && fn(ctx)    
  }

  const onKeydown = (e: KeyboardEvent) => {
    e.stopPropagation()
    if (e.key === 'Enter') {
      onConfirm?.(questionInput.current?.value ?? '')
      e.preventDefault()
    }
    if (e.key === 'Escape') {
      onCancel?.()
      e.preventDefault()
    }

    if (e.key === 'Backspace') {
      if (questionInput.current?.value != '') return
      onCancel?.()
      e.preventDefault()
    }
  }

  if (state === 'writed') 
    setTips('Done!')
  else 
    setTips('Thinking...')

  if (state === 'writing' || state === 'writed') {
    return html`
    <host>
      <div class="link-edit">
        <span class=${clsx('button confirm')}>
          ${config?.linkIcon()}
        </span>
        <p
          class="tips"
          ref=${writingTips}>
           ${ state === 'writing' ? 'Thinking...': 'Done...' }
        </p>
        <span class=${clsx('button confirm')} onclick=${onStop}>
          ${ state === 'writing' ? config?.stopButton(): config?.confirmButton() }
        </span>
      </div>
    </host>
  `
  } else {
    return html`
    <host>
      <div class="link-edit">
        <span class=${clsx('button confirm')}>
          ${config?.linkIcon()}
        </span>
        <input
          class="input-area"
          placeholder=${config?.inputPlaceholder}
          ref=${questionInput}
          onkeydown=${onKeydown}
          oninput=${onChange((ctx: Ctx) => {
            if (question && question.length > 0)
              ctx.get(assistantAPI.key).hideInstruction()
            else
              ctx.get(assistantAPI.key).showInstruction(ctx.get(editorViewCtx).state.selection.to, 'suggest')
          })}
          value=${question}
        />
        <span class=${clsx('button confirm', input && 'active')} onclick=${onConfirmEdit}>
          ${config?.confirmButton()}
        </span>
      </div>
    </host>
  `
  }
}

assistantEditComponent.props = {
  ctx: Object,
  config: Object,
  question: String,
  state: String,
  onConfirm: Function,
  onStop: Function,
  onCancel: Function,
}

export const AssistantEditComponent = c(assistantEditComponent)
