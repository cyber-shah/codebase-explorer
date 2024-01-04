const fs = require('fs');

class DirTreeManager {
  constructor() {
    this.dirRoot = null;
    this.dirMap = new Map();
  }

  /**
   * @brief Builds the tree from the current directory
   * @param currentDir - The current directory
   * @return The root node of the tree
   */
  buildTree(currentDir) {
    // 1. Create a root node here
    const root = {
      path: currentDir,
      children: [],
      isFolder: true,
      name: '',
      // Add any other attributes you need from update_attributes()
    };

    // 2. Set the root node
    this.dirRoot = root;
    this.dirMap.set(pathRelative(root.path), root);

    // 3. Build tree from this root node
    this.buildTreeRecursive(root);
    return root;
  }

  /**
   * @brief Finds a node by path
   * @param pathToNode - The path to the node
   * @return The found node or null if not found
   */
  findNodeByPath(pathToNode) {
    return this.dirMap.get(pathRelative(pathToNode)) || null;
  }

  /**
   * @brief Finds a node by name
   * @param nodeName - The name of the node
   * @return The found node or null if not found
   */
  findNodeByName(nodeName) {
    for (const [_, node] of this.dirMap) {
      if (node && node.name === nodeName) {
        return node;
      }
    }
    return null;
  }

  /**
   * Builds tree recursively from the current node as the root node
   */
  buildTreeRecursive(currentNode) {
    // 1. Iterate through all the entries in the current directory
    for (const entry of fs.readdirSync(currentNode.path)) {
      // 2. Create a child node for each entry
      const child = {
        path: entry,
        children: [],
        isFolder: fs.statSync(entry).isDirectory(),
        name: '', // Add any other attributes you need from update_attributes()
      };

      // 3. Add the child to the children array of the current node
      currentNode.children.push(child);
      this.dirMap.set(pathRelative(child.path), child);

      // 4. If the child is a folder, recursively call this function
      if (child.isFolder) {
        // TODO: Check for conditions to ignore certain folders (like ".git")
        if (child.name === '.git') {
          continue;
        }
        // Recursively build tree for the child
        this.buildTreeRecursive(child);
      }
    }
  }
}

function pathRelative(path) {
  // Use path relative to the current working directory
  return path;
}

module.exports = DirTreeManager;
