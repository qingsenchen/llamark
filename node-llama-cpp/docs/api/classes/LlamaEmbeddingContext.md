# Class: LlamaEmbeddingContext

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaEmbeddingContext.ts:53](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbeddingContext.ts#L53)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaEmbeddingContext.ts:117](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbeddingContext.ts#L117)

## Methods

### getEmbeddingFor()

```ts
getEmbeddingFor(input: string | LlamaText | Token[]): Promise<LlamaEmbedding>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaEmbedding`](LlamaEmbedding.md)&gt;

#### Defined in

[evaluator/LlamaEmbeddingContext.ts:74](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbeddingContext.ts#L74)

***

### dispose()

```ts
dispose(): Promise<void>
```

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`void`&gt;

#### Defined in

[evaluator/LlamaEmbeddingContext.ts:108](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbeddingContext.ts#L108)
