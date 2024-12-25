import type { DefaultValue } from '@milkdown/kit/core'
import { Editor, defaultValueCtx, editorViewOptionsCtx, rootCtx, electronCtx } from '@milkdown/kit/core'

import { commonmark } from '@milkdown/kit/preset/commonmark'
import { gfm } from '@milkdown/kit/preset/gfm'
import { history } from '@milkdown/kit/plugin/history'
import { indent, indentConfig } from '@milkdown/kit/plugin/indent'
import { getMarkdown, replaceAll } from '@milkdown/kit/utils'
import { clipboard } from '@milkdown/kit/plugin/clipboard'
import { trailing } from '@milkdown/kit/plugin/trailing'
import { math } from '@milkdown/kit/plugin/math'
import 'katex/dist/katex.min.css'

import type { CrepeFeatureConfig } from '../feature'
import { CrepeFeature, defaultFeatures, loadFeature } from '../feature'
import { configureFeatures } from './slice'
import { ElectronAPI } from '@electron-toolkit/preload'

export interface CrepeConfig {
  features?: Partial<Record<CrepeFeature, boolean>>
  featureConfigs?: CrepeFeatureConfig
  root?: Node | string | null
  defaultValue?: DefaultValue
  electron?: ElectronAPI
}

export class Crepe {
  static Feature = CrepeFeature
  readonly #editor: Editor
  readonly #initPromise: Promise<unknown>
  readonly #rootElement: Node
  //readonly #electron: ElectronAPI
  #editable = true

  constructor({
    root,
    features = {},
    featureConfigs = {},
    defaultValue = '',
    electron = {} as ElectronAPI
  }: CrepeConfig) {
    const enabledFeatures = Object
      .entries({
        ...defaultFeatures,
        ...features,
      })
      .filter(([, enabled]) => enabled)
      .map(([feature]) => feature as CrepeFeature)

    //this.#electron = electron
    this.#rootElement = (typeof root === 'string' ? document.querySelector(root) : root) ?? document.body
    this.#editor = Editor.make()
      .config(configureFeatures(enabledFeatures))
      .config((ctx) => {
        ctx.set(rootCtx, this.#rootElement)
        ctx.set(defaultValueCtx, defaultValue)
        ctx.set(electronCtx, electron)
        ctx.set(editorViewOptionsCtx, {
          editable: () => this.#editable,
        })
        ctx.update(indentConfig.key, value => ({
          ...value,
          size: 4,
        }))
      })
      .use(commonmark)
      .use(history)
      .use(indent)
      .use(trailing)
      .use(clipboard)
      .use(gfm)
      .use(math)

    const promiseList: Promise<unknown>[] = []

    enabledFeatures.forEach((feature) => {
      const config = (featureConfigs as Partial<Record<CrepeFeature, never>>)[feature]
      promiseList.push(
        loadFeature(feature, this.#editor, config),
      )
    })

    this.#initPromise = Promise.all(promiseList)
  }

  async create() {
    await this.#initPromise
    return this.#editor.create()
  }

  async destroy() {
    await this.#initPromise
    return this.#editor.destroy()
  }

  get editor(): Editor {
    return this.#editor
  }

  setReadonly(value: boolean) {
    this.#editable = !value
    return this
  }

  getMarkdown() {
    return this.#editor.action(getMarkdown())
  }

  setMarkdown(content: string) {
    return this.#editor.action(replaceAll(content))
  }
}
