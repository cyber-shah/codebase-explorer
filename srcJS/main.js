
const fs = require('fs');
const path = require('path');
const Controller = require('./controller/controller');
const CliPrint = require('./view/cliPrint');

const main = async () => {
  const view = new CliPrint();
  const controller = new Controller(view);
  const currentPath = process.cwd(); // Get the current working directory

  try {
    // Ensure currentPath is a valid directory
    const stats = await fs.promises.stat(currentPath);
    if (!stats.isDirectory()) {
      throw new Error(`${currentPath} is not a directory.`);
    }

    controller.buildTree(currentPath);
    controller.parseDependencies();
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

main();

