import type { EditorState } from '@milkdown/prose/state';
import type { EditorView } from '@milkdown/prose/view';
import type { VirtualElement } from '@floating-ui/dom';
export interface AssistantProviderOptions {
    content: HTMLElement;
    debounce?: number;
    shouldShow?: (view: EditorView, prevState?: EditorState) => boolean;
    offset?: number | {
        mainAxis?: number;
        crossAxis?: number;
        alignmentAxis?: number | null;
    };
}
export declare class AssistantProvider {
    #private;
    element: HTMLElement;
    onShow: () => void;
    onHide: () => void;
    constructor(options: AssistantProviderOptions);
    update: (view: EditorView, prevState?: EditorState) => void;
    destroy: () => void;
    show: (virtualElement?: VirtualElement) => void;
    hide: () => void;
}
//# sourceMappingURL=assistant-provider.d.ts.map