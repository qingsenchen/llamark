# Type Alias: LLamaChatContextShiftOptions

```ts
type LLamaChatContextShiftOptions: {
  size: number | (sequence: LlamaContextSequence) => number | Promise<number>;
  strategy: "eraseFirstResponseAndKeepFirstSystem" | (options: {
     chatHistory: ChatHistoryItem[];
     maxTokensCount: number;
     tokenizer: Token[];
     chatWrapper: ChatWrapper;
     lastShiftMetadata: object | null;
    }) => {
     chatHistory: ChatHistoryItem[];
     metadata: object | null;
    } | Promise<{
     chatHistory: ChatHistoryItem[];
     metadata: object | null;
    }>;
  lastEvaluationMetadata: object | null;
};
```

## Type declaration

### size?

```ts
optional size: number | (sequence: LlamaContextSequence) => number | Promise<number>;
```

The number of tokens to delete from the context window to make space for new ones.
Defaults to 10% of the context size.

### strategy?

```ts
optional strategy: "eraseFirstResponseAndKeepFirstSystem" | (options: {
  chatHistory: ChatHistoryItem[];
  maxTokensCount: number;
  tokenizer: Token[];
  chatWrapper: ChatWrapper;
  lastShiftMetadata: object | null;
 }) => {
  chatHistory: ChatHistoryItem[];
  metadata: object | null;
 } | Promise<{
  chatHistory: ChatHistoryItem[];
  metadata: object | null;
 }>;
```

The strategy to use when deleting tokens from the context window.
Defaults to `"eraseFirstResponseAndKeepFirstSystem"`.

### lastEvaluationMetadata?

```ts
optional lastEvaluationMetadata: object | null;
```

The `contextShiftMetadata` returned from the last evaluation.
This is an optimization to utilize the existing context state better when possible.

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:251](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L251)
