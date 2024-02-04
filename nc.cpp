
#include <chrono>
#include <gperftools/profiler.h>
#include <iostream>
#include <thread>

void performIntensiveTask() {
  // Simulate some CPU-intensive work
  for (int i = 0; i < 1000000; ++i) {
    double result = sqrt(i * 3.14);
    // Avoid compiler optimization by using the result
    if (result < 0)
      std::cout << "Should not happen!";
  }
}

int main() {
  // Start CPU profiling
  ProfilerStart("profile_output.prof");

  // Your program logic goes here

  std::cout << "Performing intensive task..." << std::endl;
  performIntensiveTask();

  // Simulate some additional work
  std::this_thread::sleep_for(std::chrono::seconds(2));

  std::cout << "Done with intensive task." << std::endl;

  // Stop CPU profiling
  ProfilerStop();

  return 0;
}
