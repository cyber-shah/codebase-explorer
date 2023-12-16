#include "src/fileManager.h"
#include <filesystem>
#include <fstream>
#include <iostream>
#include <ostream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

class FileManagerNode {
  /**
   * 1. add children, remove children, print all children
   * 2.
   *
   * */

public:
  string name;
  bool is_folder;
  vector<FileManagerNode> children;
  string path;

  // Constructor
  FileManagerNode(const string node_name, bool is_folder_bool)
      : name(node_name), is_folder(is_folder_bool) {}

  // Add Children method
  void add_child(const FileManagerNode child_node) {
    children.push_back(child_node);
  }

  // Recursive function to print all the child nodes
  void print_tree(int depth = 0) const {
    // Print current node with indentation based on depth
    cout << string(depth * 2, ' ') << name;
    if (is_folder) {
      cout << " (Folder)";
    }
    cout << endl;

    // Recursively print child nodes
    for (const auto &child : children) {
      child.print_tree(depth + 1);
    }
  }
};
