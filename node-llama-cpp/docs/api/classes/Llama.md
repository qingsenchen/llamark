# Class: Llama

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[bindings/Llama.ts:65](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L65)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[bindings/Llama.ts:149](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L149)

***

### classes

```ts
get classes(): LlamaClasses
```

#### Returns

[`LlamaClasses`](../type-aliases/LlamaClasses.md)

#### Defined in

[bindings/Llama.ts:153](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L153)

***

### gpu

```ts
get gpu(): LlamaGpuType
```

#### Returns

[`LlamaGpuType`](../type-aliases/LlamaGpuType.md)

#### Defined in

[bindings/Llama.ts:160](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L160)

***

### supportsGpuOffloading

```ts
get supportsGpuOffloading(): boolean
```

#### Returns

`boolean`

#### Defined in

[bindings/Llama.ts:164](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L164)

***

### supportsMmap

```ts
get supportsMmap(): boolean
```

#### Returns

`boolean`

#### Defined in

[bindings/Llama.ts:168](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L168)

***

### supportsMlock

```ts
get supportsMlock(): boolean
```

#### Returns

`boolean`

#### Defined in

[bindings/Llama.ts:172](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L172)

***

### cpuMathCores

```ts
get cpuMathCores(): number
```

The number of CPU cores that are useful for math

#### Returns

`number`

#### Defined in

[bindings/Llama.ts:177](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L177)

***

### maxThreads

```ts
get maxThreads(): number
```

The maximum number of threads that can be used by the Llama instance.

If set to `0`, the Llama instance will have no limit on the number of threads.

See the `maxThreads` option of `getLlama` for more information.

```ts
set maxThreads(value: number): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `number` |

#### Returns

`number`

#### Defined in

[bindings/Llama.ts:188](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L188)

***

### logLevel

```ts
get logLevel(): LlamaLogLevel
```

```ts
set logLevel(value: LlamaLogLevel): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | [`LlamaLogLevel`](../enumerations/LlamaLogLevel.md) |

#### Returns

[`LlamaLogLevel`](../enumerations/LlamaLogLevel.md)

#### Defined in

[bindings/Llama.ts:196](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L196)

***

### logger

```ts
get logger(): (level: LlamaLogLevel, message: string) => void
```

```ts
set logger(value: (level: LlamaLogLevel, message: string) => void): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | (`level`: [`LlamaLogLevel`](../enumerations/LlamaLogLevel.md), `message`: `string`) => `void` |

#### Returns

`Function`

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | [`LlamaLogLevel`](../enumerations/LlamaLogLevel.md) |
| `message` | `string` |

##### Returns

`void`

#### Defined in

[bindings/Llama.ts:210](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L210)

***

### buildType

```ts
get buildType(): "localBuild" | "prebuilt"
```

#### Returns

`"localBuild"` \| `"prebuilt"`

#### Defined in

[bindings/Llama.ts:221](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L221)

***

### cmakeOptions

```ts
get cmakeOptions(): Readonly<Record<string, string>>
```

#### Returns

[`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)&lt;[`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)&lt;`string`, `string`&gt;&gt;

#### Defined in

[bindings/Llama.ts:225](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L225)

***

### llamaCppRelease

```ts
get llamaCppRelease(): {
  repo: string;
  release: string;
}
```

#### Returns

```ts
{
  repo: string;
  release: string;
}
```

##### repo

```ts
readonly repo: string;
```

##### release

```ts
readonly release: string;
```

#### Defined in

[bindings/Llama.ts:229](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L229)

***

### systemInfo

```ts
get systemInfo(): string
```

#### Returns

`string`

#### Defined in

[bindings/Llama.ts:233](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L233)

***

### vramPaddingSize

```ts
get vramPaddingSize(): number
```

VRAM padding used for memory size calculations, as these calculations are not always accurate.
This is set by default to ensure stability, but can be configured when you call `getLlama`.

See `vramPadding` on `getLlama` for more information.

#### Returns

`number`

#### Defined in

[bindings/Llama.ts:245](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L245)

## Methods

### dispose()

```ts
dispose(): Promise<void>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[bindings/Llama.ts:134](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L134)

***

### getVramState()

```ts
getVramState(): Promise<{
  total: number;
  used: number;
  free: number;
  unifiedSize: number;
 }>
```

The total amount of VRAM that is currently being used.

`unifiedSize` represents the amount of VRAM that is shared between the CPU and GPU.
On SoC devices, this is usually the same as `total`.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `total`: `number`;
  `used`: `number`;
  `free`: `number`;
  `unifiedSize`: `number`;
 \}&gt;

##### total

```ts
total: number;
```

##### used

```ts
used: number;
```

##### free

```ts
free: number;
```

##### unifiedSize

```ts
unifiedSize: number;
```

#### Defined in

[bindings/Llama.ts:255](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L255)

***

### getSwapState()

```ts
getSwapState(): Promise<{
  maxSize: number;
  allocated: number;
  used: number;
 }>
```

Get the state of the swap memory.

**`maxSize`** - The maximum size of the swap memory that the system can allocate.
If the swap size is dynamic (like on macOS), this will be `Infinity`.

**`allocated`** - The total size allocated by the system for swap memory.

**`used`** - The amount of swap memory that is currently being used from the `allocated` size.

On Windows, this will return the info for the page file.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;\{
  `maxSize`: `number`;
  `allocated`: `number`;
  `used`: `number`;
 \}&gt;

##### maxSize

```ts
maxSize: number;
```

The maximum size of the swap memory that the system can allocate.
If the swap size is dynamic (like on macOS), this will be `Infinity`

##### allocated

```ts
allocated: number;
```

The total size allocated by the system for swap memory

##### used

```ts
used: number;
```

The amount of swap memory that is currently being used from the `allocated` size

#### Defined in

[bindings/Llama.ts:280](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L280)

***

### getGpuDeviceNames()

```ts
getGpuDeviceNames(): Promise<string[]>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`[]&gt;

#### Defined in

[bindings/Llama.ts:306](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L306)

***

### loadModel()

```ts
loadModel(options: LlamaModelOptions): Promise<LlamaModel>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaModelOptions`](../type-aliases/LlamaModelOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaModel`](LlamaModel.md)&gt;

#### Defined in

[bindings/Llama.ts:314](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L314)

***

### createGrammarForJsonSchema()

```ts
createGrammarForJsonSchema<T>(schema: T): Promise<LlamaJsonSchemaGrammar<T>>
```

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`Readonly`](https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype)&lt;[`GbnfJsonSchema`](../type-aliases/GbnfJsonSchema.md)&gt; |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `schema` | `T` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaJsonSchemaGrammar`](LlamaJsonSchemaGrammar.md)&lt;`T`&gt;&gt;

#### Defined in

[bindings/Llama.ts:329](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L329)

***

### getGrammarFor()

```ts
getGrammarFor(type: 
  | "json"
  | "json_arr"
  | "list"
  | "c"
  | "arithmetic"
  | "japanese"
  | "chess"): Promise<LlamaGrammar>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `type` | \| `"json"` \| `"json_arr"` \| `"list"` \| `"c"` \| `"arithmetic"` \| `"japanese"` \| `"chess"` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaGrammar`](LlamaGrammar.md)&gt;

#### Defined in

[bindings/Llama.ts:333](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L333)

***

### createGrammar()

```ts
createGrammar(options: LlamaGrammarOptions): Promise<LlamaGrammar>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaGrammarOptions`](../type-aliases/LlamaGrammarOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaGrammar`](LlamaGrammar.md)&gt;

#### Defined in

[bindings/Llama.ts:337](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L337)

***

### defaultConsoleLogger()

```ts
static defaultConsoleLogger(level: LlamaLogLevel, message: string): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `level` | [`LlamaLogLevel`](../enumerations/LlamaLogLevel.md) |
| `message` | `string` |

#### Returns

`void`

#### Defined in

[bindings/Llama.ts:533](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/bindings/Llama.ts#L533)
