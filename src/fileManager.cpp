#include <filesystem>
#include <fstream>
#include <iostream>
#include <sstream>
#include <string>

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
  string current_dir = fs::current_path().string();
  cout << "Current Directory: " << current_dir << std::endl;

  int file_number = 0;
  // Scan files in the current directory
  for (const auto &entry : fs::directory_iterator(current_dir)) {

    if (entry.is_regular_file()) {
      cout << "File " << file_number << ": " << entry.path() << std::endl;
      file_number++;
      // Process each file
      // analyzeFile(entry.path().string());
    }
  }
}
