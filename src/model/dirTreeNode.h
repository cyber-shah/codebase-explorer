#ifndef DIR_TREE_NODE_H
#define DIR_TREE_NODE_H

#include "nodeInterface.h"
#include <filesystem>
#include <memory>
#include <string>
#include <vector>

/**
 * @brief The dirTreeNode defines a node in the dirTree
 * */
class dirTreeNode : public nodeInterface {
public:
  string name;
  bool is_folder;
  // TODO: see if we can use unique_ptr here
  vector<std::shared_ptr<nodeInterface>> children;
  std::filesystem::path path;

  // Constructor
  // NOTE: passing as consts help us in making sure it is not modified inside
  // the function
  dirTreeNode(const string &node_name, const bool &is_folder_bool,
              const std::filesystem::path &in_path)
      : name(node_name), is_folder(is_folder_bool), path(in_path) {}
};

#endif // DIR_TREE_NODE_H
