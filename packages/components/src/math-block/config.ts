import { $ctx } from '@milkdown/utils'
import type { Extension } from '@codemirror/state'
import type { LanguageDescription } from '@codemirror/language'
import { html } from 'atomico'
import { withMeta } from '../__internal__/meta'

export interface MathBlockConfig {
  extensions: Extension[]
  languages: LanguageDescription[]
  expandIcon: () => ReturnType<typeof html> | string | HTMLElement
  searchIcon: () => ReturnType<typeof html> | string | HTMLElement
  clearSearchIcon: () => ReturnType<typeof html> | string | HTMLElement
  searchPlaceholder: string
  noResultText: string
  renderLanguage: (language: string, selected: boolean) => ReturnType<typeof html>
}

export const defaultConfig: MathBlockConfig = {
  extensions: [],
  languages: [],
  expandIcon: () => '⬇',
  searchIcon: () => '🔍',
  clearSearchIcon: () => '⌫',
  searchPlaceholder: 'Search language',
  noResultText: 'No result',
  renderLanguage: language => html`${language}`,
}

export const mathBlockConfig = $ctx(defaultConfig, 'mathBlockConfigCtx')

withMeta(mathBlockConfig, {
  displayName: 'Config<math-block>',
  group: 'MathBlock',
})
