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
    // stack of pointers to nodeInterfaces
    stack<std::shared_ptr<nodeInterface>> nodeStack;
    nodeStack.push(root);

    while (!nodeStack.empty()) {
      const std::shared_ptr<nodeInterface> currentNode = nodeStack.top();
      nodeStack.pop();

      // Print the current node
      cout << currentNode->name << endl;

      // Push children onto the stack
      for (const auto child : currentNode->children) {
        nodeStack.push(child);
      }
    }
  }

  void handle_input() const override { return; }

  void show_error(const string &error_message) const override { return; }
};

#endif // CLIPRINT_H
