.section __DATA,__ggml_metallib
.globl _ggml_metallib_start
_ggml_metallib_start:
.incbin "/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.metal"
.globl _ggml_metallib_end
_ggml_metallib_end:
