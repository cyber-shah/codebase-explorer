#include "../view/viewInterface.h"
using namespace std;
namespace fs = std::filesystem;

class Controller {
  viewInterface &view;
  treeInterface &treeType;

  // Constructor
  Controller(viewInterface &view, treeInterface &treeType)
      : view(view), treeType(treeType) {}

  void build_tree() { treeType.build_tree(fs::current_path()); }

  void show_tree() { view.show_tree(treeType); }
};
