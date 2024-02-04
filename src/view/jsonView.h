#ifndef JSONVIEW_H
#define JSONVIEW_H
#include "viewInterface.h"
#include <memory>
#include <nlohmann/json.hpp>

using json = nlohmann::json;
using namespace std;

/**
 * This class converts the dirMap - which is a hashmap of nodes
 * into a json object
 */
class jsonView : public viewInterface {
public:
  json dir_tree;
  json dep_tree;
  json cpu_tree;
  json mem_tree;

  // Constructor
  jsonView() {}

  // TODO: also store pointers to the nodes
  void show_dir_tree(const std::shared_ptr<nodeInterface> root) override {
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
    add_children_recursive_dir(dir_tree["root_node"], root);
    cout << dir_tree.dump(2) << endl;
  };

  void show_dep_tree(const std::shared_ptr<nodeInterface> root) override {
    // create the root json object
    json dep_tree;

    // start from each file
    // create a stack that creates like a TREE of that node and its dependencies
    // then add that tree to the dep_tree
  }

private:
  void add_children_recursive_dir(json &dir_tree,
                                  std::shared_ptr<nodeInterface> root) {

    // create an array for children at this level
    json dir_children_array = json::array();
    json dep_children_array = json::array();

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
        add_children_recursive_dir(child_json, child.second);
      }

      // add the child_json to the array for children at this level
      dir_children_array.push_back(child_json);
    }

    // add the array of children to the root json object
    dir_tree["dir_children"] = dir_children_array;
  }

  /**
   * Recursively add children to the dep_tree
   * 1. Create a json object for each child
   * 2. Add the children to the root json object
   * 3. If the child has children, add them recursively
   */
  void add_children_recursive_dep(json &dep_tree,
                                  std::shared_ptr<nodeInterface> root) const {

    json dep_children_array = json::array();

    for (auto &child : root->dep_children) {
      // create a json object for the child
      json child_json;
      child_json["name"] = child.second->name;
      child_json["path"] = child.second->path;
      child_json["size"] = child.second->size;
      child_json["is_folder"] = child.second->is_folder;
      // if child has children, add them recursively
      // dir children is going to be a pair of path and node pointer
      if (!child.second->dep_children.empty()) {
        add_children_recursive_dir(child_json, child.second);
      }
      // add the child_json to the array for children at this level
      dep_children_array.push_back(child_json);
    }
    // add the array of children to the root json object
    dep_tree["dep_children"] = dep_children_array;
  }

  // TODO: figure out why doesn't this work
  /**
  void add_children_recursive(json &dir_tree,
                              std::shared_ptr<nodeInterface> root) const {

    // create an array for children at this level
    dir_tree["children"] = json::array();

    // for all children craete a json object and add it to root's children
    for (auto &child : root->dir_children) {
      // create a json object for the child
      json child_json;
      child_json["name"] = child.second->name;
      child_json["path"] = child.second->path;
      child_json["size"] = child.second->size;
      child_json["is_folder"] = child.second->is_folder;

      dir_tree["children"].push_back(child_json);

      // if child has children, add them recursively
      // dir children is going to be a pair of path and node pointer
      if (!child.second->dir_children.empty()) {
        add_children_recursive(child_json, child.second);
      }
    }
  }
*/
};

#endif // DEBUG
