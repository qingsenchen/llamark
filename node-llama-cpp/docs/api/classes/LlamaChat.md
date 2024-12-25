# Class: LlamaChat

## Constructors

### new LlamaChat()

```ts
new LlamaChat(__namedParameters: LlamaChatOptions): LlamaChat
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`LlamaChatOptions`](../type-aliases/LlamaChatOptions.md) |

#### Returns

[`LlamaChat`](LlamaChat.md)

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:298](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L298)

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:296](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L296)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:348](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L348)

***

### chatWrapper

```ts
get chatWrapper(): ChatWrapper
```

#### Returns

[`ChatWrapper`](ChatWrapper.md)

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:352](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L352)

***

### sequence

```ts
get sequence(): LlamaContextSequence
```

#### Returns

[`LlamaContextSequence`](LlamaContextSequence.md)

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:359](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L359)

***

### context

```ts
get context(): LlamaContext
```

#### Returns

[`LlamaContext`](LlamaContext.md)

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:366](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L366)

***

### model

```ts
get model(): LlamaModel
```

#### Returns

[`LlamaModel`](LlamaModel.md)

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:370](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L370)

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

[evaluator/LlamaChat/LlamaChat.ts:331](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L331)

***

### generateResponse()

```ts
generateResponse<Functions>(history: ChatHistoryItem[], options: LLamaChatGenerateResponseOptions<Functions>): Promise<LlamaChatResponse<Functions>>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* `undefined` \| [`ChatModelFunctions`](../type-aliases/ChatModelFunctions.md) | `undefined` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `history` | [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |
| `options` | [`LLamaChatGenerateResponseOptions`](../type-aliases/LLamaChatGenerateResponseOptions.md)&lt;`Functions`&gt; |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaChatResponse`](../type-aliases/LlamaChatResponse.md)&lt;`Functions`&gt;&gt;

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:374](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L374)

***

### loadChatAndCompleteUserMessage()

```ts
loadChatAndCompleteUserMessage<Functions>(history: ChatHistoryItem[], options: LLamaChatLoadAndCompleteUserMessageOptions<Functions>): Promise<LlamaChatLoadAndCompleteUserResponse>
```

#### Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* `undefined` \| [`ChatModelFunctions`](../type-aliases/ChatModelFunctions.md) | `undefined` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `history` | [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |
| `options` | [`LLamaChatLoadAndCompleteUserMessageOptions`](../type-aliases/LLamaChatLoadAndCompleteUserMessageOptions.md)&lt;`Functions`&gt; |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaChatLoadAndCompleteUserResponse`](../type-aliases/LlamaChatLoadAndCompleteUserResponse.md)&gt;

#### Defined in

[evaluator/LlamaChat/LlamaChat.ts:537](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L537)
