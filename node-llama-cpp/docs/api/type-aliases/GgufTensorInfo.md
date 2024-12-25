# Type Alias: GgufTensorInfo

```ts
type GgufTensorInfo: {
  name: string;
  dimensions: readonly (number | bigint)[];
  ggmlType: GgmlType;
  offset: number | bigint;
};
```

## Type declaration

### name

```ts
readonly name: string;
```

### dimensions

```ts
readonly dimensions: readonly (number | bigint)[];
```

### ggmlType

```ts
readonly ggmlType: GgmlType;
```

### offset

```ts
readonly offset: number | bigint;
```

## Defined in

[gguf/types/GgufTensorInfoTypes.ts:1](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufTensorInfoTypes.ts#L1)
