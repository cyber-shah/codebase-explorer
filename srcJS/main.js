import { Controller } from './controller/controller.js';

const inputPath = process.cwd();

const main = async (inputPath) => {
  const controller = new Controller();

  await controller.buildDirTree(inputPath);
  controller.printAllNodes();
  console.log(controller.exportDirTree());
  return {
    dirTree: controller.exportDirTree(),
  }
};

main(inputPath.toString());

export { main };
