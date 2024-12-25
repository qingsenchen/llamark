# Type Alias: ResolveModelFileOptions

```ts
type ResolveModelFileOptions: {
  directory: string;
  download: "auto" | false;
  verify: boolean;
  fileName: string;
  headers: Record<string, string>;
  cli: boolean;
  onProgress: (status: {
     totalSize: number;
     downloadedSize: number;
    }) => void;
  deleteTempFileOnCancel: boolean;
  parallel: number;
  tokens: ModelFileAccessTokens;
  signal: AbortSignal;
};
```

## Type declaration

### directory?

```ts
optional directory: string;
```

The directory to resolve models from, and download models to.

Default to `node-llama-cpp`'s default global models directory (`~/.node-llama-cpp/models`).

### download?

```ts
optional download: "auto" | false;
```

When downloading a model file, whether to download the file if it doesn't exist.

- `"auto"`: Download the file if it doesn't exist
- `false`: Don't download the file if it doesn't exist. Implies `verify: false` even if `verify` is set to `true`.

Defaults to `"auto"`.

### verify?

```ts
optional verify: boolean;
```

When an existing model file that corresponds to the URI is found,
verify that it matches the expected size of the remote file.

Defaults to `false`.

### fileName?

```ts
optional fileName: string;
```

The name of the file to be resolved.

If provided and existing file is found with the same name, it will be returned.

If provided and no existing file is found with the same name, the file will be downloaded with the provided name.

### headers?

```ts
optional headers: Record<string, string>;
```

Additional headers to use when downloading a model file.

### cli?

```ts
optional cli: boolean;
```

When downloading a model file, show the download progress.

Defaults to `true`.

### onProgress()?

```ts
optional onProgress: (status: {
  totalSize: number;
  downloadedSize: number;
 }) => void;
```

When downloading a model file, called on download progress

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `status` | `object` |
| `status.totalSize` | `number` |
| `status.downloadedSize` | `number` |

#### Returns

`void`

### deleteTempFileOnCancel?

```ts
optional deleteTempFileOnCancel: boolean;
```

If true, the temporary file will be deleted if the download is canceled.

Defaults to `true`.

### parallel?

```ts
optional parallel: number;
```

The number of parallel downloads to use when downloading split files.

Defaults to `4`.

### tokens?

```ts
optional tokens: ModelFileAccessTokens;
```

Tokens to use to access the remote model file when downloading.

### signal?

```ts
optional signal: AbortSignal;
```

The signal to use to cancel a download.

## Defined in

[utils/resolveModelFile.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/resolveModelFile.ts#L11)
