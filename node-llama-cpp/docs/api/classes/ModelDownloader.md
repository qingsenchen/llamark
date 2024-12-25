# Class: ModelDownloader

## Accessors

### entrypointFilename

```ts
get entrypointFilename(): string
```

The filename of the entrypoint file that should be used to load the model.

#### Returns

`string`

#### Defined in

[utils/createModelDownloader.ts:238](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L238)

***

### entrypointFilePath

```ts
get entrypointFilePath(): string
```

The full path to the entrypoint file that should be used to load the model.

#### Returns

`string`

#### Defined in

[utils/createModelDownloader.ts:245](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L245)

***

### splitBinaryParts

```ts
get splitBinaryParts(): undefined | number
```

If the model is binary spliced from multiple parts, this will return the number of those binary parts.

#### Returns

`undefined` \| `number`

#### Defined in

[utils/createModelDownloader.ts:252](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L252)

***

### totalFiles

```ts
get totalFiles(): number
```

The total number of files that will be saved to the directory.
For split files, this will be the number of split parts, as multiple files will be saved.
For binary-split files, this will be 1, as the parts will be spliced into a single file.

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:261](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L261)

***

### totalSize

```ts
get totalSize(): number
```

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:265](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L265)

***

### downloadedSize

```ts
get downloadedSize(): number
```

#### Returns

`number`

#### Defined in

[utils/createModelDownloader.ts:271](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L271)

## Methods

### download()

```ts
download(__namedParameters: {
  signal: AbortSignal;
 }): Promise<string>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.signal`? | `AbortSignal` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

The path to the entrypoint file that should be used to load the model

#### Defined in

[utils/createModelDownloader.ts:280](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L280)

***

### cancel()

```ts
cancel(__namedParameters: {
  deleteTempFile: boolean;
 }): Promise<void>
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `__namedParameters` | `object` | - |
| `__namedParameters.deleteTempFile`? | `boolean` | Delete the temporary file that was created during the download. Defaults to the value of `deleteTempFileOnCancel` in the constructor. |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[utils/createModelDownloader.ts:317](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L317)
