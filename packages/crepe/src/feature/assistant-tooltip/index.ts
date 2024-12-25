import { configureAssistantTooltip, assistantConfig, assistantPlugin } from '@milkdown/kit/component/assistant-tooltip'
import type { DefineFeature, Icon } from '../shared'
import { enterIcon, robot1Icon, editIcon, stopIcon } from '../../icons'
import type { GroupBuilder } from './instruction/group-builder'
import { configureInstruction, instruction } from './instruction'

interface AssistantTooltipConfig {
  linkIcon: Icon
  editButton: Icon
  stopButton: Icon
  confirmButton: Icon
  inputPlaceholder: string
  onCopyLink: (link: string) => void

  handleAddIcon: Icon
  handleDragIcon: Icon
  buildMenu: (builder: GroupBuilder) => void

  slashMenuTextGroupLabel: string
  slashMenuTextIcon: Icon
  slashMenuTextLabel: string
  slashMenuH1Icon: Icon
  slashMenuH1Label: string
  slashMenuH2Icon: Icon
  slashMenuH2Label: string
  slashMenuH3Icon: Icon
  slashMenuH3Label: string
  slashMenuH4Icon: Icon
  slashMenuH4Label: string
  slashMenuH5Icon: Icon
  slashMenuH5Label: string
  slashMenuH6Icon: Icon
  slashMenuH6Label: string
  slashMenuQuoteIcon: Icon
  slashMenuQuoteLabel: string
  slashMenuDividerIcon: Icon
  slashMenuDividerLabel: string

  slashMenuListGroupLabel: string
  slashMenuBulletListIcon: Icon
  slashMenuBulletListLabel: string
  slashMenuOrderedListIcon: Icon
  slashMenuOrderedListLabel: string
  slashMenuTaskListIcon: Icon
  slashMenuTaskListLabel: string

  slashMenuAdvancedGroupLabel: string
  slashMenuImageIcon: Icon
  slashMenuImageLabel: string
  slashMenuCodeBlockIcon: Icon
  slashMenuCodeBlockLabel: string
  slashMenuTableIcon: Icon
  slashMenuTableLabel: string
}

export type AssistantTooltipFeatureConfig = Partial<AssistantTooltipConfig>

export const defineFeature: DefineFeature<AssistantTooltipFeatureConfig> = (editor, config) => {
  editor
    .config(configureAssistantTooltip)
    .config(ctx => configureInstruction(ctx, config))
    .config((ctx) => {
      ctx.update(assistantConfig.key, prev => ({
        ...prev,
        linkIcon: config?.linkIcon ?? (() => robot1Icon),
        editButton: config?.editButton ?? (() => editIcon),
        stopButton: config?.stopButton ?? (() => stopIcon),
        confirmButton: config?.confirmButton ?? (() => enterIcon),
        inputPlaceholder: config?.inputPlaceholder ?? 'Ask AI...',
        onCopyLink: config?.onCopyLink ?? (() => {}),
      }))
    })
    .use(assistantPlugin)
    .use(instruction)
}

