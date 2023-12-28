cmake_minimum_required(VERSION 3.11)
project(codebase-explorer)

set(CMAKE_CXX_STANDARD 17) # Set C++17 standard

find_package(nlohmann_json 3.11 REQUIRED)

add_executable(a.out src/main.cpp)
target_include_directories(
  a.out PRIVATE /opt/homebrew/Cellar/nlohmann-json/3.11.3/include)
target_link_libraries(a.out PRIVATE nlohmann_json::nlohmann_json)
