#ifndef DIRTREE_H
#define DIRTREE_H

#include "PathHash.h"
#include "nodeInterface.h"
#include "treeInterface.h"
#include <filesystem>
#include <fstream>
#include <iostream>
#include <memory>
#include <ostream>
#include <sstream>
#include <string>
#include <unordered_map>

using namespace std;
namespace fs = std::filesystem;

/**
 * @brief The dirTree class defines a directory tree
 * */
class dirTreeManager {
public:
  std::shared_ptr<nodeInterface> dirRoot;
  unordered_map<fs::path, std::shared_ptr<nodeInterface>, PathHash> dirMap;

  /** Constructor */
  dirTreeManager() {}

  /*
   * @brief build_tree builds the tree from the current directory
   * @param current_dir the current directory
   * @return the root node of the tree
   * */
  std::shared_ptr<nodeInterface> build_tree(const fs::path &current_dir) {
    // 1. create a root node here

    std::shared_ptr<nodeInterface> root_node =
        std::make_shared<nodeInterface>();
    root_node->set_path(current_dir);
    root_node->update_attributes();

    // 2. set the root node by using make_shared
    this->dirRoot = root_node;
    dirMap.insert_or_assign(fs::relative(dirRoot->path), dirRoot);
    // 3. build tree from this root node
    build_tree_recursive(dirRoot);
    return dirRoot;
  }

  std::shared_ptr<nodeInterface>
  find_node_by_path(const fs::path &path_to_node) {
    auto node = dirMap.find(path_to_node);
    if (node != dirMap.end()) {
      return node->second;
    } else {
      return nullptr;
    }
  }

  std::shared_ptr<nodeInterface>
  find_node_by_name(const std::string &nodeName) {
    for (const auto &entry : dirMap) {
      const auto &node = entry.second;
      // Assuming node has a 'name' member
      if (node && node->name == nodeName) {
        return node;
      }
    }
    // Node with the given name not found
    return nullptr;
  }

private:
  /**
   * builds tree recursively from the current node as the root node
   * */
  void build_tree_recursive(std::shared_ptr<nodeInterface> current_node) {

    // 1. iterate through all the ENTRIES in the current directory
    for (const auto &entry : fs::directory_iterator(current_node->path)) {

      // 2. create a child node for each entry
      std::shared_ptr<nodeInterface> child = std::make_shared<nodeInterface>();
      child->set_path(entry.path());
      child->update_attributes();

      // 3. add the child to children vector of the current node
      current_node->add_child_dir(child);
      dirMap.emplace(fs::relative(child->path), child);

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
