# Type Alias: GgufMetadataGeneral&lt;A&gt;

```ts
type GgufMetadataGeneral<A>: {
  architecture: A;
  quantization_version: string;
  alignment: string;
  name: string;
  basename: string;
  size_label: string;
  author: string;
  url: string;
  description: string;
  license: string;
  license.name: string;
  license.link: string;
  source: {
     url: string;
     huggingface: {
        repository: string;
       };
    };
  file_type: GgufFileType;
  base_model: {
   [key: ${bigint}]: {
     name: string;
     author: string;
     version: string;
     organization: string;
     url: string;
     doi: string;
     uuid: string;
     repo_url: string;
    };   count: number;
    };
};
```

## Type Parameters

| Type Parameter | Default type |
| ------ | ------ |
| `A` *extends* [`GgufArchitectureType`](../enumerations/GgufArchitectureType.md) | [`GgufArchitectureType`](../enumerations/GgufArchitectureType.md) |

## Type declaration

### architecture

```ts
readonly architecture: A;
```

### quantization\_version

```ts
readonly quantization_version: string;
```

The version of the quantization format. Not required if the model is not
quantized (i.e. no tensors are quantized). If any tensors are quantized,
this must be present. This is separate to the quantization scheme of the
tensors itself; the quantization version may change without changing the
scheme's name (e.g. the quantization scheme is Q5_K, and the quantization
version is 4).

### alignment?

```ts
readonly optional alignment: string;
```

the global alignment to use, as described above. This can vary to allow
for different alignment schemes, but it must be a multiple of 8. Some
writers may not write the alignment. If the alignment is not specified,
assume it is `32`.

### name?

```ts
readonly optional name: string;
```

The name of the model. This should be a human-readable name that can be
used to identify the model. It should be unique within the community
that the model is defined in.

### basename?

```ts
readonly optional basename: string;
```

### size\_label?

```ts
readonly optional size_label: string;
```

### author?

```ts
readonly optional author: string;
```

### url?

```ts
readonly optional url: string;
```

URL to the model's homepage. This can be a GitHub repo, a paper, etc.

### description?

```ts
readonly optional description: string;
```

free-form description of the model including anything that isn't
covered by the other fields

### license?

```ts
readonly optional license: string;
```

License of the model, expressed as a SPDX license expression
(e.g. `MIT OR Apache-2.0`). *Should not* include any other information,
such as the license text or the URL to the license.

### license.name?

```ts
readonly optional name: string;
```

### license.link?

```ts
readonly optional link: string;
```

### source?

```ts
readonly optional source: {
  url: string;
  huggingface: {
     repository: string;
    };
};
```

Information about where this model came from. This is useful for tracking
the provenance of the model, and for finding the original source if the
model is modified. For a model that was converted from GGML, for
example, these keys would point to the model that was converted from.

### source.url?

```ts
readonly optional url: string;
```

URL to the source of the model. Can be a GitHub repo, a paper, etc.

### source.huggingface?

```ts
readonly optional huggingface: {
  repository: string;
};
```

### source.huggingface.repository?

```ts
readonly optional repository: string;
```

### file\_type?

```ts
readonly optional file_type: GgufFileType;
```

An enumerated value describing the type of the majority of the tensors
in the file. Optional; can be inferred from the tensor types.

### base\_model?

```ts
readonly optional base_model: {
[key: ${bigint}]: {
  name: string;
  author: string;
  version: string;
  organization: string;
  url: string;
  doi: string;
  uuid: string;
  repo_url: string;
 };   count: number;
};
```

#### Index Signature

 \[`key`: \`$\{bigint\}\`\]: \{
  `name`: `string`;
  `author`: `string`;
  `version`: `string`;
  `organization`: `string`;
  `url`: `string`;
  `doi`: `string`;
  `uuid`: `string`;
  `repo_url`: `string`;
 \}

### base\_model.count

```ts
readonly count: number;
```

## Defined in

[gguf/types/GgufMetadataTypes.ts:122](https://github.com/withcatai/node-llama-cpp/blob/6405ee945e792651123189aae2612212095765b6/src/gguf/types/GgufMetadataTypes.ts#L122)
