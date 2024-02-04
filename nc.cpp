
#include <cmath>
#include <iostream>

int main() {
  for (int i = 0; i < 1000000; ++i) {
    double result = 0.0;
    for (int j = 0; j < 100; ++j) {
      result += std::sin(j) * std::cos(j);
    }
    std::cout << result << std::endl;
  }
  return 0;
}
