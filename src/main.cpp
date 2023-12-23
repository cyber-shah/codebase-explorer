#include "controller/controller.h"
#include "model/dirTree.h"
#include "view/cliPrint.h"

int main() {
  cliPrint view;

  Controller con(view);
  con.build_tree(std::filesystem::current_path());
  con.parse_dependencies();
  con.show_tree();
  con.show_dependencies();
}
