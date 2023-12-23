#include "../model/depTree.h"
#include "../model/dirTree.h"
#include "../model/treeInterface.h"
#include "../view/viewInterface.h"
#include <filesystem>

class Controller {
public:
  viewInterface &view;
  dirTreeManager dirTree;
  depTreeManager depTree;
  std::shared_ptr<nodeInterface> root;

  // Constructor
  Controller(viewInterface &view) : view(view), dirTree(), depTree() {
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
  void show_tree() { view.show_tree(dirTree.dirRoot); }

private:
};
