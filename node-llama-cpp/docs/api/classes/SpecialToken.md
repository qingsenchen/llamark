# Class: SpecialToken

## Constructors

### new SpecialToken()

```ts
new SpecialToken(value: BuiltinSpecialTokenValue): SpecialToken
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`BuiltinSpecialTokenValue`](../type-aliases/BuiltinSpecialTokenValue.md) |

#### Returns

[`SpecialToken`](SpecialToken.md)

#### Defined in

[utils/LlamaText.ts:519](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L519)

## Properties

### value

```ts
readonly value: BuiltinSpecialTokenValue;
```

#### Defined in

[utils/LlamaText.ts:517](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L517)

## Methods

### toString()

```ts
toString(): BuiltinSpecialTokenValue
```

#### Returns

[`BuiltinSpecialTokenValue`](../type-aliases/BuiltinSpecialTokenValue.md)

#### Defined in

[utils/LlamaText.ts:523](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L523)

***

### tokenize()

```ts
tokenize(tokenizer: Tokenizer): Token[]
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |

#### Returns

[`Token`](../type-aliases/Token.md)[]

#### Defined in

[utils/LlamaText.ts:527](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L527)

***

### toJSON()

```ts
toJSON(): LlamaTextSpecialTokenJSON
```

#### Returns

[`LlamaTextSpecialTokenJSON`](../type-aliases/LlamaTextSpecialTokenJSON.md)

#### Defined in

[utils/LlamaText.ts:531](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L531)

***

### fromJSON()

```ts
static fromJSON(json: LlamaTextSpecialTokenJSON): SpecialToken
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | [`LlamaTextSpecialTokenJSON`](../type-aliases/LlamaTextSpecialTokenJSON.md) |

#### Returns

[`SpecialToken`](SpecialToken.md)

#### Defined in

[utils/LlamaText.ts:555](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L555)

***

### isSpecialTokenJSON()

```ts
static isSpecialTokenJSON(value: LlamaTextJSONValue): value is LlamaTextSpecialTokenJSON
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LlamaTextJSONValue`](../type-aliases/LlamaTextJSONValue.md) |

#### Returns

`value is LlamaTextSpecialTokenJSON`

#### Defined in

[utils/LlamaText.ts:562](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L562)

***

### getTokenToValueMap()

```ts
static getTokenToValueMap(tokenizer: Tokenizer): ReadonlyMap<undefined | Token, BuiltinSpecialTokenValue>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |

#### Returns

`ReadonlyMap`&lt;`undefined` \| [`Token`](../type-aliases/Token.md), [`BuiltinSpecialTokenValue`](../type-aliases/BuiltinSpecialTokenValue.md)&gt;

#### Defined in

[utils/LlamaText.ts:566](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L566)
