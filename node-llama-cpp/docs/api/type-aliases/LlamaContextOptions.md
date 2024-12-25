# Type Alias: LlamaContextOptions

```ts
type LlamaContextOptions: {
  sequences: number;
  contextSize: "auto" | number | {
     min: number;
     max: number;
    };
  batchSize: number;
  flashAttention: boolean;
  threads: number | {
     ideal: number;
     min: number;
    };
  batching: BatchingOptions;
  lora: string | {
     adapters: {
        filePath: string;
        scale: number;
       }[];
     onLoadProgress: void;
    };
  createSignal: AbortSignal;
  ignoreMemorySafetyChecks: boolean;
  failedCreationRemedy: false | {
     retries: number;
     autoContextSizeShrink: number | (contextSize: number) => number;
    };
  performanceTracking: boolean;
};
```

## Type declaration

### sequences?

```ts
optional sequences: number;
```

number of sequences for the context.
Each sequence is a different "text generation process" that can run in parallel to other sequences in the same context.
Although a single context has multiple sequences, the sequences are separate from each other and do not share data with each other.
This is beneficial for performance, as multiple sequences can be evaluated in parallel (on the same batch).

Each sequence increases the memory usage of the context.

Defaults to `1`.

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

The number of tokens that can be processed at once by the GPU.

Defaults to `512` or `contextSize` if `contextSize` is less than `512`.

### flashAttention?

```ts
optional flashAttention: boolean;
```

Flash attention is an optimization in the attention mechanism that makes inference faster, more efficient and uses less memory.

The support for flash attention is currently experimental and may not always work as expected.
Use with caution.

This option will be ignored if flash attention is not supported by the model.

Defaults to `false` (inherited from the model option `defaultContextFlashAttention`).

Upon flash attention exiting the experimental status, the default value will become `true`
(the inherited value from the model option `defaultContextFlashAttention` will become `true`).

### threads?

```ts
optional threads: number | {
  ideal: number;
  min: number;
};
```

number of threads to use to evaluate tokens.
set to 0 to use the maximum threads supported by the current machine hardware.

This value is considered as a hint, and the actual number of threads used may be lower when other evaluations are running.
To ensure the minimum number of threads you want to use are always used,
set this to an object with a `min` property (see the `min` property description for more details).

If `maxThreads` from the Llama instance is set to `0`, this value will always be the actual number of threads used.

If `maxThreads` from the Llama instance is set to `0`, defaults to the `.cpuMathCores` value from the Llama instance,
otherwise defaults to `maxThreads` from the Llama instance (see the `maxThreads` option of `getLlama` method for more details).

### batching?

```ts
optional batching: BatchingOptions;
```

control the parallel sequences processing behavior

### lora?

```ts
optional lora: string | {
  adapters: {
     filePath: string;
     scale: number;
    }[];
  onLoadProgress: void;
};
```

Load the provided LoRA adapters onto the context.
LoRA adapters are used to modify the weights of a pretrained model to adapt to new tasks or domains
without the need for extensive retraining from scratch.

If a string is provided, it will be treated as a path to a single LoRA adapter file.

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

### failedCreationRemedy?

```ts
optional failedCreationRemedy: false | {
  retries: number;
  autoContextSizeShrink: number | (contextSize: number) => number;
};
```

On failed context creation, retry the creation with a smaller context size.

Only works if `contextSize` is set to `"auto"`, left as default or set to an object with `min` and/or `max` properties.

Set `retries` to `false` to disable.

### performanceTracking?

```ts
optional performanceTracking: boolean;
```

Track the inference performance of the context, so using `.printTimings()` will work.

Defaults to `false`.

## Defined in

[evaluator/LlamaContext/types.ts:5](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L5)
