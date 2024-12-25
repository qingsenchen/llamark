# Type Alias: GgufMetadataMamba

```ts
type GgufMetadataMamba: {
  context_length: number;
  embedding_length: number;
  block_count: number;
  ssm: {
     conv_kernel: number;
     inner_size: number;
     state_size: number;
     time_step_rank: number;
    };
  attention: {
     layer_norm_rms_epsilon: number;
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

### ssm

```ts
readonly ssm: {
  conv_kernel: number;
  inner_size: number;
  state_size: number;
  time_step_rank: number;
};
```

### ssm.conv\_kernel

```ts
readonly conv_kernel: number;
```

### ssm.inner\_size

```ts
readonly inner_size: number;
```

### ssm.state\_size

```ts
readonly state_size: number;
```

### ssm.time\_step\_rank

```ts
readonly time_step_rank: number;
```

### attention

```ts
readonly attention: {
  layer_norm_rms_epsilon: number;
};
```

### attention.layer\_norm\_rms\_epsilon

```ts
readonly layer_norm_rms_epsilon: number;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:448](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L448)
