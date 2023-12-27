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
        {"size", root->size},
        {"is_folder", root->is_folder},
    };

    // add each child recursively
    add_children_recursive(dir_tree["root_node"], root);
    cout << dir_tree.dump(2) << endl;
  };

  void show_dep_tree(const std::shared_ptr<nodeInterface> root) const override {
  }

private:
  /**
  void add_children_recursive(json &dir_tree,
                              std::shared_ptr<nodeInterface> root) const {

    // create an array for children at this level
    json children_array = json::array();

    // iterate through the children
    for (auto &child : root->dir_children) {
      // create a json object for the child
      json child_json;
      child_json["name"] = child.second->name;
      child_json["path"] = child.second->path;
      child_json["size"] = child.second->size;
      child_json["is_folder"] = child.second->is_folder;

      // if child has children, add them recursively
      // dir children is going to be a pair of path and node pointer
      if (!child.second->dir_children.empty()) {
        add_children_recursive(child_json, child.second);
      }

      // add the child_json to the array for children at this level
      children_array.push_back(child_json);
    }

    // add the array of children to the root json object
    dir_tree["children"] = children_array;
  }
  */

  void add_children_recursive(json &dir_tree,
                              std::shared_ptr<nodeInterface> root) const {
    // for all children craete a json object and add it to root's children
    for (auto &child : root->dir_children) {
      // create a json object for the child
      json child_json;
      child_json["name"] = child.second->name;
      child_json["path"] = child.second->path;
      child_json["size"] = child.second->size;
      child_json["is_folder"] = child.second->is_folder;

      dir_tree["children"] = json::array();
      dir_tree["children"].push_back(child_json);

      // if child has children, add them recursively
      // dir children is going to be a pair of path and node pointer
      if (!child.second->dir_children.empty()) {
        add_children_recursive(child_json, child.second);
      }
    }
  }
};

#endif // DEBUG
