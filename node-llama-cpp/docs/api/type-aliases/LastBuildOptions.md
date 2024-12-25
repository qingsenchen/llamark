# Type Alias: LastBuildOptions

```ts
type LastBuildOptions: {
  logLevel: LlamaLogLevel;
  logger: (level: LlamaLogLevel, message: string) => void;
  usePrebuiltBinaries: boolean;
  progressLogs: boolean;
  skipDownload: boolean;
  maxThreads: number;
  vramPadding: number | (totalVram: number) => number;
  ramPadding: number | (totalRam: number) => number;
  debug: boolean;
};
```

## Type declaration

### logLevel?

```ts
optional logLevel: LlamaLogLevel;
```

Set the minimum log level for llama.cpp.
Defaults to "warn".

### logger()?

```ts
optional logger: (level: LlamaLogLevel, message: string) => void;
```

Set a custom logger for llama.cpp logs.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | [`LlamaLogLevel`](../enumerations/LlamaLogLevel.md) |
| `message` | `string` |

#### Returns

`void`

### usePrebuiltBinaries?

```ts
optional usePrebuiltBinaries: boolean;
```

If a local build is not found, use prebuilt binaries.
Enabled by default.

### progressLogs?

```ts
optional progressLogs: boolean;
```

If a local build is not found, and prebuilt binaries are not found, when building from source,
print binary compilation progress logs.
Enabled by default.

### skipDownload?

```ts
optional skipDownload: boolean;
```

If a local build is not found, and prebuilt binaries are not found, don't download llama.cpp source if it's not found.
When set to `true`, and llama.cpp source is needed but is not found, a `NoBinaryFoundError` error will be thrown.
Disabled by default.

### maxThreads?

```ts
optional maxThreads: number;
```

The maximum number of threads to use for the Llama instance.

Set to `0` to have no thread limit.

When not using a GPU, defaults to the number of CPU cores that are useful for math (`.cpuMathCores`), or `4`, whichever is higher.

When using a GPU, there's no limit by default.

### vramPadding?

```ts
optional vramPadding: number | (totalVram: number) => number;
```

Pad the available VRAM for the memory size calculations, as these calculations are not always accurate.
Recommended to ensure stability.
This only affects the calculations of `"auto"` in function options and is not reflected in the `getVramState` function.

Defaults to `6%` of the total VRAM or 1GB, whichever is lower.
Set to `0` to disable.

### ramPadding?

```ts
optional ramPadding: number | (totalRam: number) => number;
```

Pad the available RAM for the memory size calculations, as these calculations are not always accurate.
Recommended to ensure stability.

Defaults to `25%` of the total RAM or 6GB (1GB on Linux), whichever is lower.
Set to `0` to disable.

> Since the OS also needs RAM to function, the default value can get up to 6GB on Windows and macOS, and 1GB on Linux.

### debug?

```ts
optional debug: boolean;
```

Enable debug mode to find issues with llama.cpp.
Makes logs print directly to the console from `llama.cpp` and not through the provided logger.

Defaults to `false`.

The default can be set using the `NODE_LLAMA_CPP_DEBUG` environment variable.

## Defined in

[bindings/getLlama.ts:157](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/getLlama.ts#L157)
