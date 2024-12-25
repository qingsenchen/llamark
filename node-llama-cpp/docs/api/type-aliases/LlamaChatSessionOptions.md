# Type Alias: LlamaChatSessionOptions

```ts
type LlamaChatSessionOptions: {
  contextSequence: LlamaContextSequence;
  chatWrapper: "auto" | ChatWrapper;
  systemPrompt: string;
  forceAddSystemPrompt: boolean;
  autoDisposeSequence: boolean;
  contextShift: LlamaChatSessionContextShiftOptions;
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

### systemPrompt?

```ts
optional systemPrompt: string;
```

### forceAddSystemPrompt?

```ts
optional forceAddSystemPrompt: boolean;
```

Add the system prompt even on models that don't support a system prompt.

Each chat wrapper has its own workaround for adding a system prompt to a model that doesn't support it,
but forcing the system prompt on unsupported models may not always work as expected.

Use with caution.

### autoDisposeSequence?

```ts
optional autoDisposeSequence: boolean;
```

Automatically dispose the sequence when the session is disposed.

Defaults to `false`.

### contextShift?

```ts
optional contextShift: LlamaChatSessionContextShiftOptions;
```

## Defined in

[evaluator/LlamaChatSession/LlamaChatSession.ts:21](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaChatSession/LlamaChatSession.ts#L21)
