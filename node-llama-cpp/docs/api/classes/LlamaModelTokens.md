# Class: LlamaModelTokens

## Accessors

### infill

```ts
get infill(): LlamaModelInfillTokens
```

#### Returns

[`LlamaModelInfillTokens`](LlamaModelInfillTokens.md)

infill tokens

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:775](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L775)

***

### bos

```ts
get bos(): null | Token
```

#### Returns

`null` \| [`Token`](../type-aliases/Token.md)

The BOS (Beginning Of Sequence) token.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:787](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L787)

***

### eos

```ts
get eos(): null | Token
```

#### Returns

`null` \| [`Token`](../type-aliases/Token.md)

The EOS (End Of Sequence) token.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:802](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L802)

***

### eot

```ts
get eot(): null | Token
```

#### Returns

`null` \| [`Token`](../type-aliases/Token.md)

The EOT (End Of Turn) token.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:817](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L817)

***

### nl

```ts
get nl(): null | Token
```

#### Returns

`null` \| [`Token`](../type-aliases/Token.md)

The NL (New Line) token.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:832](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L832)

***

### bosString

```ts
get bosString(): null | string
```

#### Returns

`null` \| `string`

The BOS (Beginning Of Sequence) token text representation.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:847](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L847)

***

### eosString

```ts
get eosString(): null | string
```

#### Returns

`null` \| `string`

The EOS (End Of Sequence) token text representation.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:864](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L864)

***

### eotString

```ts
get eotString(): null | string
```

#### Returns

`null` \| `string`

The EOT (End Of Turn) token text representation.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:881](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L881)

***

### nlString

```ts
get nlString(): null | string
```

#### Returns

`null` \| `string`

The NL (New Line) token text representation.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:898](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L898)

***

### shouldPrependBosToken

```ts
get shouldPrependBosToken(): boolean
```

#### Returns

`boolean`

Whether we should prepend a BOS (Beginning Of Sequence) token for evaluations with this model.

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:915](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L915)
