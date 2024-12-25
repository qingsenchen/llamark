# Class: `abstract` ChatWrapper

## Extended by

- [`EmptyChatWrapper`](EmptyChatWrapper.md)
- [`Llama3_1ChatWrapper`](Llama3_1ChatWrapper.md)
- [`Llama3ChatWrapper`](Llama3ChatWrapper.md)
- [`Llama2ChatWrapper`](Llama2ChatWrapper.md)
- [`MistralChatWrapper`](MistralChatWrapper.md)
- [`GeneralChatWrapper`](GeneralChatWrapper.md)
- [`ChatMLChatWrapper`](ChatMLChatWrapper.md)
- [`FalconChatWrapper`](FalconChatWrapper.md)
- [`FunctionaryChatWrapper`](FunctionaryChatWrapper.md)
- [`GemmaChatWrapper`](GemmaChatWrapper.md)
- [`TemplateChatWrapper`](TemplateChatWrapper.md)
- [`JinjaTemplateChatWrapper`](JinjaTemplateChatWrapper.md)

## Constructors

### new ChatWrapper()

```ts
new ChatWrapper(): ChatWrapper
```

#### Returns

[`ChatWrapper`](ChatWrapper.md)

## Properties

### defaultSettings

```ts
static defaultSettings: ChatWrapperSettings;
```

#### Defined in

[ChatWrapper.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L11)

***

### wrapperName

```ts
abstract readonly wrapperName: string;
```

#### Defined in

[ChatWrapper.ts:27](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L27)

***

### settings

```ts
readonly settings: ChatWrapperSettings = ChatWrapper.defaultSettings;
```

#### Defined in

[ChatWrapper.ts:28](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L28)

## Methods

### generateContextState()

```ts
generateContextState(__namedParameters: ChatWrapperGenerateContextStateOptions): ChatWrapperGeneratedContextState
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChatWrapperGenerateContextStateOptions`](../type-aliases/ChatWrapperGenerateContextStateOptions.md) |

#### Returns

[`ChatWrapperGeneratedContextState`](../type-aliases/ChatWrapperGeneratedContextState.md)

#### Defined in

[ChatWrapper.ts:30](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L30)

***

### generateFunctionCallsAndResults()

```ts
generateFunctionCallsAndResults(functionCalls: ChatModelFunctionCall[], useRawCall: boolean): LlamaText
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `functionCalls` | [`ChatModelFunctionCall`](../type-aliases/ChatModelFunctionCall.md)[] | `undefined` |
| `useRawCall` | `boolean` | `true` |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[ChatWrapper.ts:55](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L55)

***

### generateFunctionCall()

```ts
generateFunctionCall(name: string, params: any): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `name` | `string` |
| `params` | `any` |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[ChatWrapper.ts:102](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L102)

***

### generateFunctionCallResult()

```ts
generateFunctionCallResult(
   functionName: string, 
   functionParams: any, 
   result: any): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `functionName` | `string` |
| `functionParams` | `any` |
| `result` | `any` |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[ChatWrapper.ts:116](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L116)

***

### generateModelResponseText()

```ts
generateModelResponseText(modelResponse: (string | ChatModelFunctionCall)[], useRawCall: boolean): LlamaText
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `modelResponse` | (`string` \| [`ChatModelFunctionCall`](../type-aliases/ChatModelFunctionCall.md))[] | `undefined` |
| `useRawCall` | `boolean` | `true` |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[ChatWrapper.ts:140](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L140)

***

### generateAvailableFunctionsSystemText()

```ts
generateAvailableFunctionsSystemText(availableFunctions: ChatModelFunctions, __namedParameters: {
  documentParams: true;
 }): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `availableFunctions` | [`ChatModelFunctions`](../type-aliases/ChatModelFunctions.md) |
| `__namedParameters` | `object` |
| `__namedParameters.documentParams`? | `boolean` |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[ChatWrapper.ts:170](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L170)

***

### addAvailableFunctionsSystemMessageToHistory()

```ts
addAvailableFunctionsSystemMessageToHistory(
   history: readonly ChatHistoryItem[], 
   availableFunctions?: ChatModelFunctions, 
   __namedParameters?: {
  documentParams: true;
 }): readonly ChatHistoryItem[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `history` | readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |
| `availableFunctions`? | [`ChatModelFunctions`](../type-aliases/ChatModelFunctions.md) |
| `__namedParameters`? | `object` |
| `__namedParameters.documentParams`? | `boolean` |

#### Returns

readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Defined in

[ChatWrapper.ts:196](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L196)

***

### generateInitialChatHistory()

```ts
generateInitialChatHistory(__namedParameters: ChatWrapperGenerateInitialHistoryOptions): ChatHistoryItem[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChatWrapperGenerateInitialHistoryOptions`](../type-aliases/ChatWrapperGenerateInitialHistoryOptions.md) |

#### Returns

[`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Defined in

[ChatWrapper.ts:217](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L217)
