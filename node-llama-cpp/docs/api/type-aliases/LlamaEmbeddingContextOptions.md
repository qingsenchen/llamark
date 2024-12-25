# Type Alias: LlamaEmbeddingContextOptions

```ts
type LlamaEmbeddingContextOptions: {
  contextSize: "auto" | number | {
     min: number;
     max: number;
    };
  batchSize: number;
  threads: number;
  createSignal: AbortSignal;
  ignoreMemorySafetyChecks: boolean;
};
```

## Type declaration

### contextSize?

```ts
optional contextSize: "auto" | number | {
  min: number;
  max: number;
};
```

The number of tokens the model can see at once.
- **`"auto"`** - adapt to the current VRAM state and attemp to set the context size as high as possible up to the size
the model was trained on.
- **`number`** - set the context size to a specific number of tokens.
If there's not enough VRAM, an error will be thrown.
Use with caution.
- **`{min?: number, max?: number}`** - adapt to the current VRAM state and attemp to set the context size as high as possible
up to the size the model was trained on, but at least `min` and at most `max`.

Defaults to `"auto"`.

### batchSize?

```ts
optional batchSize: number;
```

prompt processing batch size

### threads?

```ts
optional threads: number;
```

number of threads to use to evaluate tokens.
set to 0 to use the maximum threads supported by the current machine hardware

### createSignal?

```ts
optional createSignal: AbortSignal;
```

An abort signal to abort the context creation

### ignoreMemorySafetyChecks?

```ts
optional ignoreMemorySafetyChecks: boolean;
```

Ignore insufficient memory errors and continue with the context creation.
Can cause the process to crash if there's not enough VRAM for the new context.

Defaults to `false`.

## Defined in

[evaluator/LlamaEmbeddingContext.ts:9](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbeddingContext.ts#L9)
