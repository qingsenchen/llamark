# Type Alias: LlamaCompletionResponse

```ts
type LlamaCompletionResponse: {
  response: string;
  metadata: {
     remainingGenerationAfterStop: string | Token[];
     stopReason: "eogToken" | "stopGenerationTrigger" | "maxTokens";
    } | {
     remainingGenerationAfterStop: string | Token[];
     stopReason: "customStopTrigger";
     customStopTrigger: (string | Token)[];
    };
};
```

## Type declaration

### response

```ts
response: string;
```

### metadata

```ts
metadata: {
  remainingGenerationAfterStop: string | Token[];
  stopReason: "eogToken" | "stopGenerationTrigger" | "maxTokens";
 } | {
  remainingGenerationAfterStop: string | Token[];
  stopReason: "customStopTrigger";
  customStopTrigger: (string | Token)[];
};
```

## Defined in

[evaluator/LlamaCompletion.ts:158](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L158)
