# Type Alias: GgufMetadataDefaultArchitectureType

```ts
type GgufMetadataDefaultArchitectureType: {
  vocab_size: number;
  context_length: number;
  embedding_length: number;
  block_count: number;
  feed_forward_length: number;
  use_parallel_residual: boolean;
  tensor_data_layout: string;
  expert_count: number;
  expert_used_count: number;
  pooling_type: GgufMetadataArchitecturePoolingType;
  logit_scale: number;
  attention: {
     head_count: number;
     head_count_kv: number;
     max_alibi_bias: number;
     clamp_kqv: number;
     layer_norm_epsilon: number;
     layer_norm_rms_epsilon: number;
     key_length: number;
     value_length: number;
     causal: boolean;
    };
  rope: {
     dimension_count: number;
     freq_base: number;
     scale_linear: number;
     scaling: {
        type: "none" | "linear" | "yarn" | string;
        factor: number;
        original_context_length: number;
        finetuned: boolean;
       };
    };
  ssm: {
     conv_kernel: number;
     inner_size: number;
     state_size: number;
     time_step_rank: number;
    };
};
```

## Type declaration

### vocab\_size?

```ts
readonly optional vocab_size: number;
```

### context\_length?

```ts
readonly optional context_length: number;
```

### embedding\_length?

```ts
readonly optional embedding_length: number;
```

### block\_count?

```ts
readonly optional block_count: number;
```

### feed\_forward\_length?

```ts
readonly optional feed_forward_length: number;
```

### use\_parallel\_residual?

```ts
readonly optional use_parallel_residual: boolean;
```

### tensor\_data\_layout?

```ts
readonly optional tensor_data_layout: string;
```

### expert\_count?

```ts
readonly optional expert_count: number;
```

### expert\_used\_count?

```ts
readonly optional expert_used_count: number;
```

### pooling\_type?

```ts
readonly optional pooling_type: GgufMetadataArchitecturePoolingType;
```

### logit\_scale?

```ts
readonly optional logit_scale: number;
```

### attention?

```ts
readonly optional attention: {
  head_count: number;
  head_count_kv: number;
  max_alibi_bias: number;
  clamp_kqv: number;
  layer_norm_epsilon: number;
  layer_norm_rms_epsilon: number;
  key_length: number;
  value_length: number;
  causal: boolean;
};
```

### attention.head\_count?

```ts
readonly optional head_count: number;
```

### attention.head\_count\_kv?

```ts
readonly optional head_count_kv: number;
```

### attention.max\_alibi\_bias?

```ts
readonly optional max_alibi_bias: number;
```

### attention.clamp\_kqv?

```ts
readonly optional clamp_kqv: number;
```

### attention.layer\_norm\_epsilon?

```ts
readonly optional layer_norm_epsilon: number;
```

### attention.layer\_norm\_rms\_epsilon?

```ts
readonly optional layer_norm_rms_epsilon: number;
```

### attention.key\_length?

```ts
readonly optional key_length: number;
```

### attention.value\_length?

```ts
readonly optional value_length: number;
```

### attention.causal?

```ts
readonly optional causal: boolean;
```

### rope?

```ts
readonly optional rope: {
  dimension_count: number;
  freq_base: number;
  scale_linear: number;
  scaling: {
     type: "none" | "linear" | "yarn" | string;
     factor: number;
     original_context_length: number;
     finetuned: boolean;
    };
};
```

### rope.dimension\_count?

```ts
readonly optional dimension_count: number;
```

### rope.freq\_base?

```ts
readonly optional freq_base: number;
```

### rope.scale\_linear?

```ts
readonly optional scale_linear: number;
```

### rope.scaling?

```ts
readonly optional scaling: {
  type: "none" | "linear" | "yarn" | string;
  factor: number;
  original_context_length: number;
  finetuned: boolean;
};
```

### rope.scaling.type?

```ts
readonly optional type: "none" | "linear" | "yarn" | string;
```

### rope.scaling.factor?

```ts
readonly optional factor: number;
```

### rope.scaling.original\_context\_length?

```ts
readonly optional original_context_length: number;
```

### rope.scaling.finetuned?

```ts
readonly optional finetuned: boolean;
```

### ssm?

```ts
readonly optional ssm: {
  conv_kernel: number;
  inner_size: number;
  state_size: number;
  time_step_rank: number;
};
```

### ssm.conv\_kernel?

```ts
readonly optional conv_kernel: number;
```

### ssm.inner\_size?

```ts
readonly optional inner_size: number;
```

### ssm.state\_size?

```ts
readonly optional state_size: number;
```

### ssm.time\_step\_rank?

```ts
readonly optional time_step_rank: number;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:259](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L259)
