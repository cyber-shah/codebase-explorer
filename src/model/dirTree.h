#ifndef FILE_MANAGER_H
#define FILE_MANAGER_H

#include <filesystem>
#include <fstream>
#include <iostream>
#include <ostream>
#include <sstream>
#include <string>
#include <vector>

#include "treeInterface.h"

using namespace std;
namespace fs = std::filesystem;

class dirTree : public treeInterface {
  /**
   * 1. add children, remove children, print all children
   * */

public:
  string name;
  bool is_folder;
  vector<dirTree> children;
  fs::path path;

  // Constructor
  // NOTE: passing as consts help us in making sure it is not modified inside
  // the function
  dirTree(const string &node_name, const bool &is_folder_bool,
          const fs::path &in_path)
      : name(node_name), is_folder(is_folder_bool), path(in_path) {}

  /*
   * build_tree from a path given, recursively goes into each children to add
   * files if they are folders.
   * static beacuse it can be called on the class without an instance.
   * */
  static dirTree build_tree(const fs::path &current_dir) {
    // 1. create a root node here
    dirTree root = dirTree(current_dir.filename().string(),
                           fs::is_directory(current_dir), current_dir);

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

      // 2. add the child to the root node
      // NOTE: emplace back helps to manage the lifetime of the object
      // emplace = construct an Element in place
      dirTree &addedChild = this->children.emplace_back(
          dirTree(entry.path().filename().string(),
                  fs::is_directory(entry.path()), entry.path()));

      // 3. if the child is a folder, recursively call this function
      if (addedChild.is_folder) {
        // TODO: create a file called .codeIgnore to ignore files
        if (addedChild.name == ".git") {
          continue;
        }
        // call child to build tree recursively
        else {
          addedChild.build_tree_recursive();
        }
      }
    }
  }
};

#endif // FILE_MANAGER_H
