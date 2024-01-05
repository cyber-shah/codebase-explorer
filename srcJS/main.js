import { Controller } from './controller/controller.js';

const inputPath = process.cwd();
console.log(`Input path: ${inputPath}`);

const main = async (inputPath) => {
  const controller = new Controller();

  await controller.buildDirTree(inputPath);
  controller.exportDepTree();

  console.log(controller.exportDepTree());
};

main(inputPath.toString());

