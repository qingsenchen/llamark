# Type Alias: ChatWrapperSettings

```ts
type ChatWrapperSettings: {
  supportsSystemMessages: boolean;
  functions: {
     call: {
        optionalPrefixSpace: boolean;
        prefix: string | LlamaText;
        paramsPrefix: string | LlamaText;
        suffix: string | LlamaText;
       };
     result: {
        prefix: string | LlamaText;
        suffix: string | LlamaText;
       };
     parallelism: {
        call: {
           sectionPrefix: string | LlamaText;
           betweenCalls: string | LlamaText;
           sectionSuffix: string | LlamaText;
          };
        result: {
           sectionPrefix: string | LlamaText;
           betweenResults: string | LlamaText;
           sectionSuffix: string | LlamaText;
          };
       };
    };
};
```

## Type declaration

### supportsSystemMessages

```ts
readonly supportsSystemMessages: boolean;
```

### functions

```ts
readonly functions: {
  call: {
     optionalPrefixSpace: boolean;
     prefix: string | LlamaText;
     paramsPrefix: string | LlamaText;
     suffix: string | LlamaText;
    };
  result: {
     prefix: string | LlamaText;
     suffix: string | LlamaText;
    };
  parallelism: {
     call: {
        sectionPrefix: string | LlamaText;
        betweenCalls: string | LlamaText;
        sectionSuffix: string | LlamaText;
       };
     result: {
        sectionPrefix: string | LlamaText;
        betweenResults: string | LlamaText;
        sectionSuffix: string | LlamaText;
       };
    };
};
```

### functions.call

```ts
readonly call: {
  optionalPrefixSpace: boolean;
  prefix: string | LlamaText;
  paramsPrefix: string | LlamaText;
  suffix: string | LlamaText;
};
```

### functions.call.optionalPrefixSpace

```ts
readonly optionalPrefixSpace: boolean;
```

### functions.call.prefix

```ts
readonly prefix: string | LlamaText;
```

### functions.call.paramsPrefix

```ts
readonly paramsPrefix: string | LlamaText;
```

### functions.call.suffix

```ts
readonly suffix: string | LlamaText;
```

### functions.result

```ts
readonly result: {
  prefix: string | LlamaText;
  suffix: string | LlamaText;
};
```

### functions.result.prefix

```ts
readonly prefix: string | LlamaText;
```

Supported template parameters:
- <span v-pre>`{{functionName}}`</span>
- <span v-pre>`{{functionParams}}`</span>

Template parameters can only appear in a string or a string in a `LlamaText`.

Template parameters inside a `SpecialTokensText` inside a `LlamaText` won't be replaced.

Example of supported values:
- `"text{{functionName}}text"`
- `LlamaText(["text{{functionName}}text"])`

Example of unsupported values:
- `LlamaText([new SpecialTokensText("text{{functionName}}text")])`

### functions.result.suffix

```ts
readonly suffix: string | LlamaText;
```

Supported template parameters:
- <span v-pre>`{{functionName}}`</span>
- <span v-pre>`{{functionParams}}`</span>

Template parameters can only appear in a string or a string in a `LlamaText`.

Template parameters inside a `SpecialTokensText` inside a `LlamaText` won't be replaced.

Example of **supported** values:
- `"text{{functionName}}text"`
- `LlamaText(["text{{functionName}}text"])`

Example of **unsupported** values:
- `LlamaText([new SpecialTokensText("text{{functionName}}text")])`

### functions.parallelism?

```ts
readonly optional parallelism: {
  call: {
     sectionPrefix: string | LlamaText;
     betweenCalls: string | LlamaText;
     sectionSuffix: string | LlamaText;
    };
  result: {
     sectionPrefix: string | LlamaText;
     betweenResults: string | LlamaText;
     sectionSuffix: string | LlamaText;
    };
};
```

If this field is present, parallel function calling is supported

### functions.parallelism.call

```ts
readonly call: {
  sectionPrefix: string | LlamaText;
  betweenCalls: string | LlamaText;
  sectionSuffix: string | LlamaText;
};
```

### functions.parallelism.call.sectionPrefix

```ts
readonly sectionPrefix: string | LlamaText;
```

### functions.parallelism.call.betweenCalls?

```ts
readonly optional betweenCalls: string | LlamaText;
```

### functions.parallelism.call.sectionSuffix?

```ts
readonly optional sectionSuffix: string | LlamaText;
```

### functions.parallelism.result?

```ts
readonly optional result: {
  sectionPrefix: string | LlamaText;
  betweenResults: string | LlamaText;
  sectionSuffix: string | LlamaText;
};
```

### functions.parallelism.result.sectionPrefix?

```ts
readonly optional sectionPrefix: string | LlamaText;
```

### functions.parallelism.result.betweenResults?

```ts
readonly optional betweenResults: string | LlamaText;
```

### functions.parallelism.result.sectionSuffix?

```ts
readonly optional sectionSuffix: string | LlamaText;
```

## Defined in

[types.ts:22](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/types.ts#L22)
