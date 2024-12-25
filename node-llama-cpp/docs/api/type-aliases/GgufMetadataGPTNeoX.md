# Type Alias: GgufMetadataGPTNeoX

```ts
type GgufMetadataGPTNeoX: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  use_parallel_residual: boolean;
  rope: {
     dimension_count: number;
     scale: number;
    };
  attention: {
     head_count: number;
     layer_norm_epsilon: number;
    };
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

### use\_parallel\_residual

```ts
readonly use_parallel_residual: boolean;
```

### rope

```ts
readonly rope: {
  dimension_count: number;
  scale: number;
};
```

### rope.dimension\_count

```ts
readonly dimension_count: number;
```

### rope.scale?

```ts
readonly optional scale: number;
```

### attention

```ts
readonly attention: {
  head_count: number;
  layer_norm_epsilon: number;
};
```

### attention.head\_count

```ts
readonly head_count: number;
```

### attention.layer\_norm\_epsilon

```ts
readonly layer_norm_epsilon: number;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:379](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L379)
