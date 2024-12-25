# Type Alias: LlamaCompletionGenerationOptions

```ts
type LlamaCompletionGenerationOptions: {
  onTextChunk: (text: string) => void;
  onToken: (tokens: Token[]) => void;
  signal: AbortSignal;
  maxTokens: number;
  temperature: number;
  minP: number;
  topK: number;
  topP: number;
  seed: number;
  trimWhitespaceSuffix: boolean;
  repeatPenalty: false | LLamaContextualRepeatPenalty;
  tokenBias: TokenBias | () => TokenBias;
  evaluationPriority: EvaluationPriority;
  grammar: LlamaGrammar;
  customStopTriggers: readonly (LlamaText | string | readonly (string | Token)[])[];
  contextShiftSize: number | (sequence: LlamaContextSequence) => number | Promise<number>;
  disableContextShift: boolean;
};
```

## Type declaration

### onTextChunk()?

```ts
optional onTextChunk: (text: string) => void;
```

Called as the model generates a completion with the generated text chunk.

Useful for streaming the generated completion as it's being generated.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` |

#### Returns

`void`

### onToken()?

```ts
optional onToken: (tokens: Token[]) => void;
```

Called as the model generates a completion with the generated tokens.

Preferably, you'd want to use `onTextChunk` instead of this.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `tokens` | [`Token`](Token.md)[] |

#### Returns

`void`

### signal?

```ts
optional signal: AbortSignal;
```

### maxTokens?

```ts
optional maxTokens: number;
```

### temperature?

```ts
optional temperature: number;
```

Temperature is a hyperparameter that controls the randomness of the generated text.
It affects the probability distribution of the model's output tokens.

A higher temperature (e.g., 1.5) makes the output more random and creative,
while a lower temperature (e.g., 0.5) makes the output more focused, deterministic, and conservative.

The suggested temperature is 0.8, which provides a balance between randomness and determinism.

At the extreme, a temperature of 0 will always pick the most likely next token, leading to identical outputs in each run.

Set to `0` to disable.
Disabled by default (set to `0`).

### minP?

```ts
optional minP: number;
```

From the next token candidates, discard the percentage of tokens with the lowest probability.
For example, if set to `0.05`, 5% of the lowest probability tokens will be discarded.
This is useful for generating more high-quality results when using a high temperature.
Set to a value between `0` and `1` to enable.

Only relevant when `temperature` is set to a value greater than `0`.
Disabled by default.

### topK?

```ts
optional topK: number;
```

Limits the model to consider only the K most likely next tokens for sampling at each step of sequence generation.
An integer number between `1` and the size of the vocabulary.
Set to `0` to disable (which uses the full vocabulary).

Only relevant when `temperature` is set to a value greater than 0.

### topP?

```ts
optional topP: number;
```

Dynamically selects the smallest set of tokens whose cumulative probability exceeds the threshold P,
and samples the next token only from this set.
A float number between `0` and `1`.
Set to `1` to disable.

Only relevant when `temperature` is set to a value greater than `0`.

### seed?

```ts
optional seed: number;
```

Used to control the randomness of the generated text.

Change the seed to get different results.

Only relevant when using `temperature`.

### trimWhitespaceSuffix?

```ts
optional trimWhitespaceSuffix: boolean;
```

Trim whitespace from the end of the generated text
Disabled by default.

### repeatPenalty?

```ts
optional repeatPenalty: false | LLamaContextualRepeatPenalty;
```

### tokenBias?

```ts
optional tokenBias: TokenBias | () => TokenBias;
```

Adjust the probability of tokens being generated.
Can be used to bias the model to generate tokens that you want it to lean towards,
or to avoid generating tokens that you want it to avoid.

### evaluationPriority?

```ts
optional evaluationPriority: EvaluationPriority;
```

See the parameter `evaluationPriority` on the `LlamaContextSequence.evaluate()` function for more information.

### grammar?

```ts
optional grammar: LlamaGrammar;
```

### customStopTriggers?

```ts
optional customStopTriggers: readonly (LlamaText | string | readonly (string | Token)[])[];
```

Custom stop triggers to stop the completion when any of the provided triggers are found.

### contextShiftSize?

```ts
optional contextShiftSize: number | (sequence: LlamaContextSequence) => number | Promise<number>;
```

The number of tokens to delete from the context window to make space for new ones.
Defaults to 10% of the context size.

### disableContextShift?

```ts
optional disableContextShift: boolean;
```

Context shift reconstructs the context with partial relevant data to continue generation when the context fills up.
This flag disables this behavior.
This flag will cause the generation to stop when the context fills up
by setting an appropriate `maxTokens` value or lowering the given `maxTokens` value when needed.
This flag will cause the generation to fail if there's no space for generating new tokens at all with the given inputs.

Disabled by default. Not recommended unless you know what you're doing.

## Defined in

[evaluator/LlamaCompletion.ts:32](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L32)
