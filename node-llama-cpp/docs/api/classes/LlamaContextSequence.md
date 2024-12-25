# Class: LlamaContextSequence

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:820](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L820)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:867](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L867)

***

### context

```ts
get context(): LlamaContext
```

#### Returns

[`LlamaContext`](LlamaContext.md)

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:871](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L871)

***

### model

```ts
get model(): LlamaModel
```

#### Returns

[`LlamaModel`](LlamaModel.md)

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:875](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L875)

***

### nextTokenIndex

```ts
get nextTokenIndex(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:879](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L879)

***

### contextTokens

```ts
get contextTokens(): Token[]
```

#### Returns

[`Token`](../type-aliases/Token.md)[]

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:883](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L883)

***

### tokenMeter

```ts
get tokenMeter(): TokenMeter
```

#### Returns

[`TokenMeter`](TokenMeter.md)

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:887](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L887)

***

### isLoadedToMemory

```ts
get isLoadedToMemory(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:891](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L891)

## Methods

### dispose()

```ts
dispose(): void
```

#### Returns

`void`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:851](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L851)

***

### compareContextTokens()

```ts
compareContextTokens(tokens: Token[]): {
  firstDifferentIndex: number;
}
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokens` | [`Token`](../type-aliases/Token.md)[] |

#### Returns

```ts
{
  firstDifferentIndex: number;
}
```

##### firstDifferentIndex

```ts
firstDifferentIndex: number;
```

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:895](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L895)

***

### adaptStateToTokens()

```ts
adaptStateToTokens(tokens: Token[], allowShift: boolean): Promise<void>
```

Erase parts of the context state to align it with the given tokens.

If the given tokens do not align with the current context state, the context state will be erased to align with the given tokens.

To find the first different token index between the context state and the given tokens, access the `nextTokenIndex` property.

If `allowShift` is `true` (the default), shifting tokens may happen to align the context state with the given tokens,
which incurs token evaluation of the shifted tokens.

#### Parameters

| Parameter | Type | Default value |
| ------ | ------ | ------ |
| `tokens` | [`Token`](../type-aliases/Token.md)[] | `undefined` |
| `allowShift` | `boolean` | `true` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:922](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L922)

***

### clearHistory()

```ts
clearHistory(): Promise<void>
```

Clear the history of the sequence.
If `prependBos` was enabled, the BOS token will be prepended to the sequence again.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:971](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L971)

***

### eraseContextTokenRanges()

```ts
eraseContextTokenRanges(ranges: ContextTokensDeleteRange[]): Promise<void>
```

Erase context tokens in the provided ranges to free up space for new tokens to be generated.
The start of each range is inclusive, and the end of each range is exclusive.
For example, the range `{start: 0, end: 1}` will remove the token at the `0` index only.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `ranges` | [`ContextTokensDeleteRange`](../type-aliases/ContextTokensDeleteRange.md)[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:982](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L982)

***

### evaluate()

```ts
evaluate(tokens: Token[], options: {
  temperature: number;
  minP: number;
  topK: number;
  topP: number;
  seed: number;
  grammarEvaluationState: LlamaGrammarEvaluationState | () => undefined | LlamaGrammarEvaluationState;
  repeatPenalty: LlamaContextSequenceRepeatPenalty;
  tokenBias: TokenBias | () => TokenBias;
  evaluationPriority: EvaluationPriority;
  contextShift: ContextShiftOptions;
  yieldEogToken: boolean;
 }): AsyncGenerator<Token, void | Token, any>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokens` | [`Token`](../type-aliases/Token.md)[] | - |
| `options` | `object` | - |
| `options.temperature`? | `number` | - |
| `options.minP`? | `number` | - |
| `options.topK`? | `number` | - |
| `options.topP`? | `number` | - |
| `options.seed`? | `number` | Used to control the randomness of the generated text. Change the seed to get different results. Defaults to the current epoch time. Only relevant when using `temperature`. |
| `options.grammarEvaluationState`? | [`LlamaGrammarEvaluationState`](LlamaGrammarEvaluationState.md) \| () => `undefined` \| [`LlamaGrammarEvaluationState`](LlamaGrammarEvaluationState.md) | - |
| `options.repeatPenalty`? | [`LlamaContextSequenceRepeatPenalty`](../type-aliases/LlamaContextSequenceRepeatPenalty.md) | - |
| `options.tokenBias`? | [`TokenBias`](TokenBias.md) \| () => [`TokenBias`](TokenBias.md) | Adjust the probability of tokens being generated. Can be used to bias the model to generate tokens that you want it to lean towards, or to avoid generating tokens that you want it to avoid. |
| `options.evaluationPriority`? | [`EvaluationPriority`](../type-aliases/EvaluationPriority.md) | When a lot of tokens are queued for the next batch, more than the configured `batchSize`, the tokens for each sequence will be evaluated based on the strategy chosen for the context. By default, the `"maximumParallelism"` strategy is used, which will try to evaluate as many sequences in parallel as possible, but at some point, it'll have to choose which sequences to evaluate more tokens of, so it'll prioritize the sequences with the highest evaluation priority. Also, a custom strategy can be used to prioritize the sequences differently, but generally, the higher the evaluation priority is, the more likely and more tokens will be evaluated for that sequence in the next queued batch. |
| `options.contextShift`? | [`ContextShiftOptions`](../type-aliases/ContextShiftOptions.md) | Override the sequence context shift options for this evaluation |
| `options.yieldEogToken`? | `boolean` | Yield an EOG (End Of Generation) token (like EOS and EOT) when it's generated. When `false` the generation will stop when an EOG token is generated and the token won't be yielded. Defaults to `false`. |

#### Returns

[`AsyncGenerator`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/AsyncGenerator)&lt;[`Token`](../type-aliases/Token.md), `void` \| [`Token`](../type-aliases/Token.md), `any`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:1064](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L1064)

***

### evaluateWithoutGeneratingNewTokens()

```ts
evaluateWithoutGeneratingNewTokens(tokens: Token[], options?: {
  evaluationPriority: 5;
  contextShift: {};
 }): Promise<void>
```

Evaluate the provided tokens into the context sequence without generating new tokens.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `tokens` | [`Token`](../type-aliases/Token.md)[] |  |
| `options`? | `object` |  |
| `options.evaluationPriority`? | [`EvaluationPriority`](../type-aliases/EvaluationPriority.md) | When a lot of tokens are queued for the next batch, more than the configured `batchSize`, the tokens for each sequence will be evaluated based on the strategy chosen for the context. By default, the `"maximumParallelism"` strategy is used, which will try to evaluate as many sequences in parallel as possible, but at some point, it'll have to choose which sequences to evaluate more tokens of, so it'll prioritize the sequences with the highest evaluation priority. Also, a custom strategy can be used to prioritize the sequences differently, but generally, the higher the evaluation priority is, the more likely and more tokens will be evaluated for that sequence in the next queued batch. |
| `options.contextShift`? | [`ContextShiftOptions`](../type-aliases/ContextShiftOptions.md) | Override the sequence context shift options for this evaluation |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:1155](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L1155)
