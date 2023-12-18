
#include "controller/controller.h"
#include "model/dirTree.h"
#include "view/cliPrint.h"

int main() {
  dirTreeManager treeType;
  cliPrint view;

  Controller con(view, treeType);
  con.build_tree();
  con.show_tree();
}
