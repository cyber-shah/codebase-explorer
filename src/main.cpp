#include "controller/controller.h"
#include "view/cliPrint.h"
#include "view/jsonView.h"

int main() {
  jsonView view;

  Controller con(view);
  con.build_tree(std::filesystem::current_path());
  con.parse_dependencies();
  con.show_dir_tree();
  con.show_dependencies();
}
