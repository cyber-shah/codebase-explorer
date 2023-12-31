import { DepTreeManager } from '../model/depTree.js'
import { DirTreeManager } from '../model/dirTree.js'

class Controller {
  constructor() {
    this.dirTree = new DirTreeManager();
    this.depTree = new DepTreeManager(this.dirTree);
    this.root = null;
    // Additional initialization if needed
  }

  /**
   * @brief Build the tree
   * Takes no arguments but passes the current path to the tree builder
   */
  async buildDirTree(path) {
    this.root = await this.dirTree.buildDirTree(path);
  }

  parseDependencies() {
    this.depTree.parseDependencies(this.root);
  }

  printAllNodes() {
    const jsonstring = JSON.stringify(this.dirTree.dirMap, null, 2);
    console.log(jsonstring);
  }

  /**
   * Export the dependency tree as a JSON-formatted string
   * @returns {string} JSON-formatted string
   */
  exportDirTree() {
    const jsonstring = JSON.stringify(this.root, null, 2);;
    return jsonstring;
  }
}

export { Controller };
