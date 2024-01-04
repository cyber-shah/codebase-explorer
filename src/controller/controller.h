#include "../model/depTree.h"
#include "../model/dirTree.h"
#include "../view/viewInterface.h"
#include <filesystem>

class Controller {
public:
  viewInterface &view;
  dirTreeManager dirTree;
  depTreeManager depTree;
  std::shared_ptr<nodeInterface> root;

  // Constructor
  Controller(viewInterface &view)
      : view(view), dirTree(), depTree(this->dirTree) {
    // Additional initialization if needed
  }

  /**
   * @brief Build the tree
   * Takes no arguments but passes the current path to the tree builder
   */
  void build_tree(std::filesystem::path path) {
    this->root = dirTree.build_tree(path);
  }

  void parse_dependencies() { depTree.parse_dependencies(root); }
  void show_dir_tree() { view.show_dir_tree(dirTree.dirRoot); }

  void show_dep_tree() { view.show_dep_tree(dirTree.dirRoot); }

private:
};
