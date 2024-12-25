import type { SliceType } from '@milkdown/ctx';
import type { PluginSpec } from '@milkdown/prose/state';
import type { $Ctx, $Prose } from '@milkdown/utils';
export type AssistantSpecId<Id extends string> = `${Id}_ASSISTANT_SPEC`;
export type AssistantPlugin<Id extends string, State = any> = [$Ctx<PluginSpec<State>, AssistantSpecId<Id>>, $Prose] & {
    key: SliceType<PluginSpec<State>, AssistantSpecId<Id>>;
    pluginKey: $Prose['key'];
};
export declare function assistantFactory<Id extends string, State = any>(id: Id): AssistantPlugin<Id, any>;
//# sourceMappingURL=assistant-plugin.d.ts.map