import { $ctx } from '@milkdown/utils'
import { html } from 'atomico'
import { withMeta } from '../__internal__/meta'

export interface MathInlineConfig {
  render: (latex: string) => ReturnType<typeof html>
}

export const defaultMathInlineConfig: MathInlineConfig = {
  render: () => html``,
}

export const mathInlineConfig = $ctx(defaultMathInlineConfig, 'inlineMathConfigCtx')

withMeta(mathInlineConfig, {
  displayName: 'Config<math-inline>',
  group: 'MathInline',
})
