import type { SliceType } from '@milkdown/ctx'
import type { PluginSpec } from '@milkdown/prose/state'
import { Plugin, PluginKey } from '@milkdown/prose/state'
import type { $Ctx, $Prose } from '@milkdown/utils'
import { $ctx, $prose } from '@milkdown/utils'

/// @internal
export type AssistantSpecId<Id extends string> = `${Id}_ASSISTANT_SPEC`

/// @internal
export type AssistantPlugin<Id extends string, State = any> = [$Ctx<PluginSpec<State>, AssistantSpecId<Id>>, $Prose] & {
  key: SliceType<PluginSpec<State>, AssistantSpecId<Id>>
  pluginKey: $Prose['key']
}

/// Create a assistant plugin with a unique id.
export function assistantFactory<Id extends string, State = any>(id: Id) {
  const assistantSpec = $ctx<PluginSpec<State>, AssistantSpecId<Id>>({}, `${id}_ASSISTANT_SPEC`)
  const assistantPlugin = $prose((ctx) => {
    const spec = ctx.get(assistantSpec.key)
    return new Plugin({
      key: new PluginKey(`${id}_ASSISTANT`),
      ...spec,
    })
  })
  const result = [assistantSpec, assistantPlugin] as AssistantPlugin<Id>
  result.key = assistantSpec.key
  result.pluginKey = assistantPlugin.key
  assistantSpec.meta = {
    package: '@milkdown/plugin-assistant',
    displayName: `Ctx<assistantSpec>|${id}`,
  }
  assistantPlugin.meta = {
    package: '@milkdown/plugin-assistant',
    displayName: `Prose<assistant>|${id}`,
  }

  return result
}
