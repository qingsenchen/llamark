# Type Alias: GbnfJsonObjectSchema&lt;Keys&gt;

```ts
type GbnfJsonObjectSchema<Keys>: {
  type: "object";
  properties: Readonly<{ [key in Keys]: GbnfJsonSchema }>;
  required: readonly Keys[];
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Keys` *extends* `string` | `string` |

## Type declaration

### type

```ts
type: "object";
```

### properties

```ts
properties: Readonly<{ [key in Keys]: GbnfJsonSchema }>;
```

### required?

```ts
optional required: readonly Keys[];
```

## Defined in

[utils/gbnfJson/types.ts:17](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/gbnfJson/types.ts#L17)
