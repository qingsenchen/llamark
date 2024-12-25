# Type Alias: ChatWrapperGenerateContextStateOptions

```ts
type ChatWrapperGenerateContextStateOptions: {
  chatHistory: readonly ChatHistoryItem[];
  availableFunctions: ChatModelFunctions;
  documentFunctionParams: boolean;
};
```

## Type declaration

### chatHistory

```ts
chatHistory: readonly ChatHistoryItem[];
```

### availableFunctions?

```ts
optional availableFunctions: ChatModelFunctions;
```

### documentFunctionParams?

```ts
optional documentFunctionParams: boolean;
```

## Defined in

[types.ts:86](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L86)
