# Class: SpecialTokensText

## Constructors

### new SpecialTokensText()

```ts
new SpecialTokensText(value: string): SpecialTokensText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `string` |

#### Returns

[`SpecialTokensText`](SpecialTokensText.md)

#### Defined in

[utils/LlamaText.ts:433](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L433)

## Properties

### value

```ts
readonly value: string;
```

#### Defined in

[utils/LlamaText.ts:431](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L431)

## Methods

### toString()

```ts
toString(): string
```

#### Returns

`string`

#### Defined in

[utils/LlamaText.ts:437](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L437)

***

### tokenize()

```ts
tokenize(tokenizer: Tokenizer, trimLeadingSpace: boolean): Token[]
```

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) | `undefined` |
| `trimLeadingSpace` | `boolean` | `false` |

#### Returns

[`Token`](../type-aliases/Token.md)[]

#### Defined in

[utils/LlamaText.ts:441](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L441)

***

### tokenizeSpecialTokensOnly()

```ts
tokenizeSpecialTokensOnly(tokenizer: Tokenizer): (string | Token)[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |

#### Returns

(`string` \| [`Token`](../type-aliases/Token.md))[]

#### Defined in

[utils/LlamaText.ts:445](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L445)

***

### toJSON()

```ts
toJSON(): LlamaTextSpecialTokensTextJSON
```

#### Returns

[`LlamaTextSpecialTokensTextJSON`](../type-aliases/LlamaTextSpecialTokensTextJSON.md)

#### Defined in

[utils/LlamaText.ts:469](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L469)

***

### fromJSON()

```ts
static fromJSON(json: LlamaTextSpecialTokensTextJSON): SpecialTokensText
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | [`LlamaTextSpecialTokensTextJSON`](../type-aliases/LlamaTextSpecialTokensTextJSON.md) |

#### Returns

[`SpecialTokensText`](SpecialTokensText.md)

#### Defined in

[utils/LlamaText.ts:493](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L493)

***

### isSpecialTokensTextJSON()

```ts
static isSpecialTokensTextJSON(value: LlamaTextJSONValue): value is LlamaTextSpecialTokensTextJSON
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LlamaTextJSONValue`](../type-aliases/LlamaTextJSONValue.md) |

#### Returns

`value is LlamaTextSpecialTokensTextJSON`

#### Defined in

[utils/LlamaText.ts:500](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L500)

***

### wrapIf()

```ts
static wrapIf(shouldWrap: boolean, value: string): string | SpecialTokensText
```

Wraps the value with a `SpecialTokensText` only if `shouldWrap` is true

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `shouldWrap` | `boolean` |
| `value` | `string` |

#### Returns

`string` \| [`SpecialTokensText`](SpecialTokensText.md)

#### Defined in

[utils/LlamaText.ts:507](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L507)
