# Class: JinjaTemplateChatWrapper

A chat wrapper based on a Jinja template.
Useful for using the original model's Jinja template as-is without any additional conversion work to chat with a model.

If you want to create a new chat wrapper from scratch, using this chat wrapper is not recommended, and instead you better inherit
from the `ChatWrapper` class and implement a custom chat wrapper of your own in TypeScript.

For a simpler way to create a chat wrapper, see the `TemplateChatWrapper` class.

## Example

<span v-pre>

```ts
import {JinjaTemplateChatWrapper} from "node-llama-cpp";

const chatWrapper = new JinjaTemplateChatWrapper({
    template: "<Jinja template here>",
    // functionCallMessageTemplate: { // optional
    //     call: "[[call: {{functionName}}({{functionParams}})]]",
    //     result: " [[result: {{functionCallResult}}]]"
    // }
});
```

</span>

## Extends

- [`ChatWrapper`](ChatWrapper.md)

## Constructors

### new JinjaTemplateChatWrapper()

```ts
new JinjaTemplateChatWrapper(options: JinjaTemplateChatWrapperOptions): JinjaTemplateChatWrapper
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`JinjaTemplateChatWrapperOptions`](../type-aliases/JinjaTemplateChatWrapperOptions.md) |  |

#### Returns

[`JinjaTemplateChatWrapper`](JinjaTemplateChatWrapper.md)

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`constructor`](ChatWrapper.md#constructors)

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:119](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L119)

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
readonly wrapperName: "JinjaTemplate" = "JinjaTemplate";
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`wrapperName`](ChatWrapper.md#wrappername)

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:102](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L102)

***

### settings

```ts
readonly settings: ChatWrapperSettings;
```

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`settings`](ChatWrapper.md#settings)

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:103](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L103)

***

### template

```ts
readonly template: string;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:105](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L105)

***

### modelRoleName

```ts
readonly modelRoleName: string;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:106](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L106)

***

### userRoleName

```ts
readonly userRoleName: string;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:107](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L107)

***

### systemRoleName

```ts
readonly systemRoleName: string;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:108](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L108)

***

### convertUnsupportedSystemMessagesToUserMessages?

```ts
readonly optional convertUnsupportedSystemMessagesToUserMessages: JinjaTemplateChatWrapperOptionsConvertMessageFormat;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:109](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L109)

***

### joinAdjacentMessagesOfTheSameType

```ts
readonly joinAdjacentMessagesOfTheSameType: boolean;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:110](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L110)

***

### trimLeadingWhitespaceInResponses

```ts
readonly trimLeadingWhitespaceInResponses: boolean;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:111](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L111)

***

### additionalRenderParameters?

```ts
readonly optional additionalRenderParameters: Record<string, any>;
```

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:112](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L112)

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

[`ChatWrapper`](ChatWrapper.md).[`addAvailableFunctionsSystemMessageToHistory`](ChatWrapper.md#addavailablefunctionssystemmessagetohistory)

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

[`ChatWrapper`](ChatWrapper.md).[`generateInitialChatHistory`](ChatWrapper.md#generateinitialchathistory)

#### Defined in

[ChatWrapper.ts:217](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/ChatWrapper.ts#L217)

***

### generateContextState()

```ts
generateContextState(__namedParameters: ChatWrapperGenerateContextStateOptions): ChatWrapperGeneratedContextState & {
  transformedSystemMessagesToUserMessages: boolean;
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`ChatWrapperGenerateContextStateOptions`](../type-aliases/ChatWrapperGenerateContextStateOptions.md) |

#### Returns

[`ChatWrapperGeneratedContextState`](../type-aliases/ChatWrapperGeneratedContextState.md) & \{
  `transformedSystemMessagesToUserMessages`: `boolean`;
 \}

#### Overrides

[`ChatWrapper`](ChatWrapper.md).[`generateContextState`](ChatWrapper.md#generatecontextstate)

#### Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:162](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L162)
