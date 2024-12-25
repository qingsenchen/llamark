import type { Ctx } from '@milkdown/ctx'
import { assistantAPI } from '../slices'
import { assistantEditTooltip } from '../tooltips'
import { defIfNotExists } from '../../__internal__/helper'
import { AssistantEditComponent } from './edit-component'
import { AssistantEdit } from './edit-view'

defIfNotExists('milkdown-assistant-edit', AssistantEditComponent)
export function configureAssistantEditTooltip(ctx: Ctx) {
  let assistantEditTooltipView: AssistantEdit | null

  ctx.update(assistantAPI.key, api => ({
    ...api,
    addLink: (from, to) => {
      assistantEditTooltipView?.addLink(from, to)
    },
    editLink: (mark, from, to) => {
      assistantEditTooltipView?.editLink(mark, from, to)
    },
    removeLink: (from, to) => {
      assistantEditTooltipView?.removeLink(from, to)
    },
    showAssistant: (from, to) => {
      assistantEditTooltipView?.showAssistant(from, to)
    },
    hideAssistant: () => {
      assistantEditTooltipView?.hideAssistant()
    }
  }))

  ctx.set(assistantEditTooltip.key, {
    view: (view) => {
      assistantEditTooltipView = new AssistantEdit(ctx, view)
      return assistantEditTooltipView
    },
  })
}
