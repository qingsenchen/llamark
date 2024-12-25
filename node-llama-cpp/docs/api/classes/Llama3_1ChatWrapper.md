# Class: Llama3\_1ChatWrapper

## Extends

- [`ChatWrapper`](ChatWrapper.md)

## Constructors

### new Llama3\_1ChatWrapper()

```ts
new Llama3_1ChatWrapper(options: {
  cuttingKnowledgeDate:   | null
     | string
     | number
     | Date
     | () => Date;
  todayDate:   | null
     | string
     | number
     | Date
     | () => Date;
  noToolInstructions: boolean;
 }): Llama3_1ChatWrapper
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` |  |
| `options.cuttingKnowledgeDate`? | \| `null` \| `string` \| `number` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| () => [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | Set to `null` to disable Defaults to December 2023 |
| `options.todayDate`? | \| `null` \| `string` \| `number` \| [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) \| () => [`Date`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Date) | Set to `null` to disable Defaults to current date |
| `options.noToolInstructions`? | `boolean` | - |

#### Returns

[`Llama3_1ChatWrapper`](Llama3_1ChatWrapper.md)

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`constructor`](ChatWrapper.md#constructors)

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:39](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L39)

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
readonly wrapperName: string = "Llama 3.1";
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`wrapperName`](ChatWrapper.md#wrappername)

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:12](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L12)

***

### cuttingKnowledgeDate?

```ts
readonly optional cuttingKnowledgeDate: null | Date | () => Date;
```

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:14](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L14)

***

### todayDate

```ts
readonly todayDate: null | Date | () => Date;
```

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:15](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L15)

***

### noToolInstructions

```ts
readonly noToolInstructions: boolean;
```

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:16](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L16)

***

### settings

```ts
readonly settings: ChatWrapperSettings;
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`settings`](ChatWrapper.md#settings)

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:20](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L20)

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

#### Inherited from

[`ChatWrapper`](ChatWrapper.md).[`generateInitialChatHistory`](ChatWrapper.md#generateinitialchathistory)

#### Defined in

[ChatWrapper.ts:217](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L217)

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

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`addAvailableFunctionsSystemMessageToHistory`](ChatWrapper.md#addavailablefunctionssystemmessagetohistory)

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:84](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L84)

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

[chatWrappers/Llama3\_1ChatWrapper.ts:115](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L115)

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

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`generateAvailableFunctionsSystemText`](ChatWrapper.md#generateavailablefunctionssystemtext)

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:238](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L238)

***

### prependPreambleToChatHistory()

```ts
prependPreambleToChatHistory(chatHistory: readonly ChatHistoryItem[]): readonly ChatHistoryItem[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chatHistory` | readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |

#### Returns

readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

#### Defined in

[chatWrappers/Llama3\_1ChatWrapper.ts:277](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/Llama3_1ChatWrapper.ts#L277)
