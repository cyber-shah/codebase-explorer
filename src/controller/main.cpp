
#include "../model/dirTree.h"
#include <filesystem>
using namespace std;
namespace fs = std::filesystem;

int main() {
  // Create a root
  dirTree root = dirTree::build_tree(fs::current_path());
  cout << "\n\nPrinting tree: \n";

  root.print_tree();
  return 0;
}
