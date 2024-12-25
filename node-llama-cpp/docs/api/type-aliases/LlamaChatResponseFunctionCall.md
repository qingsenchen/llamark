# Type Alias: LlamaChatResponseFunctionCall&lt;Functions, FunctionCallName, Params&gt;

```ts
type LlamaChatResponseFunctionCall<Functions, FunctionCallName, Params>: {
  functionName: FunctionCallName;
  params: Params;
  raw: LlamaTextJSON;
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `Functions` *extends* [`ChatModelFunctions`](ChatModelFunctions.md) | - |
| `FunctionCallName` *extends* keyof `Functions` & `string` | `string` & keyof `Functions` |
| `Params` | `Functions`\[`FunctionCallName`\]\[`"params"`\] *extends* `undefined` \| `null` \| `void` ? `undefined` : [`GbnfJsonSchemaToType`](GbnfJsonSchemaToType.md)&lt;`Functions`\[`FunctionCallName`\]\[`"params"`\]&gt; |

## Type declaration

### functionName

```ts
functionName: FunctionCallName;
```

### params

```ts
params: Params;
```

### raw

```ts
raw: LlamaTextJSON;
```

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:751](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L751)
