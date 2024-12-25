# Function: isGgufMetadataOfArchitectureType()

```ts
function isGgufMetadataOfArchitectureType<A>(metadata: GgufMetadata<GgufArchitectureType>, type: A): metadata is GgufMetadata<A>
```

## Type Parameters

| Type Parameter |
| ------ |
| `A` *extends* [`GgufArchitectureType`](../enumerations/GgufArchitectureType.md) |

## Parameters

| Parameter | Type |
| ------ | ------ |
| `metadata` | [`GgufMetadata`](../type-aliases/GgufMetadata.md)&lt;[`GgufArchitectureType`](../enumerations/GgufArchitectureType.md)&gt; |
| `type` | `A` |

## Returns

`metadata is GgufMetadata<A>`

## Defined in

[gguf/types/GgufMetadataTypes.ts:463](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L463)
