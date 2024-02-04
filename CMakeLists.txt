cmake_minimum_required(VERSION 3.11)
project(codebase-explorer)

set(CMAKE_CXX_STANDARD 17) # Set C++17 standard

find_package(Curses REQUIRED)
include_directories(${CURSES_INCLUDE_DIR})
find_package(nlohmann_json 3.11 REQUIRED)
find_package(ftxui 5 REQUIRED)

add_executable(a.out src/main.cpp)

# Link against ncurses and nlohmann_json libraries
target_link_libraries(
  a.out
  PRIVATE ${CURSES_LIBRARIES} nlohmann_json::nlohmann_json
  PRIVATE ftxui::screen
  PRIVATE ftxui::dom)
