# Class: LlamaEmbedding

## Constructors

### new LlamaEmbedding()

```ts
new LlamaEmbedding(options: LlamaEmbeddingOptions): LlamaEmbedding
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`LlamaEmbeddingOptions`](../type-aliases/LlamaEmbeddingOptions.md) |

#### Returns

[`LlamaEmbedding`](LlamaEmbedding.md)

#### Defined in

[evaluator/LlamaEmbedding.ts:13](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbedding.ts#L13)

## Properties

### vector

```ts
readonly vector: readonly number[];
```

#### Defined in

[evaluator/LlamaEmbedding.ts:11](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbedding.ts#L11)

## Methods

### toJSON()

```ts
toJSON(): LlamaEmbeddingJSON
```

#### Returns

[`LlamaEmbeddingJSON`](../type-aliases/LlamaEmbeddingJSON.md)

#### Defined in

[evaluator/LlamaEmbedding.ts:17](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbedding.ts#L17)

***

### calculateCosineSimilarity()

```ts
calculateCosineSimilarity(other: readonly number[] | LlamaEmbeddingJSON | LlamaEmbedding): number
```

Calculates the cosine similarity between this embedding and another embedding.

Note that you should only compare embeddings created by the exact same model file.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `other` | readonly `number`[] \| [`LlamaEmbeddingJSON`](../type-aliases/LlamaEmbeddingJSON.md) \| [`LlamaEmbedding`](LlamaEmbedding.md) |

#### Returns

`number`

A value between 0 and 1 representing the similarity between the embedding vectors,
where 1 means the embeddings are identical.

#### Defined in

[evaluator/LlamaEmbedding.ts:31](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbedding.ts#L31)

***

### fromJSON()

```ts
static fromJSON(json: LlamaEmbeddingJSON): LlamaEmbedding
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `json` | [`LlamaEmbeddingJSON`](../type-aliases/LlamaEmbeddingJSON.md) |

#### Returns

[`LlamaEmbedding`](LlamaEmbedding.md)

#### Defined in

[evaluator/LlamaEmbedding.ts:65](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaEmbedding.ts#L65)
