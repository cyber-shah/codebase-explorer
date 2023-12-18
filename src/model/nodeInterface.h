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
