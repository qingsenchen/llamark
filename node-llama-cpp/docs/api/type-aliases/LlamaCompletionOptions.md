# Type Alias: LlamaCompletionOptions

```ts
type LlamaCompletionOptions: {
  contextSequence: LlamaContextSequence;
  autoDisposeSequence: boolean;
};
```

## Type declaration

### contextSequence

```ts
contextSequence: LlamaContextSequence;
```

### autoDisposeSequence?

```ts
optional autoDisposeSequence: boolean;
```

Automatically dispose the sequence when the object is disposed.

Defaults to `false`.

## Defined in

[evaluator/LlamaCompletion.ts:21](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L21)
