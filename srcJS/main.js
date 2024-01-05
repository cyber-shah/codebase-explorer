import fs from 'fs';
import { Controller } from './controller/controller.js';
import { CliPrint } from './view/cliPrint.js';


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

