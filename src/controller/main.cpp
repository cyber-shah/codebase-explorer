
#include <filesystem>
using namespace std;
namespace fs = std::filesystem;

#include "controller.h"

int main() {
  treeInterface root;
  root = root.buildTree(fs::current_path());
  controller con = con(cliView(), ;
}
