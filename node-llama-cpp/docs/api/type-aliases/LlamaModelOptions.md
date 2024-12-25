# Type Alias: LlamaModelOptions

```ts
type LlamaModelOptions: {
  modelPath: string;
  gpuLayers: "auto" | "max" | number | {
     min: number;
     max: number;
     fitContext: {
        contextSize: number;
        embeddingContext: boolean;
       };
    };
  vocabOnly: boolean;
  useMmap: boolean;
  useMlock: boolean;
  checkTensors: boolean;
  defaultContextFlashAttention: boolean;
  onLoadProgress: void;
  loadSignal: AbortSignal;
  ignoreMemorySafetyChecks: boolean;
  metadataOverrides: OverridesObject<GgufMetadata, number | bigint | boolean | string>;
};
```

## Type declaration

### modelPath

```ts
modelPath: string;
```

path to the model on the filesystem

### gpuLayers?

```ts
optional gpuLayers: "auto" | "max" | number | {
  min: number;
  max: number;
  fitContext: {
     contextSize: number;
     embeddingContext: boolean;
    };
};
```

Number of layers to store in VRAM.
- **`"auto"`** - adapt to the current VRAM state and try to fit as many layers as possible in it.
Takes into account the VRAM required to create a context with a `contextSize` set to `"auto"`.
- **`"max"`** - store all layers in VRAM. If there's not enough VRAM, an error will be thrown. Use with caution.
- **`number`** - store the specified number of layers in VRAM. If there's not enough VRAM, an error will be thrown. Use with caution.
- **`{min?: number, max?: number, fitContext?: {contextSize: number}}`** - adapt to the current VRAM state and try to fit as
many layers as possible in it, but at least `min` and at most `max` layers. Set `fitContext` to the parameters of a context you
intend to create with the model, so it'll take it into account in the calculations and leave enough memory for such a context.

If GPU support is disabled, will be set to `0` automatically.

Defaults to `"auto"`.

### vocabOnly?

```ts
optional vocabOnly: boolean;
```

Only load the vocabulary, not weight tensors.

Useful when you only want to use the model to use its tokenizer but not for evaluation.

Defaults to `false`.

### useMmap?

```ts
optional useMmap: boolean;
```

Use mmap if possible.

Defaults to `true`.

### useMlock?

```ts
optional useMlock: boolean;
```

Force the system to keep the model in the RAM/VRAM.
Use with caution as this can crash your system if the available resources are insufficient.

### checkTensors?

```ts
optional checkTensors: boolean;
```

Check for tensor validity before actually loading the model.
Using it increases the time it takes to load the model.

Defaults to `false`.

### defaultContextFlashAttention?

```ts
optional defaultContextFlashAttention: boolean;
```

Enable flash attention by default for contexts created with this model.
Only works with models that support flash attention.

Flash attention is an optimization in the attention mechanism that makes inference faster, more efficient and uses less memory.

The support for flash attention is currently experimental and may not always work as expected.
Use with caution.

This option will be ignored if flash attention is not supported by the model.

Enabling this affects the calculations of default values for the model and contexts created with it
as flash attention reduces the amount of memory required,
which allows for more layers to be offloaded to the GPU and for context sizes to be bigger.

Defaults to `false`.

Upon flash attention exiting the experimental status, the default value will become `true`.

### onLoadProgress()?

Called with the load percentage when the model is being loaded.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `loadProgress` | `number` | a number between 0 (exclusive) and 1 (inclusive). |

#### Returns

`void`

### loadSignal?

```ts
optional loadSignal: AbortSignal;
```

An abort signal to abort the model load

### ignoreMemorySafetyChecks?

```ts
optional ignoreMemorySafetyChecks: boolean;
```

Ignore insufficient memory errors and continue with the model load.
Can cause the process to crash if there's not enough VRAM to fit the model.

Defaults to `false`.

### metadataOverrides?

```ts
optional metadataOverrides: OverridesObject<GgufMetadata, number | bigint | boolean | string>;
```

Metadata overrides to load the model with.

> **Note:** Most metadata value overrides aren't supported and overriding them will have no effect on `llama.cpp`.
> Only use this for metadata values that are explicitly documented to be supported by `llama.cpp` to be overridden,
> and only in cases when this is crucial, as this is not guaranteed to always work as expected.

## Defined in

[evaluator/LlamaModel/LlamaModel.ts:25](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaModel/LlamaModel.ts#L25)
