# Function: resolveModelFile()

```ts
function resolveModelFile(uriOrPath: string, optionsOrDirectory?: string | ResolveModelFileOptions): Promise<string>
```

Resolves a local model file path from a URI or file path, and downloads the necessary files first if needed.

If a URL or a URI is given, it'll be resolved to the corresponding file path.
If the file path exists, it will be returned, otherwise it will be downloaded and then be returned.

If a file path is given, and the path exists, it will be returned, otherwise an error will be thrown.

Files are resolved from and downloaded to the `directory` option,
which defaults to `node-llama-cpp`'s default global models directory (`~/.node-llama-cpp/models`).

Set the `cli` option to `false` to hide the download progress from the console.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `uriOrPath` | `string` |
| `optionsOrDirectory`? | `string` \| [`ResolveModelFileOptions`](../type-aliases/ResolveModelFileOptions.md) |

## Returns

[`Promise`](https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise)&lt;`string`&gt;

The resolved model file path

## Examples

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {getLlama, resolveModelFile} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// resolve a model from Hugging Face to the models directory
const modelPath = await resolveModelFile(
    "hf:user/model/model-file.gguf",
    path.join(__dirname, "models")
);

const llama = await getLlama();
const model = await llama.loadModel({modelPath});
```

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {getLlama, resolveModelFile} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// resolve a model from a URL to the models directory
const modelPath = await resolveModelFile(
    "https://example.com/model.gguf",
    path.join(__dirname, "models")
);

const llama = await getLlama();
const model = await llama.loadModel({modelPath});
```

```typescript
import {fileURLToPath} from "url";
import path from "path";
import {getLlama, resolveModelFile} from "node-llama-cpp";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// resolve a local model that is in the models directory
const modelPath = await resolveModelFile(
    "model.gguf",
    path.join(__dirname, "models")
);

const llama = await getLlama();
const model = await llama.loadModel({modelPath});
```

## Defined in

[utils/resolveModelFile.ts:153](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/utils/resolveModelFile.ts#L153)
