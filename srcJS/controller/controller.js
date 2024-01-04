const fs = require('fs');
const dirTreeManager = require('../model/dirTree');
const depTreeManager = require('../model/depTree');

class Controller {
  constructor(view) {
    this.view = view;
    this.dirTree = new dirTreeManager();
    this.depTree = new depTreeManager(this.dirTree);
    this.root = null;
    // Additional initialization if needed
  }

  /**
   * @brief Build the tree
   * Takes no arguments but passes the current path to the tree builder
   */
  buildTree(path) {
    this.root = this.dirTree.buildTree(path);
  }

  parseDependencies() {
    this.depTree.parseDependencies(this.root);
  }

  showDirTree() {
    this.view.showDirTree(this.dirTree.dirRoot);
  }

  showDepTree() {
    this.view.showDepTree(this.dirTree.dirRoot);
  }
}

module.exports = Controller;
