#ifndef NODEINTERFACE_H
#define NODEINTERFACE_H

#include "PathHash.h"
#include <filesystem>
#include <memory>
#include <unordered_map>
#include <vector>

using namespace std;
namespace fs = std::filesystem;

class nodeInterface {
public:
  string name;
  bool is_folder;
  fs::path path;
  unordered_map<fs::path, std::shared_ptr<nodeInterface>, PathHash>
      dir_children;
  unordered_map<fs::path, std::shared_ptr<nodeInterface>, PathHash>
      dep_children;
  int sizeInBytes;

  // Constructor
  nodeInterface() {}

  void set_path(fs::path path) { this->path = path; }

  /**
   * @brief update_attributes updates the attributes of the node
   * updates the attributes of the node by using the path
   * */
  void update_attributes() {
    this->set_name(path.filename());
    this->set_is_folder(fs::is_directory(path));
    this->set_size();
  }

  /**
   * @brief add_child adds a child to the node
   * adds a child to the node by using the path
   * */
  void add_child_dir(std::shared_ptr<nodeInterface> child) {
    this->dir_children.insert_or_assign(fs::relative(child->path), child);
  }

  void add_child_dep(std::shared_ptr<nodeInterface> child) {
    this->dep_children.insert_or_assign(fs::relative(child->path), child);
  }

private:
  void set_name(string name) { this->name = name; }
  void set_is_folder(bool is_folder) { this->is_folder = is_folder; }

  /**
   * @brief set_size sets the size of the node
   * sets the size of the node by using the path
   * */
  void set_size() {
    if (this->is_folder != true) {
      this->sizeInBytes = fs::file_size(path);
    }
  }
};

#endif // NODEINTERFACE_H
