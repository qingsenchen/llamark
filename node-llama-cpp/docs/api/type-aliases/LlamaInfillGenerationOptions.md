# Type Alias: LlamaInfillGenerationOptions

```ts
type LlamaInfillGenerationOptions: LlamaCompletionGenerationOptions & {
  minPrefixKeepTokens: number | (sequence: LlamaContextSequence) => number | Promise<number>;
};
```

## Type declaration

### minPrefixKeepTokens?

```ts
optional minPrefixKeepTokens: number | (sequence: LlamaContextSequence) => number | Promise<number>;
```

The minimum number of tokens to keep from the prefix input when making a context shift.
Defaults to 10% of the context size.

## Defined in

[evaluator/LlamaCompletion.ts:150](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L150)
