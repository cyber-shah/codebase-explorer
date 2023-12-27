#ifndef JSONVIEW_H
#define JSONVIEW_H
#include "viewInterface.h"
#include <nlohmann/json.hpp>

using json = nlohmann::json;

class jsonView : public viewInterface {
public:
  json dir_tree;
  json dep_tree;
  json cpu_tree;
  json mem_tree;

  // Constructor
  jsonView() {}

  void show_dir_tree(const std::shared_ptr<nodeInterface> root) const override{

  };

#endif // DEBUG
