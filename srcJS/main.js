import fs from 'fs';
import { Controller } from './controller/controller.js';
import { CliPrint } from './view/cliPrint.js';


const main = async () => {
  const view = new CliPrint();
  const controller = new Controller(view);
  const currentPath = process.cwd(); // Get the current working directory

  await controller.buildTree(currentPath);
  controller.showDirTree();

};

main();

