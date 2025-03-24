import { $view } from '@milkdown/utils'
import { mathBlockSchema } from '@milkdown/preset-commonmark'
import type { NodeViewConstructor } from '@milkdown/prose/view'
import { mathBlockConfig } from '../config'
import { withMeta } from '../../__internal__/meta'
import { defIfNotExists } from '../../__internal__/helper'
import { LlamarkMathBlock } from './node-view'
import { LanguageLoader } from './loader'
import { MathElement } from './component'

defIfNotExists('llamark-math-block', MathElement)
export const mathBlockView = $view(mathBlockSchema.node, (ctx): NodeViewConstructor => {
  const config = ctx.get(mathBlockConfig.key)
  const languageLoader = new LanguageLoader(config.languages)
  return (node, view, getPos) => new LlamarkMathBlock(
    node,
    view,
    getPos,
    languageLoader,
    config,
  )
})

withMeta(mathBlockView, {
  displayName: 'NodeView<math-block>',
  group: 'MathBlock',
})
