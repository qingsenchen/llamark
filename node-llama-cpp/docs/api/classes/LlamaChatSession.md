# Class: LlamaChatSession

## Constructors

### new LlamaChatSession()

```ts
new LlamaChatSession(options: LlamaChatSessionOptions): LlamaChatSession
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaChatSessionOptions`](../type-aliases/LlamaChatSessionOptions.md) |

#### Returns

[`LlamaChatSession`](LlamaChatSession.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:311](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L311)

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:309](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L309)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:368](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L368)

***

### chatWrapper

```ts
get chatWrapper(): ChatWrapper
```

#### Returns

[`ChatWrapper`](ChatWrapper.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:372](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L372)

***

### sequence

```ts
get sequence(): LlamaContextSequence
```

#### Returns

[`LlamaContextSequence`](LlamaContextSequence.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:379](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L379)

***

### context

```ts
get context(): LlamaContext
```

#### Returns

[`LlamaContext`](LlamaContext.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:386](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L386)

***

### model

```ts
get model(): LlamaModel
```

#### Returns

[`LlamaModel`](LlamaModel.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:390](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L390)

## Methods

### dispose()

```ts
dispose(__namedParameters: {
  disposeSequence: boolean;
 }): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.disposeSequence`? | `boolean` |

#### Returns

`void`

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:353](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L353)

***

### prompt()

```ts
prompt<Functions>(prompt: string, options: LLamaChatPromptOptions<Functions>): Promise<string>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* `undefined` \| [`ChatSessionModelFunctions`](../type-aliases/ChatSessionModelFunctions.md) | `undefined` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prompt` | `string` |
| `options` | [`LLamaChatPromptOptions`](../type-aliases/LLamaChatPromptOptions.md)&lt;`Functions`&gt; |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:394](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L394)

***

### promptWithMeta()

```ts
promptWithMeta<Functions>(prompt: string, options?: LLamaChatPromptOptions<Functions>): Promise<{
  response: lastModelResponseItem.response;
  responseText: string;
  stopReason: metadata.stopReason;
  customStopTrigger: metadata.customStopTrigger;
  remainingGenerationAfterStop: metadata.remainingGenerationAfterStop;
 } | {
  customStopTrigger: undefined;
  response: lastModelResponseItem.response;
  responseText: string;
  stopReason: metadata.stopReason;
  remainingGenerationAfterStop: metadata.remainingGenerationAfterStop;
 }>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* `undefined` \| [`ChatSessionModelFunctions`](../type-aliases/ChatSessionModelFunctions.md) | `undefined` |

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` |  |
| `options`? | [`LLamaChatPromptOptions`](../type-aliases/LLamaChatPromptOptions.md)&lt;`Functions`&gt; |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `response`: `lastModelResponseItem.response`;
  `responseText`: `string`;
  `stopReason`: `metadata.stopReason`;
  `customStopTrigger`: `metadata.customStopTrigger`;
  `remainingGenerationAfterStop`: `metadata.remainingGenerationAfterStop`;
 \} \| \{
  `customStopTrigger`: `undefined`;
  `response`: `lastModelResponseItem.response`;
  `responseText`: `string`;
  `stopReason`: `metadata.stopReason`;
  `remainingGenerationAfterStop`: `metadata.remainingGenerationAfterStop`;
 \}&gt;

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:437](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L437)

***

### preloadPrompt()

```ts
preloadPrompt(prompt: string, options?: LLamaChatPreloadPromptOptions): Promise<void>
```

Preload a user prompt into the current context sequence state to make later inference of the model response begin sooner
and feel faster.

> **Note:** Preloading a long user prompt can incur context shifts, so consider limiting the length of prompts you preload

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | the prompt to preload |
| `options`? | [`LLamaChatPreloadPromptOptions`](../type-aliases/LLamaChatPreloadPromptOptions.md) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:689](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L689)

***

### completePrompt()

```ts
completePrompt(prompt: string, options?: LLamaChatCompletePromptOptions): Promise<string>
```

Preload a user prompt into the current context sequence state and generate a completion for it.

> **Note:** Preloading a long user prompt and completing a user prompt with a high number of `maxTokens` can incur context shifts,
> so consider limiting the length of prompts you preload.
>
> Also, it's recommended to limit the number of tokens generated to a reasonable amount by configuring `maxTokens`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` | the prompt to preload |
| `options`? | [`LLamaChatCompletePromptOptions`](../type-aliases/LLamaChatCompletePromptOptions.md) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:706](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L706)

***

### createPromptCompletionEngine()

```ts
createPromptCompletionEngine(options?: LLamaChatPromptCompletionEngineOptions): LlamaChatSessionPromptCompletionEngine
```

Create a smart completion engine that caches the prompt completions
and reuses them when the user prompt matches the beginning of the cached prompt or completion.

All completions are made and cache is used only for the current chat session state.
You can create a single completion engine for an entire chat session.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`LLamaChatPromptCompletionEngineOptions`](../type-aliases/LLamaChatPromptCompletionEngineOptions.md) |

#### Returns

[`LlamaChatSessionPromptCompletionEngine`](LlamaChatSessionPromptCompletionEngine.md)

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:719](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L719)

***

### completePromptWithMeta()

```ts
completePromptWithMeta(prompt: string, options?: LLamaChatCompletePromptOptions): Promise<{
  completion: completion;
  stopReason: metadata.stopReason;
  customStopTrigger: metadata.customStopTrigger;
  remainingGenerationAfterStop: metadata.remainingGenerationAfterStop;
 } | {
  customStopTrigger: undefined;
  completion: completion;
  stopReason: metadata.stopReason;
  remainingGenerationAfterStop: metadata.remainingGenerationAfterStop;
 }>
```

See `completePrompt` for more information.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `prompt` | `string` |  |
| `options`? | [`LLamaChatCompletePromptOptions`](../type-aliases/LLamaChatCompletePromptOptions.md) |  |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `completion`: `completion`;
  `stopReason`: `metadata.stopReason`;
  `customStopTrigger`: `metadata.customStopTrigger`;
  `remainingGenerationAfterStop`: `metadata.remainingGenerationAfterStop`;
 \} \| \{
  `customStopTrigger`: `undefined`;
  `completion`: `completion`;
  `stopReason`: `metadata.stopReason`;
  `remainingGenerationAfterStop`: `metadata.remainingGenerationAfterStop`;
 \}&gt;

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:728](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L728)

***

### getChatHistory()

```ts
getChatHistory(): ChatHistoryItem[]
```

#### Returns

[`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:827](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L827)

***

### getLastEvaluationContextWindow()

```ts
getLastEvaluationContextWindow(): null | ChatHistoryItem[]
```

#### Returns

`null` \| [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:831](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L831)

***

### setChatHistory()

```ts
setChatHistory(chatHistory: ChatHistoryItem[]): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chatHistory` | [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |

#### Returns

`void`

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:838](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L838)

***

### resetChatHistory()

```ts
resetChatHistory(): void
```

Clear the chat history and reset it to the initial state.

#### Returns

`void`

#### Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:845](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L845)
