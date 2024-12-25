# Class: LlamaJsonSchemaGrammar&lt;T&gt;

## Extends

- [`LlamaGrammar`](LlamaGrammar.md)

## Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)&lt;[`GbnfJsonSchema`](../type-aliases/GbnfJsonSchema.md)&gt; |

## Constructors

### new LlamaJsonSchemaGrammar()

```ts
new LlamaJsonSchemaGrammar<T>(llama: Llama, schema: T): LlamaJsonSchemaGrammar<T>
```

Prefer to create a new instance of this class by using `llama.createGrammarForJsonSchema(...)`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `llama` | [`Llama`](Llama.md) |
| `schema` | `T` |

#### Returns

[`LlamaJsonSchemaGrammar`](LlamaJsonSchemaGrammar.md)&lt;`T`&gt;

#### Overrides

[`LlamaGrammar`](LlamaGrammar.md).[`constructor`](LlamaGrammar.md#constructors)

#### Defined in

[evaluator/LlamaJsonSchemaGrammar.ts:14](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaJsonSchemaGrammar.ts#L14)

## Accessors

### grammar

```ts
get grammar(): string
```

#### Returns

`string`

#### Inherited from

[`LlamaGrammar`](LlamaGrammar.md).[`grammar`](LlamaGrammar.md#grammar)

#### Defined in

[evaluator/LlamaGrammar.ts:58](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L58)

***

### rootRuleName

```ts
get rootRuleName(): string
```

#### Returns

`string`

#### Inherited from

[`LlamaGrammar`](LlamaGrammar.md).[`rootRuleName`](LlamaGrammar.md#rootrulename)

#### Defined in

[evaluator/LlamaGrammar.ts:62](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L62)

***

### stopGenerationTriggers

```ts
get stopGenerationTriggers(): readonly (string | LlamaText | readonly (string | Token)[])[]
```

#### Returns

readonly (`string` \| [`LlamaText`](LlamaText.md) \| readonly (`string` \| [`Token`](../type-aliases/Token.md))[])[]

#### Inherited from

[`LlamaGrammar`](LlamaGrammar.md).[`stopGenerationTriggers`](LlamaGrammar.md#stopgenerationtriggers)

#### Defined in

[evaluator/LlamaGrammar.ts:66](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L66)

***

### trimWhitespaceSuffix

```ts
get trimWhitespaceSuffix(): boolean
```

#### Returns

`boolean`

#### Inherited from

[`LlamaGrammar`](LlamaGrammar.md).[`trimWhitespaceSuffix`](LlamaGrammar.md#trimwhitespacesuffix)

#### Defined in

[evaluator/LlamaGrammar.ts:70](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L70)

## Methods

### getFor()

```ts
static getFor(llama: Llama, type: 
  | "json"
  | "json_arr"
  | "list"
  | "c"
  | "arithmetic"
  | "japanese"
  | "chess"): Promise<LlamaGrammar>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `llama` | [`Llama`](Llama.md) |
| `type` | \| `"json"` \| `"json_arr"` \| `"list"` \| `"c"` \| `"arithmetic"` \| `"japanese"` \| `"chess"` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaGrammar`](LlamaGrammar.md)&gt;

#### Inherited from

[`LlamaGrammar`](LlamaGrammar.md).[`getFor`](LlamaGrammar.md#getfor)

#### Defined in

[evaluator/LlamaGrammar.ts:74](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L74)

***

### parse()

```ts
parse(json: string): GbnfJsonSchemaToType<T>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | `string` |

#### Returns

[`GbnfJsonSchemaToType`](../type-aliases/GbnfJsonSchemaToType.md)&lt;`T`&gt;

#### Defined in

[evaluator/LlamaJsonSchemaGrammar.ts:26](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaJsonSchemaGrammar.ts#L26)
