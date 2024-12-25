import type { PluginView } from '@milkdown/kit/prose/state'
import type { EditorView } from '@milkdown/kit/prose/view'
import type { Ctx } from '@milkdown/kit/ctx'
import type { AtomicoThis } from 'atomico/types/dom'
import { $ctx } from '@milkdown/kit/utils'
import { defIfNotExists, isInCodeBlock, isInList } from '../../../utils'
import type { AssistantTooltipFeatureConfig } from '../index'
import type { InstructionProps } from './component'
import { InstructionElement } from './component'
import { editorViewCtx } from '@milkdown/kit/core'
import { posToDOMRect } from '@milkdown/kit/prose'
import { assistantFactory } from '../../../../../plugins/plugin-assistant/src/assistant-plugin'
import { AssistantProvider } from '../../../../../plugins/plugin-assistant/src/assistant-provider'
import { assistantAPI } from '@milkdown/kit/component/assistant-tooltip'

export const instruction = assistantFactory('CREPE_INSTRUCTION')


defIfNotExists('liaocao-assistant-instruction', InstructionElement)
export function configureInstruction(ctx: Ctx, config?: AssistantTooltipFeatureConfig) {
  ctx.set(instruction.key, {
    view: view => new InstructionView(ctx, view, config),
  })
}

class InstructionView implements PluginView {
  readonly #content: AtomicoThis<InstructionProps, HTMLElement>
  readonly #slashProvider: AssistantProvider
  #programmaticallyPos: number | null = null

  constructor(ctx: Ctx, view: EditorView, config?: AssistantTooltipFeatureConfig) {
    this.#content = new InstructionElement()
    this.#content.hide = this.hide
    this.#content.ctx = ctx
    this.#content.config = config
    // eslint-disable-next-line ts/no-this-alias
    const self = this
    this.#slashProvider = new AssistantProvider({
      content: this.#content,
      debounce: 20,
      shouldShow: () => false,
    
      offset: 10,
    })

    this.#slashProvider.onShow = () => {
      this.#content.show = true
    }
    this.#slashProvider.onHide = () => {
      this.#content.show = false

    }
    this.#slashProvider.update(view)

    ctx.update(assistantAPI.key, api => ({
      ...api, 
      showInstruction: (pos, type) => this.show(pos, type),
      hideInstruction: () => this.hide(),
    }))
  }

  update = () => {}

  // update = (view: EditorView) => {
  //   this.#slashProvider.update(view)
  // }

  show = (pos: number, type: string) => {
    const view = this.#content.ctx?.get(editorViewCtx)
    if (!view) return
    if (pos != -1)
      this.#programmaticallyPos = pos
    this.#content.filter = ''
    this.#content.type = type
    console.log('show:', type)
    this.#slashProvider.show({
      getBoundingClientRect: () => posToDOMRect(view, 0, this.#programmaticallyPos ?? pos),
    })
  }

  hide = () => {
    this.#programmaticallyPos = null
    
    this.#slashProvider.hide()
  }

  destroy = () => {
    this.#slashProvider.destroy()
    this.#content.remove()
  }
}
