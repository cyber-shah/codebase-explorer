
const fs = require('fs');
const path = require('path');
const Controller = require('./controller/controller');
const CliPrint = require('./view/cliPrint');

const main = () => {

  const view = new CliPrint();

  const controller = new Controller(view);
  const currentPath = process.cwd(); // Get the current working directory

  controller.buildTree(currentPath);
  controller.parseDependencies();
  controller.showDirTree();
  controller.showDepTree();
};

main();
