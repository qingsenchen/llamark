import { $ctx } from '@milkdown/utils'
import type { Mark } from '@milkdown/prose/model'
import { html } from 'atomico'
import { withMeta } from '../__internal__/meta'

export interface AssistantState {
  mode: 'preview' | 'edit' | 'writing' | 'writed'
  from: number,
  to: number,
}

const defaultState: AssistantState = {
  mode: 'preview',
  from: -1,
  to: -1
}

export const assistantStateCtx = $ctx({ ...defaultState }, 'assistantStateCtx')

withMeta(assistantStateCtx, {
  displayName: 'State<assistant>',
  group: 'Assistant',
})

export interface AssistantAPI {
  addLink: (from: number, to: number) => void
  showAssistant: (from: number, to: number) => void
  hideAssistant: () => void
  showInstruction: (pos: number, type: string) => void
  hideInstruction: () => void
  editLink: (mark: string, from: number, to: number) => void
  removeLink: (from: number, to: number) => void
}

const defaultAPI: AssistantAPI = {
  showAssistant: () => {},
  hideAssistant: () => {},
  showInstruction: () => {},
  hideInstruction: () => {},
  addLink: () => {},
  editLink: () => {},
  removeLink: () => {},
}

export const assistantAPI = $ctx({ ...defaultAPI }, 'assistantAPICtx')

withMeta(assistantStateCtx, {
  displayName: 'API<assistant>',
  group: 'Assistant',
})

export interface AssistantConfig {
  linkIcon: () => ReturnType<typeof html>
  editButton: () => ReturnType<typeof html>
  confirmButton: () => ReturnType<typeof html>
  stopButton: () => ReturnType<typeof html>
  onCopyLink: (link: string) => void
  inputPlaceholder: string,
}

const defaultConfig: AssistantConfig = {
  linkIcon: () => '🔗',
  editButton: () => '✎',
  stopButton: () => '⌫',
  confirmButton: () => html`Confirm ⏎`,
  onCopyLink: () => {},
  inputPlaceholder: 'Ask AI...',
}

export const assistantConfig = $ctx({
  ...defaultConfig,
}, 'assistantConfigCtx')

withMeta(assistantStateCtx, {
  displayName: 'Config<assistant>',
  group: 'Assistant',
})
