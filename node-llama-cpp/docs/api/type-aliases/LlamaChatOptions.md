# Type Alias: LlamaChatOptions

```ts
type LlamaChatOptions: {
  contextSequence: LlamaContextSequence;
  chatWrapper: "auto" | ChatWrapper;
  autoDisposeSequence: boolean;
};
```

## Type declaration

### contextSequence

```ts
contextSequence: LlamaContextSequence;
```

### chatWrapper?

```ts
optional chatWrapper: "auto" | ChatWrapper;
```

`"auto"` is used by default

### autoDisposeSequence?

```ts
optional autoDisposeSequence: boolean;
```

Automatically dispose the sequence when the session is disposed

Defaults to `false`.

## Defined in

[evaluator/LlamaChat/LlamaChat.ts:30](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChat/LlamaChat.ts#L30)
