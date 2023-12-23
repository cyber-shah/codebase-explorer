#ifndef TREEINTERFACE_H
#define TREEINTERFACE_H
#include "nodeInterface.h"
#include <filesystem>
#include <memory>

class treeInterface {
public:
  std::shared_ptr<nodeInterface> dirRoot;

  virtual std::shared_ptr<nodeInterface>
  build_tree(const std::filesystem::path &current_dir) = 0;

  virtual ~treeInterface() = default;
};

#endif // TREEINTERFACE_H
