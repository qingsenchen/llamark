import { $ctx, $inputRule, $nodeSchema, $remark } from '@milkdown/utils'
import type { KatexOptions } from 'katex'
import katex from 'katex'
import remarkMath from 'remark-math'

import { withMeta } from './__internal__/meta'
import { Fragment } from '@milkdown/prose/model'
import { InputRule } from '@milkdown/prose/inputrules'
import { expectDomTypeError } from '@milkdown/exception'
import { NodeSelection } from '@milkdown/prose/state'


  
  /// This plugin wraps [remark-math](https://www.npmjs.com/package/remark-math).
  export const remarkMathPlugin = $remark<'remarkMath', undefined>('remarkMath', () => remarkMath)
  
  withMeta(remarkMathPlugin.plugin, {
    displayName: 'Remark<remarkMath>',
  })
  
  withMeta(remarkMathPlugin.options, {
    displayName: 'RemarkConfig<remarkMath>',
  })
  
  const mathInlineId = 'math_inline'
  
  /// A slice that contains [options for katex](https://katex.org/docs/options.html).
  /// You can configure katex here.
  /// ```ts
  /// import { katexOptionsCtx } from '@milkdown/plugin-math'
  ///
  /// Editor.make()
  ///   .config((ctx) => {
  ///     ctx.set(katexOptionsCtx.key, { /* some options */ });
  ///   })
  /// ```
  export const katexOptionsCtx = $ctx<KatexOptions, 'katexOptions'>({}, 'katexOptions')
  
  withMeta(katexOptionsCtx, {
    displayName: 'Ctx<katexOptions>',
  })
  
  /// Schema for inline math node.
  /// Add support for:
  ///
  /// ```markdown
  /// $a^2 + b^2 = c^2$
  /// ```
  export const mathInlineSchema = $nodeSchema(mathInlineId, ctx => ({
    group: 'inline',
    content: 'text*',
    inline: true,
    atom: true,
    attrs: {
      formula: {
        default: '',
      },
    },
    parseDOM: [
      {
        tag: `span[data-type="${mathInlineId}"]`,
        getContent: (dom, schema) => {
          if (!(dom instanceof HTMLElement))
            throw expectDomTypeError(dom)
  
          return Fragment.from(schema.text(dom.dataset.value ?? ''))
        },
      },
    ],
    toDOM: (node) => {
      debugger
      const code: string = node.attrs.formula
      const dom = document.createElement('span')
      dom.dataset.type = mathInlineId
      dom.dataset.value = code
      katex.render(code, dom, ctx.get(katexOptionsCtx.key))

      return dom
    },
    parseMarkdown: {
      match: node => node.type === 'inlineMath',
      runner: (state, node, type) => {
        state.openNode(type)
          .addText(node.value as string)
          .closeNode()
      },
    },
    toMarkdown: {
      match: node => node.type.name === mathInlineId,
      runner: (state, node) => {
        state.addNode('inlineMath', undefined, node.attrs.formula)
      },
    },
  }))
  
  withMeta(mathInlineSchema.ctx, {
    displayName: 'NodeSchemaCtx<mathInline>',
  })
  withMeta(mathInlineSchema.node, {
    displayName: 'NodeSchema<mathInline>',
  })
  
  /// Input rule for inline math.
  /// When you type $E=MC^2$, it will create an inline math node.
  // export const mathInlineInputRule = $inputRule(ctx =>
  //   nodeRule(/(?:\$)([^$]+)(?:\$)$/, mathInlineSchema.type(ctx), {
  //     beforeDispatch: ({ tr, match, start, end }) => {
  //       tr.insertText(match[1] ?? '', start+1)
  //       // tr.replaceRangeWith(
  //       //   start+1, end,
  //       //   mathInlineSchema.type(ctx).create({}, mathInlineSchema.type(ctx).schema.text(match[1] ?? '')))
        
  //     },
  //   }),
  // )

  export const mathInlineInputRule = $inputRule(ctx => new InputRule(
    /(?:\$)([^$]+)(?:\$)$/,
    (state, _match, start, end) => {
      debugger
      const $start = state.doc.resolve(start)

      if ($start.node().type.name === mathInlineId) return null

      let tr = state.tr.delete(start, end).replaceSelectionWith(mathInlineSchema.type(ctx).create({ formula: _match[1] }, 
        state.schema.text(_match[0] ?? '')))

      tr.setSelection(NodeSelection.create(tr.doc, start))
      
      return tr
    },
  ))

  // export const mathInlineInputRule = llamarkInputRules(new InputRule(
  //   /(?:\$)([^$]+)(?:\$)$/,
  //   (state, _match, start, end) => {
      
  //     const $start = state.doc.resolve(start)

  //     if ($start.node().type.name === mathInlineId) return null

  //     let tr = state.tr.delete(start, end).replaceSelectionWith(mathInlineSchema.type(ctx).create({ formula: _match[1] }, 
  //       state.schema.text(_match[0] ?? '')))

  //     tr.setSelection(NodeSelection.create(tr.doc, start))
      
  //     return tr
  //   },
  // ))

  

  // export const mathInlineInputRule = $inputRule(ctx => new InputRule(
  //   /(?:\$)([^$]+)(?:\$)$/,
  //   (state, _match, start, end) => {
  //     const $start = state.doc.resolve(start)
      
  //     if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), mathInlineSchema.type(ctx)))
  //       return null
  //     return state.tr.insertText(_match[1] ?? '', start + 1)
  //     //return state.tr.delete(start, start+2).insertText(_match[2] ?? '', start+2).setBlockType(start, end, mathBlockSchema.type(ctx))
  //   },
  // ))

  // export const mathInlineInputRulenew InputRule(pattern, (state, match, start, end) => {
	// 	let $start = state.doc.resolve(start);
	// 	let index = $start.index();
	// 	let $end = state.doc.resolve(end);
	// 	// get attrs
	// 	let attrs = getAttrs instanceof Function ? getAttrs(match) : getAttrs
	// 	// check if replacement valid
	// 	if (!$start.parent.canReplaceWith(index, $end.index(), nodeType)) {
	// 		return null;
	// 	}
	// 	// perform replacement
	// 	return state.tr.replaceRangeWith(
	// 		start, end,
	// 		nodeType.create(attrs, nodeType.schema.text(match[1]))
	// 	);
	// })
  
  withMeta(mathInlineInputRule, {
    displayName: 'InputRule<mathInline>',
  })
  
  const mathBlockId = 'math_block'
  /// Schema for block math node.
  /// Add support for:
  ///
  /// ```markdown
  /// $$
  /// a^2 + b^2 = c^2
  /// $$
  /// ```
  export const mathBlockSchema = $nodeSchema('math_block', ctx => ({
    content: 'text*',
    group: 'block',
    marks: '',
    defining: true,
    atom: true,
    isolating: true,
    attrs: {
      value: {
        default: '',
      },
    },
    parseDOM: [
      {
        tag: `div[data-type="${mathBlockId}"]`,
        preserveWhitespace: 'full',
        getAttrs: (dom) => {
          return { value: dom.dataset.value ?? '' }
        },
      },
    ],
    toDOM: (node) => {
      const code = node.attrs.value
      const dom = document.createElement('div')
      dom.dataset.type = mathBlockId
      dom.dataset.value = code
      katex.render(code, dom, ctx.get(katexOptionsCtx.key))
      return dom
    },
    parseMarkdown: {
      match: ({ type }) => type === 'math',
      runner: (state, node, type) => {
        const value = node.value as string
        state.addNode(type, { value })
      },
    },
    toMarkdown: {
      match: node => node.type.name === mathBlockId,
      runner: (state, node) => {
        state.addNode('math', undefined, node.attrs.value)
      },
    },
  }))
  
  withMeta(mathBlockSchema.ctx, {
    displayName: 'NodeSchemaCtx<mathBlock>',
  })
  withMeta(mathBlockSchema.node, {
    displayName: 'NodeSchema<mathBlock>',
  })
  
  /// Input rule for math block.
  /// When you type `$$` and press enter, it will create a math block.
  export const mathBlockInputRule = $inputRule(ctx => new InputRule(
    /^\$\$\s$/,
    (state, _match, start, end) => {
      const $start = state.doc.resolve(start)
      
      if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), mathBlockSchema.type(ctx)))
        return null
      return state.tr.delete(start, end).setBlockType(start, start, mathBlockSchema.type(ctx))
      //return state.tr.delete(start, start+2).insertText(_match[2] ?? '', start+2).setBlockType(start, end, mathBlockSchema.type(ctx))
    },
  ))
  
  
  withMeta(mathBlockInputRule, {
    displayName: 'InputRule<mathBlock>',
  })
  