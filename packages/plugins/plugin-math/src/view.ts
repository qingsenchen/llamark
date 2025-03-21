import { $view } from '@milkdown/utils'
import type { NodeViewConstructor } from '@milkdown/prose/view'
import { withMeta } from './__internal__/meta'
import { defIfNotExists } from './__internal__/helper'
// import { InlineMathElement } from './component'
// import { inlineMathConfig } from './config'
import { mathInlineSchema } from './schema'
//import { LlaMathInline } from './node-view'

import { MathInlineElement } from './math-inline/component'
import { mathInlineConfig } from './math-inline/config'
import { MathInlineView } from './math-inline/node-view'


defIfNotExists('llamark-math-inline', MathInlineElement)
export const inlineMathView = $view(mathInlineSchema.node, (ctx): NodeViewConstructor => {
  const config = ctx.get(mathInlineConfig.key)
  return (node, view, getPos) => new MathInlineView(
    node,
    view,
    getPos,
    config)
})

withMeta(inlineMathView, {
  displayName: 'NodeView<math-inline>',
  group: 'MathInline',
})
