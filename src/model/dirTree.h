#ifndef DIRTREE_H
#define DIRTREE_H

#include "nodeInterface.h"
#include "treeInterface.h"
#include <filesystem>
#include <fstream>
#include <iostream>
#include <memory>
#include <ostream>
#include <sstream>
#include <string>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

/**
 * @brief The dirTree class defines a directory tree
 * */
class dirTreeManager : public treeInterface {
public:
  /** Constructor */
  dirTreeManager() {}

  /*
   * @brief build_tree builds the tree from the current directory
   * @param current_dir the current directory
   * @return the root node of the tree
   * */
  std::shared_ptr<nodeInterface>
  build_tree(const fs::path &current_dir) override {
    // 1. create a root node here
    nodeInterface root_node;
    root_node.set_path(current_dir);
    root_node.update_attributes();

    // 2. set the root node by using make_shared
    root = std::make_shared<nodeInterface>(root_node);
    // 3. build tree from this root node
    build_tree_recursive(root);
    return root;
  }

private:
  /**
   * builds tree recursively from the current node as the root node
   * */
  static void
  build_tree_recursive(std::shared_ptr<nodeInterface> current_node) {

    // 1. iterate through all the ENTRIES in the current directory
    for (const auto &entry : fs::directory_iterator(current_node->path)) {

      // 2. create a child node for each entry
      std::shared_ptr<nodeInterface> child = std::make_shared<nodeInterface>();
      child->set_path(entry.path());
      child->update_attributes();

      // 3. add the child to children vector of the current node
      current_node->add_child(child);

      // 4. if the child is a folder, recursively call this function
      if (child->is_folder) {
        // TODO: create a file called .codeIgnore to ignore files
        if (child->name == ".git") {
          continue;
        }
        // call dirTree's static function to build tree recursively for the
        // child
        else {
          build_tree_recursive(child);
        }
      }
    }
  };
};

#endif
