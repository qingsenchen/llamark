# Type Alias: LlamaGrammarOptions

```ts
type LlamaGrammarOptions: {
  grammar: string;
  stopGenerationTriggers: readonly (LlamaText | string | readonly (string | Token)[])[];
  trimWhitespaceSuffix: boolean;
  rootRuleName: string;
};
```

## Type declaration

### grammar

```ts
grammar: string;
```

GBNF grammar

### stopGenerationTriggers?

```ts
optional stopGenerationTriggers: readonly (LlamaText | string | readonly (string | Token)[])[];
```

Consider any of these as EOS for the generated text. Only supported by `LlamaChat` and `LlamaChatSession`

### trimWhitespaceSuffix?

```ts
optional trimWhitespaceSuffix: boolean;
```

Trim whitespace from the end of the generated text. Only supported by `LlamaChat` and `LlamaChatSession`

### rootRuleName?

```ts
optional rootRuleName: string;
```

Root rule name.

Defaults to `"root"`.

## Defined in

[evaluator/LlamaGrammar.ts:10](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaGrammar.ts#L10)
