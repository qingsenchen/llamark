import type { MilkdownPlugin } from '@milkdown/ctx'
import { assistantAPI, assistantConfig, assistantStateCtx } from './slices'
import { assistantEditTooltip } from './tooltips'

import type { Transaction } from '@milkdown/prose/state'
import { AllSelection, TextSelection } from '@milkdown/prose/state'
import { $ctx, $shortcut } from '@milkdown/utils'

export * from './slices'
export * from './configure'
export * from './tooltips'

export const assistantWakerPlugin = $shortcut(ctx => ({
    Space: (state, dispatch) => {
      
      console.log("Assistant Waker!")
  
      return false
    },
  }))

export const assistantPlugin: MilkdownPlugin[] = [assistantStateCtx, assistantWakerPlugin, assistantAPI, assistantConfig, assistantEditTooltip ].flat()
