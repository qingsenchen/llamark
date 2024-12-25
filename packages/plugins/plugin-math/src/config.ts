import { $ctx } from '@milkdown/utils'
import { html } from 'atomico'
import { withMeta } from './__internal__/meta'

export interface InlineMathConfig {
  render: (latex: string) => ReturnType<typeof html>
}

export const defaultInlineMathConfig: InlineMathConfig = {
  render: () => html``,
}

export const inlineMathConfig = $ctx(defaultInlineMathConfig, 'inlineMathConfigCtx')

withMeta(inlineMathConfig, {
  displayName: 'Config<math-inline>',
  group: 'MathInline',
})
