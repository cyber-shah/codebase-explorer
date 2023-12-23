#ifndef VIEWINTERFACE_H
#define VIEWINTERFACE_H
#include "../model/treeInterface.h"
#include <iostream>
#include <memory>

class viewInterface {
public:
  // pure virtual function to show the tree can be passed any treeInterface
  // and can be implemented by both CLI and GUI
  virtual void show_tree(const std::shared_ptr<nodeInterface> root) const = 0;

  virtual void handle_input() const = 0;

  virtual void show_error(const std::string &error_message) const = 0;

  virtual void
  show_dependencies(const std::shared_ptr<nodeInterface> root) const = 0;
  // virtual destructor
  virtual ~viewInterface() = default;
};

#endif // VIEWINTERFACE
