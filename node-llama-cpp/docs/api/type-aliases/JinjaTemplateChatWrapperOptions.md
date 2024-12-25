# Type Alias: JinjaTemplateChatWrapperOptions

```ts
type JinjaTemplateChatWrapperOptions: {
  template: string;
  modelRoleName: string;
  userRoleName: string;
  systemRoleName: string;
  convertUnsupportedSystemMessagesToUserMessages: "auto" | boolean | JinjaTemplateChatWrapperOptionsConvertMessageFormat;
  functionCallMessageTemplate: ChatHistoryFunctionCallMessageTemplate;
  joinAdjacentMessagesOfTheSameType: boolean;
  trimLeadingWhitespaceInResponses: boolean;
  additionalRenderParameters: Record<string, any>;
};
```

## Type declaration

### template

```ts
template: string;
```

### modelRoleName?

```ts
optional modelRoleName: string;
```

Defaults to `"assistant"`.

### userRoleName?

```ts
optional userRoleName: string;
```

Defaults to `"user"`.

### systemRoleName?

```ts
optional systemRoleName: string;
```

Defaults to `"system"`.

### convertUnsupportedSystemMessagesToUserMessages?

```ts
optional convertUnsupportedSystemMessagesToUserMessages: "auto" | boolean | JinjaTemplateChatWrapperOptionsConvertMessageFormat;
```

Some Jinja templates may not support system messages, and in such cases,
it'll be detected and system messages can be converted to user messages.

You can specify the format of the converted user message.
- **"auto"**: Convert system messages to user messages only if the template does not support system messages.
- **`true`**: Always convert system messages to user messages.
- **`false`**: Never convert system messages to user messages.
May throw an error if some system messages don't appear in the template.
- **`{use: "ifNeeded", format: "..."}`**: Convert system messages to user messages only if the template does not support system
messages with the specified format.
- **`{use: "always", format: "..."}`**: Always convert system messages to user messages with the specified format.

Defaults to `"auto"`.

### functionCallMessageTemplate?

```ts
optional functionCallMessageTemplate: ChatHistoryFunctionCallMessageTemplate;
```

### joinAdjacentMessagesOfTheSameType?

```ts
optional joinAdjacentMessagesOfTheSameType: boolean;
```

Whether to join adjacent messages of the same type.
Some Jinja templates may throw an error if this is not set to `true`.

Defaults to `true`.

### trimLeadingWhitespaceInResponses?

```ts
optional trimLeadingWhitespaceInResponses: boolean;
```

Whether to trim leading whitespace in responses.

Defaults to `true`.

### additionalRenderParameters?

```ts
optional additionalRenderParameters: Record<string, any>;
```

Additional parameters to use for rendering the Jinja template.

## Defined in

[chatWrappers/generic/JinjaTemplateChatWrapper.ts:10](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/JinjaTemplateChatWrapper.ts#L10)
