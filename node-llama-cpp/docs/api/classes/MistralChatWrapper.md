# Class: MistralChatWrapper

## Extends

- [`ChatWrapper`](ChatWrapper.md)

## Constructors

### new MistralChatWrapper()

```ts
new MistralChatWrapper(__namedParameters: {
  addSpaceBeforeEos: false;
 }): MistralChatWrapper
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | `object` | - |
| `__namedParameters.addSpaceBeforeEos`? | `boolean` | Default to `true` |

#### Returns

[`MistralChatWrapper`](MistralChatWrapper.md)

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`constructor`](ChatWrapper.md#constructors)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:47](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L47)

## Properties

### defaultSettings

```ts
static defaultSettings: ChatWrapperSettings;
```

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`defaultSettings`](ChatWrapper.md#defaultsettings)

#### Defined in

[ChatWrapper.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L11)

***

### wrapperName

```ts
readonly wrapperName: string = "Mistral";
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`wrapperName`](ChatWrapper.md#wrappername)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:15](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L15)

***

### settings

```ts
readonly settings: ChatWrapperSettings;
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`settings`](ChatWrapper.md#settings)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:17](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L17)

## Methods

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateFunctionCallsAndResults`](ChatWrapper.md#generatefunctioncallsandresults)

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateFunctionCall`](ChatWrapper.md#generatefunctioncall)

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateFunctionCallResult`](ChatWrapper.md#generatefunctioncallresult)

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateModelResponseText`](ChatWrapper.md#generatemodelresponsetext)

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateAvailableFunctionsSystemText`](ChatWrapper.md#generateavailablefunctionssystemtext)

#### Defined in

[ChatWrapper.ts:170](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L170)

***

### addAvailableFunctionsSystemMessageToHistory()

```ts
addAvailableFunctionsSystemMessageToHistory(history: readonly ChatHistoryItem[]): readonly ChatHistoryItem[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `history` | readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |

#### Returns

readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`addAvailableFunctionsSystemMessageToHistory`](ChatWrapper.md#addavailablefunctionssystemmessagetohistory)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:60](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L60)

***

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

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`generateContextState`](ChatWrapper.md#generatecontextstate)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:64](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L64)

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

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`generateInitialChatHistory`](ChatWrapper.md#generateinitialchathistory)

#### Defined in

[chatWrappers/MistralChatWrapper.ts:139](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/MistralChatWrapper.ts#L139)
