# Type Alias: ChatWrapperGeneratedContextState

```ts
type ChatWrapperGeneratedContextState: {
  contextText: LlamaText;
  stopGenerationTriggers: LlamaText[];
  ignoreStartText: LlamaText[];
  functionCall: {
     initiallyEngaged: boolean;
     disengageInitiallyEngaged: LlamaText[];
    };
};
```

## Type declaration

### contextText

```ts
contextText: LlamaText;
```

### stopGenerationTriggers

```ts
stopGenerationTriggers: LlamaText[];
```

### ignoreStartText?

```ts
optional ignoreStartText: LlamaText[];
```

### functionCall?

```ts
optional functionCall: {
  initiallyEngaged: boolean;
  disengageInitiallyEngaged: LlamaText[];
};
```

### functionCall.initiallyEngaged

```ts
initiallyEngaged: boolean;
```

### functionCall.disengageInitiallyEngaged

```ts
disengageInitiallyEngaged: LlamaText[];
```

## Defined in

[types.ts:97](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L97)
