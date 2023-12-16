#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>
#include <vector>

#include "fileManager.h"

using namespace std;
namespace fs = std::filesystem;
// Alias for the experimental filesystem

// Constructor implementation
FileManager::FileManager() {
  // Constructor logic (if needed)
}

// Implementation of the run method
void FileManager::run() {
  /**
   * 1. start with the current dir
   * 2. scan all the folders inside this directory
   *   2.1 create a list of all the folders in the directory
   * 3. scan all files inside each directory one by one including the current
   * directory we started with.
   * */

  // 1. create vectors to store paths and dirs
  vector<string> dir_paths;
  vector<string> file_paths;

  // get the current dir
  string current_dir = fs::current_path().string();
  dir_paths.push_back(current_dir);
  cout << "Current Directory: " << current_dir
       << std::endl; // TODO: take this out later on.

  // Scan files everything here
  // TODO: learn what this const auto entry means
  for (const auto &entry : fs::directory_iterator(current_dir)) {

    // if this is a folder
    if (entry.is_directory()) {
      dir_paths.push_back(entry.path());
    }

    // if file
    if (entry.is_regular_file()) {
      dir cout << "File " << entry.path() << std::endl;
      // Process each file
      // analyzeFile(entry.path().string());
    }
  }
}
