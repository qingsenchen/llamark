# Type Alias: LLamaChatPromptOptions&lt;Functions&gt;

```ts
type LLamaChatPromptOptions<Functions>: {
  onTextChunk: (text: string) => void;
  onToken: (tokens: Token[]) => void;
  signal: AbortSignal;
  stopOnAbortSignal: boolean;
  maxTokens: number;
  temperature: number;
  minP: number;
  topK: number;
  topP: number;
  seed: number;
  trimWhitespaceSuffix: boolean;
  responsePrefix: string;
  evaluationPriority: EvaluationPriority;
  repeatPenalty: false | LlamaChatSessionRepeatPenalty;
  tokenBias: TokenBias | () => TokenBias;
  customStopTriggers: (LlamaText | string | (string | Token)[])[];
 } & {
  grammar: LlamaGrammar;
  functions: never;
  documentFunctionParams: never;
  maxParallelFunctionCalls: never;
 } | {
  grammar: never;
  functions: Functions | ChatSessionModelFunctions;
  documentFunctionParams: boolean;
  maxParallelFunctionCalls: number;
};
```

## Type declaration

### onTextChunk()?

```ts
optional onTextChunk: (text: string) => void;
```

Called as the model generates a response with the generated text chunk.

Useful for streaming the generated response as it's being generated.

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

Called as the model generates a response with the generated tokens.

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

### stopOnAbortSignal?

```ts
optional stopOnAbortSignal: boolean;
```

When a response already started being generated and then the signal is aborted,
the generation will stop and the response will be returned as is instead of throwing an error.

Defaults to `false`.

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

### responsePrefix?

```ts
optional responsePrefix: string;
```

Force a given text prefix to be the start of the model response, to make the model follow a certain direction.

May cause some models to not use the given functions in some scenarios where they would have been used otherwise,
so avoid using it together with function calling if you notice unexpected behavior.

### evaluationPriority?

```ts
optional evaluationPriority: EvaluationPriority;
```

See the parameter `evaluationPriority` on the `LlamaContextSequence.evaluate()` function for more information.

### repeatPenalty?

```ts
optional repeatPenalty: false | LlamaChatSessionRepeatPenalty;
```

### tokenBias?

```ts
optional tokenBias: TokenBias | () => TokenBias;
```

Adjust the probability of tokens being generated.
Can be used to bias the model to generate tokens that you want it to lean towards,
or to avoid generating tokens that you want it to avoid.

### customStopTriggers?

```ts
optional customStopTriggers: (LlamaText | string | (string | Token)[])[];
```

Custom stop triggers to stop the generation of the response when any of the provided triggers are found.

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* [`ChatSessionModelFunctions`](ChatSessionModelFunctions.md) \| `undefined` | [`ChatSessionModelFunctions`](ChatSessionModelFunctions.md) \| `undefined` |

## Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:63](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L63)
