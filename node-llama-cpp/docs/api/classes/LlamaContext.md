# Class: LlamaContext

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:60](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L60)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:170](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L170)

***

### model

```ts
get model(): LlamaModel
```

#### Returns

[`LlamaModel`](LlamaModel.md)

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:174](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L174)

***

### contextSize

```ts
get contextSize(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:178](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L178)

***

### batchSize

```ts
get batchSize(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:182](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L182)

***

### flashAttention

```ts
get flashAttention(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:186](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L186)

***

### stateSize

```ts
get stateSize(): number
```

The actual size of the state in the memory in bytes.
This value is provided by `llama.cpp` and doesn't include all the memory overhead of the context.

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:194](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L194)

***

### currentThreads

```ts
get currentThreads(): number
```

The number of threads currently used to evaluate tokens

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:201](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L201)

***

### idealThreads

```ts
get idealThreads(): number
```

The number of threads that are preferred to be used to evaluate tokens.

The actual number of threads used may be lower when other evaluations are running in parallel.

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:212](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L212)

***

### totalSequences

```ts
get totalSequences(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:225](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L225)

***

### sequencesLeft

```ts
get sequencesLeft(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:229](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L229)

## Methods

### dispose()

```ts
dispose(): Promise<void>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:156](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L156)

***

### getAllocatedContextSize()

```ts
getAllocatedContextSize(): number
```

#### Returns

`number`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:216](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L216)

***

### getSequence()

```ts
getSequence(options: {
  contextShift: ContextShiftOptions;
 }): LlamaContextSequence
```

Before calling this method, make sure to call `sequencesLeft` to check if there are any sequences left.
When there are no sequences left, this method will throw an error.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | `object` |
| `options.contextShift`? | [`ContextShiftOptions`](../type-aliases/ContextShiftOptions.md) |

#### Returns

[`LlamaContextSequence`](LlamaContextSequence.md)

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:237](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L237)

***

### dispatchPendingBatch()

```ts
dispatchPendingBatch(): void
```

#### Returns

`void`

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:269](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L269)

***

### printTimings()

```ts
printTimings(): Promise<void>
```

Print the timings of token evaluation since that last print for this context.

Requires the `performanceTracking` option to be enabled.

> **Note:** it prints on the `LlamaLogLevel.info` level, so if you set the level of your `Llama` instance higher than that,
it won't print anything.

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaContext/LlamaContext.ts:505](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/LlamaContext.ts#L505)
