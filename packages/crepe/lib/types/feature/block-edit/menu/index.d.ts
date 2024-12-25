import type { Ctx } from '@milkdown/kit/ctx';
import type { BlockEditFeatureConfig } from '../index';
export declare const menu: import("@milkdown/kit/plugin/slash").SlashPlugin<"CREPE_MENU", any>;
export interface MenuAPI {
    show: (pos: number) => void;
    hide: () => void;
}
export declare const menuAPI: import("@milkdown/kit/utils").$Ctx<MenuAPI, "menuAPICtx">;
export declare function configureMenu(ctx: Ctx, config?: BlockEditFeatureConfig): void;
//# sourceMappingURL=index.d.ts.map