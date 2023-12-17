#ifndef DIRTREE_H
#define DIRTREE_H

#include "treeInterface.h"
#include <filesystem>
#include <fstream>
#include <iostream>
#include <ostream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

/**
 * @brief The dirTree class defines a directory tree, made up of dirTreeNodes
 * */
class dirTree : public treeInterface {
public:
  /** Constructor */
  dirTree() {}

  /*
   * @brief build_tree builds the tree from the current directory
   * @param current_dir the current directory
   * @return the root node of the tree
   * */
  dirTreeNode build_tree(const fs::path &current_dir) override {
    // 1. create a root node here
    dirTreeNode root = dirTreeNode(current_dir.filename().string(),
                                   fs::is_directory(current_dir), current_dir);
    // 2. build tree from here
    build_tree_recursive(root);
    // 3. return root
    return root;
  }

private:
  /**
   * builds tree recursively from the current node as the root node
   * */
  static void build_tree_recursive(dirTreeNode &current_node) {
    // 1. iterate through all the folders in the current directory
    for (const auto &entry : fs::directory_iterator(current_node.path)) {
      // 2. add the child to the root node
      // NOTE: emplace back helps to manage the lifetime of the object
      // emplace = construct an Element in place
      dirTreeNode &addedChild = current_node.children.emplace_back(
          dirTreeNode(entry.path().filename().string(),
                      fs::is_directory(entry.path()), entry.path()));

      // 3. if the child is a folder, recursively call this function
      if (addedChild.is_folder) {
        // TODO: create a file called .codeIgnore to ignore files
        if (addedChild.name == ".git") {
          continue;
        }
        // call dirTree's static function to build tree recursively for the
        // child
        else {
          build_tree_recursive(addedChild);
        }
      }
    }
  };
};

#endif
