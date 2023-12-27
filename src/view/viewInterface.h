#ifndef VIEWINTERFACE_H
#define VIEWINTERFACE_H
#include "../model/treeInterface.h"
#include <iostream>
#include <memory>

class viewInterface {
public:
  // pure virtual function to show the tree can be passed any treeInterface
  // and can be implemented by both CLI and GUI
  virtual void
  show_dir_tree(const std::shared_ptr<nodeInterface> root) const = 0;

  virtual void
  show_dep_tree(const std::shared_ptr<nodeInterface> root) const = 0;

  // virtual destructor
  virtual ~viewInterface() = default;
};

#endif // VIEWINTERFACE
