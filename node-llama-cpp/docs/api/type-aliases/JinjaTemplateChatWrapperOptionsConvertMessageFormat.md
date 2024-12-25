# Type Alias: JinjaTemplateChatWrapperOptionsConvertMessageFormat

```ts
type JinjaTemplateChatWrapperOptionsConvertMessageFormat: {
  use: "always" | "ifNeeded";
  format: `${string}{{message}}${string}`;
};
```

## Type declaration

### use?

```ts
optional use: "always" | "ifNeeded";
```

### format

```ts
format: `${string}{{message}}${string}`;
```

## Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:67](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L67)
