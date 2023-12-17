#ifndef CLIPRINT_H
#define CLIPRINT_H
#include "viewInterface.h"
using namespace std;

class cliPrint : public viewInterface {
public:
  // Constructor
  cliPrint() {}
  // Recursive function to print all the child nodes
  void show_tree(const treeInterface &root) const override {}

  void handle_input() const override {}

  void show_error(string error_message) const override {}
};

#endif // CLIPRINT_H
