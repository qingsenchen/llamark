# Function: getLlama()

## getLlama(options)

```ts
function getLlama(options?: LlamaOptions): Promise<Llama>
```

Get a `llama.cpp` binding.

Defaults to use a local binary built using the `source download` or `source build` CLI commands if one exists,
otherwise, uses a prebuilt binary, and fallbacks to building from source if a prebuilt binary is not found.

Pass `"lastBuild"` to default to use the last successful build created
using the `source download` or `source build` CLI commands if one exists.

The difference between using `"lastBuild"` and not using it is that `"lastBuild"` will use the binary built using a CLI command
with the configuration used to build that binary (like using its GPU type),
while not using `"lastBuild"` will only attempt to only use a binary that complies with the given options.

For example, if your machine supports both CUDA and Vulkan, and you run the `source download --gpu vulkan` command,
calling `getLlama("lastBuild")` will return the binary you built with Vulkan,
while calling `getLlama()` will return a binding from a pre-built binary with CUDA,
since CUDA is preferable on systems that support it.

For example, if your machine supports CUDA, and you run the `source download --gpu cuda` command,
calling `getLlama("lastBuild")` will return the binary you built with CUDA,
and calling `getLlama()` will also return that same binary you built with CUDA.

You should prefer to use `getLlama()` without `"lastBuild"` unless you have a specific reason to use the last build.

### Parameters

| Parameter | Type |
| ------ | ------ |
| `options`? | [`LlamaOptions`](../type-aliases/LlamaOptions.md) |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`Llama`](../classes/Llama.md)&gt;

### Defined in

[bindings/getLlama.ts:271](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/getLlama.ts#L271)

## getLlama(type, lastBuildOptions)

```ts
function getLlama(type: "lastBuild", lastBuildOptions?: LastBuildOptions): Promise<Llama>
```

### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | `"lastBuild"` |
| `lastBuildOptions`? | [`LastBuildOptions`](../type-aliases/LastBuildOptions.md) |

### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`Llama`](../classes/Llama.md)&gt;

### Defined in

[bindings/getLlama.ts:272](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/getLlama.ts#L272)
