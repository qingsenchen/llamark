# Function: jsonDumps()

```ts
function jsonDumps(value: any): string
```

Like `JSON.stringify` but results in a value formatted in the format that Python produces when using `json.dumps(value)`.

We need to format results this way since this is what many models use in their training data,
so this is what many models expect to have in their context state.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `value` | `any` |

## Returns

`string`

## Defined in

[chatWrappers/utils/jsonDumps.ts:7](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/jsonDumps.ts#L7)
