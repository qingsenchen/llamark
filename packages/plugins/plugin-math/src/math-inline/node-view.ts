import { Node } from '@milkdown/prose/model'
import { MathInlineComponentProps } from './component'
import type { NodeView } from '@milkdown/prose/view'
import { EditorView, Decoration, DecorationSet } from '@milkdown/prose/view'
import { MathInlineConfig } from './config'
import { EditorState, TextSelection, Transaction, Plugin } from '@milkdown/prose/state'
import { keymap } from '@milkdown/prose/keymap'
import { redo, undo } from '@milkdown/prose/history'
import { StepMap } from '@milkdown/prose/transform'
import { math } from '..'

let lintPlugin = new Plugin({
    state: {
        init(_, {doc}) { return lintDeco(doc) },
        apply(tr, old) { return tr.docChanged ? lintDeco(tr.doc) : old }
    },
    props: {
        decorations(state) { return this.getState(state) },
    }
})



function lintDeco(doc: Node) {
  let decos: any[] = []
  lint(doc).forEach(prob => {
    decos.push(Decoration.inline(prob.from, prob.to, {class: prob.msg == '$' ? "math-meta":"math-content"}))
  })
  return DecorationSet.create(doc, decos)
}

const md_meta = /\$/g
function lint(doc: Node) {
    let result: { msg: string; from: number; to: number; fix: undefined }[] = [], lastHeadLevel: number | null = null
  
    function record(msg: string, from: number, to: number, fix: undefined) {
      result.push({msg, from, to, fix})
    }
    let meta_count = 0
    let formula_from = 0
    let formula_to = 0
    // For each node in the document
    doc.descendants((node, pos) => {
      if (node.isText) {
        // Scan text nodes for suspicious patterns
        let m
        while (m = md_meta.exec(node.text ?? '')) {
            
            record(`${m[0]}`,
                pos + m.index, pos + m.index + m[0].length, undefined)

            meta_count++

            if (meta_count == 1) {
                formula_from = pos + m.index + m[0].length
            } 
            else if (meta_count == 2) {
                formula_to = pos + m.index
            } 
            else {
                break
            }
            
        }
      } 
    })

    record(`formula`,
        formula_from, formula_to, undefined)
  
    return result
  }

export class MathInlineView implements NodeView {
    dom: HTMLElement & MathInlineComponentProps
    innerView: EditorView

    private updating = false

    constructor(
        public node: Node,
        public view: EditorView,
        public getPos: () => number | undefined,
        public config: MathInlineConfig,
    ) {
        
        this.innerView = new EditorView(null, {
            
            // You can use any node as an editor document
            state: EditorState.create({
            doc: this.node,
            plugins: [
                lintPlugin,
                keymap({
                    "Mod-z": () => undo(this.view.state, this.view.dispatch),
                    "Mod-y": () => redo(this.view.state, this.view.dispatch)
                })
            ]
            }),
            // This is the magic part
            dispatchTransaction: this.dispatchInner.bind(this),
            handleDOMEvents: {
            mousedown: () => {
                // Kludge to prevent issues due to the fact that the whole
                // footnote is node-selected (and thus DOM-selected) when
                // the parent editor is focused.
                
                if (this.view.hasFocus()) this.innerView?.focus()
            }
            }
        })

        this.dom = this.createDom()
        this.bindAttrs(node)
    }

    private createDom() {
        const dom = document.createElement('llamark-math-inline') as HTMLElement & MathInlineComponentProps
        dom.setAttr = this.setAttr
        dom.isEditorReadonly = () => !this.view.editable
        dom.editView = this.innerView
        const {
            ...viewConfig
        } = this.config
        dom.config = viewConfig
        return dom
    }

    private bindAttrs = (node: Node) => {
        

        const match = node.textContent.match(/(.*)(?:\$)([^$]+)(?:\$)(.*)/)
        if (!match) return


        this.dom.latex = match[2] ?? ''
        this.dom.title = node.attrs.title
    }


    update(node: Node) {
        
        if (node.type !== this.node.type)
            return false

        // if (this.updating)
        //     return true
debugger
        if (!node.sameMarkup(this.node)) return false

        this.node = node
        const match = node.textContent.match(/(.*)(?:\$)([^$]+)(?:\$)(.*)/)

        this.bindAttrs(node)
        if (this.innerView) {
            let state = this.innerView.state
            let start = node.content.findDiffStart(state.doc.content)
            
            if (start != null) {
                let diff = node.content.findDiffEnd(state.doc.content)
                if (diff) {
                    let {a: endA, b: endB} = diff
                    let overlap = start - Math.min(endA, endB)
                    if (overlap > 0) { endA += overlap; endB += overlap }
                    this.innerView.dispatch(
                    state.tr
                        .replace(start, endB, node.slice(start, endA))
                        .setMeta("fromOutside", true))
                }
                
            }
        }
        return true
    }


    private dispatchInner(tr: Transaction) {
        
        if (!this.innerView) return

        const content = tr.doc.textContent
        let i = 0
        let meta: number[] = []
        const from = tr.selection.from
        const to = tr.selection.to 

        while (i < content.length && meta.length < 2) {
            if (content[i] === '$' && content[Math.max(i-1,0)] !== '\\' ) 
                meta.push(i)
            i++
        }
        let metaBefore = '', metaAfter = '', newFormula = '', newContent = ''
        let metaBeforePos = 0, metaAfterPos = 0

        if (meta.length == 2) {
            metaBeforePos = meta[0] ?? 0
            metaAfterPos = meta[1] ?? 0
            metaBefore = content.substring(0, meta[0])
            metaAfter = content.substring(metaAfterPos + 1, content.length)
            newFormula = content.substring(metaBeforePos + 1, metaAfterPos)
            newContent = content.substring(metaBeforePos, metaAfterPos + 1)
        } else {
            debugger
            let outerTr = this.view.state.tr, offsetMap = StepMap.offset((this.getPos() ?? 0) + 1)
            tr.delete(0, tr.doc.content.size)
            let {state, transactions} = this.innerView.state.applyTransaction(tr)
            this.innerView?.updateState(state)

            if (!tr.getMeta("fromOutside")) {
                if (!offsetMap) return
                for (let i = 0; i < transactions.length; i++) {
                    let steps = transactions[i]?.steps
                    if (!steps) return
                    for (let j = 0; j < steps.length; j++) {
                        let mapped = steps[j]?.map(offsetMap);
                        if (!mapped) { throw Error("step discarded!"); }
                        outerTr.step(mapped)
                    }
                    
                }
            }

            const outerPos = (this.getPos() ?? 0)
            
            outerTr.replaceRangeWith(outerPos, outerPos+2, this.view.state.schema.text(content))
                .setSelection(TextSelection.create(outerTr.doc, outerPos))
            this.view.focus()

            if (outerTr.docChanged) this.view.dispatch(outerTr)

            return
        }

        if (metaAfter.length > 0) {
            tr.delete(metaAfterPos + 1, tr.doc.content.size)
        }

        if (metaBefore.length > 0) {
            tr.delete(0, metaBeforePos)
        }
            
        let {state, transactions} = this.innerView.state.applyTransaction(tr)
        this.innerView?.updateState(state)

        let outerTr = this.view.state.tr, offsetMap = StepMap.offset((this.getPos() ?? 0) + 1)

        if (!tr.getMeta("fromOutside")) {
            if (!offsetMap) return
            for (let i = 0; i < transactions.length; i++) {
                let steps = transactions[i]?.steps
                if (!steps) return
                for (let j = 0; j < steps.length; j++) {
                    let mapped = steps[j]?.map(offsetMap);
                    if (!mapped) { throw Error("step discarded!"); }
                    outerTr.step(mapped)
                }
                
            }
        }

        if (metaAfter.length > 0) {
            const outerPos = (this.getPos() ?? 0) + 2
            const innerPos =  outerPos + metaAfterPos + 1
            tr.selection
            debugger
            outerTr.replaceRangeWith(innerPos, innerPos, this.view.state.schema.text(metaAfter))
                .setSelection(TextSelection.create(outerTr.doc, outerPos + from))
            this.view.focus()
        }

        if (metaBefore.length > 0) {
            const outerPos = (this.getPos() ?? 0)
            const innerPos =  outerPos + metaBeforePos

            outerTr.replaceRangeWith(outerPos, innerPos, this.view.state.schema.text(metaBefore))
                .setSelection(TextSelection.create(outerTr.doc, innerPos))
            this.view.focus()
        }

        if (outerTr.docChanged) this.view.dispatch(outerTr)
    }

    private close() {
        this.innerView?.destroy()
        //this.innerView = null
    }

    private open() {
        // Append a tooltip to the outer node
        
        let tooltip = this.dom.appendChild(document.createElement("div"))
        tooltip.className = "math-inline-edit"
        // And put a sub-ProseMirror into that
        this.innerView = new EditorView(tooltip, {
            // You can use any node as an editor document
            state: EditorState.create({
            doc: this.node,
            plugins: [
                lintPlugin,
                keymap({
                    "Mod-z": () => undo(this.view.state, this.view.dispatch),
                    "Mod-y": () => redo(this.view.state, this.view.dispatch)
                })
            ]
            }),
            // This is the magic part
            dispatchTransaction: this.dispatchInner.bind(this),
            handleDOMEvents: {
            mousedown: () => {
                // Kludge to prevent issues due to the fact that the whole
                // footnote is node-selected (and thus DOM-selected) when
                // the parent editor is focused.
                if (this.view.hasFocus()) this.innerView?.focus()
            }
            }
        })

        this.innerView.focus()
    }



    selectNode() {
        
        this.dom.selected = true
        //this.view.focus()
        
        //if (!this.innerView) this.open()
    }

    deselectNode() {
        
        this.dom.selected = false
        //if (this.innerView) this.close()
    }

    stopEvent(event: any) {
        if (!this.innerView) return false
        return this.innerView && this.innerView.dom.contains(event.target)
    }

    destroy() {
        this.dom.remove()
        //if (this.innerView) this.close()
    }

    ignoreMutation() { return true }

    setAttr = (attr: string, value: any) => {
        const pos = this.getPos()
        if (pos == null)
            return

        this.view.dispatch(this.view.state.tr.setNodeAttribute(pos, attr, value))
    }
}