# Type Alias: LlamaChatLoadAndCompleteUserResponse

```ts
type LlamaChatLoadAndCompleteUserResponse: {
  completion: string;
  lastEvaluation: {
     contextWindow: ChatHistoryItem[];
     contextShiftMetadata: any;
    };
  metadata: {
     remainingGenerationAfterStop: string | Token[];
     stopReason: "eogToken" | "stopGenerationTrigger" | "maxTokens" | "abort";
    } | {
     remainingGenerationAfterStop: string | Token[];
     stopReason: "customStopTrigger";
     customStopTrigger: (string | Token)[];
    };
};
```

## Type declaration

### completion

```ts
completion: string;
```

### lastEvaluation

```ts
lastEvaluation: {
  contextWindow: ChatHistoryItem[];
  contextShiftMetadata: any;
};
```

### lastEvaluation.contextWindow

```ts
contextWindow: ChatHistoryItem[];
```

The completion and initial user prompt are not added to this context window result,
but are loaded to the current context sequence state as tokens

### lastEvaluation.contextShiftMetadata

```ts
contextShiftMetadata: any;
```

### metadata

```ts
metadata: {
  remainingGenerationAfterStop: string | Token[];
  stopReason: "eogToken" | "stopGenerationTrigger" | "maxTokens" | "abort";
 } | {
  remainingGenerationAfterStop: string | Token[];
  stopReason: "customStopTrigger";
  customStopTrigger: (string | Token)[];
};
```

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:763](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L763)
