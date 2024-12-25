# Class: LlamaModel

## Properties

### tokenizer

```ts
readonly tokenizer: Tokenizer;
```

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:160](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L160)

***

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:161](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L161)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:266](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L266)

***

### tokens

```ts
get tokens(): LlamaModelTokens
```

#### Returns

[`LlamaModelTokens`](LlamaModelTokens.md)

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:270](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L270)

***

### filename

```ts
get filename(): undefined | string
```

#### Returns

`undefined` \| `string`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:274](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L274)

***

### fileInfo

```ts
get fileInfo(): GgufFileInfo
```

#### Returns

[`GgufFileInfo`](../type-aliases/GgufFileInfo.md)

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:278](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L278)

***

### fileInsights

```ts
get fileInsights(): GgufInsights
```

#### Returns

[`GgufInsights`](GgufInsights.md)

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:282](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L282)

***

### gpuLayers

```ts
get gpuLayers(): number
```

Number of layers offloaded to the GPU.
If GPU support is disabled, this will always be `0`.

#### Returns

`number`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:290](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L290)

***

### size

```ts
get size(): number
```

Total model size in memory in bytes

#### Returns

`number`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:297](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L297)

***

### flashAttentionSupported

```ts
get flashAttentionSupported(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:303](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L303)

***

### defaultContextFlashAttention

```ts
get defaultContextFlashAttention(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:307](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L307)

***

### trainContextSize

```ts
get trainContextSize(): number
```

The context size the model was trained on

#### Returns

`number`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:589](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L589)

***

### embeddingVectorSize

```ts
get embeddingVectorSize(): number
```

The size of an embedding vector the model can produce

#### Returns

`number`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:599](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L599)

***

### vocabularyType

```ts
get vocabularyType(): LlamaVocabularyType
```

#### Returns

[`LlamaVocabularyType`](../enumerations/LlamaVocabularyType.md)

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:608](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L608)

## Methods

### dispose()

```ts
dispose(): Promise<void>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:252](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L252)

***

### tokenize()

#### tokenize(text, specialTokens, options)

```ts
tokenize(
   text: string, 
   specialTokens?: boolean, 
   options?: "trimLeadingSpace"): Token[]
```

Transform text into tokens that can be fed to the model

##### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `text` | `string` | the text to tokenize |
| `specialTokens`? | `boolean` | if set to true, text that correspond to special tokens will be tokenized to those tokens. For example, `<s>` will be tokenized to the BOS token if `specialTokens` is set to `true`, otherwise it will be tokenized to tokens that corresponds to the plaintext `<s>` string. |
| `options`? | `"trimLeadingSpace"` | additional options for tokenization. If set to `"trimLeadingSpace"`, a leading space will be trimmed from the tokenized output if the output has an additional space at the beginning. |

##### Returns

[`Token`](../type-aliases/Token.md)[]

##### Defined in

[evaluator/LlamaModel/LlamaModel.ts:321](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L321)

#### tokenize(text, specialTokens)

```ts
tokenize(text: BuiltinSpecialTokenValue, specialTokens: "builtin"): Token[]
```

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | [`BuiltinSpecialTokenValue`](../type-aliases/BuiltinSpecialTokenValue.md) |
| `specialTokens` | `"builtin"` |

##### Returns

[`Token`](../type-aliases/Token.md)[]

##### Defined in

[evaluator/LlamaModel/LlamaModel.ts:322](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L322)

***

### detokenize()

```ts
detokenize(
   tokens: readonly Token[], 
   specialTokens?: boolean, 
   lastTokens?: readonly Token[]): string
```

Transform tokens into text

#### Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `tokens` | readonly [`Token`](../type-aliases/Token.md)[] | `undefined` | the tokens to detokenize. |
| `specialTokens`? | `boolean` | `false` | if set to `true`, special tokens will be detokenized to their corresponding token text representation. Recommended for debugging purposes only. > **Note:** there may be additional spaces around special tokens that were not present in the original text - this is not a bug, this is [how the tokenizer is supposed to work](https://github.com/ggerganov/llama.cpp/pull/7697#issuecomment-2144003246). Defaults to `false`. |
| `lastTokens`? | readonly [`Token`](../type-aliases/Token.md)[] | `undefined` | the last few tokens that preceded the tokens to detokenize. If provided, the last few tokens will be used to determine whether a space has to be added before the current tokens or not, and apply other detokenizer-specific heuristics to provide the correct text continuation to the existing tokens. Using it may have no effect with some models, but it is still recommended. |

#### Returns

`string`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:435](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L435)

***

### getTokenAttributes()

```ts
getTokenAttributes(token: Token): TokenAttributes
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | [`Token`](../type-aliases/Token.md) |

#### Returns

[`TokenAttributes`](TokenAttributes.md)

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:456](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L456)

***

### isSpecialToken()

```ts
isSpecialToken(token: undefined | Token): boolean
```

Check whether the given token is a special token (a control-type token or a token with no normal text representation)

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `undefined` \| [`Token`](../type-aliases/Token.md) |

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:467](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L467)

***

### iterateAllTokens()

```ts
iterateAllTokens(): Generator<Token, void, unknown>
```

#### Returns

[`Generator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Generator)&lt;[`Token`](../type-aliases/Token.md), `void`, `unknown`&gt;

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:482](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L482)

***

### isEogToken()

```ts
isEogToken(token: undefined | Token): boolean
```

Check whether the given token is an EOG (End Of Generation) token, like EOS or EOT.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | `undefined` \| [`Token`](../type-aliases/Token.md) |

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:495](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L495)

***

### createContext()

```ts
createContext(options: LlamaContextOptions): Promise<LlamaContext>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaContextOptions`](../type-aliases/LlamaContextOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaContext`](LlamaContext.md)&gt;

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:502](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L502)

***

### createEmbeddingContext()

```ts
createEmbeddingContext(options: LlamaEmbeddingContextOptions): Promise<LlamaEmbeddingContext>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaEmbeddingContextOptions`](../type-aliases/LlamaEmbeddingContextOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaEmbeddingContext`](LlamaEmbeddingContext.md)&gt;

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:516](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L516)

***

### getWarnings()

```ts
getWarnings(): string[]
```

Get warnings about the model file that would affect its usage.

These warnings include all the warnings generated by `GgufInsights`, but are more comprehensive.

#### Returns

`string`[]

#### Defined in

[evaluator/LlamaModel/LlamaModel.ts:535](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L535)
