
#include "../model/dirTree.h"
#include "../view/cliPrint.h"
#include "controller.h"

int main() {
  treeInterface treeType = *new dirTree();
  viewInterface view = *new cliPrint();
  //
  Controller con = new Controller(view, treeType);
  con.build_tree();
  con.show_tree();
}
