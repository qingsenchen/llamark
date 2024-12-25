# Type Alias: LLamaChatCompletePromptOptions

```ts
type LLamaChatCompletePromptOptions: {
  maxTokens: LLamaChatPromptOptions["maxTokens"];
  stopOnAbortSignal: LLamaChatPromptOptions["stopOnAbortSignal"];
  onTextChunk: LLamaChatPromptOptions["onTextChunk"];
  onToken: LLamaChatPromptOptions["onToken"];
  signal: LLamaChatPromptOptions["signal"];
  temperature: LLamaChatPromptOptions["temperature"];
  minP: LLamaChatPromptOptions["minP"];
  topK: LLamaChatPromptOptions["topK"];
  topP: LLamaChatPromptOptions["topP"];
  seed: LLamaChatPromptOptions["seed"];
  trimWhitespaceSuffix: LLamaChatPromptOptions["trimWhitespaceSuffix"];
  evaluationPriority: LLamaChatPromptOptions["evaluationPriority"];
  repeatPenalty: LLamaChatPromptOptions["repeatPenalty"];
  tokenBias: LLamaChatPromptOptions["tokenBias"];
  customStopTriggers: LLamaChatPromptOptions["customStopTriggers"];
  grammar: LlamaGrammar;
  functions: ChatSessionModelFunctions;
  documentFunctionParams: boolean;
};
```

## Type declaration

### maxTokens?

```ts
optional maxTokens: LLamaChatPromptOptions["maxTokens"];
```

Generate a completion for the given user prompt up to the given number of tokens.

Defaults to `256` or half the context size, whichever is smaller.

### stopOnAbortSignal?

```ts
optional stopOnAbortSignal: LLamaChatPromptOptions["stopOnAbortSignal"];
```

When a completion already started being generated and then the signal is aborted,
the generation will stop and the completion will be returned as is instead of throwing an error.

Defaults to `false`.

### onTextChunk?

```ts
optional onTextChunk: LLamaChatPromptOptions["onTextChunk"];
```

Called as the model generates a completion with the generated text chunk.

Useful for streaming the generated completion as it's being generated.

### onToken?

```ts
optional onToken: LLamaChatPromptOptions["onToken"];
```

Called as the model generates a completion with the generated tokens.

Preferably, you'd want to use `onTextChunk` instead of this.

### signal?

```ts
optional signal: LLamaChatPromptOptions["signal"];
```

### temperature?

```ts
optional temperature: LLamaChatPromptOptions["temperature"];
```

### minP?

```ts
optional minP: LLamaChatPromptOptions["minP"];
```

### topK?

```ts
optional topK: LLamaChatPromptOptions["topK"];
```

### topP?

```ts
optional topP: LLamaChatPromptOptions["topP"];
```

### seed?

```ts
optional seed: LLamaChatPromptOptions["seed"];
```

### trimWhitespaceSuffix?

```ts
optional trimWhitespaceSuffix: LLamaChatPromptOptions["trimWhitespaceSuffix"];
```

### evaluationPriority?

```ts
optional evaluationPriority: LLamaChatPromptOptions["evaluationPriority"];
```

### repeatPenalty?

```ts
optional repeatPenalty: LLamaChatPromptOptions["repeatPenalty"];
```

### tokenBias?

```ts
optional tokenBias: LLamaChatPromptOptions["tokenBias"];
```

### customStopTriggers?

```ts
optional customStopTriggers: LLamaChatPromptOptions["customStopTriggers"];
```

### grammar?

```ts
optional grammar: LlamaGrammar;
```

### functions?

```ts
optional functions: ChatSessionModelFunctions;
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

[evaluator/LlamaChatSession/LlamaChatSession.ts:189](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L189)
