# Class: AlpacaChatWrapper

## Extends

- [`GeneralChatWrapper`](GeneralChatWrapper.md)

## Constructors

### new AlpacaChatWrapper()

```ts
new AlpacaChatWrapper(__namedParameters: {
  userMessageTitle: "Instruction";
  modelResponseTitle: "Response";
  middleSystemMessageTitle: "System";
  allowSpecialTokensInTitles: false;
 }): AlpacaChatWrapper
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.userMessageTitle`? | `string` |
| `__namedParameters.modelResponseTitle`? | `string` |
| `__namedParameters.middleSystemMessageTitle`? | `string` |
| `__namedParameters.allowSpecialTokensInTitles`? | `boolean` |

#### Returns

[`AlpacaChatWrapper`](AlpacaChatWrapper.md)

#### Overrides

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`constructor`](GeneralChatWrapper.md#constructors)

#### Defined in

[chatWrappers/AlpacaChatWrapper.ts:7](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/AlpacaChatWrapper.ts#L7)

## Properties

### defaultSettings

```ts
static defaultSettings: ChatWrapperSettings;
```

#### Inherited from

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`defaultSettings`](GeneralChatWrapper.md#defaultsettings)

#### Defined in

[ChatWrapper.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L11)

***

### settings

```ts
readonly settings: ChatWrapperSettings = ChatWrapper.defaultSettings;
```

#### Inherited from

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`settings`](GeneralChatWrapper.md#settings)

#### Defined in

[ChatWrapper.ts:28](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L28)

***

### wrapperName

```ts
readonly wrapperName: string = "AlpacaChat";
```

#### Overrides

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`wrapperName`](GeneralChatWrapper.md#wrappername)

#### Defined in

[chatWrappers/AlpacaChatWrapper.ts:5](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/AlpacaChatWrapper.ts#L5)

## Accessors

### userMessageTitle

```ts
get userMessageTitle(): string
```

#### Returns

`string`

#### Overrides

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`userMessageTitle`](GeneralChatWrapper.md#usermessagetitle)

#### Defined in

[chatWrappers/AlpacaChatWrapper.ts:21](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/AlpacaChatWrapper.ts#L21)

***

### modelResponseTitle

```ts
get modelResponseTitle(): string
```

#### Returns

`string`

#### Overrides

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`modelResponseTitle`](GeneralChatWrapper.md#modelresponsetitle)

#### Defined in

[chatWrappers/AlpacaChatWrapper.ts:25](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/AlpacaChatWrapper.ts#L25)

***

### middleSystemMessageTitle

```ts
get middleSystemMessageTitle(): string
```

#### Returns

`string`

#### Overrides

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`middleSystemMessageTitle`](GeneralChatWrapper.md#middlesystemmessagetitle)

#### Defined in

[chatWrappers/AlpacaChatWrapper.ts:29](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/AlpacaChatWrapper.ts#L29)

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

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateFunctionCallsAndResults`](GeneralChatWrapper.md#generatefunctioncallsandresults)

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

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateFunctionCall`](GeneralChatWrapper.md#generatefunctioncall)

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

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateFunctionCallResult`](GeneralChatWrapper.md#generatefunctioncallresult)

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

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateModelResponseText`](GeneralChatWrapper.md#generatemodelresponsetext)

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

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateAvailableFunctionsSystemText`](GeneralChatWrapper.md#generateavailablefunctionssystemtext)

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

#### Inherited from

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`addAvailableFunctionsSystemMessageToHistory`](GeneralChatWrapper.md#addavailablefunctionssystemmessagetohistory)

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

#### Inherited from

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateInitialChatHistory`](GeneralChatWrapper.md#generateinitialchathistory)

#### Defined in

[ChatWrapper.ts:217](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L217)

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

#### Inherited from

[`GeneralChatWrapper`](GeneralChatWrapper.md).[`generateContextState`](GeneralChatWrapper.md#generatecontextstate)

#### Defined in

[chatWrappers/GeneralChatWrapper.ts:39](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/GeneralChatWrapper.ts#L39)
