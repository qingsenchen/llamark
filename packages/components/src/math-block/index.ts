import type { MilkdownPlugin } from '@milkdown/ctx'
import { mathBlockView } from './view'
import { mathBlockConfig } from './config'

export * from './config'
export * from './view'

export const mathBlockComponent: MilkdownPlugin[] = [
  mathBlockView,
  mathBlockConfig,
]
