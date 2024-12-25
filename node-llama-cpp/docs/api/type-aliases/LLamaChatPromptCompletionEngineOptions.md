# Type Alias: LLamaChatPromptCompletionEngineOptions

```ts
type LLamaChatPromptCompletionEngineOptions: {
  maxPreloadTokens: number;
  onGeneration: void;
  maxCachedCompletions: number;
  temperature: LLamaChatCompletePromptOptions["temperature"];
  minP: LLamaChatCompletePromptOptions["minP"];
  topK: LLamaChatCompletePromptOptions["topK"];
  topP: LLamaChatCompletePromptOptions["topP"];
  seed: LLamaChatCompletePromptOptions["seed"];
  trimWhitespaceSuffix: LLamaChatCompletePromptOptions["trimWhitespaceSuffix"];
  evaluationPriority: LLamaChatCompletePromptOptions["evaluationPriority"];
  repeatPenalty: LLamaChatCompletePromptOptions["repeatPenalty"];
  tokenBias: LLamaChatCompletePromptOptions["tokenBias"];
  customStopTriggers: LLamaChatCompletePromptOptions["customStopTriggers"];
  grammar: LLamaChatCompletePromptOptions["grammar"];
  functions: LLamaChatCompletePromptOptions["functions"];
  documentFunctionParams: LLamaChatCompletePromptOptions["documentFunctionParams"];
};
```

## Type declaration

### maxPreloadTokens?

```ts
optional maxPreloadTokens: number;
```

Max tokens to allow for preloading a prompt and generating a completion for it.

Defaults to `256` or half of the context size, whichever is smaller.

### onGeneration()?

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prompt` | `string` |
| `completion` | `string` |

#### Returns

`void`

### maxCachedCompletions?

```ts
optional maxCachedCompletions: number;
```

Max number of completions to cache.

Defaults to `100`.

### temperature?

```ts
optional temperature: LLamaChatCompletePromptOptions["temperature"];
```

### minP?

```ts
optional minP: LLamaChatCompletePromptOptions["minP"];
```

### topK?

```ts
optional topK: LLamaChatCompletePromptOptions["topK"];
```

### topP?

```ts
optional topP: LLamaChatCompletePromptOptions["topP"];
```

### seed?

```ts
optional seed: LLamaChatCompletePromptOptions["seed"];
```

### trimWhitespaceSuffix?

```ts
optional trimWhitespaceSuffix: LLamaChatCompletePromptOptions["trimWhitespaceSuffix"];
```

### evaluationPriority?

```ts
optional evaluationPriority: LLamaChatCompletePromptOptions["evaluationPriority"];
```

### repeatPenalty?

```ts
optional repeatPenalty: LLamaChatCompletePromptOptions["repeatPenalty"];
```

### tokenBias?

```ts
optional tokenBias: LLamaChatCompletePromptOptions["tokenBias"];
```

### customStopTriggers?

```ts
optional customStopTriggers: LLamaChatCompletePromptOptions["customStopTriggers"];
```

### grammar?

```ts
optional grammar: LLamaChatCompletePromptOptions["grammar"];
```

### functions?

```ts
optional functions: LLamaChatCompletePromptOptions["functions"];
```

### documentFunctionParams?

```ts
optional documentFunctionParams: LLamaChatCompletePromptOptions["documentFunctionParams"];
```

## Defined in

[evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts:7](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/utils/LlamaChatSessionPromptCompletionEngine.ts#L7)
