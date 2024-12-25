# Class: ChatModelFunctionsDocumentationGenerator

Generate documentation about the functions that are available for a model to call.
Useful for generating a system message with information about the available functions as part of a chat wrapper.

## Constructors

### new ChatModelFunctionsDocumentationGenerator()

```ts
new ChatModelFunctionsDocumentationGenerator(chatModelFunctions: undefined | ChatModelFunctions): ChatModelFunctionsDocumentationGenerator
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `chatModelFunctions` | `undefined` \| [`ChatModelFunctions`](../type-aliases/ChatModelFunctions.md) |

#### Returns

[`ChatModelFunctionsDocumentationGenerator`](ChatModelFunctionsDocumentationGenerator.md)

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:13](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L13)

## Properties

### chatModelFunctions?

```ts
readonly optional chatModelFunctions: ChatModelFunctions;
```

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:10](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L10)

***

### hasAnyFunctions

```ts
readonly hasAnyFunctions: boolean;
```

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L11)

## Methods

### getTypeScriptFunctionSignatures()

```ts
getTypeScriptFunctionSignatures(options: {
  documentParams: true;
 }): string
```

Example:
```ts
// Retrieve the current date
function getDate();

// Retrieve the current time
function getTime(params: {hours: "24" | "12", seconds: boolean});
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` |  |
| `options.documentParams`? | `boolean` | Whether to document the parameters of the functions |

#### Returns

`string`

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:30](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L30)

***

### getTypeScriptFunctionTypes()

```ts
getTypeScriptFunctionTypes(options: {
  documentParams: true;
  reservedFunctionNames: [];
 }): string
```

Example:
```ts
// Retrieve the current date
type getDate = () => any;

// Retrieve the current time
type getTime = (_: {hours: "24" | "12", seconds: boolean}) => any;
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` |  |
| `options.documentParams`? | `boolean` | Whether to document the parameters of the functions |
| `options.reservedFunctionNames`? | `string`[] | Function names that are reserved and cannot be used |

#### Returns

`string`

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:73](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L73)

***

### getLlama3\_1FunctionSignatures()

```ts
getLlama3_1FunctionSignatures(options: {
  documentParams: true;
 }): string
```

Example:
```
Use the function 'getDate' to: Retrieve the current date
{"name": "getDate", "description": "Retrieve the current date"}

Use the function 'getTime' to: Retrieve the current time
{"name": "getTime", "description": "Retrieve the current time", "parameters": {"type": "object", "properties": {"hours": {"enum": ["24", "12"]}, "seconds": {"type": "boolean"}}}}
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` |  |
| `options.documentParams`? | `boolean` | Whether to document the parameters of the functions |

#### Returns

`string`

#### Defined in

[chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts:120](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/ChatModelFunctionsDocumentationGenerator.ts#L120)
