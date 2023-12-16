
#include "FileManagerNode.h"

int main() {
  // Example usage of FileManagerNode
  FileManagerNode root("Root", true);
  root.add_child(FileManagerNode("FolderA", true));
  root.add_child(FileManagerNode("File1.txt", false));

  root.children[0].add_child(FileManagerNode("SubfolderA1", true));
  root.children[0].add_child(FileManagerNode("SubfolderA2", true));
  root.children[0].add_child(FileManagerNode("File2.txt", false));

  // Print the file system tree
  root.print_tree();

  return 0;
}
