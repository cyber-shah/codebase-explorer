import fs from 'fs';
import path from 'path';


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
  async buildTree(currentDir) {
    // 1. Create a root node here
    const root = {
      path: currentDir,
      dirChildren: [],
      isFolder: true,
      name: path.basename(currentDir),
    };

    // 2. Set the root node
    this.dirRoot = root;
    //TODO: add setters here.

    // 3. Build tree from this root node
    await this.buildTreeRecursive(root);
    return root;
  }


  /**
   * Builds tree recursively from the current node as the root node
   */
  async buildTreeRecursive(currentNode) {

    // wait out for the entries to be read
    const entries = await fs.promises.readdir(currentNode.path);

    // 1. Iterate through all the entries in the current directory
    for (const entry of entries) {
      const entryPath = path.join(currentNode.path, entry);
      const stats = await fs.promises.stat(entryPath);

      // 2. Create a child node for each entry
      const child = {
        path: entry,
        dirChildren: [],
        isFolder: stats.isDirectory(),
        name: path.basename(entry),
        size: stats.size,
      };

      // 3. Add the child to the children array of the current node
      currentNode.dirChildren.push(child);
      this.dirMap.set(child.path, child);

      // 4. If the child is a folder, recursively call this function
      if (child.isFolder) {
        // TODO: Check for conditions to ignore certain folders (like ".git")
        if (child.name === '.git') {
          continue;
        }
        // Recursively build tree for the child
        await this.buildTreeRecursive(child);
      }
    }
  }


}

export { DirTreeManager };
