# Class: CombinedModelDownloader

## Constructors

### new CombinedModelDownloader()

```ts
new CombinedModelDownloader(downloaders: ModelDownloader[], options?: CombinedModelDownloaderOptions): CombinedModelDownloader
```

When combining `ModelDownloader` instances, the following options on each individual `ModelDownloader` are ignored:
- `showCliProgress`
- `onProgress`
- `parallelDownloads`

To set any of those options for the combined downloader, you have to pass them to the combined downloader instance

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `downloaders` | [`ModelDownloader`](ModelDownloader.md)[] |
| `options`? | [`CombinedModelDownloaderOptions`](../type-aliases/CombinedModelDownloaderOptions.md) |

#### Returns

[`CombinedModelDownloader`](CombinedModelDownloader.md)

#### Defined in

[utils/createModelDownloader.ts:475](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L475)

## Accessors

### modelDownloaders

```ts
get modelDownloaders(): readonly ModelDownloader[]
```

#### Returns

readonly [`ModelDownloader`](ModelDownloader.md)[]

#### Defined in

[utils/createModelDownloader.ts:546](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L546)

***

### entrypointFilenames

```ts
get entrypointFilenames(): string[]
```

The filename of the entrypoint files that should be used to load the models.

#### Returns

`string`[]

#### Defined in

[utils/createModelDownloader.ts:553](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L553)

***

### entrypointFilePaths

```ts
get entrypointFilePaths(): string[]
```

The full paths to the entrypoint files that should be used to load the models.

#### Returns

`string`[]

#### Defined in

[utils/createModelDownloader.ts:560](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L560)

***

### totalFiles

```ts
get totalFiles(): number
```

The accumulation of `totalFiles` of all the model downloaders

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:567](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L567)

***

### totalSize

```ts
get totalSize(): number
```

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:573](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L573)

***

### downloadedSize

```ts
get downloadedSize(): number
```

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:579](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L579)

## Methods

### cancel()

```ts
cancel(): Promise<void>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[utils/createModelDownloader.ts:490](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L490)

***

### download()

```ts
download(__namedParameters: {
  signal: AbortSignal;
 }): Promise<string[]>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.signal`? | `AbortSignal` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`[]&gt;

The paths to the entrypoint files that should be used to load the models

#### Defined in

[utils/createModelDownloader.ts:509](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L509)
