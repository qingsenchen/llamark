# Function: appendUserMessageToChatHistory()

```ts
function appendUserMessageToChatHistory(chatHistory: readonly ChatHistoryItem[], message: string): ChatHistoryItem[]
```

Appends a user message to the chat history.
If the last message in the chat history is also a user message, the new message will be appended to it.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `chatHistory` | readonly [`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[] |
| `message` | `string` |

## Returns

[`ChatHistoryItem`](../type-aliases/ChatHistoryItem.md)[]

## Defined in

[utils/appendUserMessageToChatHistory.ts:7](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/appendUserMessageToChatHistory.ts#L7)
