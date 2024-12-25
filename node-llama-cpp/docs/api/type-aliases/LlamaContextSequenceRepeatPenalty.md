# Type Alias: LlamaContextSequenceRepeatPenalty

```ts
type LlamaContextSequenceRepeatPenalty: {
  punishTokens: Token[] | () => Token[];
  maxPunishTokens: number;
  penalty: number;
  frequencyPenalty: number;
  presencePenalty: number;
};
```

## Type declaration

### punishTokens

```ts
punishTokens: Token[] | () => Token[];
```

Tokens to lower the predication probability of to be the next predicted token

### maxPunishTokens?

```ts
optional maxPunishTokens: number;
```

The maximum number of tokens that will be provided in the `punishTokens` array.

This is used as a hint for a performance optimization for avoiding frequent memory deallocation and reallocation.

Don't set this value too high, as it can allocate too much memory.

Defaults to `64`.

### penalty?

```ts
optional penalty: number;
```

The relative amount to lower the probability of the tokens in `punishTokens` by.

Defaults to `1.1`.
Set to `1` to disable.

### frequencyPenalty?

```ts
optional frequencyPenalty: number;
```

For n time a token is in the `punishTokens` array, lower its probability by `n * frequencyPenalty`.

Disabled by default (`0`).
Set to a value between `0` and `1` to enable.

### presencePenalty?

```ts
optional presencePenalty: number;
```

Lower the probability of all the tokens in the `punishTokens` array by `presencePenalty`.

Disabled by default (`0`).
Set to a value between `0` and `1` to enable.

## Defined in

[evaluator/LlamaContext/types.ts:169](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/evaluator/LlamaContext/types.ts#L169)
