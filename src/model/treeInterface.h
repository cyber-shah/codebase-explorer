#ifndef TREEINTERFACE_H
#define TREEINTERFACE_H
#include <filesystem>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

/**
 * @brief The dirTreeNode defines a node in the dirTree
 * */
class dirTreeNode {
public:
  string name;
  bool is_folder;
  vector<dirTreeNode> children;
  fs::path path;

  // Constructor
  // NOTE: passing as consts help us in making sure it is not modified inside
  // the function
  dirTreeNode(const string &node_name, const bool &is_folder_bool,
              const fs::path &in_path)
      : name(node_name), is_folder(is_folder_bool), path(in_path) {}
};

class treeInterface {
public:
  virtual dirTreeNode build_tree(const fs::path &current_dir);

  virtual ~treeInterface() = default;
};

#endif // TREEINTERFACE_H
