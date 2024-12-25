import { editorViewCtx } from '@milkdown/kit/core'
import {
  blockquoteSchema,
  bulletListSchema,
  codeBlockSchema,
  headingSchema,
  highlightSchema,
  hrSchema,
  listItemSchema,
  orderedListSchema,
  paragraphSchema,
} from '@milkdown/kit/preset/commonmark'
import { NodeSelection } from '@milkdown/kit/prose/state'
import { imageBlockSchema } from '@milkdown/kit/component/image-block'
import { createTable } from '@milkdown/kit/preset/gfm'
import {
  bulletListIcon,
  translationIcon,
  dividerIcon,
  h1Icon,
  h2Icon,
  h3Icon,
  acceptIcon,
  continueIcon,
  undoIcon,
  magicIcon,
  orderedListIcon,
  quoteIcon,
  tableIcon,
  textIcon,
  todoListIcon,
  shortTextIcon,
  microphoneIcon,
} from '../../../icons'
import type { AssistantTooltipFeatureConfig } from '../index'
import type { InstructionItemGroup } from './utils'
import {
  clearContentAndAddBlockType,
  clearContentAndSetBlockType,
  clearContentAndWrapInBlockType,
  clearRange,
} from './utils'
import { GroupBuilder } from './group-builder'
import { assistantAPI, assistantStateCtx } from '@milkdown/kit/component/assistant-tooltip'

export function getGroups(filter?: string, type?: string, config?: AssistantTooltipFeatureConfig) {
  const groupBuilder = new GroupBuilder()
  console.log('getGroups:', type)
  if ('decision' === type) {
    groupBuilder.addGroup('决定', config?.slashMenuListGroupLabel ?? '决定')
    .addItem('采纳结果', {
      label: config?.slashMenuBulletListLabel ?? '采纳结果',
      icon: config?.slashMenuBulletListIcon?.() ?? acceptIcon,
      onRun: (ctx) => {
        const api = ctx.get(assistantAPI.key)
        const view = ctx.get(editorViewCtx)
        const assistantState = ctx.get(assistantStateCtx.key)

        const type = highlightSchema.type(ctx)
        view.dispatch(view.state.tr.removeMark(assistantState.to, view.state.selection.to, type))
        
        api.hideAssistant()
      },
    })
    .addItem('继续编写', {
      label: config?.slashMenuOrderedListLabel ?? '继续编写',
      icon: config?.slashMenuOrderedListIcon?.() ?? continueIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndWrapInBlockType(orderedListSchema.type(ctx))
        command(state, dispatch)
      },
    })
    .addItem('撤销', {
      label: config?.slashMenuTaskListLabel ?? '撤销',
      icon: config?.slashMenuTaskListIcon?.() ?? undoIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const api = ctx.get(assistantAPI.key)
        const assistant = ctx.get(assistantStateCtx.key)
        const { dispatch, state } = view
       
        const tr = state.tr.deleteRange(assistant.to, state.selection.to)
        dispatch(tr.scrollIntoView())

        ctx.update(assistantStateCtx.key, state => ({
          ...state,
          mode: 'preview' as const,
          from: -1,
          to: -1,
        }))

        api.hideAssistant()
        
      },
    })
  }

  if ('suggest' === type) {
    groupBuilder
    .addGroup('建议', config?.slashMenuTextGroupLabel ?? '建议')
    .addItem('润色', {
      label: config?.slashMenuTextGroupLabel ?? '润色',
      icon: config?.slashMenuTextIcon?.() ?? magicIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndSetBlockType(paragraphSchema.type(ctx))
        command(state, dispatch)
      },
    })
    
    .addItem('精简文字', {
      label: config?.slashMenuH2Label ?? '精简文字',
      icon: config?.slashMenuH2Icon?.() ?? shortTextIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndSetBlockType(headingSchema.type(ctx), { level: 2 })
        command(state, dispatch)
      },
    })
    .addItem('翻译成', {
      label: config?.slashMenuH4Label ?? '翻译成',
      icon: config?.slashMenuH4Icon?.() ?? translationIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndSetBlockType(headingSchema.type(ctx), { level: 4 })
        command(state, dispatch)
      },
    })
    .addItem('改变文风', {
      label: config?.slashMenuH1Label ?? '改变文风',
      icon: config?.slashMenuH1Icon?.() ?? microphoneIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndSetBlockType(headingSchema.type(ctx), { level: 1 })
        command(state, dispatch)
      },
    })
    
    .addItem('续写', {
      label: config?.slashMenuH3Label ?? '续写',
      icon: config?.slashMenuH3Icon?.() ?? h3Icon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        

      },
    })

  }
  
  groupBuilder.addGroup('最近操作', config?.slashMenuListGroupLabel ?? '最近操作')
    .addItem('帮我生成文案', {
      label: config?.slashMenuBulletListLabel ?? '帮我生成文案',
      icon: config?.slashMenuBulletListIcon?.() ?? bulletListIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndWrapInBlockType(bulletListSchema.type(ctx))
        command(state, dispatch)
      },
    })
    .addItem('ordered-list', {
      label: config?.slashMenuOrderedListLabel ?? 'Ordered List',
      icon: config?.slashMenuOrderedListIcon?.() ?? orderedListIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndWrapInBlockType(orderedListSchema.type(ctx))
        command(state, dispatch)
      },
    })
    .addItem('todo-list', {
      label: config?.slashMenuTaskListLabel ?? 'Todo List',
      icon: config?.slashMenuTaskListIcon?.() ?? todoListIcon,
      onRun: (ctx) => {
        const view = ctx.get(editorViewCtx)
        const { dispatch, state } = view

        const command = clearContentAndWrapInBlockType(listItemSchema.type(ctx), { checked: false })
        command(state, dispatch)
      },
    })

  config?.buildMenu?.(groupBuilder)

  let groups = groupBuilder.build()

  if (filter) {
    groups = groups
      .map((group) => {
        const items = group
          .items
          .filter(item =>
            item
              .label
              .toLowerCase()
              .includes(filter.toLowerCase()))

        return {
          ...group,
          items,
        }
      })
      .filter(group => group.items.length > 0)
  }

  const items = groups.flatMap(groups => groups.items)
  items.forEach(((item, index) => {
    Object.assign(item, { index })
  }))

  groups.reduce((acc, group) => {
    const end = acc + group.items.length
    Object.assign(group, {
      range: [acc, end],
    })
    return end
  }, 0)

  return {
    groups: groups as InstructionItemGroup[],
    size: items.length,
  }
}
