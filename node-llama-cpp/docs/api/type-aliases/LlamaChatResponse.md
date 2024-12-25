# Type Alias: LlamaChatResponse&lt;Functions&gt;

```ts
type LlamaChatResponse<Functions>: {
  response: string;
  functionCalls: Functions extends ChatModelFunctions ? LlamaChatResponseFunctionCall<Functions>[] : never;
  lastEvaluation: {
     cleanHistory: ChatHistoryItem[];
     contextWindow: ChatHistoryItem[];
     contextShiftMetadata: any;
    };
  metadata: {
     remainingGenerationAfterStop: string | Token[];
     stopReason:   | "eogToken"
        | "stopGenerationTrigger"
        | "functionCalls"
        | "maxTokens"
        | "abort";
    } | {
     remainingGenerationAfterStop: string | Token[];
     stopReason: "customStopTrigger";
     customStopTrigger: (string | Token)[];
    };
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* [`ChatModelFunctions`](ChatModelFunctions.md) \| `undefined` | `undefined` |

## Type declaration

### response

```ts
response: string;
```

### functionCalls?

```ts
optional functionCalls: Functions extends ChatModelFunctions ? LlamaChatResponseFunctionCall<Functions>[] : never;
```

### lastEvaluation

```ts
lastEvaluation: {
  cleanHistory: ChatHistoryItem[];
  contextWindow: ChatHistoryItem[];
  contextShiftMetadata: any;
};
```

### lastEvaluation.cleanHistory

```ts
cleanHistory: ChatHistoryItem[];
```

### lastEvaluation.contextWindow

```ts
contextWindow: ChatHistoryItem[];
```

### lastEvaluation.contextShiftMetadata

```ts
contextShiftMetadata: any;
```

### metadata

```ts
metadata: {
  remainingGenerationAfterStop: string | Token[];
  stopReason:   | "eogToken"
     | "stopGenerationTrigger"
     | "functionCalls"
     | "maxTokens"
     | "abort";
 } | {
  remainingGenerationAfterStop: string | Token[];
  stopReason: "customStopTrigger";
  customStopTrigger: (string | Token)[];
};
```

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:731](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L731)
