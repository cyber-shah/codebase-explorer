import { ViewInterface } from "./viewInterface.js";


class CliPrint extends ViewInterface {
  constructor() {
    super();
  }

  /**
   * @brief showDirTree
   * @param root - Pointer to the root of the tree to be printed
   * @return void - Just prints the tree
   */
  showDirTree(root) {
    // Stack of pairs: node pointer and depth
    const nodeStack = [{ node: root, depth: 0 }];

    while (nodeStack.length > 0) {
      const { node: currentNode, depth } = nodeStack.pop();

      // Print indentation
      for (let i = 0; i < depth; ++i) {
        process.stdout.write("|   ");
      }

      // Print the current node
      console.log(`|-- ${currentNode.name} size: ${currentNode.size}`);

      // Push children onto the stack with increased depth
      for (const child of currentNode.dirChildren.values()) {
        nodeStack.push({ node: child, depth: depth + 1 });
      }
    }
  }

  showDepTree(root) {
  }

  handleInput() {
  }

  showError(errorMessage) {
  }
}

export { CliPrint };
