# Type Alias: ModelDownloaderOptions

```ts
type ModelDownloaderOptions: {
  modelUri: string;
 } | {} & {
  dirPath: string;
  fileName: string;
  headers: Record<string, string>;
  showCliProgress: boolean;
  onProgress: (status: {
     totalSize: number;
     downloadedSize: number;
    }) => void;
  skipExisting: boolean;
  deleteTempFileOnCancel: boolean;
  parallelDownloads: number;
  tokens: ModelFileAccessTokens;
};
```

## Type declaration

### dirPath?

```ts
optional dirPath: string;
```

The directory to save the model file to.
Default to `node-llama-cpp`'s default global models directory (`~/.node-llama-cpp/models`).

### fileName?

```ts
optional fileName: string;
```

### headers?

```ts
optional headers: Record<string, string>;
```

### showCliProgress?

```ts
optional showCliProgress: boolean;
```

Defaults to `false`.

### onProgress()?

```ts
optional onProgress: (status: {
  totalSize: number;
  downloadedSize: number;
 }) => void;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `object` |
| `status.totalSize` | `number` |
| `status.downloadedSize` | `number` |

#### Returns

`void`

### skipExisting?

```ts
optional skipExisting: boolean;
```

If true, the downloader will skip the download if the file already exists, and its size matches the size of the remote file.

Defaults to `true`.

### deleteTempFileOnCancel?

```ts
optional deleteTempFileOnCancel: boolean;
```

If true, the temporary file will be deleted when the download is canceled.

Defaults to `true`.

### parallelDownloads?

```ts
optional parallelDownloads: number;
```

The number of parallel downloads to use when downloading split files.

Defaults to `4`.

### tokens?

```ts
optional tokens: ModelFileAccessTokens;
```

## Defined in

[utils/createModelDownloader.ts:13](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L13)
