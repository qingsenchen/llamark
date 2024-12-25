import type { EditorState } from '@milkdown/prose/state'
import { TextSelection } from '@milkdown/prose/state'
import type { EditorView } from '@milkdown/prose/view'
import debounce from 'lodash.debounce'
import type { Placement, VirtualElement } from '@floating-ui/dom'
import { computePosition, flip, offset } from '@floating-ui/dom'
import { findParentNode, posToDOMRect } from '@milkdown/prose'
import type { Node } from '@milkdown/prose/model'

/// Options for assistant provider.
export interface AssistantProviderOptions {
  /// The assistant content.
  content: HTMLElement
  /// The debounce time for updating assistant, 200ms by default.
  debounce?: number
  /// The function to determine whether the assistant should be shown.
  shouldShow?: (view: EditorView, prevState?: EditorState) => boolean
  /// The key trigger for shouldShow, ' ' by default.
  trigger?: string | string[]
  /// The offset to get the block. Default is 0.
  offset?: number | {
    mainAxis?: number
    crossAxis?: number
    alignmentAxis?: number | null
  }
}

/// A provider for creating assistant.
export class AssistantProvider {
  /// @internal
  readonly #debounce: number

  /// @internal
  readonly #shouldShow: (view: EditorView, prevState?: EditorState) => boolean

  /// @internal
  #initialized = false

  /// @internal
  readonly #trigger: string | string[]

  /// @internal
  readonly #offset?: number | {
    mainAxis?: number
    crossAxis?: number
    alignmentAxis?: number | null
  }

  /// The root element of the assistant.
  element: HTMLElement

  /// On show callback.
  onShow = () => {}

  /// On hide callback.
  onHide = () => {}

  placement: Placement

  constructor(options: AssistantProviderOptions) {
    this.element = options.content
    this.#debounce = options.debounce ?? 200
    this.#shouldShow = options.shouldShow ?? this.#_shouldShow
    this.#offset = options.offset
    this.#trigger = options.trigger ?? '.'
    this.element.dataset.show = 'false'

    this.placement = 'bottom-start'
  }

  /// @internal
  #onUpdate = (view: EditorView, prevState?: EditorState): void => {
    const { state, composing } = view
    const { selection, doc } = state
    const { ranges } = selection
    const from = Math.min(...ranges.map(range => range.$from.pos))
    const to = Math.max(...ranges.map(range => range.$to.pos))
    const isSame = prevState && prevState.doc.eq(doc) && prevState.selection.eq(selection)

    if (!this.#initialized) {
      view.dom.parentElement?.appendChild(this.element)
      this.#initialized = true
    }

    if (composing || isSame)
      return

    
    if (!this.#shouldShow(view, prevState)) {
      this.hide()
      return
    }

    const virtualEl: VirtualElement = {
      getBoundingClientRect: () => posToDOMRect(view, 0, to),
    }
    computePosition(virtualEl, this.element, {
      placement: this.placement,
      middleware: [flip(), offset(this.#offset)],
    })
      .then(({ x, y }) => {
        Object.assign(this.element.style, {
          left: `${x}px`,
          top: `${y}px`,
        })
      })


    this.show()
  }


  /// Update provider state by editor view.
  update = (view: EditorView, prevState?: EditorState): void => {
    const updater = debounce(this.#onUpdate, this.#debounce)

    updater(view, prevState)
  }

  getContent = (view: EditorView, matchNode: (node: Node) => boolean = node => node.type.name === 'paragraph'): string | undefined => {
    const { selection } = view.state
    const { empty, $from } = selection
    const isTextBlock = view.state.selection instanceof TextSelection

    const isSlashChildren = this.element.contains(document.activeElement)

    const notHasFocus = !view.hasFocus() && !isSlashChildren

    const isReadonly = !view.editable

    const paragraph = findParentNode(matchNode)(view.state.selection)

    const isNotInParagraph = !paragraph

    if (notHasFocus || isReadonly || !empty || !isTextBlock || isNotInParagraph)
      return

    return $from.parent.textBetween(Math.max(0, $from.parentOffset - 500), $from.parentOffset, undefined, '\uFFFC')
  }

  /// @internal
  #_shouldShow(view: EditorView): boolean {
    const { doc, selection } = view.state
    const { empty, from, to } = selection

    const isEmptyTextBlock = !doc.textBetween(from, to).length && view.state.selection instanceof TextSelection

    const isChildren = this.element.contains(document.activeElement)

    const notHasFocus = !view.hasFocus() && !isChildren

    const isReadonly = !view.editable

    if (
        notHasFocus
        || empty
        || isEmptyTextBlock
        || isReadonly
      )
        return false

    return true
  }

  /// Destroy the assistant.
  destroy = () => {}

  /// Show the assistant.
  show = (virtualElement?: VirtualElement) => {
    this.element.dataset.show = 'true'

    if (virtualElement) {
      computePosition(virtualElement, this.element, {
        placement: this.placement,
        middleware: [flip(), offset(this.#offset)],
      })
        .then(({ x, y }) => {
          Object.assign(this.element.style, {
            left: `${x}px`,
            top: `${y}px`,
            //width: `${virtualElement.getBoundingClientRect()?.width}px`,
          })
        })
    }

    this.onShow()
  }

  /// Hide the assistant.
  hide = () => {
    if (this.element.dataset.show === 'false')
      return
    this.element.dataset.show = 'false'
    this.onHide()
  }
}
