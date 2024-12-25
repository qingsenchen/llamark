# Function: resolveChatWrapper()

```ts
function resolveChatWrapper(options: ResolveChatWrapperOptions): BuiltInChatWrapperType | null
```

Resolve to a chat wrapper instance based on the provided information.
The more information provided, the better the resolution will be (except for `type`).

It's recommended to not set `type` to a specific chat wrapper in order for the resolution to be more flexible, but it is useful for when
you need to provide the ability to force a specific chat wrapper type.
Note that when setting `type` to a generic chat wrapper type (such as `"template"` or `"jinjaTemplate"`), the `customWrapperSettings`
must contain the necessary settings for that chat wrapper to be created.

When loading a Jinja chat template from either `fileInfo` or `customWrapperSettings.jinjaTemplate.template`,
if the chat template format is invalid, it fallbacks to resolve other chat wrappers,
unless `fallbackToOtherWrappersOnJinjaError` is set to `false` (in which case, it will throw an error).

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ResolveChatWrapperOptions`](../type-aliases/ResolveChatWrapperOptions.md) |

## Returns

[`BuiltInChatWrapperType`](../type-aliases/BuiltInChatWrapperType.md) \| `null`

## Example

```typescript
import {getLlama, resolveChatWrapper, GeneralChatWrapper} from "node-llama-cpp";

const llama = await getLlama();
const model = await llama.loadModel({modelPath: "path/to/model.gguf"});

const chatWrapper = resolveChatWrapper({
    bosString: model.tokens.bosString,
    filename: model.filename,
    fileInfo: model.fileInfo,
    tokenizer: model.tokenizer
}) ?? new GeneralChatWrapper()
```

## Defined in

[chatWrappers/utils/resolveChatWrapper.ts:122](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/chatWrappers/utils/resolveChatWrapper.ts#L122)
