# Type Alias: CombinedModelDownloaderOptions

```ts
type CombinedModelDownloaderOptions: {
  showCliProgress: boolean;
  onProgress: (status: {
     totalSize: number;
     downloadedSize: number;
    }) => void;
  parallelDownloads: number;
};
```

## Type declaration

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

### parallelDownloads?

```ts
optional parallelDownloads: number;
```

The number of parallel downloads to use fo files.

Defaults to `4`.

## Defined in

[utils/createModelDownloader.ts:443](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L443)
