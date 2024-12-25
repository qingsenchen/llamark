# Type Alias: GgufMetadataLlmLLaMA

```ts
type GgufMetadataLlmLLaMA: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  feed_forward_length: number;
  attention: {
     head_count: number;
     layer_norm_rms_epsilon: number;
     head_count_kv: number;
    };
  rope: {
     dimension_count: number;
     scale: number;
    };
  expert_count: number;
  expert_used_count: number;
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

### feed\_forward\_length

```ts
readonly feed_forward_length: number;
```

### attention

```ts
readonly attention: {
  head_count: number;
  layer_norm_rms_epsilon: number;
  head_count_kv: number;
};
```

### attention.head\_count

```ts
readonly head_count: number;
```

### attention.layer\_norm\_rms\_epsilon

```ts
readonly layer_norm_rms_epsilon: number;
```

### attention.head\_count\_kv?

```ts
readonly optional head_count_kv: number;
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

### expert\_count?

```ts
readonly optional expert_count: number;
```

### expert\_used\_count?

```ts
readonly optional expert_used_count: number;
```

### tensor\_data\_layout?

```ts
readonly optional tensor_data_layout: string;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:346](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L346)
