# Type Alias: CustomBatchingPrioritizationStrategy()

```ts
type CustomBatchingPrioritizationStrategy: (options: {
  items: readonly BatchItem[];
  size: number;
 }) => PrioritizedBatchItem[];
```

A function that prioritizes the batch items to be processed.
The function receives an array of `items` and the `size` of how many tokens can be processed in this batch.

The function should return an array of prioritized items,
where the sum of `processAmount` of all the items is less or equal to the given `size` that the function received,
and where the `item` of each prioritized item is the same reference to an original item in the `items` array.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.items` | readonly [`BatchItem`](BatchItem.md)[] |
| `options.size` | `number` |

## Returns

[`PrioritizedBatchItem`](PrioritizedBatchItem.md)[]

## Defined in

[evaluator/LlamaContext/types.ts:245](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L245)
