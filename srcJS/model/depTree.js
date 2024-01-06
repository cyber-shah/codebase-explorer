import fs from 'fs';
import path from 'path';


class DepTreeManager {
  constructor(dirTree) {
    this.dirTree = dirTree;
  }

  parseDependencies(currentDir) {
    root = {
      path: currentDir,
      children: [],
      name: path.basename(currentDir)
    };
    this.parseDependenciesRecursive(currentDir);
  }

  parseDependenciesRecursive(root) {
    try {
      const fileContent = fs.readFileSync(root.path, 'utf8');
      let lines = fileContent.split('\n');

      lines.forEach((line) => {
        // trim the line
        if (line.trim().length === 0) return;

        // check if the line starts with #include
        if (line.trim().startsWith('#include')) {
          // Extract the name of the file
          const match = line.match(/["<](.+?)[">]/);


          // if there is a match and there is atleast one item in the match
          if (match !== null && match[1] !== null) {
            const fileName = match[1];
            // Extract just the filename from the path


          }
        }
      });
    } catch (err) {
      console.error(`Could not open file ${root.path}`, err);
    }
  }
}

export { DepTreeManager };
