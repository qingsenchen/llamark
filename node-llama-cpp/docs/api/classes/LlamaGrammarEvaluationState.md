# Class: LlamaGrammarEvaluationState

Grammar evaluation state is used to track the model response to determine the next allowed characters for the model to generate.

Create a new grammar evaluation state for every response you generate with the model.

This is only needed when using the `LlamaContext` class directly, since `LlamaChatSession` already handles this for you.

## Constructors

### new LlamaGrammarEvaluationState()

```ts
new LlamaGrammarEvaluationState(options: LlamaGrammarEvaluationStateOptions): LlamaGrammarEvaluationState
```

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `options` | [`LlamaGrammarEvaluationStateOptions`](../type-aliases/LlamaGrammarEvaluationStateOptions.md) |  |

#### Returns

[`LlamaGrammarEvaluationState`](LlamaGrammarEvaluationState.md)

#### Defined in

[evaluator/LlamaGrammarEvaluationState.ts:26](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammarEvaluationState.ts#L26)
