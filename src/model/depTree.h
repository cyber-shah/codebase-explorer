#ifndef DEPTREE_H
#define DEPTREE_H
#include "dirTree.h"
#include "nodeInterface.h"
#include "treeInterface.h"
#include <filesystem>
#include <fstream>
#include <iostream>
#include <memory>

using namespace std;

class depTreeManager {
public:
  dirTreeManager &dirTree;

  // constructor
  depTreeManager(dirTreeManager &dirTree) : dirTree(dirTree) {}

  void parse_dependencies(std::shared_ptr<nodeInterface> root) {
    parse_dependencies_recursive(root);
  }

private:
  void parse_dependencies_recursive(std::shared_ptr<nodeInterface> root) {
    std::cout << "Parsing dependencies for " << root->path << std::endl;
    std::ifstream inputFile(root->path);

    // TODO: change this to output to a view object later
    if (!inputFile.is_open()) {
      std::cout << "Could not open file " << root->path << std::endl;
      return;
    }
    // check if this is a folder
    else if (std::filesystem::is_directory(root->path)) {
      std::cout << "This is a directory" << std::endl;
      for (const auto &child : root->dir_children) {
        parse_dependencies_recursive(child.second);
      }
      return;
    }

    // check if it ends with .cpp or .h
    else if (fs::path(root->path).extension().string() != ".cpp" &&
             fs::path(root->path).extension().string() != ".h" &&
             !fs::path(root->path).extension().empty()) {
      std::cout << "This is not a cpp or h file" << std::endl;
      return;
    }

    std::string line;

    while (std::getline(inputFile, line)) {
      // trim the line
      if (line.empty())
        continue;
      else if (line.find_first_not_of(" \t") == std::string::npos)
        continue;

      size_t first_non_space = line.find_first_not_of(" \t");
      size_t last_non_space = line.find_last_not_of(" \t");
      line = line.substr(first_non_space, last_non_space - first_non_space + 1);

      // check if the line starts with #include
      if (line.find("#include") == 0) {
        // Extract the name of the file
        size_t start = line.find_first_of("\"<") + 1;
        size_t end = line.find_last_of("\">");

        // check if the file name is valid and print it
        if (start != std::string::npos && end != std::string::npos) {
          std::string fileName = line.substr(start, end - start);
          auto child = dirTree.find_node_by_name(root->name);
          root->add_child_dep(child);
        }
      }
    }

    inputFile.close();
  }
};

#endif // !DEBUG
