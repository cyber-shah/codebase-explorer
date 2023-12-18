#include "../model/treeInterface.h"
#include "../view/viewInterface.h"

#include <filesystem>

class Controller {
public:
  viewInterface &view;
  treeInterface &treeType;

  // Constructor
  Controller(viewInterface &view, treeInterface &treeType)
      : view(view), treeType(treeType) {}

  /**
   * @brief Build the tree
   * Takes no arguments but passes the current path to the tree builder
   */
  void build_tree(std::filesystem::path path) { treeType.build_tree(path); }

  void show_tree() { view.show_tree(treeType.root); }

private:
};
