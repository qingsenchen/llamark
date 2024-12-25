# Type Alias: GgufMetadata&lt;A&gt;

```ts
type GgufMetadata<A>: {
  general: GgufMetadataGeneral<A>;
  tokenizer: GgufMetadataTokenizer;
 } & GgufArchitectureType extends A ? { readonly [key in GgufArchitectureType]?: key extends keyof GgufMetadataLlmToType ? GgufMetadataLlmToType[key] : GgufMetadataDefaultArchitectureType } : { readonly [key in A]: key extends keyof GgufMetadataLlmToType ? GgufMetadataLlmToType[key] : GgufMetadataDefaultArchitectureType };
```

## Type declaration

### general

```ts
readonly general: GgufMetadataGeneral<A>;
```

### tokenizer

```ts
readonly tokenizer: GgufMetadataTokenizer;
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `A` *extends* [`GgufArchitectureType`](../enumerations/GgufArchitectureType.md) | [`GgufArchitectureType`](../enumerations/GgufArchitectureType.md) |

## Defined in

[gguf/types/GgufMetadataTypes.ts:51](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L51)
