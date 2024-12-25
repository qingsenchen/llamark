import type { Ctx } from '@milkdown/ctx'
import { configureAssistantEditTooltip } from './edit/edit-configure'

export function configureAssistantTooltip(ctx: Ctx) {
  //configureAssistantPreviewTooltip(ctx)
  configureAssistantEditTooltip(ctx)
}
