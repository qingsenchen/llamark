# Type Alias: ChatSessionModelFunction&lt;Params&gt;

```ts
type ChatSessionModelFunction<Params>: {
  description: string;
  params: Params;
  handler: (params: GbnfJsonSchemaToType<Params>) => any;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Params` *extends* [`GbnfJsonSchema`](GbnfJsonSchema.md) \| `undefined` | [`GbnfJsonSchema`](GbnfJsonSchema.md) \| `undefined` |

## Type declaration

### description?

```ts
readonly optional description: string;
```

### params?

```ts
readonly optional params: Params;
```

### handler()

```ts
readonly handler: (params: GbnfJsonSchemaToType<Params>) => any;
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `params` | [`GbnfJsonSchemaToType`](GbnfJsonSchemaToType.md)&lt;`Params`&gt; |

#### Returns

`any`

## Defined in

[types.ts:152](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L152)
