# Function: readGgufFileInfo()

```ts
function readGgufFileInfo(pathOrUri: string, options: {
  readTensorInfo: true;
  sourceType: "network" | "filesystem";
  ignoreKeys: [];
  logWarnings: true;
  fetchRetryOptions: ggufDefaultFetchRetryOptions;
  fetchHeaders: {};
  spliceSplitFiles: true;
  signal: AbortSignal;
  tokens: ModelFileAccessTokens;
 }): Promise<GgufFileInfo>
```

Read a GGUF file and return its metadata and tensor info (unless `readTensorInfo` is set to `false`).
Only the parts of the file required for the metadata and tensor info are read.

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `pathOrUri` | `string` |  |
| `options` | `object` |  |
| `options.readTensorInfo`? | `boolean` | Whether to read the tensor info from the file's header. Defaults to `true`. |
| `options.sourceType`? | `"network"` \| `"filesystem"` | Set to a specific value to force it to only use that source type. By default, it detects whether the path is a network URL or a filesystem path and uses the appropriate reader accordingly. |
| `options.ignoreKeys`? | `string`[] | Metadata keys to ignore when parsing the metadata. For example, `["tokenizer.ggml.tokens"]` |
| `options.logWarnings`? | `boolean` | Whether to log warnings Defaults to `true`. |
| `options.fetchRetryOptions`? | `Options`&lt;`unknown`&gt; | Relevant only when fetching from a network |
| `options.fetchHeaders`? | [`Record`](https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type)&lt;`string`, `string`&gt; | Relevant only when fetching from a network |
| `options.spliceSplitFiles`? | `boolean` | When split files are detected, read the metadata of the first file and splice the tensor info from all the parts. Defaults to `true`. |
| `options.signal`? | `AbortSignal` | - |
| `options.tokens`? | [`ModelFileAccessTokens`](../type-aliases/ModelFileAccessTokens.md) | - |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`GgufFileInfo`](../type-aliases/GgufFileInfo.md)&gt;

## Defined in

[gguf/readGgufFileInfo.ts:20](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/readGgufFileInfo.ts#L20)
