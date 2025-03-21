# Class: GgufInsights

## Accessors

### ggufFileInfo

```ts
get ggufFileInfo(): GgufFileInfo
```

#### Returns

[`GgufFileInfo`](../type-aliases/GgufFileInfo.md)

#### Defined in

[gguf/insights/GgufInsights.ts:55](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L55)

***

### configurationResolver

```ts
get configurationResolver(): GgufInsightsConfigurationResolver
```

#### Returns

[`GgufInsightsConfigurationResolver`](GgufInsightsConfigurationResolver.md)

#### Defined in

[gguf/insights/GgufInsights.ts:59](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L59)

***

### trainContextSize

```ts
get trainContextSize(): undefined | number
```

The context size the model was trained on

#### Returns

`undefined` \| `number`

#### Defined in

[gguf/insights/GgufInsights.ts:64](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L64)

***

### embeddingVectorSize

```ts
get embeddingVectorSize(): undefined | number
```

The size of an embedding vector the model can produce

#### Returns

`undefined` \| `number`

#### Defined in

[gguf/insights/GgufInsights.ts:69](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L69)

***

### totalLayers

```ts
get totalLayers(): number
```

#### Returns

`number`

#### Defined in

[gguf/insights/GgufInsights.ts:73](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L73)

***

### modelSize

```ts
get modelSize(): number
```

#### Returns

`number`

#### Defined in

[gguf/insights/GgufInsights.ts:83](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L83)

***

### flashAttentionSupported

```ts
get flashAttentionSupported(): boolean
```

#### Returns

`boolean`

#### Defined in

[gguf/insights/GgufInsights.ts:87](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L87)

***

### isRecurrent

```ts
get isRecurrent(): boolean
```

#### Returns

`boolean`

#### Defined in

[gguf/insights/GgufInsights.ts:107](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L107)

## Methods

### getWarnings()

```ts
getWarnings(modelFilePath?: string): string[]
```

Get warnings about the model file that would affect its usage.

Most of these warnings are also generated by `llama.cpp`

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `modelFilePath`? | `string` |

#### Returns

`string`[]

#### Defined in

[gguf/insights/GgufInsights.ts:35](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L35)

***

### estimateModelResourceRequirements()

```ts
estimateModelResourceRequirements(__namedParameters: {
  gpuLayers: number;
 }): GgufInsightsResourceRequirements
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.gpuLayers` | `number` |

#### Returns

[`GgufInsightsResourceRequirements`](../type-aliases/GgufInsightsResourceRequirements.md)

#### Defined in

[gguf/insights/GgufInsights.ts:117](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L117)

***

### estimateContextResourceRequirements()

```ts
estimateContextResourceRequirements(__namedParameters: {
  contextSize: number;
  modelGpuLayers: number;
  batchSize: number;
  sequences: number;
  isEmbeddingContext: false;
  flashAttention: false;
  includeGraphOverhead: true;
 }): GgufInsightsResourceRequirements
```

Estimates the memory required to create a context of the given parameters based on the implementation details of `llama.cpp`.
The calculation doesn't include a precise estimation of the graph overhead memory, so it uses a rough estimate for that.
The estimation for the graph overhead memory will be improved in the future to be more precise, but it's good enough for now.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.contextSize` | `number` |
| `__namedParameters.modelGpuLayers` | `number` |
| `__namedParameters.batchSize`? | `number` |
| `__namedParameters.sequences`? | `number` |
| `__namedParameters.isEmbeddingContext`? | `boolean` |
| `__namedParameters.flashAttention`? | `boolean` |
| `__namedParameters.includeGraphOverhead`? | `boolean` |

#### Returns

[`GgufInsightsResourceRequirements`](../type-aliases/GgufInsightsResourceRequirements.md)

#### Defined in

[gguf/insights/GgufInsights.ts:131](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L131)

***

### from()

```ts
static from(ggufFileInfo: GgufFileInfo, llama?: Llama): Promise<GgufInsights>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `ggufFileInfo` | [`GgufFileInfo`](../type-aliases/GgufFileInfo.md) |  |
| `llama`? | [`Llama`](Llama.md) | If you already have a `Llama` instance, pass it to reuse it for the `GgufInsights` instance. If you don't pass a `Llama` instance, a basic `Llama` instance is created as a fallback - it's a slim instance that doesn't instantiate a `llama.cpp` backend, so it won't utilize the GPU at all, and be shared with other `GgufInsights` instances that need a fallback `Llama` instance. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`GgufInsights`](GgufInsights.md)&gt;

#### Defined in

[gguf/insights/GgufInsights.ts:446](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsights.ts#L446)
