import type { MilkdownPlugin } from '@milkdown/ctx'
import { remarkMathPlugin, katexOptionsCtx, mathInlineSchema, mathInlineInputRule  } from './schema'
import { inlineMathView } from './view'
//import { inlineMathConfig} from './config'
import { mathInlineConfig } from './math-inline/config'


/// All plugins exported by this package.
export const math: MilkdownPlugin[] = [remarkMathPlugin, katexOptionsCtx, mathInlineSchema, mathInlineInputRule, inlineMathView, mathInlineConfig].flat()
