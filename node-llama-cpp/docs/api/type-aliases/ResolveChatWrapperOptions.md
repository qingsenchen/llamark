# Type Alias: ResolveChatWrapperOptions

```ts
type ResolveChatWrapperOptions: {
  type: "auto" | SpecializedChatWrapperTypeName | TemplateChatWrapperTypeName;
  bosString: string | null;
  filename: string;
  fileInfo: GgufFileInfo;
  tokenizer: Tokenizer;
  customWrapperSettings: { [wrapper in keyof typeof chatWrappers]?: ConstructorParameters<typeof chatWrappers[wrapper]>[0] };
  warningLogs: boolean;
  fallbackToOtherWrappersOnJinjaError: boolean;
  noJinja: boolean;
};
```

## Type declaration

### type?

```ts
optional type: "auto" | SpecializedChatWrapperTypeName | TemplateChatWrapperTypeName;
```

Resolve to a specific chat wrapper type.
You better not set this option unless you need to force a specific chat wrapper type.

Defaults to `"auto"`.

### bosString?

```ts
optional bosString: string | null;
```

### filename?

```ts
optional filename: string;
```

### fileInfo?

```ts
optional fileInfo: GgufFileInfo;
```

### tokenizer?

```ts
optional tokenizer: Tokenizer;
```

### customWrapperSettings?

```ts
optional customWrapperSettings: { [wrapper in keyof typeof chatWrappers]?: ConstructorParameters<typeof chatWrappers[wrapper]>[0] };
```

### warningLogs?

```ts
optional warningLogs: boolean;
```

Defaults to `true`.

### fallbackToOtherWrappersOnJinjaError?

```ts
optional fallbackToOtherWrappersOnJinjaError: boolean;
```

Defaults to `true`.

### noJinja?

```ts
optional noJinja: boolean;
```

Don't resolve to a Jinja chat wrapper unless `type` is set to a Jinja chat wrapper type.

Defaults to `false`.

## Defined in

[chatWrappers/utils/resolveChatWrapper.ts:60](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/resolveChatWrapper.ts#L60)
