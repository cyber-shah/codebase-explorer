#ifndef TREEINTERFACE_H
#define TREEINTERFACE_H
#include "nodeInterface.h"
#include <filesystem>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

class treeInterface {
public:
  std::shared_ptr<nodeInterface> root;

  virtual std::shared_ptr<nodeInterface>
  build_tree(const fs::path &current_dir) = 0;

  virtual ~treeInterface() = default;
};

#endif // TREEINTERFACE_H
