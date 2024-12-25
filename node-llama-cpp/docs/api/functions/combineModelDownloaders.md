# Function: combineModelDownloaders()

```ts
function combineModelDownloaders(downloaders: (ModelDownloader | Promise<ModelDownloader>)[], options?: CombinedModelDownloaderOptions): Promise<CombinedModelDownloader>
```

Combine multiple models downloaders to a single downloader to download everything using as much parallelism as possible.

You can check each individual model downloader for its download progress,
but only the `onProgress` passed to the combined downloader will be called during the download.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `downloaders` | ([`ModelDownloader`](../classes/ModelDownloader.md) \| [`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`ModelDownloader`](../classes/ModelDownloader.md)&gt;)[] |
| `options`? | [`CombinedModelDownloaderOptions`](../type-aliases/CombinedModelDownloaderOptions.md) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`CombinedModelDownloader`](../classes/CombinedModelDownloader.md)&gt;

## Example

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {createModelDownloader, combineModelDownloaders, getLlama} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const downloaders = [
    createModelDownloader({
        modelUri: "https://example.com/model1.gguf",
        dirPath: path.join(__dirname, "models")
    }),
    createModelDownloader({
        modelUri: "hf:user/model/model2.gguf",
        dirPath: path.join(__dirname, "models")
    })
];
const combinedDownloader = await combineModelDownloaders(downloaders, {
    showCliProgress: true // show download progress in the CLI
});
const [
    model1Path,
    model2Path
] = await combinedDownloader.download();

const llama = await getLlama();
const model1 = await llama.loadModel({
    modelPath: model1Path!
});
const model2 = await llama.loadModel({
    modelPath: model2Path!
});
```

## Defined in

[utils/createModelDownloader.ts:171](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L171)
