#ifndef TERMINAL_VIEW_H
#define TERMINAL_VIEW_H

#include "../model/nodeInterface.h"
#include "viewInterface.h"
#include <memory>
#include <ncurses.h>
#include <string>

class terminalView : public viewInterface {
public:
  int depth = 0;
  terminalView() {}

  void show_dir_tree(const std::shared_ptr<nodeInterface> root) override {
    initscr();
    start_color();
    init_pair(1, COLOR_GREEN, COLOR_BLACK);
    attron(COLOR_PAIR(1));

    printTree(root);
  }

  void show_dep_tree(const std::shared_ptr<nodeInterface> root) override{
      // Implementation of show_dep_tree
      // ...
  };

private:
  void printTree(const std::shared_ptr<nodeInterface> &node) {
    move(depth, 0);
    printw(node->name.c_str());
    refresh();
    depth++;

    for (const auto &child : node->dir_children) {
      if (!child.second->dir_children.empty()) {
        printTree(child.second);
      }
      move(depth, 0);
      printw(child.second->name.c_str());
      refresh();
      depth++;
    }
  }
};

#endif
