# Type Alias: GgufMetadataTokenizer

```ts
type GgufMetadataTokenizer: {
  ggml: {
     model:   | "no_vocab"
        | "llama"
        | "gpt2"
        | "bert"
        | string;
     pre:   | "default"
        | "llama3"
        | "llama-v3"
        | "llama-bpe"
        | "deepseek-llm"
        | "deepseek-coder"
        | "falcon"
        | "mpt"
        | "starcoder"
        | "gpt-2"
        | "jina-es"
        | "jina-de"
        | "jina-v2-es"
        | "jina-v2-de"
        | "refact"
        | "command-r"
        | "qwen2"
        | "stablelm2"
        | "olmo"
        | "dbrx"
        | "smaug-bpe"
        | string;
     tokens: readonly string[];
     token_type: GgufMetadataTokenizerTokenType[];
     token_type_count: number;
     scores: readonly number[];
     merges: readonly string[];
     bos_token_id: number;
     eos_token_id: number;
     unknown_token_id: number;
     separator_token_id: number;
     padding_token_id: number;
     add_bos_token: boolean;
     add_eos_token: boolean;
     add_space_prefix: boolean;
     added_tokens: readonly string[];
     prefix_token_id: number;
     suffix_token_id: number;
     middle_token_id: number;
     eot_token_id: number;
    };
  huggingface: {
     json: string;
    };
  chat_template: string;
};
```

## Type declaration

### ggml

```ts
readonly ggml: {
  model:   | "no_vocab"
     | "llama"
     | "gpt2"
     | "bert"
     | string;
  pre:   | "default"
     | "llama3"
     | "llama-v3"
     | "llama-bpe"
     | "deepseek-llm"
     | "deepseek-coder"
     | "falcon"
     | "mpt"
     | "starcoder"
     | "gpt-2"
     | "jina-es"
     | "jina-de"
     | "jina-v2-es"
     | "jina-v2-de"
     | "refact"
     | "command-r"
     | "qwen2"
     | "stablelm2"
     | "olmo"
     | "dbrx"
     | "smaug-bpe"
     | string;
  tokens: readonly string[];
  token_type: GgufMetadataTokenizerTokenType[];
  token_type_count: number;
  scores: readonly number[];
  merges: readonly string[];
  bos_token_id: number;
  eos_token_id: number;
  unknown_token_id: number;
  separator_token_id: number;
  padding_token_id: number;
  add_bos_token: boolean;
  add_eos_token: boolean;
  add_space_prefix: boolean;
  added_tokens: readonly string[];
  prefix_token_id: number;
  suffix_token_id: number;
  middle_token_id: number;
  eot_token_id: number;
};
```

### ggml.model

```ts
readonly model: 
  | "no_vocab"
  | "llama"
  | "gpt2"
  | "bert"
  | string;
```

### ggml.pre?

```ts
readonly optional pre: 
  | "default"
  | "llama3"
  | "llama-v3"
  | "llama-bpe"
  | "deepseek-llm"
  | "deepseek-coder"
  | "falcon"
  | "mpt"
  | "starcoder"
  | "gpt-2"
  | "jina-es"
  | "jina-de"
  | "jina-v2-es"
  | "jina-v2-de"
  | "refact"
  | "command-r"
  | "qwen2"
  | "stablelm2"
  | "olmo"
  | "dbrx"
  | "smaug-bpe"
  | string;
```

### ggml.tokens

```ts
readonly tokens: readonly string[];
```

### ggml.token\_type

```ts
readonly token_type: GgufMetadataTokenizerTokenType[];
```

### ggml.token\_type\_count?

```ts
readonly optional token_type_count: number;
```

### ggml.scores?

```ts
readonly optional scores: readonly number[];
```

### ggml.merges?

```ts
readonly optional merges: readonly string[];
```

### ggml.bos\_token\_id?

```ts
readonly optional bos_token_id: number;
```

### ggml.eos\_token\_id?

```ts
readonly optional eos_token_id: number;
```

### ggml.unknown\_token\_id?

```ts
readonly optional unknown_token_id: number;
```

### ggml.separator\_token\_id?

```ts
readonly optional separator_token_id: number;
```

### ggml.padding\_token\_id?

```ts
readonly optional padding_token_id: number;
```

### ggml.add\_bos\_token?

```ts
readonly optional add_bos_token: boolean;
```

### ggml.add\_eos\_token?

```ts
readonly optional add_eos_token: boolean;
```

### ggml.add\_space\_prefix?

```ts
readonly optional add_space_prefix: boolean;
```

### ggml.added\_tokens?

```ts
readonly optional added_tokens: readonly string[];
```

### ggml.prefix\_token\_id?

```ts
readonly optional prefix_token_id: number;
```

### ggml.suffix\_token\_id?

```ts
readonly optional suffix_token_id: number;
```

### ggml.middle\_token\_id?

```ts
readonly optional middle_token_id: number;
```

### ggml.eot\_token\_id?

```ts
readonly optional eot_token_id: number;
```

### huggingface?

```ts
readonly optional huggingface: {
  json: string;
};
```

### huggingface.json?

```ts
readonly optional json: string;
```

### chat\_template?

```ts
readonly optional chat_template: string;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:220](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L220)
