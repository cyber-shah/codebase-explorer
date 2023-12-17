#include <filesystem>

using namespace std;
namespace fs = std::filesystem;

class treeInterface {
public:
  static void build_tree(const fs::path &current_dir);

  virtual ~treeInterface() = default;
};
