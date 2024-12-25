import type { MilkdownPlugin } from '@milkdown/ctx'
import { remarkMathPlugin, katexOptionsCtx, mathInlineSchema, mathBlockSchema, mathBlockInputRule, mathInlineInputRule  } from './schema'
import { inlineMathView } from './view'
import { inlineMathConfig} from './config'


/// All plugins exported by this package.
export const math: MilkdownPlugin[] = [remarkMathPlugin, katexOptionsCtx, mathInlineSchema, mathBlockSchema, mathBlockInputRule, mathInlineInputRule, inlineMathView, inlineMathConfig].flat()
