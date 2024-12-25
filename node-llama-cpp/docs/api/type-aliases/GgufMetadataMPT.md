# Type Alias: GgufMetadataMPT

```ts
type GgufMetadataMPT: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  attention: {
     head_count: number;
     alibi_bias_max: number;
     clip_kqv: number;
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

### attention

```ts
readonly attention: {
  head_count: number;
  alibi_bias_max: number;
  clip_kqv: number;
  layer_norm_epsilon: number;
};
```

### attention.head\_count

```ts
readonly head_count: number;
```

### attention.alibi\_bias\_max

```ts
readonly alibi_bias_max: number;
```

### attention.clip\_kqv

```ts
readonly clip_kqv: number;
```

### attention.layer\_norm\_epsilon

```ts
readonly layer_norm_epsilon: number;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:366](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L366)
