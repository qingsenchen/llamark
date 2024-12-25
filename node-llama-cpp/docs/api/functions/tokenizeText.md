# Function: tokenizeText()

```ts
function tokenizeText(text: string | LlamaText, tokenizer: Tokenizer): Token[]
```

Tokenize the given input using the given tokenizer, whether it's a `string` or a `LlamaText`

## Parameters

| Parameter | Type |
| ------ | ------ |
| `text` | `string` \| [`LlamaText`](../classes/LlamaText.md) |
| `tokenizer` | [`Tokenizer`](../type-aliases/Tokenizer.md) |

## Returns

[`Token`](../type-aliases/Token.md)[]

## Defined in

[utils/LlamaText.ts:591](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/LlamaText.ts#L591)
