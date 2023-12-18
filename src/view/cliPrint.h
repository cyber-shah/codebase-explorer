#ifndef CLIPRINT_H
#define CLIPRINT_H
#include "viewInterface.h"
#include <iostream>
#include <memory>
#include <stack>
using namespace std;

class cliPrint : public viewInterface {
public:
  // Constructor
  cliPrint() {}

  // TODO: check how to optimize this function instead of making copies of
  // pointers

  void show_tree(const std::shared_ptr<nodeInterface> root) const override {
    // stack of pairs: node pointer and depth
    std::stack<std::pair<std::shared_ptr<nodeInterface>, int>> nodeStack;
    nodeStack.push({root, 0});

    while (!nodeStack.empty()) {
      auto [currentNode, depth] = nodeStack.top();
      nodeStack.pop();

      // Print indentation
      for (int i = 0; i < depth; ++i) {
        std::cout << "|   ";
      }

      // Print the current node
      std::cout << "|-- " << currentNode->name << currentNode->sizeInBytes
                << std::endl;

      // Push children onto the stack with increased depth
      for (const auto &child : currentNode->children) {
        nodeStack.push({child, depth + 1});
      }
    }
  }

  void handle_input() const override { return; }

  void show_error(const string &error_message) const override { return; }
};

#endif // CLIPRINT_H
