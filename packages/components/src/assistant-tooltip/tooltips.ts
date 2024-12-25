import { assistantFactory } from '@liaocao/plugin-assistant'
import { withMeta } from '../__internal__/meta'

export const assistantPreviewTooltip = assistantFactory('ASSISTANT_PREVIEW')
withMeta(assistantPreviewTooltip[0], {
  displayName: 'PreviewTooltipSpec<assistant-tooltip>',
  group: 'AssistantTooltip',
})
withMeta(assistantPreviewTooltip[1], {
  displayName: 'PreviewTooltipPlugin<assistant-tooltip>',
  group: 'AssistantTooltip',
})
export const assistantEditTooltip = assistantFactory('ASSISTANT_EDIT')
withMeta(assistantEditTooltip[0], {
  displayName: 'EditTooltipSpec<assistant-tooltip>',
  group: 'AssistantTooltip',
})
withMeta(assistantEditTooltip[1], {
  displayName: 'EditTooltipPlugin<assistant-tooltip>',
  group: 'AssistantTooltip',
})
export const assistantWritingTooltip = assistantFactory('ASSISTANT_WRITING')
withMeta(assistantWritingTooltip[0], {
  displayName: 'WritingTooltipSpec<assistant-tooltip>',
  group: 'AssistantTooltip',
})
withMeta(assistantWritingTooltip[1], {
  displayName: 'WritingTooltipPlugin<assistant-tooltip>',
  group: 'AssistantTooltip',
})
