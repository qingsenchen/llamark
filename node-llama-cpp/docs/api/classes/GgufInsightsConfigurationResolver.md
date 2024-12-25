# Class: GgufInsightsConfigurationResolver

## Accessors

### ggufInsights

```ts
get ggufInsights(): GgufInsights
```

#### Returns

[`GgufInsights`](GgufInsights.md)

#### Defined in

[gguf/insights/GgufInsightsConfigurationResolver.ts:23](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsightsConfigurationResolver.ts#L23)

## Methods

### resolveAndScoreConfig()

```ts
resolveAndScoreConfig(options: {
  targetGpuLayers: number | "max";
  targetContextSize: number;
  embeddingContext: false;
  flashAttention: false;
 }, hardwareOverrides: {
  getVramState: Promise<{
     total: number;
     free: number;
     unifiedSize: number;
    }>;
  getRamState: Promise<{
     total: number;
     free: number;
    }>;
  getSwapState: Promise<{
     total: number;
     free: number;
    }>;
  llamaVramPaddingSize: number;
  llamaGpu: false | "cuda" | "vulkan" | "metal";
  llamaSupportsGpuOffloading: boolean;
 }): Promise<{
  compatibilityScore: number;
  bonusScore: number;
  totalScore: number;
  resolvedValues: {
     gpuLayers: number;
     contextSize: number;
     modelRamUsage: number;
     contextRamUsage: number;
     totalRamUsage: number;
     modelVramUsage: number;
     contextVramUsage: number;
     totalVramUsage: number;
    };
 }>
```

Resolve the best configuration for loading a model and creating a context using the current hardware.

Specifying a `targetGpuLayers` and/or `targetContextSize` will ensure the resolved configuration matches those values,
but note it can lower the compatibility score if the hardware doesn't support it.

Overriding hardware values it possible by configuring `hardwareOverrides`.

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | `object` |  |
| `options.targetGpuLayers`? | `number` \| `"max"` | - |
| `options.targetContextSize`? | `number` | - |
| `options.embeddingContext`? | `boolean` | - |
| `options.flashAttention`? | `boolean` | - |
| `hardwareOverrides` | `object` |  |
| `hardwareOverrides.getVramState`? | - |
| `hardwareOverrides.getRamState`? | - |
| `hardwareOverrides.getSwapState`? | - |
| `hardwareOverrides.llamaVramPaddingSize`? | `number` | - |
| `hardwareOverrides.llamaGpu`? | `false` \| `"cuda"` \| `"vulkan"` \| `"metal"` | - |
| `hardwareOverrides.llamaSupportsGpuOffloading`? | `boolean` | - |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `compatibilityScore`: `number`;
  `bonusScore`: `number`;
  `totalScore`: `number`;
  `resolvedValues`: \{
     `gpuLayers`: `number`;
     `contextSize`: `number`;
     `modelRamUsage`: `number`;
     `contextRamUsage`: `number`;
     `totalRamUsage`: `number`;
     `modelVramUsage`: `number`;
     `contextVramUsage`: `number`;
     `totalVramUsage`: `number`;
    \};
 \}&gt;

##### compatibilityScore

```ts
compatibilityScore: number;
```

A number between `0` (inclusive) and `1` (inclusive) representing the compatibility score.

##### bonusScore

```ts
bonusScore: number;
```

A number starting at `0` with no upper limit representing the bonus score.
For each multiplier of the specified `contextSize` that the resolved context size is larger by, 1 bonus point is given.

##### totalScore

```ts
totalScore: number;
```

The total score, which is the sum of the compatibility and bonus scores.

##### resolvedValues

```ts
resolvedValues: {
  gpuLayers: number;
  contextSize: number;
  modelRamUsage: number;
  contextRamUsage: number;
  totalRamUsage: number;
  modelVramUsage: number;
  contextVramUsage: number;
  totalVramUsage: number;
};
```

The resolved values used to calculate the scores.

##### resolvedValues.gpuLayers

```ts
gpuLayers: number;
```

##### resolvedValues.contextSize

```ts
contextSize: number;
```

##### resolvedValues.modelRamUsage

```ts
modelRamUsage: number;
```

##### resolvedValues.contextRamUsage

```ts
contextRamUsage: number;
```

##### resolvedValues.totalRamUsage

```ts
totalRamUsage: number;
```

##### resolvedValues.modelVramUsage

```ts
modelVramUsage: number;
```

##### resolvedValues.contextVramUsage

```ts
contextVramUsage: number;
```

##### resolvedValues.totalVramUsage

```ts
totalVramUsage: number;
```

#### Defined in

[gguf/insights/GgufInsightsConfigurationResolver.ts:37](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsightsConfigurationResolver.ts#L37)

***

### scoreModelConfigurationCompatibility()

```ts
scoreModelConfigurationCompatibility(__namedParameters: {
  contextSize: number;
  embeddingContext: false;
  flashAttention: false;
  maximumFittedContextSizeMultiplier: 100;
  maximumUnfitConfigurationResourceMultiplier: 100;
  forceStrictContextSize: false;
  forceGpuLayers: number | "max";
 }, __namedParameters: {
  getVramState: Promise<{
     total: number;
     free: number;
     unifiedSize: number;
    }>;
  getRamState: Promise<{
     total: number;
     free: number;
    }>;
  getSwapState: Promise<{
     total: number;
     free: number;
    }>;
  llamaVramPaddingSize: number;
  llamaGpu: false | "cuda" | "vulkan" | "metal";
  llamaSupportsGpuOffloading: boolean;
 }): Promise<{
  compatibilityScore: number;
  bonusScore: number;
  totalScore: number;
  resolvedValues: {
     gpuLayers: number;
     contextSize: number;
     modelRamUsage: number;
     contextRamUsage: number;
     totalRamUsage: number;
     modelVramUsage: number;
     contextVramUsage: number;
     totalVramUsage: number;
    };
 }>
```

Score the compatibility of the model configuration with the current GPU and VRAM state.
Assumes a model is loaded with the default `"auto"` configurations.
Scored based on the following criteria:
- The number of GPU layers that can be offloaded to the GPU (only if there's a GPU. If there's no GPU then by how small the model is)
- Whether all layers can be offloaded to the GPU (gives additional points)
- Whether the resolved context size is at least as large as the specified `contextSize`

If the resolved context size is larger than the specified context size, for each multiplier of the specified `contextSize`
that the resolved context size is larger by, 1 bonus point is given in the `bonusScore`.

`maximumFittedContextSizeMultiplier` is used to improve the proportionality of the bonus score between models.
Set this to any value higher than `<max compared model context size> / contextSize`.
Defaults to `100`.

`maximumUnfitConfigurationResourceMultiplier` is used to improve the proportionality of the bonus score between unfit models.
Set this to any value higher than `<max compared model resource usage> / <total available resources>`.
Defaults to `100`.

`contextSize` defaults to `4096` (if the model train context size is lower than this, the model train context size is used instead).

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | `object` | - |
| `__namedParameters.contextSize`? | `number` | - |
| `__namedParameters.embeddingContext`? | `boolean` | - |
| `__namedParameters.flashAttention`? | `boolean` | - |
| `__namedParameters.maximumFittedContextSizeMultiplier`? | `number` | - |
| `__namedParameters.maximumUnfitConfigurationResourceMultiplier`? | `number` | - |
| `__namedParameters.forceStrictContextSize`? | `boolean` | Do not resolve a context size larger than the specified `contextSize`. Defaults to `false`. |
| `__namedParameters.forceGpuLayers`? | `number` \| `"max"` | - |
| `__namedParameters` | `object` | - |
| `__namedParameters.getVramState`? | - |
| `__namedParameters.getRamState`? | - |
| `__namedParameters.getSwapState`? | - |
| `__namedParameters.llamaVramPaddingSize`? | `number` | - |
| `__namedParameters.llamaGpu`? | `false` \| `"cuda"` \| `"vulkan"` \| `"metal"` | - |
| `__namedParameters.llamaSupportsGpuOffloading`? | `boolean` | - |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `compatibilityScore`: `number`;
  `bonusScore`: `number`;
  `totalScore`: `number`;
  `resolvedValues`: \{
     `gpuLayers`: `number`;
     `contextSize`: `number`;
     `modelRamUsage`: `number`;
     `contextRamUsage`: `number`;
     `totalRamUsage`: `number`;
     `modelVramUsage`: `number`;
     `contextVramUsage`: `number`;
     `totalVramUsage`: `number`;
    \};
 \}&gt;

##### compatibilityScore

```ts
compatibilityScore: number;
```

A number between `0` (inclusive) and `1` (inclusive) representing the compatibility score.

##### bonusScore

```ts
bonusScore: number;
```

A number starting at `0` with no upper limit representing the bonus score.
For each multiplier of the specified `contextSize` that the resolved context size is larger by, 1 bonus point is given.

##### totalScore

```ts
totalScore: number;
```

The total score, which is the sum of the compatibility and bonus scores.

##### resolvedValues

```ts
resolvedValues: {
  gpuLayers: number;
  contextSize: number;
  modelRamUsage: number;
  contextRamUsage: number;
  totalRamUsage: number;
  modelVramUsage: number;
  contextVramUsage: number;
  totalVramUsage: number;
};
```

The resolved values used to calculate the scores.

##### resolvedValues.gpuLayers

```ts
gpuLayers: number;
```

##### resolvedValues.contextSize

```ts
contextSize: number;
```

##### resolvedValues.modelRamUsage

```ts
modelRamUsage: number;
```

##### resolvedValues.contextRamUsage

```ts
contextRamUsage: number;
```

##### resolvedValues.totalRamUsage

```ts
totalRamUsage: number;
```

##### resolvedValues.modelVramUsage

```ts
modelVramUsage: number;
```

##### resolvedValues.contextVramUsage

```ts
contextVramUsage: number;
```

##### resolvedValues.totalVramUsage

```ts
totalVramUsage: number;
```

#### Defined in

[gguf/insights/GgufInsightsConfigurationResolver.ts:101](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsightsConfigurationResolver.ts#L101)

***

### resolveModelGpuLayers()

```ts
resolveModelGpuLayers(gpuLayers?: number | "auto" | "max" | {
  min: number;
  max: number;
  fitContext: {
     contextSize: number;
     embeddingContext: boolean;
    };
 }, __namedParameters?: {
  ignoreMemorySafetyChecks: false;
  getVramState: Promise<{
     total: number;
     free: number;
    }>;
  llamaVramPaddingSize: number;
  llamaGpu: false | "cuda" | "vulkan" | "metal";
  llamaSupportsGpuOffloading: boolean;
  defaultContextFlashAttention: false;
 }): Promise<number>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `gpuLayers`? | `number` \| `"auto"` \| `"max"` \| \{ `min`: `number`; `max`: `number`; `fitContext`: \{ `contextSize`: `number`; `embeddingContext`: `boolean`; \}; \} |
| `__namedParameters`? | `object` |
| `__namedParameters.ignoreMemorySafetyChecks`? | `boolean` |
| `__namedParameters.getVramState`? |
| `__namedParameters.llamaVramPaddingSize`? | `number` |
| `__namedParameters.llamaGpu`? | `false` \| `"cuda"` \| `"vulkan"` \| `"metal"` |
| `__namedParameters.llamaSupportsGpuOffloading`? | `boolean` |
| `__namedParameters.defaultContextFlashAttention`? | `boolean` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`number`&gt;

#### Defined in

[gguf/insights/GgufInsightsConfigurationResolver.ts:361](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsightsConfigurationResolver.ts#L361)

***

### resolveContextContextSize()

```ts
resolveContextContextSize(contextSize: undefined | number | "auto" | {
  min: number;
  max: number;
 }, __namedParameters: {
  modelGpuLayers: number;
  modelTrainContextSize: number;
  flashAttention: false;
  batchSize: number;
  sequences: number;
  getVramState: Promise<{
     total: number;
     free: number;
     unifiedSize: number;
    }>;
  getRamState: Promise<{
     total: number;
     free: number;
    }>;
  getSwapState: Promise<{
     total: number;
     free: number;
    }>;
  llamaGpu: false | "cuda" | "vulkan" | "metal";
  ignoreMemorySafetyChecks: false;
  isEmbeddingContext: false;
 }): Promise<number>
```

Resolve a context size option for the given options and constraints.

If there's no context size that can fit the available resources, an `InsufficientMemoryError` is thrown.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `contextSize` | `undefined` \| `number` \| `"auto"` \| \{ `min`: `number`; `max`: `number`; \} |
| `__namedParameters` | `object` |
| `__namedParameters.modelGpuLayers` | `number` |
| `__namedParameters.modelTrainContextSize` | `number` |
| `__namedParameters.flashAttention`? | `boolean` |
| `__namedParameters.batchSize`? | `number` |
| `__namedParameters.sequences`? | `number` |
| `__namedParameters.getVramState`? |
| `__namedParameters.getRamState`? |
| `__namedParameters.getSwapState`? |
| `__namedParameters.llamaGpu`? | `false` \| `"cuda"` \| `"vulkan"` \| `"metal"` |
| `__namedParameters.ignoreMemorySafetyChecks`? | `boolean` |
| `__namedParameters.isEmbeddingContext`? | `boolean` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`number`&gt;

#### Defined in

[gguf/insights/GgufInsightsConfigurationResolver.ts:387](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/insights/GgufInsightsConfigurationResolver.ts#L387)
