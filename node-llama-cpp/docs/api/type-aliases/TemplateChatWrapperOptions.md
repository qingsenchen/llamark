# Type Alias: TemplateChatWrapperOptions

```ts
type TemplateChatWrapperOptions: {
  template: `${"" | `${string}{{systemPrompt}}`}${string}{{history}}${string}{{completion}}${string}`;
  historyTemplate: {
     system: `${string}{{message}}${string}`;
     user: `${string}{{message}}${string}`;
     model: `${string}{{message}}${string}`;
    };
  functionCallMessageTemplate: ChatHistoryFunctionCallMessageTemplate;
  joinAdjacentMessagesOfTheSameType: boolean;
};
```

## Type declaration

### template

```ts
template: `${"" | `${string}{{systemPrompt}}`}${string}{{history}}${string}{{completion}}${string}`;
```

### historyTemplate

```ts
historyTemplate: {
  system: `${string}{{message}}${string}`;
  user: `${string}{{message}}${string}`;
  model: `${string}{{message}}${string}`;
};
```

### historyTemplate.system

```ts
system: `${string}{{message}}${string}`;
```

### historyTemplate.user

```ts
user: `${string}{{message}}${string}`;
```

### historyTemplate.model

```ts
model: `${string}{{message}}${string}`;
```

### functionCallMessageTemplate?

```ts
optional functionCallMessageTemplate: ChatHistoryFunctionCallMessageTemplate;
```

### joinAdjacentMessagesOfTheSameType?

```ts
optional joinAdjacentMessagesOfTheSameType: boolean;
```

## Defined in

[chatWrappers/generic/TemplateChatWrapper.ts:7](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/TemplateChatWrapper.ts#L7)
