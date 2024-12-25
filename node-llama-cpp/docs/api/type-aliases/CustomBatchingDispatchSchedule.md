# Type Alias: CustomBatchingDispatchSchedule()

```ts
type CustomBatchingDispatchSchedule: (dispatch: () => void) => void;
```

A function that schedules the dispatch of the batch items.
Call the `dispatch` function to dispatch the items.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `dispatch` | () => `void` |

## Returns

`void`

## Defined in

[evaluator/LlamaContext/types.ts:235](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L235)
