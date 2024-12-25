# Type Alias: ChatHistoryFunctionCallMessageTemplate

```ts
type ChatHistoryFunctionCallMessageTemplate: {
  call: `${string}{{functionName}}${string}{{functionParams}}${string}`;
  result: `${string}{{functionCallResult}}${string}`;
};
```

Template format for how functions can be called by the model and how their results are fed to the model after the function call.
Consists of an array with two elements:
1. The function call template.
2. The function call result template.

For example:
```ts
const template: ChatHistoryFunctionCallMessageTemplate = {
    call: "[[call: {{functionName}}({{functionParams}})]]",
    result: " [[result: {{functionCallResult}}]]"
};
```

It's mandatory for the call template to have text before <span v-pre>`{{functionName}}`</span> in order for the chat wrapper know when
to activate the function calling grammar.

## Type declaration

### call

```ts
call: `${string}{{functionName}}${string}{{functionParams}}${string}`;
```

### result

```ts
result: `${string}{{functionCallResult}}${string}`;
```

## Defined in

[chatWrappers/generic/utils/chatHistoryFunctionCallMessageTemplate.ts:80](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/generic/utils/chatHistoryFunctionCallMessageTemplate.ts#L80)
