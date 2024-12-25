# Class: LlamaText

## Constructors

### new LlamaText()

```ts
new LlamaText(...values: readonly LlamaTextInputValue[]): LlamaText
```

Can also be called without `new`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`values` | readonly [`LlamaTextInputValue`](../type-aliases/LlamaTextInputValue.md)[] |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:19](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L19)

## Properties

### values

```ts
readonly values: readonly LlamaTextValue[];
```

#### Defined in

[utils/LlamaText.ts:14](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L14)

## Methods

### concat()

```ts
concat(value: LlamaTextInputValue): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LlamaTextInputValue`](../type-aliases/LlamaTextInputValue.md) |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:24](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L24)

***

### mapValues()

```ts
mapValues(mapper: (this: readonly LlamaTextValue[], value: LlamaTextValue, index: number, values: readonly LlamaTextValue[]) => LlamaTextInputValue): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `mapper` | (`this`: readonly [`LlamaTextValue`](../type-aliases/LlamaTextValue.md)[], `value`: [`LlamaTextValue`](../type-aliases/LlamaTextValue.md), `index`: `number`, `values`: readonly [`LlamaTextValue`](../type-aliases/LlamaTextValue.md)[]) => [`LlamaTextInputValue`](../type-aliases/LlamaTextInputValue.md) |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:28](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L28)

***

### joinValues()

```ts
joinValues(separator: LlamaTextValue | LlamaText): LlamaText
```

Joins the values with the given separator.

Note that the values are squashed when they are loaded into the `LlamaText`, so the separator is not added between adjacent strings.

To add the separator on values before squashing them, use `LlamaText.joinValues` instead.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `separator` | [`LlamaTextValue`](../type-aliases/LlamaTextValue.md) \| [`LlamaText`](LlamaText.md) |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:48](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L48)

***

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Defined in

[utils/LlamaText.ts:65](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L65)

***

### toJSON()

```ts
toJSON(): LlamaTextJSON
```

#### Returns

[`LlamaTextJSON`](../type-aliases/LlamaTextJSON.md)

#### Defined in

[utils/LlamaText.ts:78](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L78)

***

### tokenize()

```ts
tokenize(tokenizer: Tokenizer, options?: "trimLeadingSpace"): Token[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |
| `options`? | `"trimLeadingSpace"` |

#### Returns

[`Token`](../type-aliases/Token.md)[]

#### Defined in

[utils/LlamaText.ts:94](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L94)

***

### compare()

```ts
compare(other: LlamaText): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | [`LlamaText`](LlamaText.md) |

#### Returns

`boolean`

#### Defined in

[utils/LlamaText.ts:118](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L118)

***

### trimStart()

```ts
trimStart(): LlamaText
```

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:122](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L122)

***

### trimEnd()

```ts
trimEnd(): LlamaText
```

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:160](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L160)

***

### includes()

```ts
includes(value: LlamaText): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LlamaText`](LlamaText.md) |

#### Returns

`boolean`

#### Defined in

[utils/LlamaText.ts:198](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L198)

***

### fromJSON()

```ts
static fromJSON(json: LlamaTextJSON): LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | [`LlamaTextJSON`](../type-aliases/LlamaTextJSON.md) |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:265](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L265)

***

### compare()

```ts
static compare(a: LlamaText, b: LlamaText): boolean
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | [`LlamaText`](LlamaText.md) |
| `b` | [`LlamaText`](LlamaText.md) |

#### Returns

`boolean`

#### Defined in

[utils/LlamaText.ts:287](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L287)

***

### fromTokens()

```ts
static fromTokens(tokenizer: Tokenizer, tokens: Token[]): LlamaText
```

Attempt to convert tokens to a `LlamaText` while preserving special tokens.

Non-standard special tokens that don't have a text representation are ignored.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |
| `tokens` | [`Token`](../type-aliases/Token.md)[] |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:309](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L309)

***

### joinValues()

```ts
static joinValues(separator: string | LlamaText, values: readonly LlamaTextInputValue[]): LlamaText
```

Join values with the given separator before squashing adjacent strings inside the values

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `separator` | `string` \| [`LlamaText`](LlamaText.md) |
| `values` | readonly [`LlamaTextInputValue`](../type-aliases/LlamaTextInputValue.md)[] |

#### Returns

[`LlamaText`](LlamaText.md)

#### Defined in

[utils/LlamaText.ts:362](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L362)

***

### isLlamaText()

```ts
static isLlamaText(value: unknown): value is LlamaText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `unknown` |

#### Returns

`value is LlamaText`

#### Defined in

[utils/LlamaText.ts:379](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L379)
