# Type Alias: BatchingOptions

```ts
type BatchingOptions: {
  dispatchSchedule: "nextTick" | CustomBatchingDispatchSchedule;
  itemPrioritizationStrategy: "maximumParallelism" | "firstInFirstOut" | CustomBatchingPrioritizationStrategy;
};
```

## Type declaration

### dispatchSchedule?

```ts
optional dispatchSchedule: "nextTick" | CustomBatchingDispatchSchedule;
```

The strategy used to dispatch items to be processed when there are items pending to be processed.
- **`"nextTick"`** - dispatch the items on the next even loop tick.
You can provide a custom function to define a custom dispatch schedule.

Defaults to `"nextTick"`.

### itemPrioritizationStrategy?

```ts
optional itemPrioritizationStrategy: "maximumParallelism" | "firstInFirstOut" | CustomBatchingPrioritizationStrategy;
```

The strategy used to prioritize pending items to be processed.
- **`"maximumParallelism"`** - process as many different sequences in parallel as possible.
- **`"firstInFirstOut"`** - process items in the order they were added.
- **Custom prioritization function** - a custom function that prioritizes the items to be processed.
See the `CustomBatchingPrioritizationStrategy` type for more information.

Defaults to `"maximumParallelism"`.

## Defined in

[evaluator/LlamaContext/types.ts:209](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L209)
