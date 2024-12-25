# Class: LlamaChatSessionPromptCompletionEngine

## Methods

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Defined in

[evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts:76](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts#L76)

***

### complete()

```ts
complete(prompt: string): string
```

Get completion for the prompt from the cache,
and begin preloading this prompt into the context sequence and completing it.

On completion progress, `onGeneration` (configured for this engine instance) will be called.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prompt` | `string` |

#### Returns

`string`

#### Defined in

[evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts:89](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts#L89)
