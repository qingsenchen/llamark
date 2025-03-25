import { commandsCtx, editorCtx, editorViewCtx } from '@milkdown/core'
import { expectDomTypeError } from '@milkdown/exception'
import { setBlockType } from '@milkdown/prose/commands'
import { InputRule, textblockTypeInputRule, wrappingInputRule } from '@milkdown/prose/inputrules'
import { $command, $inputRule, $nodeAttr, $nodeSchema, $useKeymap } from '@milkdown/utils'
import { withMeta } from '../__internal__'
import { NodeSelection, Selection, TextSelection } from '@milkdown/prose/state'

/// HTML attributes for code block node.
export const mathBlockAttr = $nodeAttr('mathBlock', () => ({
  pre: {},
  code: {},
}))

withMeta(mathBlockAttr, {
  displayName: 'Attr<mathBlock>',
  group: 'MathBlock',
})

/// Schema for code block node.
export const mathBlockSchema = $nodeSchema('math_block', (ctx) => {
  return {
    content: 'text*',
    group: 'block',
    marks: '',
    defining: true,
    code: true,
    atom: true,
    attrs: {
      language: {
        default: 'LaTeX',
      },
      focused: {
        default: true
      },
    },
    parseDOM: [
      {
        tag: 'pre',
        preserveWhitespace: 'full',
        getAttrs: (dom) => {
          if (!(dom instanceof HTMLElement))
            throw expectDomTypeError(dom)

          return { language: dom.dataset.language, focused: dom.dataset.focused }
        },
      },
    ],
    toDOM: (node) => {
      const attr = ctx.get(mathBlockAttr.key)(node)
      return [
        'pre',
        {
          ...attr.pre,
          'data-language': node.attrs.language,
          'data-focused': node.attrs.focused,
        },
        ['code', attr.code, 0],
      ]
    },
    parseMarkdown: {
      match: ({ type }) => type === 'math',
      runner: (state, node, type) => {
        const language = node.lang as string
        const value = node.value as string
        state.openNode(type, { language })
        if (value)
          state.addText(value)

        state.closeNode()
      },
    },
    toMarkdown: {
      match: node => node.type.name === 'math_block',
      runner: (state, node) => {
        state.addNode('math', undefined, node.content.firstChild?.text || '', {
          lang: node.attrs.language,
        })
      },
    },
  }
})

withMeta(mathBlockSchema.node, {
  displayName: 'NodeSchema<mathBlock>',
  group: 'MathBlock',
})

withMeta(mathBlockSchema.ctx, {
  displayName: 'NodeSchemaCtx<mathBlock>',
  group: 'MathBlock',
})

/// A input rule for creating code block.
/// For example, ` ```javascript ` will create a code block with language javascript.
//export const createMathBlockInputRule = $inputRule(ctx => textblockTypeInputRule(/^\$\$\s$/, mathBlockSchema.type(ctx)))

//export const createMathBlockInputRule = $inputRule(ctx => wrappingInputRule(/^\s*>\s$/, mathBlockSchema.type(ctx)))
export const createMathBlockInputRule = $inputRule(ctx => new InputRule(
  /^\$\$\s$/,
  (state, _match, start, end) => {
    
    const $start = state.doc.resolve(start)
    if (!$start.node(-1).canReplaceWith($start.index(-1), $start.indexAfter(-1), mathBlockSchema.type(ctx)))
      return null
    
    let tr = state.tr.delete(start, end)
    .setBlockType(start, start, mathBlockSchema.type(ctx), {})
    //.replaceSelectionWith(mathBlockSchema.type(ctx).create({}))
    //tr.setSelection(NodeSelection.create(tr.doc, start-1))

    // const side = -1
    // let $head = tr.selection.$head
    // let nextPos = Selection.near(
    // tr.doc.resolve(start), side)

    // if (nextPos.$head && nextPos.$head.parent.type.name == "math_block") {
    //   tr = tr.setSelection(nextPos).scrollIntoView()
    // }
    
    return tr.setSelection(NodeSelection.create(tr.doc, tr.mapping.map($start.pos - 1)))
  },
))

withMeta(createMathBlockInputRule, {
  displayName: 'InputRule<createMathBlockInputRule>',
  group: 'MathBlock',
})

/// A command for creating code block.
/// You can pass the language of the code block as the parameter.
export const createMathBlockCommand = $command('CreateMathBlock', ctx => (language = '') => setBlockType(mathBlockSchema.type(ctx), { language }))

withMeta(createMathBlockCommand, {
  displayName: 'Command<createMathBlockCommand>',
  group: 'MathBlock',
})

/// A command for updating the code block language of the target position.
export const updateMathBlockLanguageCommand = $command('UpdateMathBlockLanguage', () => ({ pos, language }: { pos: number, language: string } = { pos: -1, language: '' }) => (state, dispatch) => {
  if (pos >= 0) {
    dispatch?.(state.tr.setNodeAttribute(pos, 'language', language))
    return true
  }

  return false
})

withMeta(updateMathBlockLanguageCommand, {
  displayName: 'Command<updateMathBlockLanguageCommand>',
  group: 'MathBlock',
})

/// Keymap for code block.
/// - `Mod-Alt-c`: Create a code block.
export const mathBlockKeymap = $useKeymap('mathBlockKeymap', {
  CreateCodeBlock: {
    shortcuts: 'Mod-Alt-m',
    command: (ctx) => {
      const commands = ctx.get(commandsCtx)
      return () => commands.call(createMathBlockCommand.key)
    },
  },
})

withMeta(mathBlockKeymap.ctx, {
  displayName: 'KeymapCtx<mathBlock>',
  group: 'MathBlock',
})

withMeta(mathBlockKeymap.shortcuts, {
  displayName: 'Keymap<mathBlock>',
  group: 'MathBlock',
})
