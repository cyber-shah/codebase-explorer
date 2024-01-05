import { DirTreeManager } from './model/dirTree.js';


function main() {
  const currentPath = process.cwd(); // Get the current working directory
  const dirTreeManager = new DirTreeManager();
  dirTreeManager.buildTree(currentPath);

};


main();

