
#include "FileManagerNode.h"
using namespace std;

int main() {
  FileManagerNode root = FileManagerNode::build_tree(fs::current_path());

  cout << "\n\nPrinting tree: \n";

  root.print_tree();
  return 0;
}
