import fs from 'fs';
import { DepTreeManager } from '../model/depTree.js'
import { DirTreeManager } from '../model/dirTree.js'

class Controller {
  constructor(view) {
    this.view = view;
    this.dirTree = new DirTreeManager();
    this.depTree = new DepTreeManager(this.dirTree);
    this.root = null;
    // Additional initialization if needed
  }

  /**
   * @brief Build the tree
   * Takes no arguments but passes the current path to the tree builder
   */
  async buildTree(path) {
    this.root = await this.dirTree.buildTree(path);
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

export { Controller };
