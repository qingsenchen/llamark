import { toggleMark } from '@milkdown/prose/commands'
import type { Node as ProseNode } from '@milkdown/prose/model'
import { TextSelection } from '@milkdown/prose/state'
import { $command, $markAttr, $markSchema } from '@milkdown/utils'
import { withMeta } from '../__internal__'

/// HTML attributes for the link mark.
export const highlightAttr = $markAttr('highlight')

withMeta(highlightAttr, {
  displayName: 'Attr<highlight>',
  group: 'Highlight',
})

/// Link mark schema.
export const highlightSchema = $markSchema('highlight', ctx => ({
  attrs: {
    color: { default: "yellow" },
  },
  parseDOM: [
    {
      tag: "span[data-highlight]",
      getAttrs: (dom) => ({ color: dom.getAttribute("data-color") || "yellow" }),
    },
  ],
  //toDOM: mark => ['span', { ...ctx.get(highlightAttr.key)(mark), ...mark.attrs }],
  toDOM(mark) {
    return [
      "span",
      {
        ...ctx.get(highlightAttr.key)(mark),
        "data-highlight": "true",
        "data-color": mark.attrs.color,
        style: `background-color: ${mark.attrs.color};`,
      },
      0,
    ];
  },
  parseMarkdown: {
    match: node => node.type === 'highlight',
    runner: (state, node, markType) => {
      const color = node.color as string
      state.openMark(markType, { color })
      state.next(node.children)
      state.closeMark(markType)
    },
  },
  toMarkdown: {
    match: mark => mark.type.name === 'highlight',
    runner: (state, mark) => {
      state.withMark(mark, 'highlight', undefined, {
        color: mark.attrs.color,
      })
    },
  },
}))

withMeta(highlightSchema.mark, {
  displayName: 'MarkSchema<highlight>',
  group: 'Highlight',
})

/// @internal
export interface UpdateHighlightCommandPayload {
  href?: string
  title?: string
}
/// A command to toggle the link mark.
/// You can pass the `href` and `title` to the link.
export const toggleHighlightCommand = $command('ToggleHighlight', ctx => (payload: UpdateHighlightCommandPayload = {}) => toggleMark(highlightSchema.type(ctx), payload))

withMeta(toggleHighlightCommand, {
  displayName: 'Command<toggleHighlightCommand>',
  group: 'Highlight',
})

/// A command to update the link mark.
/// You can pass the `href` and `title` to update the link.
export const updateHighlightCommand = $command('UpdateHighlight', ctx => (payload: UpdateHighlightCommandPayload = {}) => (state, dispatch) => {
  if (!dispatch)
    return false

  let node: ProseNode | undefined
  let pos = -1
  const { selection } = state
  const { from, to } = selection
  state.doc.nodesBetween(from, from === to ? to + 1 : to, (n, p) => {
    if (highlightSchema.type(ctx).isInSet(n.marks)) {
      node = n
      pos = p
      return false
    }

    return undefined
  })

  if (!node)
    return false

  const mark = node.marks.find(({ type }) => type === highlightSchema.type(ctx))
  if (!mark)
    return false

  const start = pos
  const end = pos + node.nodeSize
  const { tr } = state
  const highlightMark = highlightSchema.type(ctx).create({ ...mark.attrs, ...payload })
  if (!highlightMark)
    return false

  dispatch(
    tr
      .removeMark(start, end, mark)
      .addMark(start, end, highlightMark)
      .setSelection(new TextSelection(tr.selection.$anchor))
      .scrollIntoView(),
  )

  return true
})

withMeta(updateHighlightCommand, {
  displayName: 'Command<updateHighlightCommand>',
  group: 'Highlight',
})
