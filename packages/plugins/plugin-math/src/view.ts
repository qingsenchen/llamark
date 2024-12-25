import { $view } from '@milkdown/utils'
import type { NodeViewConstructor } from '@milkdown/prose/view'
import type { Node } from '@milkdown/prose/model'
import { withMeta } from './__internal__/meta'
import { defIfNotExists } from './__internal__/helper'
import type { InlineMathComponentProps } from './component'
import { InlineMathElement } from './component'
import { inlineMathConfig } from './config'
import { katexOptionsCtx, mathInlineSchema } from './schema'
import katex from 'katex'

defIfNotExists('llamark-math-inline', InlineMathElement)
export const inlineMathView = $view(mathInlineSchema.node, (ctx): NodeViewConstructor => {
  return (initialNode, view, getPos) => {
    const dom = document.createElement('llamark-math-inline') as HTMLElement & InlineMathComponentProps

    // ctx.update(inlineMathConfig.key, api => ({
    //   ...api,
    //   render: (latex) => {
    //     katex.render(latex, dom, ctx.get(katexOptionsCtx.key))
    //   }
    // }))

    const config = ctx.get(inlineMathConfig.key)
    const bindAttrs = (node: Node) => {
      dom.latex = node.textContent
      dom.title = node.attrs.title
    }
    bindAttrs(initialNode)
    dom.selected = false

    dom.setAttr = (attr, value) => {
      const pos = getPos()
      if (pos == null)
        return

      view.dispatch(view.state.tr.setNodeAttribute(pos, attr, value))
    }
    dom.config = config
    return {
      dom,
      update: (updatedNode) => {
        if (updatedNode.type !== initialNode.type)
          return false

        bindAttrs(updatedNode)
        return true
      },
      stopEvent: (e) => {
        if (dom.selected && e.target instanceof HTMLInputElement)
          return true

        return false
      },
      selectNode: () => {
        console.log('selectNode')
        dom.selected = true
        
      },
      setSelection: () => {
        console.log('setSelection')
      },
      deselectNode: () => {
        dom.selected = false
      },
      destroy: () => {
        dom.remove()
      },
    }
  }
})

withMeta(inlineMathView, {
  displayName: 'NodeView<math-inline>',
  group: 'MathInline',
})
