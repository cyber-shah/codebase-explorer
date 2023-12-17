#ifndef FILE_MANAGER_H
#define FILE_MANAGER_H

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
   * */

public:
  string name;
  bool is_folder;
  vector<FileManagerNode> children;
  fs::path path;

  // Constructor
  // NOTE: passing as consts help us in making sure it is not modified inside
  // the function
  FileManagerNode(const string &node_name, const bool &is_folder_bool,
                  const fs::path &in_path)
      : name(node_name), is_folder(is_folder_bool), path(in_path) {}

  // Recursive function to print all the child nodes
  void print_tree(int depth = 0) const {

    // 1. Base case: if the node is empty, return
    if (this->is_folder && this->children.size() == 0) {
      cout << this->name << " (Empty Folder)" << endl;
      return;
    } else if (!this->is_folder) {
      cout << this->name << " (File)" << endl;
      return;
    }

    // 2. Recursive case: folder and not empty
    else {
      cout << string(depth * 2, ' ') << this->name;
      if (is_folder) {
        cout << " (Folder) has " << this->children.size() << " children"
             << endl;
        // recursively call children
        for (const auto &child : this->children) {
          child.print_tree(depth + 1);
        }
      }
    }
  }

  /*
   * build_tree from a path given, recursively goes into each children to add
   * files if they are folders.
   * static beacuse it can be called on the class without an instance.
   * */
  static FileManagerNode build_tree(const fs::path &current_dir) {
    // 1. create a root node here
    FileManagerNode root = FileManagerNode(
        extract_name(current_dir), fs::is_directory(current_dir), current_dir);

    // 2. build tree from here
    root.build_tree_recursive();
    // 3. return root
    return root;
  }

private:
  /**
   * builds tree recursively from the current node as root node
   * */
  void build_tree_recursive() {

    // 1. iterate through all the folders in the current directory
    for (const auto &entry : fs::directory_iterator(this->path)) {
      // 2. create a node for each child
      FileManagerNode child =
          FileManagerNode(extract_name(entry.path()),
                          fs::is_directory(entry.path()), entry.path());

      // 3. add the child to the root node
      this->children.push_back(child);

      // 4. if the child is a folder, recursively call this function
      if (child.is_folder) {
        // TODO: create a file called .codeIgnore to ignore files
        if (child.name == ".git") {
          continue;
        }
        // call child to build tree recursively
        else {
          child.build_tree_recursive();
        }
      }
    }
  }

  /**
   * Extracts name from the path
   * dir_path : path of the directory
   * */
  static string extract_name(const fs::path &dir_path) {
    return dir_path.filename().string();
  }
};

#endif // FILE_MANAGER_H
