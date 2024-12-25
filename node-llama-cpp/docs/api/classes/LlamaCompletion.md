# Class: LlamaCompletion

## Constructors

### new LlamaCompletion()

```ts
new LlamaCompletion(__namedParameters: LlamaCompletionOptions): LlamaCompletion
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | [`LlamaCompletionOptions`](../type-aliases/LlamaCompletionOptions.md) |

#### Returns

[`LlamaCompletion`](LlamaCompletion.md)

#### Defined in

[evaluator/LlamaCompletion.ts:183](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L183)

## Properties

### onDispose

```ts
readonly onDispose: EventRelay<void>;
```

#### Defined in

[evaluator/LlamaCompletion.ts:181](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L181)

## Accessors

### disposed

```ts
get disposed(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaCompletion.ts:215](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L215)

***

### infillSupported

```ts
get infillSupported(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaCompletion.ts:219](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L219)

## Methods

### dispose()

```ts
dispose(__namedParameters: {
  disposeSequence: boolean;
 }): void
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `__namedParameters` | `object` |
| `__namedParameters.disposeSequence`? | `boolean` |

#### Returns

`void`

#### Defined in

[evaluator/LlamaCompletion.ts:198](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L198)

***

### generateCompletion()

```ts
generateCompletion(input: string | LlamaText | Token[], options: LlamaCompletionGenerationOptions): Promise<string>
```

Generate a completion for an input.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `options` | [`LlamaCompletionGenerationOptions`](../type-aliases/LlamaCompletionGenerationOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

#### Defined in

[evaluator/LlamaCompletion.ts:230](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L230)

***

### generateCompletionWithMeta()

```ts
generateCompletionWithMeta(input: string | LlamaText | Token[], __namedParameters: LlamaCompletionGenerationOptions): Promise<LlamaCompletionResponse>
```

Same as `generateCompletion`, but returns additional metadata about the generation.
See `generateCompletion` for more information.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `input` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `__namedParameters` | [`LlamaCompletionGenerationOptions`](../type-aliases/LlamaCompletionGenerationOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaCompletionResponse`](../type-aliases/LlamaCompletionResponse.md)&gt;

#### Defined in

[evaluator/LlamaCompletion.ts:240](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L240)

***

### generateInfillCompletion()

```ts
generateInfillCompletion(
   prefixInput: string | LlamaText | Token[], 
   suffixInput: string | LlamaText | Token[], 
   options: LlamaInfillGenerationOptions): Promise<string>
```

Infill (also known as Fill-In-Middle), generates a completion for an input (`prefixInput`) that
should connect to a given continuation (`suffixInput`).
For example, for `prefixInput: "123"` and `suffixInput: "789"`, the model is expected to generate `456`
to make the final text be `123456789`.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefixInput` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `suffixInput` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `options` | [`LlamaInfillGenerationOptions`](../type-aliases/LlamaInfillGenerationOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

#### Defined in

[evaluator/LlamaCompletion.ts:365](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L365)

***

### generateInfillCompletionWithMeta()

```ts
generateInfillCompletionWithMeta(
   prefixInput: string | LlamaText | Token[], 
   suffixInput: string | LlamaText | Token[], 
   __namedParameters: LlamaInfillGenerationOptions): Promise<LlamaCompletionResponse>
```

Same as `generateInfillCompletion`, but returns additional metadata about the generation.
See `generateInfillCompletion` for more information.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `prefixInput` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `suffixInput` | `string` \| [`LlamaText`](LlamaText.md) \| [`Token`](../type-aliases/Token.md)[] |
| `__namedParameters` | [`LlamaInfillGenerationOptions`](../type-aliases/LlamaInfillGenerationOptions.md) |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaCompletionResponse`](../type-aliases/LlamaCompletionResponse.md)&gt;

#### Defined in

[evaluator/LlamaCompletion.ts:379](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaCompletion.ts#L379)
