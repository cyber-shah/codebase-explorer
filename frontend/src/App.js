import { Box } from '@mui/material';
import './App.css';
import LinePlot from './Components/LinePlot.js';
import ToolDrawer from './Components/ToolDrawer';
import { useState } from 'react';
import ForceTree from './Components/ForceTree';

const data2 =
{
  "dir_children": [
    {
      "dir_children": [
        {
          "is_folder": false,
          "name": "main.cpp",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/main.cpp",
          "size": 272
        },
        {
          "dir_children": [
            {
              "is_folder": false,
              "name": "viewInterface.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view/viewInterface.h",
              "size": 539
            },
            {
              "is_folder": false,
              "name": "cliPrint.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view/cliPrint.h.gch",
              "size": 13583048
            },
            {
              "is_folder": false,
              "name": "jsonView.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view/jsonView.h",
              "size": 4196
            },
            {
              "is_folder": false,
              "name": "viewInterface.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view/viewInterface.h.gch",
              "size": 12951060
            },
            {
              "is_folder": false,
              "name": "cliPrint.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view/cliPrint.h",
              "size": 1360
            }
          ],
          "is_folder": true,
          "name": "view",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/view",
          "size": 0
        },
        {
          "dir_children": [
            {
              "is_folder": false,
              "name": "nodeInterface.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/nodeInterface.h.gch",
              "size": 12942388
            },
            {
              "is_folder": false,
              "name": "depTree.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/depTree.h",
              "size": 2636
            },
            {
              "is_folder": false,
              "name": "nodeInterface.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/nodeInterface.h",
              "size": 1619
            },
            {
              "is_folder": false,
              "name": "dirTree.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/dirTree.h.gch",
              "size": 13312812
            },
            {
              "is_folder": false,
              "name": "dirTree.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/dirTree.h",
              "size": 2948
            },
            {
              "is_folder": false,
              "name": "treeInterface.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/treeInterface.h",
              "size": 359
            },
            {
              "is_folder": false,
              "name": "depTree.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/depTree.h.gch",
              "size": 13336052
            },
            {
              "is_folder": false,
              "name": "PathHash.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model/PathHash.h",
              "size": 213
            }
          ],
          "is_folder": true,
          "name": "model",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/model",
          "size": 0
        },
        {
          "dir_children": [
            {
              "is_folder": false,
              "name": "controller.h",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/controller/controller.h",
              "size": 866
            },
            {
              "is_folder": false,
              "name": "controller.h.gch",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/controller/controller.h.gch",
              "size": 13342424
            }
          ],
          "is_folder": true,
          "name": "controller",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src/controller",
          "size": 0
        }
      ],
      "is_folder": true,
      "name": "src",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/src",
      "size": 0
    },
    {
      "dir_children": [
        {
          "dir_children": [
            {
              "dir_children": [
                {
                  "is_folder": false,
                  "name": "jsonView.h.E50C0674075BFEFF.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/jsonView.h.E50C0674075BFEFF.idx",
                  "size": 3812
                },
                {
                  "is_folder": false,
                  "name": "dirTree.h.F49F4D2B5A8C5F5B.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/dirTree.h.F49F4D2B5A8C5F5B.idx",
                  "size": 2584
                },
                {
                  "is_folder": false,
                  "name": "cliPrint.h.22201174D93D6B0D.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/cliPrint.h.22201174D93D6B0D.idx",
                  "size": 1466
                },
                {
                  "is_folder": false,
                  "name": "viewInterface.h.1E86287700632800.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/viewInterface.h.1E86287700632800.idx",
                  "size": 748
                },
                {
                  "is_folder": false,
                  "name": "PathHash.h.9B6B7AF56E35C97B.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/PathHash.h.9B6B7AF56E35C97B.idx",
                  "size": 442
                },
                {
                  "is_folder": false,
                  "name": "controller.h.4A4DBF9A8360EBF9.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/controller.h.4A4DBF9A8360EBF9.idx",
                  "size": 1506
                },
                {
                  "is_folder": false,
                  "name": "depTree.h.4DF8478654547C71.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/depTree.h.4DF8478654547C71.idx",
                  "size": 2548
                },
                {
                  "is_folder": false,
                  "name": "treeInterface.h.136685C93DD96218.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/treeInterface.h.136685C93DD96218.idx",
                  "size": 666
                },
                {
                  "is_folder": false,
                  "name": "nodeInterface.h.2D7CDC4B66019B6D.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/nodeInterface.h.2D7CDC4B66019B6D.idx",
                  "size": 2178
                },
                {
                  "is_folder": false,
                  "name": "main.cpp.8825D42360AD0622.idx",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index/main.cpp.8825D42360AD0622.idx",
                  "size": 744
                }
              ],
              "is_folder": true,
              "name": "index",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd/index",
              "size": 0
            }
          ],
          "is_folder": true,
          "name": "clangd",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache/clangd",
          "size": 0
        }
      ],
      "is_folder": true,
      "name": ".cache",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cache",
      "size": 0
    },
    {
      "is_folder": true,
      "name": ".git",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.git",
      "size": 0
    },
    {
      "dir_children": [
        {
          "is_folder": false,
          "name": "launch.json",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.vscode/launch.json",
          "size": 500
        }
      ],
      "is_folder": true,
      "name": ".vscode",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.vscode",
      "size": 0
    },
    {
      "is_folder": false,
      "name": "CMakeCache.txt",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeCache.txt",
      "size": 14635
    },
    {
      "is_folder": false,
      "name": ".gitignore",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.gitignore",
      "size": 309
    },
    {
      "is_folder": false,
      "name": "a.out",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out",
      "size": 637016
    },
    {
      "is_folder": false,
      "name": "CMakeLists.txt",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeLists.txt",
      "size": 353
    },
    {
      "is_folder": false,
      "name": "README.md",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/README.md",
      "size": 381
    },
    {
      "is_folder": false,
      "name": "output.json",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/output.json",
      "size": 0
    },
    {
      "dir_children": [
        {
          "dir_children": [
            {
              "is_folder": false,
              "name": "Info.plist",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Info.plist",
              "size": 634
            },
            {
              "dir_children": [
                {
                  "dir_children": [
                    {
                      "is_folder": false,
                      "name": "a.out",
                      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources/DWARF/a.out",
                      "size": 1798775
                    }
                  ],
                  "is_folder": true,
                  "name": "DWARF",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources/DWARF",
                  "size": 0
                },
                {
                  "dir_children": [
                    {
                      "dir_children": [
                        {
                          "is_folder": false,
                          "name": "a.out.yml",
                          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources/Relocations/aarch64/a.out.yml",
                          "size": 552053
                        }
                      ],
                      "is_folder": true,
                      "name": "aarch64",
                      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources/Relocations/aarch64",
                      "size": 0
                    }
                  ],
                  "is_folder": true,
                  "name": "Relocations",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources/Relocations",
                  "size": 0
                }
              ],
              "is_folder": true,
              "name": "Resources",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents/Resources",
              "size": 0
            }
          ],
          "is_folder": true,
          "name": "Contents",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM/Contents",
          "size": 0
        }
      ],
      "is_folder": true,
      "name": "a.out.dSYM",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/a.out.dSYM",
      "size": 0
    },
    {
      "is_folder": false,
      "name": "compile_commands.json",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/compile_commands.json",
      "size": 560
    },
    {
      "is_folder": true,
      "name": "test",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/test",
      "size": 0
    },
    {
      "is_folder": false,
      "name": "Makefile",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/Makefile",
      "size": 5401
    },
    {
      "dir_children": [
        {
          "is_folder": false,
          "name": "CMakeDirectoryInformation.cmake",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/CMakeDirectoryInformation.cmake",
          "size": 684
        },
        {
          "is_folder": false,
          "name": "TargetDirectories.txt",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/TargetDirectories.txt",
          "size": 241
        },
        {
          "is_folder": false,
          "name": "progress.marks",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/progress.marks",
          "size": 2
        },
        {
          "is_folder": true,
          "name": "pkgRedirects",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/pkgRedirects",
          "size": 0
        },
        {
          "is_folder": false,
          "name": "Makefile.cmake",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/Makefile.cmake",
          "size": 3009
        },
        {
          "is_folder": false,
          "name": "Makefile2",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/Makefile2",
          "size": 3649
        },
        {
          "dir_children": [
            {
              "dir_children": [
                {
                  "is_folder": false,
                  "name": "main.cpp.o.d",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/src/main.cpp.o.d",
                  "size": 89984
                },
                {
                  "is_folder": false,
                  "name": "main.cpp.o",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/src/main.cpp.o",
                  "size": 618592
                }
              ],
              "is_folder": true,
              "name": "src",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/src",
              "size": 0
            },
            {
              "is_folder": false,
              "name": "flags.make",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/flags.make",
              "size": 495
            },
            {
              "is_folder": false,
              "name": "build.make",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/build.make",
              "size": 4756
            },
            {
              "is_folder": false,
              "name": "progress.make",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/progress.make",
              "size": 43
            },
            {
              "is_folder": false,
              "name": "link.txt",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/link.txt",
              "size": 230
            },
            {
              "is_folder": false,
              "name": "cmake_clean.cmake",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/cmake_clean.cmake",
              "size": 280
            },
            {
              "is_folder": false,
              "name": "DependInfo.cmake",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/DependInfo.cmake",
              "size": 741
            },
            {
              "is_folder": false,
              "name": "compiler_depend.internal",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/compiler_depend.internal",
              "size": 87305
            },
            {
              "is_folder": false,
              "name": "depend.make",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/depend.make",
              "size": 89
            },
            {
              "is_folder": false,
              "name": "compiler_depend.ts",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/compiler_depend.ts",
              "size": 112
            },
            {
              "is_folder": false,
              "name": "compiler_depend.make",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir/compiler_depend.make",
              "size": 176796
            }
          ],
          "is_folder": true,
          "name": "a.out.dir",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/a.out.dir",
          "size": 0
        },
        {
          "is_folder": false,
          "name": "CMakeConfigureLog.yaml",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/CMakeConfigureLog.yaml",
          "size": 39758
        },
        {
          "dir_children": [
            {
              "is_folder": false,
              "name": "CMakeSystem.cmake",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CMakeSystem.cmake",
              "size": 360
            },
            {
              "is_folder": false,
              "name": "CMakeCCompiler.cmake",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CMakeCCompiler.cmake",
              "size": 2599
            },
            {
              "dir_children": [
                {
                  "is_folder": true,
                  "name": "tmp",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdC/tmp",
                  "size": 0
                },
                {
                  "is_folder": false,
                  "name": "CMakeCCompilerId.o",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdC/CMakeCCompilerId.o",
                  "size": 1712
                },
                {
                  "is_folder": false,
                  "name": "CMakeCCompilerId.c",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdC/CMakeCCompilerId.c",
                  "size": 27030
                }
              ],
              "is_folder": true,
              "name": "CompilerIdC",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdC",
              "size": 0
            },
            {
              "is_folder": false,
              "name": "CMakeDetermineCompilerABI_C.bin",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CMakeDetermineCompilerABI_C.bin",
              "size": 17000
            },
            {
              "is_folder": false,
              "name": "CMakeCXXCompiler.cmake",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CMakeCXXCompiler.cmake",
              "size": 5596
            },
            {
              "dir_children": [
                {
                  "is_folder": true,
                  "name": "tmp",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdCXX/tmp",
                  "size": 0
                },
                {
                  "is_folder": false,
                  "name": "CMakeCXXCompilerId.cpp",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdCXX/CMakeCXXCompilerId.cpp",
                  "size": 26804
                },
                {
                  "is_folder": false,
                  "name": "CMakeCXXCompilerId.o",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdCXX/CMakeCXXCompilerId.o",
                  "size": 1712
                }
              ],
              "is_folder": true,
              "name": "CompilerIdCXX",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CompilerIdCXX",
              "size": 0
            },
            {
              "is_folder": false,
              "name": "CMakeDetermineCompilerABI_CXX.bin",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1/CMakeDetermineCompilerABI_CXX.bin",
              "size": 16984
            }
          ],
          "is_folder": true,
          "name": "3.28.1",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/3.28.1",
          "size": 0
        },
        {
          "is_folder": false,
          "name": "cmake.check_cache",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles/cmake.check_cache",
          "size": 85
        }
      ],
      "is_folder": true,
      "name": "CMakeFiles",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/CMakeFiles",
      "size": 0
    },
    {
      "dir_children": [
        {
          "dir_children": [
            {
              "dir_children": [
                {
                  "is_folder": true,
                  "name": "query",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake/api/v1/query",
                  "size": 0
                },
                {
                  "dir_children": [
                    {
                      "is_folder": false,
                      "name": "index-2023-12-28T00-45-49-0413.json",
                      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake/api/v1/reply/index-2023-12-28T00-45-49-0413.json",
                      "size": 532
                    }
                  ],
                  "is_folder": true,
                  "name": "reply23",
                  "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake/api/v1/reply",
                  "size": 0
                }
              ],
              "is_folder": true,
              "name": "v1",
              "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake/api/v1",
              "size": 0
            }
          ],
          "is_folder": true,
          "name": "api",
          "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake/api",
          "size": 0
        }
      ],
      "is_folder": true,
      "name": ".cmake",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/.cmake",
      "size": 0
    },
    {
      "is_folder": false,
      "name": "cmake_install.cmake",
      "path": "/Users/shah/Desktop/personal-website/codebase-explorer/cmake_install.cmake",
      "size": 1574
    },
  ],
  "is_folder": true,
  "name": "codebase-explorer",
  "path": "/Users/shah/Desktop/personal-website/codebase-explorer",
  "ptr": 105553152966680,
  "size": 0
};


function App() {
  const style = {
    main: {
      display: 'flex',
      flexDirection: 'row',
      height: '100vh',
    },
    toolbar: {
      width: '25vw',
      maxWidth: '300px',
      height: '100vh',
    },
    data: {
      width: '75vw',
      height: '100vh',
      margin: '0 auto',
    },
  };

  const [directoryPath, setPath] = useState(null);
  const [treeType, setTreeType] = useState(null);
  const [nodeSize, setNodeSize] = useState(5);
  const [dx, setdx] = useState(250);
  const [dy, setdy] = useState(30);
  const [linkColor, setLinkColor] = useState(30);
  const [textSize, setTextSize] = useState(20);


  return (
    <div className="App" style={style.main}>

      <Box style={style.toolbar}>
        <ToolDrawer
          setdx={setdx} dx={dx}
          setdy={setdy} dy={dy}
          setNodeSize={setNodeSize}
          setPath={setPath}
          setLinkColor={setLinkColor}
          setTextSize={setTextSize}
          setTreeType={setTreeType}
          textSize={textSize}
        />
      </Box>



      <Box style={style.data} >
        <LinePlot
          data={data2}
          dx={dx}
          dy={dy}
          nodeSize={nodeSize}
          linkColor={linkColor}
          textSize={textSize}
        />
        < ForceTree
          data={data2}
          dx={dx}
          dy={dy}
          nodeSize={nodeSize}
          linkColor={linkColor}
          textSize={textSize}
        />
      </Box>

    </div>
  );
}

export default App;
