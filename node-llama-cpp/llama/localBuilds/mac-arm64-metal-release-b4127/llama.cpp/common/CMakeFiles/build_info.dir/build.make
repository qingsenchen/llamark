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
include llama.cpp/common/CMakeFiles/build_info.dir/depend.make
# Include any dependencies generated by the compiler for this target.
include llama.cpp/common/CMakeFiles/build_info.dir/compiler_depend.make

# Include the progress variables for this target.
include llama.cpp/common/CMakeFiles/build_info.dir/progress.make

# Include the compile flags for this target's objects.
include llama.cpp/common/CMakeFiles/build_info.dir/flags.make

/Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp.in
/Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/.git/index
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --blue --bold --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_1) "Generating build details from Git"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp && /Applications/CMake.app/Contents/bin/cmake -DMSVC= -DCMAKE_C_COMPILER_VERSION=15.0.0.15000309 -DCMAKE_C_COMPILER_ID=AppleClang -DCMAKE_VS_PLATFORM_NAME= -DCMAKE_C_COMPILER=/Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/cc -P /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/cmake/build-info-gen-cpp.cmake

llama.cpp/common/CMakeFiles/build_info.dir/codegen:
.PHONY : llama.cpp/common/CMakeFiles/build_info.dir/codegen

llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o: llama.cpp/common/CMakeFiles/build_info.dir/flags.make
llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp
llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o: llama.cpp/common/CMakeFiles/build_info.dir/compiler_depend.ts
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green --progress-dir=/Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/CMakeFiles --progress-num=$(CMAKE_PROGRESS_2) "Building CXX object llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -MD -MT llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o -MF CMakeFiles/build_info.dir/build-info.cpp.o.d -o CMakeFiles/build_info.dir/build-info.cpp.o -c /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp

llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.i: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Preprocessing CXX source to CMakeFiles/build_info.dir/build-info.cpp.i"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -E /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp > CMakeFiles/build_info.dir/build-info.cpp.i

llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.s: cmake_force
	@$(CMAKE_COMMAND) -E cmake_echo_color "--switch=$(COLOR)" --green "Compiling CXX source to assembly CMakeFiles/build_info.dir/build-info.cpp.s"
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common && /Applications/Xcode.app/Contents/Developer/Toolchains/XcodeDefault.xctoolchain/usr/bin/c++ $(CXX_DEFINES) $(CXX_INCLUDES) $(CXX_FLAGS) -S /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp -o CMakeFiles/build_info.dir/build-info.cpp.s

build_info: llama.cpp/common/CMakeFiles/build_info.dir/build-info.cpp.o
build_info: llama.cpp/common/CMakeFiles/build_info.dir/build.make
.PHONY : build_info

# Rule to build all files generated by this target.
llama.cpp/common/CMakeFiles/build_info.dir/build: build_info
.PHONY : llama.cpp/common/CMakeFiles/build_info.dir/build

llama.cpp/common/CMakeFiles/build_info.dir/clean:
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common && $(CMAKE_COMMAND) -P CMakeFiles/build_info.dir/cmake_clean.cmake
.PHONY : llama.cpp/common/CMakeFiles/build_info.dir/clean

llama.cpp/common/CMakeFiles/build_info.dir/depend: /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common/build-info.cpp
	cd /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127 && $(CMAKE_COMMAND) -E cmake_depends "Unix Makefiles" /Users/qzx/gitspace/node-llama-cpp/llama /Users/qzx/gitspace/node-llama-cpp/llama/llama.cpp/common /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127 /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common /Users/qzx/gitspace/node-llama-cpp/llama/localBuilds/mac-arm64-metal-release-b4127/llama.cpp/common/CMakeFiles/build_info.dir/DependInfo.cmake "--color=$(COLOR)"
.PHONY : llama.cpp/common/CMakeFiles/build_info.dir/depend

