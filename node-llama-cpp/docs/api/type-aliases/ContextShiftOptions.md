# Type Alias: ContextShiftOptions

```ts
type ContextShiftOptions: {
  size: number | (sequence: LlamaContextSequence) => number | Promise<number>;
  strategy: "eraseBeginning" | (options: {
     sequence: LlamaContextSequence;
     size: number;
    }) => ContextTokensDeleteRange[] | Promise<ContextTokensDeleteRange[]>;
};
```

## Type declaration

### size?

```ts
optional size: number | (sequence: LlamaContextSequence) => number | Promise<number>;
```

### strategy?

```ts
optional strategy: "eraseBeginning" | (options: {
  sequence: LlamaContextSequence;
  size: number;
 }) => ContextTokensDeleteRange[] | Promise<ContextTokensDeleteRange[]>;
```

## Defined in

[evaluator/LlamaContext/types.ts:250](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L250)
