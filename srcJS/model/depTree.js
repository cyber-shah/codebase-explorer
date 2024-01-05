import fs from 'fs';


class DepTreeManager {
  constructor(dirTree) {
    this.dirTree = dirTree;
  }

  parseDependencies(root) {
    this.parseDependenciesRecursive(root);
  }

  parseDependenciesRecursive(root) {
    const inputFile = fs.createReadStream(root.path);

    // TODO: change this to output to a view object later
    inputFile.on('error', (err) => {
      console.error(`Could not open file ${root.path}`, err);
    });

    inputFile.on('data', (chunk) => {
      let lines = chunk.toString().split('\n');

      lines.forEach((line) => {
        // trim the line
        if (line.trim().length === 0) return;

        // check if the line starts with #include
        if (line.trim().startsWith('#include')) {
          // Extract the name of the file
          const match = line.match(/["<](.+?)[">]/);

          if (match && match[1]) {
            const fileName = match[1];
            // Extract just the filename from the path
            const extractedName = fileName.split('/').pop();

            const child = this.dirTree.findNodeByName(extractedName);
            if (child !== null) {
              root.addChildDep(child);
              root.depChildren.forEach((child) => {
                console.log(`${root.name} Depends on: ${child.name}`);
              });
            }
          }
        }
      });
    });

    inputFile.on('end', () => {
      inputFile.close();
    });
  }
}

export { DepTreeManager };
