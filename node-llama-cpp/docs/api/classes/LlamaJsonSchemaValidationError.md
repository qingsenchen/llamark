# Class: LlamaJsonSchemaValidationError

## Extends

- [`Error`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Error)

## Constructors

### new LlamaJsonSchemaValidationError()

```ts
new LlamaJsonSchemaValidationError(
   message: string, 
   object: any, 
   schema: GbnfJsonSchema): LlamaJsonSchemaValidationError
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `message` | `string` |
| `object` | `any` |
| `schema` | [`GbnfJsonSchema`](../type-aliases/GbnfJsonSchema.md) |

#### Returns

[`LlamaJsonSchemaValidationError`](LlamaJsonSchemaValidationError.md)

#### Overrides

`Error.constructor`

#### Defined in

[utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts:25](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts#L25)

## Properties

### object

```ts
readonly object: any;
```

#### Defined in

[utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts:22](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts#L22)

***

### schema

```ts
readonly schema: GbnfJsonSchema;
```

#### Defined in

[utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts:23](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/gbnfJson/utils/validateObjectAgainstGbnfSchema.ts#L23)
