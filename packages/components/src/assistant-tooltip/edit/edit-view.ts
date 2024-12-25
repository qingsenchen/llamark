import type { Ctx, Slice } from '@milkdown/ctx'
import { NodeSelection, TextSelection, Selection, Transaction } from '@milkdown/prose/state'
import type { PluginView } from '@milkdown/prose/state'
import type { Mark } from '@milkdown/prose/model'
import type { EditorView } from '@milkdown/prose/view'
import { AssistantProvider } from '@liaocao/plugin-assistant'
import { editorViewCtx, electronCtx, parserCtx } from '@milkdown/core'
import { posToDOMRect } from '@milkdown/prose'
import { assistantAPI, assistantConfig, assistantStateCtx, AssistantState } from '../slices'
import { AssistantEditComponent, AssistantEditProps } from './edit-component'
import { paragraphSchema } from '@milkdown/kit/preset/commonmark'
import { highlightSchema } from '@milkdown/preset-commonmark'
import type { AtomicoThis } from 'atomico/types/dom'
import { strikethroughSchema } from '@milkdown/preset-gfm' 
import { replaceAll } from '@milkdown/utils'

interface Data {
  from: number
  to: number
  mark: string | null
  mode: 'writing' | 'hovering'

}

const defaultData: Data = {
  from: -1,
  to: -1,
  mark: null,
  mode: 'hovering'
}

export class AssistantEdit implements PluginView {
  #content: AtomicoThis<AssistantEditProps, HTMLElement>
  #provider: AssistantProvider
  #data: Data = { ...defaultData }
  #slice: Slice<AssistantState> = this.ctx.use(assistantStateCtx.key)
  

  constructor(readonly ctx: Ctx, view: EditorView) {
    const config = this.ctx.get(assistantConfig.key)
    this.#content = new AssistantEditComponent()
    this.#content.ctx = ctx
    this.#content.config = config
    
    const self = this
    this.#provider = new AssistantProvider({
      content: this.#content,
      debounce: 0,
      shouldShow(this: AssistantProvider, view: EditorView) {
        // if (isInCodeBlock(view.state.selection) || isInList(view.state.selection))
        //   return false
        
        const { state } = view
        const { selection } = state
        // if (!(selection instanceof TextSelection))
        //   return false
        
        const { from, to } = selection
        this.placement = 'bottom-start'

        if ((self.#data.mode == 'hovering') && (from !== self.#data.from || to !== self.#data.to || from === to)) {
        //if (from ===  to) {
          
          const currentText = this.getContent(view, node =>
            ['paragraph', 'heading'].includes(node.type.name))
  
          if (currentText == null) {
            self.ctx.update(assistantStateCtx.key, state => ({
              ...state,
              mode: 'preview' as const,
            }))

            self.#content.state = null
            return false
          }
            
  
          if (currentText != ' ') {
            if (self.#data.mark === 'writing') {
              self.ctx.update(assistantStateCtx.key, state => ({
                ...state,
                mode: 'writing' as const,
              }))
              self.#content.state = 'writing'
              return true
            }

            self.ctx.update(assistantStateCtx.key, state => ({
              ...state,
              mode: 'preview' as const,
            }))

            return false
          } else {
            
            this.placement = 'bottom-start'
          }
            
        }

        self.ctx.update(assistantStateCtx.key, state => ({
          ...state,
          mode: 'edit' as const,
        }))
        return true
      },
    })
    this.#provider.onHide = () => {
      // if (this.#data.from !== -1 && this.#data.to !== -1) {
      //   const view = this.ctx.get(editorViewCtx)
        
      //   view.dispatch(view.state.tr.removeMark(this.#data.from, this.#data.to))
      // }
      
      
      this.#data = { ...defaultData }
      this.ctx.get(assistantAPI.key).hideInstruction()
      this.ctx.update(assistantStateCtx.key, state => ({
        ...state,
        mode: 'preview' as const,
      }))
      this.#content.update().catch((e) => {
        throw e
      })
      view.dom.focus({ preventScroll: true })
      
    }
    this.#provider.onShow = () => {
      const view = this.ctx.get(editorViewCtx)
      requestAnimationFrame(() => {
        this.#content.querySelector('input')?.focus()
        this.#data.mode == 'hovering' && 
        this.ctx.get(assistantAPI.key).showInstruction(view.state.selection.to, this.#content.state === 'writed' ? 'decision': 'suggest')

      })
    }
    this.#provider.update(view)
    this.#content.onConfirm = this.#confirmEdit
    this.#content.onCancel = this.#reset

    const electron = this.ctx.get(electronCtx)



    electron.ipcRenderer.on('ai-reply', (_, echo) => {
      const view = this.ctx.get(editorViewCtx)
      const parser = this.ctx.get(parserCtx)
      const { state, dispatch } = view
      // let tr = state.tr
      //               .deleteSelection()
      //               .insert(state.selection.from, state.schema.text(echo))


      // let tr = state.tr
      //               .deleteSelection()
      //               .insert(state.selection.from, state.schema.text(echo))
      
      // const nodeSelection = parser(echo)
      // console.log('nodeSelection.size:', nodeSelection.nodeSize)

      // console.log('nodeSelection.size:', nodeSelection.nodeSize)
      // let tr = state.tr
      
      // if (from === to) {
      //   tr.insert(from, nodeSelection)
      //   tr.setSelection(TextSelection.create(tr.doc, from, from + nodeSelection.nodeSize-2))
      // } else {
      //   tr.replaceWith(from, to, nodeSelection)
      //   tr.setSelection(TextSelection.create(tr.doc, from, tr.selection.to))
      // }
      // // if (NodeSelection.isSelectable(nodeSelection)) {
      // //console.log('nodeSelection is select' , nodeSelection, from, to, tr.selection.from, tr.selection.to)

      // console.log('nodeSelection is select' , from, to, tr.selection.from, tr.selection.to)
    
      // // }

      let tr = state.tr.insertText(echo);
      
      dispatch(tr.scrollIntoView())

      // const view2 = this.ctx.get(editorViewCtx)
      // view2.dispatch(view2.state.tr.setSelection(TextSelection.create(view2.state.doc, new_from, new_to)))
      
      // const tr = state.tr.insertText(echo)
      // dispatch(tr.scrollIntoView())
    })
  }

  #reset = () => {

    // if (this.#data.from !== -1 && this.#data.to !== -1) {
    //   const view = this.ctx.get(editorViewCtx)
      
    //   view.dispatch(view.state.tr.removeMark(this.#data.from, this.#data.to))
    // }
    
    this.#content.state = 'edit'
    
    this.#provider.hide()
    this.ctx.update(assistantStateCtx.key, state => ({
      ...state,
      mode: 'preview' as const,
    }))
    this.#data = { ...defaultData }
  }

  #confirmEdit = async (question: string) => {
    const view = this.ctx.get(editorViewCtx)
    const { state, dispatch } = view
    const { selection } = state
    if (!(selection instanceof TextSelection))
      return
    const { from, to } = this.#data


    //const { from, to } = selection
    const selectedText = state.doc.cut(from, to).textContent

    if (to - from > 0) {
      const strikethroughType =  strikethroughSchema.type(this.ctx)
      let tr = state.tr
                  .setSelection(TextSelection.create(state.doc, to, to))
                  .addMark(from, to, strikethroughType.create())
                  .removeStoredMark(strikethroughType)

      
      dispatch(tr)
    } else if (from === -1) {
      const type = highlightSchema.type(this.ctx)
      let _tr = state.tr.addStoredMark(type.create({ color: '#d2d2d2'}))
      dispatch(_tr)
      //dispatch(this.clearRange(_tr) )
    } else {
      const type = highlightSchema.type(this.ctx)
      let _tr = state.tr.addStoredMark(type.create({ color: '#d2d2d2'}))
      dispatch(_tr)
    }

    // console.log('selectText:', selectedText)
    this.#data.mode = 'writing'
    this.#content.state = 'writing'
    this.ctx.update(assistantStateCtx.key, state => ({
      ...state,
      mode: 'writing' as const,
      from: selection.from,
      to: selection.to,
    }))

    const userPrompt = `${selectedText}\n${question}`
    
    const electron = this.ctx.get(electronCtx)
    const reply = await electron.ipcRenderer.invoke('ask-ai', userPrompt)

    
    this.#content.question = ''
    
    // view2.dispatch(view2.state.tr.removeMark(this.#data.from, view2.state.selection.to))
    
    // const view2 = this.ctx.get(editorViewCtx)
    // const type = highlightSchema.type(this.ctx)
    // let _tr = view2.state.tr.addMark(selection.from, view2.state.selection.to,type.create({ color: '#d2d2d2'}))
    // view2.dispatch(_tr)
    this.#reset()
    
    this.#content.state = 'writed'
    this.ctx.update(assistantStateCtx.key, state => ({
      ...state,
      mode: 'writed' as const,
    }))
    this.#provider.show()



    // const view2 = this.ctx.get(editorViewCtx)
    // const parser = this.ctx.get(parserCtx)


    // const tr = view2.state.tr.deleteSelection()
    //         .insert(view2.state.selection.from, parser(reply))
    // view2.dispatch(tr.scrollIntoView())  

    // const parser = this.ctx.get(parserCtx)

    // // // let tr = state.tr
    // // //               .deleteSelection()
    // // //               .insert(state.selection.from, state.schema.text(echo))
    // const nodeSelection = parser(question)
    // console.log('nodeSelection.size:', nodeSelection.nodeSize)
    // let tr = state.tr.insertText(question)
    // // if (from === to) {
    // //   tr.insert(from, nodeSelection)
    // //   tr.setSelection(TextSelection.create(tr.doc, from, from + nodeSelection.nodeSize-2))
    // // }else {
    // //   tr.replaceWith(from, to, nodeSelection)
    // //   tr.setSelection(TextSelection.create(tr.doc, from, tr.selection.to))
    // // }
    // // if (NodeSelection.isSelectable(nodeSelection)) {
    // console.log('nodeSelection is select' , nodeSelection, selection.from, selection.to, tr.selection.from, tr.selection.to)
    
    
    // }
    
    // dispatch(tr.scrollIntoView())
    



    //this.#reset()
  }

  #enterEditMode = (value: string, from: number, to: number) => {
    const config = this.ctx.get(assistantConfig.key)
    this.#content.config = config
    this.#content.question = value
    this.ctx.update(assistantStateCtx.key, state => ({
      ...state,
      mode: 'edit' as const,
    }))
    
    
    const view = this.ctx.get(editorViewCtx)

    let tr = view.state.tr
    tr.setSelection(TextSelection.create(view.state.doc, from, to))
    const type = highlightSchema.type(this.ctx)
    tr.addMark(from, to, type.create({ color: '#d2d2d2'}))
    view.dispatch(tr)

    this.#provider.show({
      getBoundingClientRect: () => posToDOMRect(view, from, to),
    })
    // requestAnimationFrame(() => {
    //   this.#content.querySelector('input')?.focus()
    // })
  }

  clearRange = (tr: Transaction) => {
    const { $from, $to } = tr.selection
    const { pos: from } = $from
    const { pos: to } = $to
    tr = tr.deleteRange(from - $from.node().content.size, to)
    return tr
  }



  update = (view: EditorView) => {
    // this.#data = { ...defaultData }
    this.#provider.update(view)
    // const { state } = view
    // const { selection } = state
    // if (!(selection instanceof TextSelection))
    //   return
    // const { from, to } = selection
    // if (from === this.#data.from && to === this.#data.to)
    //   return

    // this.#reset()
  }

  destroy = () => {
    this.ctx.update(assistantStateCtx.key, state => ({
      ...state,
      mode: 'preview' as const,
    }))
    this.#provider.destroy()
    this.#content.remove()
  }

  addLink = (from: number, to: number) => {
    this.#data = {
      from,
      to,
      mark: null,
      mode: 'hovering'
    }
    this.#enterEditMode('', from, to)
  }

  showAssistant = (from: number, to: number) => {
    this.#data = {
      from,
      to,
      mark: null,
      mode: 'hovering'
    }
    this.#enterEditMode('', from, to)
  }

  hideAssistant = () => {
    
    this.#reset()
  }

  editLink = (mark: string, from: number, to: number) => {
    this.#data = {
      from,
      to,
      mark,
      mode: 'hovering'
    }
    this.#enterEditMode('', from, to)
  }

  removeLink = (from: number, to: number) => {
    //const view = this.ctx.get(editorViewCtx)
    console.log('removeLink', from, to);
    this.#reset()
  }
}
