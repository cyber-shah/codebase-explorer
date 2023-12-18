#ifndef NODEINTERFACE_H
#define NODEINTERFACE_H

#include <filesystem>
#include <memory>
#include <vector>
using namespace std;
namespace fs = std::filesystem;

class nodeInterface {
public:
  string name;
  bool is_folder;
  fs::path path;
  vector<std::shared_ptr<nodeInterface>> children;

  // Constructor
  nodeInterface(string name, bool is_folder, fs::path path)
      : name(name), is_folder(is_folder), path(path) {}
};

#endif // NODEINTERFACE_H
