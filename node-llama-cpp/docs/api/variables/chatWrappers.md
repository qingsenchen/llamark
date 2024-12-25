# Variable: chatWrappers

```ts
const chatWrappers: Readonly<{
  general: GeneralChatWrapper;
  llama3.1: Llama3_1ChatWrapper;
  llama3: Llama3ChatWrapper;
  llama2Chat: Llama2ChatWrapper;
  mistral: MistralChatWrapper;
  alpacaChat: AlpacaChatWrapper;
  functionary: FunctionaryChatWrapper;
  chatML: ChatMLChatWrapper;
  falconChat: FalconChatWrapper;
  gemma: GemmaChatWrapper;
  template: TemplateChatWrapper;
  jinjaTemplate: JinjaTemplateChatWrapper;
 }>;
```

## Type declaration

### general

```ts
readonly general: typeof GeneralChatWrapper = GeneralChatWrapper;
```

### llama3.1

```ts
readonly 1: typeof Llama3_1ChatWrapper = Llama3_1ChatWrapper;
```

### llama3

```ts
readonly llama3: typeof Llama3ChatWrapper = Llama3ChatWrapper;
```

### llama2Chat

```ts
readonly llama2Chat: typeof Llama2ChatWrapper = Llama2ChatWrapper;
```

### mistral

```ts
readonly mistral: typeof MistralChatWrapper = MistralChatWrapper;
```

### alpacaChat

```ts
readonly alpacaChat: typeof AlpacaChatWrapper = AlpacaChatWrapper;
```

### functionary

```ts
readonly functionary: typeof FunctionaryChatWrapper = FunctionaryChatWrapper;
```

### chatML

```ts
readonly chatML: typeof ChatMLChatWrapper = ChatMLChatWrapper;
```

### falconChat

```ts
readonly falconChat: typeof FalconChatWrapper = FalconChatWrapper;
```

### gemma

```ts
readonly gemma: typeof GemmaChatWrapper = GemmaChatWrapper;
```

### template

```ts
readonly template: typeof TemplateChatWrapper = TemplateChatWrapper;
```

### jinjaTemplate

```ts
readonly jinjaTemplate: typeof JinjaTemplateChatWrapper = JinjaTemplateChatWrapper;
```

## Defined in

[chatWrappers/utils/resolveChatWrapper.ts:37](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/resolveChatWrapper.ts#L37)
