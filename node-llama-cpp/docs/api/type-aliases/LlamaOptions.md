# Type Alias: LlamaOptions

```ts
type LlamaOptions: {
  gpu: "auto" | LlamaGpuType | {
     type: "auto";
     exclude: LlamaGpuType[];
    };
  logLevel: LlamaLogLevel;
  logger: (level: LlamaLogLevel, message: string) => void;
  build: "auto" | "never" | "forceRebuild";
  cmakeOptions: Record<string, string>;
  existingPrebuiltBinaryMustMatchBuildOptions: boolean;
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

### gpu?

```ts
optional gpu: "auto" | LlamaGpuType | {
  type: "auto";
  exclude: LlamaGpuType[];
};
```

The compute layer implementation type to use for llama.cpp.
- **`"auto"`**: Automatically detect and use the best GPU available (Metal on macOS, and CUDA or Vulkan on Windows and Linux)
- **`"metal"`**: Use Metal.
  Only supported on macOS.
  Enabled by default on Apple Silicon Macs.
- **`"cuda"`**: Use CUDA.
- **`"vulkan"`**: Use Vulkan.
- **`false`**: Disable any GPU support and only use the CPU.

`"auto"` by default.

### logLevel?

```ts
optional logLevel: LlamaLogLevel;
```

Set the minimum log level for llama.cpp.
Defaults to `"warn"`.

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

### build?

```ts
optional build: "auto" | "never" | "forceRebuild";
```

Set what build method to use.
- **`"auto"`**: If a local build is found, use it.
Otherwise, if a prebuilt binary is found, use it.
Otherwise, build from source.
- **`"never"`**: If a local build is found, use it.
Otherwise, if a prebuilt binary is found, use it.
Otherwise, throw a `NoBinaryFoundError` error.
- **`"forceRebuild"`**: Always build from source.
Be cautious with this option, as it will cause the build to fail on Windows when the binaries are in use by another process.

When running from inside an Asar archive in Electron, building from source is not possible, so it'll never build from source.
To allow building from source in Electron apps, make sure you ship `node-llama-cpp` as an unpacked module.

Defaults to `"auto"`.
On Electron, defaults to `"never"`.

### cmakeOptions?

```ts
optional cmakeOptions: Record<string, string>;
```

Set custom CMake options for llama.cpp

### existingPrebuiltBinaryMustMatchBuildOptions?

```ts
optional existingPrebuiltBinaryMustMatchBuildOptions: boolean;
```

When a prebuilt binary is found, only use it if it was built with the same build options as the ones specified in `buildOptions`.
Disabled by default.

### usePrebuiltBinaries?

```ts
optional usePrebuiltBinaries: boolean;
```

Use prebuilt binaries if they match the build options.
Enabled by default.

### progressLogs?

```ts
optional progressLogs: boolean;
```

Print binary compilation progress logs.
Enabled by default.

### skipDownload?

```ts
optional skipDownload: boolean;
```

Don't download llama.cpp source if it's not found.
When set to `true`, and llama.cpp source is not found, a `NoBinaryFoundError` error will be thrown.
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

[bindings/getLlama.ts:36](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/getLlama.ts#L36)
