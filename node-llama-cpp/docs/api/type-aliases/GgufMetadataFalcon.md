# Type Alias: GgufMetadataFalcon

```ts
type GgufMetadataFalcon: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  attention: {
     head_count: number;
     head_count_kv: number;
     use_norm: boolean;
     layer_norm_epsilon: number;
    };
  tensor_data_layout: string;
};
```

## Type declaration

### context\_length

```ts
readonly context_length: number;
```

### embedding\_length

```ts
readonly embedding_length: number;
```

### block\_count

```ts
readonly block_count: number;
```

### attention

```ts
readonly attention: {
  head_count: number;
  head_count_kv: number;
  use_norm: boolean;
  layer_norm_epsilon: number;
};
```

### attention.head\_count

```ts
readonly head_count: number;
```

### attention.head\_count\_kv

```ts
readonly head_count_kv: number;
```

### attention.use\_norm

```ts
readonly use_norm: boolean;
```

### attention.layer\_norm\_epsilon

```ts
readonly layer_norm_epsilon: number;
```

### tensor\_data\_layout?

```ts
readonly optional tensor_data_layout: string;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:434](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L434)
