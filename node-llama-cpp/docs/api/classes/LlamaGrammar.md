# Class: LlamaGrammar

## Extended by

- [`LlamaJsonSchemaGrammar`](LlamaJsonSchemaGrammar.md)

## Constructors

### new LlamaGrammar()

```ts
new LlamaGrammar(llama: Llama, options: LlamaGrammarOptions): LlamaGrammar
```

> GBNF files are supported.
> More info here: [
github:ggerganov/llama.cpp:grammars/README.md
](https://github.com/ggerganov/llama.cpp/blob/f5fe98d11bdf9e7797bcfb05c0c3601ffc4b9d26/grammars/README.md)

#### Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `llama` | [`Llama`](Llama.md) |  |
| `options` | [`LlamaGrammarOptions`](../type-aliases/LlamaGrammarOptions.md) |  |

#### Returns

[`LlamaGrammar`](LlamaGrammar.md)

#### Defined in

[evaluator/LlamaGrammar.ts:44](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L44)

## Accessors

### grammar

```ts
get grammar(): string
```

#### Returns

`string`

#### Defined in

[evaluator/LlamaGrammar.ts:58](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L58)

***

### rootRuleName

```ts
get rootRuleName(): string
```

#### Returns

`string`

#### Defined in

[evaluator/LlamaGrammar.ts:62](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L62)

***

### stopGenerationTriggers

```ts
get stopGenerationTriggers(): readonly (string | LlamaText | readonly (string | Token)[])[]
```

#### Returns

readonly (`string` \| [`LlamaText`](LlamaText.md) \| readonly (`string` \| [`Token`](../type-aliases/Token.md))[])[]

#### Defined in

[evaluator/LlamaGrammar.ts:66](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L66)

***

### trimWhitespaceSuffix

```ts
get trimWhitespaceSuffix(): boolean
```

#### Returns

`boolean`

#### Defined in

[evaluator/LlamaGrammar.ts:70](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L70)

## Methods

### getFor()

```ts
static getFor(llama: Llama, type: 
  | "json"
  | "json_arr"
  | "list"
  | "c"
  | "arithmetic"
  | "japanese"
  | "chess"): Promise<LlamaGrammar>
```

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `llama` | [`Llama`](Llama.md) |
| `type` | \| `"json"` \| `"json_arr"` \| `"list"` \| `"c"` \| `"arithmetic"` \| `"japanese"` \| `"chess"` |

#### Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`LlamaGrammar`](LlamaGrammar.md)&gt;

#### Defined in

[evaluator/LlamaGrammar.ts:74](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L74)
