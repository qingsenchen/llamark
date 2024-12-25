# Function: defineChatSessionFunction()

```ts
function defineChatSessionFunction<Params>(functionDefinition: {
  description: string;
  params: Params & GbnfJsonSchema;
  handler: (params: GbnfJsonSchemaToType<Params>) => any;
 }): ChatSessionModelFunction<Params>
```

Define a function that can be used by the model in a chat session, and return it.

This is a helper function to facilitate defining functions with full TypeScript type information.

The handler function can return a Promise, and the return value will be awaited before being returned to the model.

## Type Parameters

| Type Parameter |
| ------ |
| `Params` *extends* `undefined` \| [`GbnfJsonSchema`](../type-aliases/GbnfJsonSchema.md) |

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `functionDefinition` | `object` |  |
| `functionDefinition.description`? | `string` | - |
| `functionDefinition.params`? | Params & GbnfJsonSchema | - |
| `functionDefinition.handler` | (`params`: [`GbnfJsonSchemaToType`](../type-aliases/GbnfJsonSchemaToType.md)&lt;`Params`&gt;) => `any` | - |

## Returns

[`ChatSessionModelFunction`](../type-aliases/ChatSessionModelFunction.md)&lt;`Params`&gt;

## Defined in

[evaluator/LlamaChatSession/utils/defineChatSessionFunction.ts:12](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/utils/defineChatSessionFunction.ts#L12)
