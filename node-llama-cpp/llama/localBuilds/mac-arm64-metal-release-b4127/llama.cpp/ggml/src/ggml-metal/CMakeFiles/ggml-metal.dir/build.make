# CMAKE generated file: DO NOT EDIT!
# Generated by "Unix Makefiles" Generator, CMake Version 3.31

# Delete rule output on recipe failure.
.DELETE_ON_ERROR:

#=============================================================================
# Special targets provided by cmake.

# Disable implicit rules so canonical targets will work.
.SUFFIXES:

# Disable VCS-based implicit rules.
% : %,v

# Disable VCS-based implicit rules.
% : RCS/%

# Disable VCS-based implicit rules.
% : RCS/%,v

# Disable VCS-based implicit rules.
% : SCCS/s.%

# Disable VCS-based implicit rules.
% : s.%

.SUFFIXES: .hpux_make_needs_suffix_list

# Command-line flag to silence nested $(MAKE).
$(VERBOSE)MAKESILENT = -s

#Suppress display of executed commands.
$(VERBOSE).SILENT:

# A target that is always out of date.
cmake_force:
.PHONY : cmake_force

#=============================================================================
# Set environment variables for the build.

# The shell in which to execute make rules.
SHELL = /bin/sh

# The CMake executable.
CMAKE_COMMAND = /Applications/CMake.app/Contents/bin/cmake

# The command to remove a file.
RM = /Applications/CMake.app/Contents/bin/cmake -E rm -f

# Escaping for special characters.
EQUALS = =

# The top-level source directory on which CMake was run.
CMAKE_SOURCE_DIR = /Users/qzx/gitspace/node-llama-cpp/llama

# The top-level build directory on which CMake was run.
CMAKE_BINARY_DIR = /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127

# Include any dependencies generated for this target.
include llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/compiler_depend.make

# Include the progress variables for this target.
include llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/progress.make

# Include the compile flags for this target's objects.
include llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/flags.make

autogenerated/ggml-metal-embed.s: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-common.h
autogenerated/ggml-metal-embed.s: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.metal
autogenerated/ggml-metal-embed.s: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal-impl.h
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --blue --bold --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Generate assembly for embedded Metal library"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo Embedding\ Metal\ library
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && sed -e '/__embed_ggml-common.h__/r /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/../ggml-common.h' -e '/__embed_ggml-common.h__/d' < /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.metal > /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.metal.tmp
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && sed -e '/#include "ggml-metal-impl.h"/r /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal-impl.h' -e '/#include "ggml-metal-impl.h"/d' < /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.metal.tmp > /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.metal
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo .section\ __DATA,__ggml_metallib > /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo .globl\ _ggml_metallib_start >> /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo _ggml_metallib_start: >> /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo .incbin\ \"/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.metal\" >> /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo .globl\ _ggml_metallib_end >> /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && echo _ggml_metallib_end: >> /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/codegen:
.PHONY : llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/codegen

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/flags.make
llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.m
llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building C object llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -MD -MT llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o -MF CMakeFiles/ggml-metal.dir/ggml-metal.m.o.d -o CMakeFiles/ggml-metal.dir/ggml-metal.m.o -c /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.m

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing C source to CMakeFiles/ggml-metal.dir/ggml-metal.m.i"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -E /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.m > CMakeFiles/ggml-metal.dir/ggml-metal.m.i

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling C source to assembly CMakeFiles/ggml-metal.dir/ggml-metal.m.s"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(C_DEFINES) $(C_INCLUDES) $(C_FLAGS) -S /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal/ggml-metal.m -o CMakeFiles/ggml-metal.dir/ggml-metal.m.s

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/flags.make
llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o: autogenerated/ggml-metal-embed.s
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_3) "Building ASM object llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(ASM_DEFINES) $(ASM_INCLUDES) $(ASM_FLAGS) -o CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o -c /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing ASM source to CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.i"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(ASM_DEFINES) $(ASM_INCLUDES) $(ASM_FLAGS) -E /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s > CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.i

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling ASM source to assembly CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.s"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc $(ASM_DEFINES) $(ASM_INCLUDES) $(ASM_FLAGS) -S /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/autogenerated/ggml-metal-embed.s -o CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.s

# Object files for target ggml-metal
ggml__metal_OBJECTS = \
"CMakeFiles/ggml-metal.dir/ggml-metal.m.o" \
"CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o"

# External object files for target ggml-metal
ggml__metal_EXTERNAL_OBJECTS =

Release/libggml-metal.dylib: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/ggml-metal.m.o
Release/libggml-metal.dylib: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/__/__/__/__/autogenerated/ggml-metal-embed.s.o
Release/libggml-metal.dylib: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/build.make
Release/libggml-metal.dylib: Release/libggml-base.dylib
Release/libggml-metal.dylib: llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/link.txt
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --bold --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_4) "Linking C shared library ../../../../Release/libggml-metal.dylib"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && $(CMAKE_COMMAND) -E cmake_link_script CMakeFiles/ggml-metal.dir/link.txt --verbose=$(VERBOSE)

# Rule to build all files generated by this target.
llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/build: Release/libggml-metal.dylib
.PHONY : llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/build

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/clean:
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal && $(CMAKE_COMMAND) -P CMakeFiles/ggml-metal.dir/cmake_clean.cmake
.PHONY : llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/clean

llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/depend: autogenerated/ggml-metal-embed.s
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/qzx/gitspace/node-llama-cpp/llama /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/ggml/src/ggml-metal /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127 /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : llama.cpp/ggml/src/ggml-metal/CMakeFiles/ggml-metal.dir/depend

