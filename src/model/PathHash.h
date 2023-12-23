#ifndef PATHHASH_H

#define PATHHASH_H
#include <filesystem>

struct PathHash {
  std::size_t operator()(const std::filesystem::path &p) const {
    return std::filesystem::hash_value(p);
  }
};

#endif // !DEBUG
