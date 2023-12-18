// #ifndef DIR_TREE_NODE_H
// #define DIR_TREE_NODE_H
//
// #include "nodeInterface.h"
// #include <filesystem>
// #include <memory>
// #include <string>
// #include <vector>

// /**
//  * @brief The dirTreeNode defines a node in the dirTree
//  * */
// class dirTreeNode : public nodeInterface {
// public:
//   // Constructor
//   // NOTE: Passing as consts helps us ensure they are not modified inside the
//   // function
//   dirTreeNode(const std::string &node_name, const bool &is_folder_bool,
//               const std::filesystem::path &in_path)
//       : nodeInterface(node_name, is_folder_bool, in_path) {}
// };
//
// #endif // DIR_TREE_NODE_H
