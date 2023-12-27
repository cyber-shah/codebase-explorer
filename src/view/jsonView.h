#ifndef JSONVIEW_H
#define JSONVIEW_H
#include "viewInterface.h"
#include <memory>
#include <nlohmann/json.hpp>

using json = nlohmann::json;
using namespace std;

class jsonView : public viewInterface {
public:
  json dir_tree;
  json dep_tree;
  json cpu_tree;
  json mem_tree;

  // Constructor
  jsonView() {}

  void show_dir_tree(const std::shared_ptr<nodeInterface> root) const override {
    // create the root json object
    json dir_tree;

    dir_tree["root_node"] = {
        {"ptr", reinterpret_cast<std::uintptr_t>(root.get())},
        {"name", root->name},
        {"path", root->path},
        {"size", root->size}};

    // add each child recursively
    add_children_recursive(dir_tree["root_node"], root);
    cout << dir_tree.dump(2) << endl;
  };

  void show_dep_tree(const std::shared_ptr<nodeInterface> root) const override {
  }

private:
  void add_children_recursive(json &dir_tree,
                              std::shared_ptr<nodeInterface> root) const {

    // iterate through the children
    for (auto &child : root->dir_children) {
      // create a json object for the child
      json child_json;
      child_json["name"] = child.second->name;
      child_json["path"] = child.second->path;
      child_json["size"] = child.second->size;

      // add the child to the root json object
      dir_tree["children"].push_back(child_json);

      // if child has children, add them recursively
      if (child.second->dir_children.size() > 0) {
        add_children_recursive(child_json, child.second);
      }
    }
  }
};

#endif // DEBUG
