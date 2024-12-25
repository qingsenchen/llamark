# Type Alias: GgufMetadataBloom

```ts
type GgufMetadataBloom: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  feed_forward_length: number;
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

### feed\_forward\_length

```ts
readonly feed_forward_length: number;
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

[gguf/types/GgufMetadataTypes.ts:422](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L422)
