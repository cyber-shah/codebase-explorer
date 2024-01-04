
const fs = require('fs');

class NodeInterface {
  constructor() {
    this.name = '';
    this.isFolder = false;
    this.path = '';
    this.dirChildren = new Map();
    this.depChildren = new Map();
    this.sizeInBytes = 0;
  }

  setPath(path) {
    this.path = path;
  }

  /**
   * @brief updateAttributes updates the attributes of the node
   * updates the attributes of the node by using the path
   */
  updateAttributes() {
    this.setName(fs.path.basename(this.path));
    this.setIsFolder(fs.statSync(this.path).isDirectory());
    this.setSize();
  }

  /**
   * @brief addChildDir adds a child to the node
   * adds a child to the node by using the path
   */
  addChildDir(child) {
    this.dirChildren.set(pathRelative(child.path), child);
  }

  addChildDep(child) {
    this.depChildren.set(pathRelative(child.path), child);
  }

  setName(name) {
    this.name = name;
  }

  setIsFolder(isFolder) {
    this.isFolder = isFolder;
  }

  /**
   * @brief setSize sets the size of the node
   * sets the size of the node by using the path
   */
  setSize() {
    if (!this.isFolder) {
      this.sizeInBytes = fs.statSync(this.path).size;
    }
  }
}

function pathRelative(path) {
  // Use path relative to the current working directory
  return path;
}

module.exports = NodeInterface;
