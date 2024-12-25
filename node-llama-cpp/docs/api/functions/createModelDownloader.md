# Function: createModelDownloader()

```ts
function createModelDownloader(options: ModelDownloaderOptions): Promise<ModelDownloader>
```

Create a model downloader to download a model from a URI.
Uses [`ipull`](https://github.com/ido-pluto/ipull) to download a model file as fast as possible with parallel connections
and other optimizations.

If the uri points to a `.gguf` file that is split into multiple parts (for example, `model-00001-of-00009.gguf`),
all the parts will be downloaded to the specified directory.

If the uri points to a `.gguf` file that is binary split into multiple parts (for example, `model.gguf.part1of9`),
all the parts will be spliced into a single file and be downloaded to the specified directory.

If the uri points to a `.gguf` file that is not split or binary spliced (for example, `model.gguf`),
the file will be downloaded to the specified directory.

The supported URI schemes are:
- **HTTP:** `https://`, `http://`
- **Hugging Face:** `hf:<user>/<model>/<file-path>#<branch>` (`#<branch>` is optional)

## Parameters

| Parameter | Type |
| ------ | ------ |
| `options` | [`ModelDownloaderOptions`](../type-aliases/ModelDownloaderOptions.md) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;[`ModelDownloader`](../classes/ModelDownloader.md)&gt;

## Examples

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {createModelDownloader, getLlama} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const downloader = await createModelDownloader({
    modelUri: "https://example.com/model.gguf",
    dirPath: path.join(__dirname, "models")
});
const modelPath = await downloader.download();

const llama = await getLlama();
const model = await llama.loadModel({
    modelPath
});
```

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {createModelDownloader, getLlama} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const downloader = await createModelDownloader({
    modelUri: "hf:user/model/model-file.gguf",
    dirPath: path.join(__dirname, "models")
});
const modelPath = await downloader.download();

const llama = await getLlama();
const model = await llama.loadModel({
    modelPath
});
```

## Defined in

[utils/createModelDownloader.ts:125](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/createModelDownloader.ts#L125)
