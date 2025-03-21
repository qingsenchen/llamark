import { Node } from '@milkdown/prose/model'
import { InlineMathComponentProps } from './component'
import type { EditorView, NodeView } from '@milkdown/prose/view'
import { InlineMathConfig } from './config'
import { TextSelection } from '@milkdown/prose/state'

export class LlaMathInline implements NodeView {
    dom: HTMLElement & InlineMathComponentProps

    private updating = false

    constructor(
        public node: Node,
        public view: EditorView,
        public getPos: () => number | undefined,
        public config: InlineMathConfig,
    ) {
        this.dom = this.createDom()
        this.bindAttrs(node)
    }

    private createDom() {
        const dom = document.createElement('llamark-math-inline') as HTMLElement & InlineMathComponentProps
        dom.setAttr = this.setAttr
        dom.onChange = this.forwardUpdate
        dom.maybeEscape = this.maybeEscape
        dom.isEditorReadonly = () => !this.view.editable

        const {
            ...viewConfig
        } = this.config
        dom.config = viewConfig
        return dom
    }

    private bindAttrs = (node: Node) => {
        this.dom.latex = node.textContent
        this.dom.title = node.attrs.title
      }

    setSelection(anchor: number, head: number) {
        debugger
        this.updating = true
        //this.cm.dispatch({ selection: { anchor, head } })
        this.updating = false
    }

    update(node: Node) {
        debugger
        if (node.type !== this.node.type)
            return false

        if (this.updating)
            return true

        this.bindAttrs(node)

        this.node = node

        // const change = computeChange(this.cm.state.doc.toString(), node.textContent)
        // if (change) {
        //   this.updating = true
        //   this.cm.dispatch({
        //     changes: { from: change.from, to: change.to, insert: change.text },
        //   })
        //   this.updating = false
        // }
        return true
    }

    private maybeEscape = (unit: 'line' | 'char', dir: -1 | 1): boolean => {
        
        return false
        let targetPos = (this.getPos() ?? 0) + (dir < 0 ? 0 : this.node.nodeSize)
  
        const selection = TextSelection.near(this.view.state.doc.resolve(targetPos), dir)
        const tr = this.view.state.tr.setSelection(selection).scrollIntoView()
        this.view.dispatch(tr)
        this.view.focus()
        return true
      }

    private forwardUpdate = (update: string) => {
        if (this.updating)
            return
        
        const latex = update ?? ''
        let offset = (this.getPos() ?? 0) + 1
        //let offset = (this.getPos() ?? 0) + 1
        // const { main } = update.state.selection
        // const selFrom = offset + main.from
        // const selTo = offset + main.to
        // const pmSel = this.view.state.selection
        // if (update.docChanged || pmSel.from !== selFrom || pmSel.to !== selTo) {
        //   const tr = this.view.state.tr
        //   update.changes.iterChanges((fromA, toA, fromB, toB, text) => {
        //     if (text.length)
        //       tr.replaceWith(offset + fromA, offset + toA, this.view.state.schema.text(text.toString()))
        //     else tr.delete(offset + fromA, offset + toA)
        //     offset += (toB - fromB) - (toA - fromA)
        //   })
        //   tr.setSelection(TextSelection.create(tr.doc, selFrom, selTo))
        //   this.view.dispatch(tr)

        const changes = computeChange(this.node.textContent, latex)

        const from = changes?.from ?? 0
        const to = changes?.to ?? 0
debugger
        const tr = this.view.state.tr
        const text = changes?.text ?? ''
        if (text.length) 
            tr.replaceWith(offset + from, offset + to, this.view.state.schema.text(text.toString()))
        else
            tr.delete(offset + from, offset + to)

        tr.setSelection(TextSelection.create(tr.doc, offset + from, offset + from))
        this.view.dispatch(tr)
        console.log("changes:", changes, this.node.textContent, latex)
    }


    selectNode() {
        this.dom.selected = true
    }

    deselectNode() {
        this.dom.selected = false
    }

    stopEvent() {
        return true
    }

    destroy() {
        this.dom.remove()
    }

    setAttr = (attr: string, value: any) => {
        const pos = this.getPos()
        if (pos == null)
            return

        this.view.dispatch(this.view.state.tr.setNodeAttribute(pos, attr, value))
    }
}

function computeChange(
    oldVal: string,
    newVal: string,
): { from: number, to: number, text: string } | null {
    if (oldVal === newVal)
        return null

    let start = 0
    let oldEnd = oldVal.length
    let newEnd = newVal.length

    while (start < oldEnd && oldVal.charCodeAt(start) === newVal.charCodeAt(start))
        ++start

    while (
        oldEnd > start
        && newEnd > start
        && oldVal.charCodeAt(oldEnd - 1) === newVal.charCodeAt(newEnd - 1)
    ) {
        oldEnd--
        newEnd--
    }

    return { from: start, to: oldEnd, text: newVal.slice(start, newEnd) }
}