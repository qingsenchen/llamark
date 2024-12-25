# Type Alias: Tokenizer

```ts
type Tokenizer: {
  tokenize: Token[];
 }["tokenize"] & {
  detokenize: Detokenizer;
  isSpecialToken: boolean;
  isEogToken: boolean;
};
```

## Type declaration

### detokenize

```ts
readonly detokenize: Detokenizer;
```

### isSpecialToken()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | [`Token`](Token.md) |

#### Returns

`boolean`

### isEogToken()

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `token` | [`Token`](Token.md) |

#### Returns

`boolean`

## Defined in

[types.ts:12](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L12)
