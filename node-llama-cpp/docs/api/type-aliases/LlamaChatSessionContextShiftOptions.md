# Type Alias: LlamaChatSessionContextShiftOptions

```ts
type LlamaChatSessionContextShiftOptions: {
  size: LLamaChatContextShiftOptions["size"];
  strategy: LLamaChatContextShiftOptions["strategy"];
};
```

## Type declaration

### size?

```ts
optional size: LLamaChatContextShiftOptions["size"];
```

The number of tokens to delete from the context window to make space for new ones.
Defaults to 10% of the context size.

### strategy?

```ts
optional strategy: LLamaChatContextShiftOptions["strategy"];
```

The strategy to use when deleting tokens from the context window.
Defaults to `"eraseFirstResponseAndKeepFirstSystem"`.

## Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:49](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L49)
