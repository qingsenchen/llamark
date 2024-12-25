# Type Alias: ChatModelFunctionCall

```ts
type ChatModelFunctionCall: {
  type: "functionCall";
  name: string;
  description: string;
  params: any;
  result: any;
  rawCall: LlamaTextJSON;
  startsNewChunk: boolean;
};
```

## Type declaration

### type

```ts
type: "functionCall";
```

### name

```ts
name: string;
```

### description?

```ts
optional description: string;
```

### params

```ts
params: any;
```

### result

```ts
result: any;
```

### rawCall?

```ts
optional rawCall: LlamaTextJSON;
```

### startsNewChunk?

```ts
optional startsNewChunk: boolean;
```

Whether this function call starts a new function calling chunk.

Relevant only when parallel function calling is supported.

## Defined in

[types.ts:125](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L125)
