import type { Editor } from '@milkdown/kit/core';
import type { PlaceHolderFeatureConfig } from './placeholder';
import type { CodeMirrorFeatureConfig } from './code-mirror';
import type { BlockEditFeatureConfig } from './block-edit';
import type { CursorFeatureConfig } from './cursor';
import type { ImageBlockFeatureConfig } from './image-block';
import type { LinkTooltipFeatureConfig } from './link-tooltip';
import type { AssistantTooltipFeatureConfig } from './assistant-tooltip';
import type { ListItemFeatureConfig } from './list-item';
import type { ToolbarFeatureConfig } from './toolbar';
import type { TableFeatureConfig } from './table';
export declare enum CrepeFeature {
    CodeMirror = "code-mirror",
    ListItem = "list-item",
    LinkTooltip = "link-tooltip",
    AssistantTooltip = "assistant-tooltip",
    Cursor = "cursor",
    ImageBlock = "image-block",
    BlockEdit = "block-edit",
    Toolbar = "toolbar",
    Placeholder = "placeholder",
    Table = "table"
}
export interface CrepeFeatureConfig {
    [CrepeFeature.Cursor]?: CursorFeatureConfig;
    [CrepeFeature.ListItem]?: ListItemFeatureConfig;
    [CrepeFeature.LinkTooltip]?: LinkTooltipFeatureConfig;
    [CrepeFeature.AssistantTooltip]?: AssistantTooltipFeatureConfig;
    [CrepeFeature.ImageBlock]?: ImageBlockFeatureConfig;
    [CrepeFeature.BlockEdit]?: BlockEditFeatureConfig;
    [CrepeFeature.Placeholder]?: PlaceHolderFeatureConfig;
    [CrepeFeature.Toolbar]?: ToolbarFeatureConfig;
    [CrepeFeature.CodeMirror]?: CodeMirrorFeatureConfig;
    [CrepeFeature.Table]?: TableFeatureConfig;
}
export declare const defaultFeatures: Record<CrepeFeature, boolean>;
export declare function loadFeature(feature: CrepeFeature, editor: Editor, config?: never): Promise<void>;
//# sourceMappingURL=index.d.ts.map