
class ViewInterface {
  constructor() { }

  /**
   * @brief showDirTree
   * @param root - Pointer to the root of the tree to be displayed
   * @return void - To be implemented by subclasses
   */
  showDirTree(root) {
    throw new Error('Method not implemented');
  }

  /**
   * @brief showDepTree
   * @param root - Pointer to the root of the dependency tree to be displayed
   * @return void - To be implemented by subclasses
   */
  showDepTree(root) {
    throw new Error('Method not implemented');
  }

  destructor() { }
}

module.exports = ViewInterface;
