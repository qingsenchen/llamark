# Type Alias: GgufFileInfo

```ts
type GgufFileInfo: {
  version: 2 | 3 | number;
  tensorCount: number | bigint;
  metadata: GgufMetadata;
  metadataSize: number;
  architectureMetadata: MergeOptionalUnionTypes<Exclude<GgufMetadata[GgufArchitectureType], undefined>>;
  tensorInfo: GgufTensorInfo[];
  tensorInfoSize: number;
  splicedParts: number;
  totalTensorCount: number | bigint;
  totalMetadataSize: number;
  fullTensorInfo: GgufTensorInfo[];
  totalTensorInfoSize: number;
};
```

## Type declaration

### version

```ts
readonly version: 2 | 3 | number;
```

### tensorCount

```ts
readonly tensorCount: number | bigint;
```

### metadata

```ts
readonly metadata: GgufMetadata;
```

### metadataSize

```ts
readonly metadataSize: number;
```

### architectureMetadata

```ts
readonly architectureMetadata: MergeOptionalUnionTypes<Exclude<GgufMetadata[GgufArchitectureType], undefined>>;
```

Same value as `metadata[metadata.general.architecture]`, but with merged types for convenience

### tensorInfo?

```ts
readonly optional tensorInfo: GgufTensorInfo[];
```

can be null if `readTensorInfo` is set to `false`

### tensorInfoSize?

```ts
readonly optional tensorInfoSize: number;
```

can be null if `readTensorInfo` is set to `false`

### splicedParts

```ts
readonly splicedParts: number;
```

For spliced metadata of multiple file parts,
this will be the number of files parts read and spliced into this metadata.

Whe no splicing is done, this will be `1`.

### totalTensorCount

```ts
readonly totalTensorCount: number | bigint;
```

For spliced metadata of multiple file parts, this will be the total tensor count from all the parts

When no splicing is done, this will be the same as `tensorCount`.

### totalMetadataSize

```ts
readonly totalMetadataSize: number;
```

For spliced metadata of multiple file parts, this will be the total metadata size from all the parts

When no splicing is done, this will be the same as `metadataSize`.

### fullTensorInfo?

```ts
readonly optional fullTensorInfo: GgufTensorInfo[];
```

For spliced metadata of multiple file parts, this will be the spliced tensorInfo from all the parts.
Can be null if `readTensorInfo` is set to `false`

When no splicing is done, this will be the same as `tensorInfo`.

### totalTensorInfoSize?

```ts
readonly optional totalTensorInfoSize: number;
```

For spliced metadata of multiple file parts, this will be the total tensor info size from all the parts

When no splicing is done, this will be the same as `tensorInfoSize`.

## Defined in

[gguf/types/GgufFileInfoTypes.ts:13](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufFileInfoTypes.ts#L13)
