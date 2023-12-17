#include "../model/treeInterface.h"
#include <iostream>
#include <string>

using namespace std;

class viewInterface {
public:
  // pure virtual function to show the tree can be passed any treeInterface
  // and can be implemented by both CLI and GUI
  virtual void show_tree(const treeInterface &root) const = 0;

  virtual void handle_input() const = 0;

  virtual void show_error(string error_message) const = 0;

  // virtual destructor
  virtual ~viewInterface() = default;
};
