# Type Alias: LLamaChatLoadAndCompleteUserMessageOptions&lt;Functions&gt;

```ts
type LLamaChatLoadAndCompleteUserMessageOptions<Functions>: {
  initialUserPrompt: string;
  stopOnAbortSignal: boolean;
  onTextChunk: LLamaChatGenerateResponseOptions<Functions>["onTextChunk"];
  onToken: LLamaChatGenerateResponseOptions<Functions>["onToken"];
  signal: LLamaChatGenerateResponseOptions<Functions>["signal"];
  maxTokens: LLamaChatGenerateResponseOptions<Functions>["maxTokens"];
  temperature: LLamaChatGenerateResponseOptions<Functions>["temperature"];
  minP: LLamaChatGenerateResponseOptions<Functions>["minP"];
  topK: LLamaChatGenerateResponseOptions<Functions>["topK"];
  topP: LLamaChatGenerateResponseOptions<Functions>["topP"];
  seed: LLamaChatGenerateResponseOptions<Functions>["seed"];
  trimWhitespaceSuffix: LLamaChatGenerateResponseOptions<Functions>["trimWhitespaceSuffix"];
  repeatPenalty: LLamaChatGenerateResponseOptions<Functions>["repeatPenalty"];
  tokenBias: LLamaChatGenerateResponseOptions<Functions>["tokenBias"];
  evaluationPriority: LLamaChatGenerateResponseOptions<Functions>["evaluationPriority"];
  contextShift: LLamaChatGenerateResponseOptions<Functions>["contextShift"];
  customStopTriggers: LLamaChatGenerateResponseOptions<Functions>["customStopTriggers"];
  lastEvaluationContextWindow: LLamaChatGenerateResponseOptions<Functions>["lastEvaluationContextWindow"];
  grammar: LlamaGrammar;
  functions: Functions | ChatModelFunctions;
  documentFunctionParams: boolean;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* [`ChatModelFunctions`](ChatModelFunctions.md) \| `undefined` | `undefined` |

## Type declaration

### initialUserPrompt?

```ts
optional initialUserPrompt: string;
```

Complete the given user prompt without adding it or the completion to the returned context window.

### stopOnAbortSignal?

```ts
optional stopOnAbortSignal: boolean;
```

When a completion already started being generated and then the signal is aborted,
the generation will stop and the completion will be returned as is instead of throwing an error.

Defaults to `false`.

### onTextChunk?

```ts
optional onTextChunk: LLamaChatGenerateResponseOptions<Functions>["onTextChunk"];
```

Called as the model generates a completion with the generated text chunk.

Useful for streaming the generated completion as it's being generated.

### onToken?

```ts
optional onToken: LLamaChatGenerateResponseOptions<Functions>["onToken"];
```

Called as the model generates a completion with the generated tokens.

Preferably, you'd want to use `onTextChunk` instead of this.

### signal?

```ts
optional signal: LLamaChatGenerateResponseOptions<Functions>["signal"];
```

### maxTokens?

```ts
optional maxTokens: LLamaChatGenerateResponseOptions<Functions>["maxTokens"];
```

### temperature?

```ts
optional temperature: LLamaChatGenerateResponseOptions<Functions>["temperature"];
```

### minP?

```ts
optional minP: LLamaChatGenerateResponseOptions<Functions>["minP"];
```

### topK?

```ts
optional topK: LLamaChatGenerateResponseOptions<Functions>["topK"];
```

### topP?

```ts
optional topP: LLamaChatGenerateResponseOptions<Functions>["topP"];
```

### seed?

```ts
optional seed: LLamaChatGenerateResponseOptions<Functions>["seed"];
```

### trimWhitespaceSuffix?

```ts
optional trimWhitespaceSuffix: LLamaChatGenerateResponseOptions<Functions>["trimWhitespaceSuffix"];
```

### repeatPenalty?

```ts
optional repeatPenalty: LLamaChatGenerateResponseOptions<Functions>["repeatPenalty"];
```

### tokenBias?

```ts
optional tokenBias: LLamaChatGenerateResponseOptions<Functions>["tokenBias"];
```

### evaluationPriority?

```ts
optional evaluationPriority: LLamaChatGenerateResponseOptions<Functions>["evaluationPriority"];
```

### contextShift?

```ts
optional contextShift: LLamaChatGenerateResponseOptions<Functions>["contextShift"];
```

### customStopTriggers?

```ts
optional customStopTriggers: LLamaChatGenerateResponseOptions<Functions>["customStopTriggers"];
```

### lastEvaluationContextWindow?

```ts
optional lastEvaluationContextWindow: LLamaChatGenerateResponseOptions<Functions>["lastEvaluationContextWindow"];
```

### grammar?

```ts
optional grammar: LlamaGrammar;
```

### functions?

```ts
optional functions: Functions | ChatModelFunctions;
```

Functions are not used by the model here,
but are used for keeping the instructions given to the model about the functions in the current context state,
to avoid context shifts.

It's best to provide the same functions that were used for the previous prompt here.

### documentFunctionParams?

```ts
optional documentFunctionParams: boolean;
```

Functions are not used by the model here,
but are used for keeping the instructions given to the model about the functions in the current context state,
to avoid context shifts.

It's best to provide the same value that was used for the previous prompt here.

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:187](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L187)
