#ifndef CLIPRINT_H
#define CLIPRINT_H
#include "viewInterface.h"
#include <iostream>
#include <stack>
using namespace std;

class cliPrint : public viewInterface {
public:
  // Constructor
  cliPrint() {}

  void show_tree(const nodeInterface &root) const override {
    stack<const nodeInterface *> nodeStack;
    nodeStack.push(&root);

    while (!nodeStack.empty()) {
      const nodeInterface *currentNode = nodeStack.top();
      nodeStack.pop();

      // Print the current node
      cout << currentNode->name << endl;

      // Push children onto the stack
      for (const auto &child : currentNode->children) {
        nodeStack.push(&child);
      }
    }
  }

  void handle_input() const override { return; }

  void show_error(const string &error_message) const override { return; }
};

#endif // CLIPRINT_H
