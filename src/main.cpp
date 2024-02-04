#include "controller/controller.h"
#include "view/terminalView.h"

int main() {
  terminalView term_view;

  Controller con(term_view);
  con.build_tree(std::filesystem::current_path());
  con.parse_dependencies();
  con.show_dir_tree();
  con.show_dep_tree();
}
