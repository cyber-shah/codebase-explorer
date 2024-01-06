import { Box, Button } from '@mui/material';
import './App.css';
import LinePlot from './Components/LinePlot.js';
import ToolDrawer from './Components/ToolDrawer';
import { useState } from 'react';
import ForceTree from './Components/ForceTree';
import { SliderPicker } from 'react-color';
import MenuIcon from '@mui/icons-material/Menu';
// import { TreeView } from '@mui/x-tree-view/TreeView';
// import { TreeItem } from '@mui/x-tree-view/TreeItem';

//TODO: use this treeview inside toolbar



function App() {
  const style = {
    main: {
      height: '100vh',
    },
    toolbarContainer: {
      maxWidth: '300px',
      padding: '10px',
      backgroundColor: 'white',
      position: 'fixed',
      top: 0,
      left: 0,
      zIndex: 1000,
    },
    dataContainer: {
      width: '100%',
      height: '100vh',
      margin: '0 auto',
      overflow: 'auto', // Add this to enable scrolling if needed
    },
  };

  const [directoryPath, setPath] = useState(null);
  const [treeType, setTreeType] = useState(null);
  const [nodeSize, setNodeSize] = useState(5);
  const [dx, setdx] = useState(250);
  const [dy, setdy] = useState(30);
  const [linkColor, setLinkColor] = useState('#000000');
  const [textSize, setTextSize] = useState(20);
  const [nodeColor, setNodeColor] = useState('#000000');

  const [isToolbarVisible, setToolbarVisible] = useState(false);

  return (
    <div className="App" style={style.main}>

      <div className="overlay" style={style.toolbarContainer}>
        <Button variant="contained" startIcon={<MenuIcon />} onClick={() => {
          setToolbarVisible(!isToolbarVisible);
        }}>
          Show Toolbar
        </Button>

        {isToolbarVisible && (
          <div className="overlay">
            <ToolDrawer
              setdx={setdx}
              setdy={setdy}
              setNodeSize={setNodeSize}
              setPath={setPath}
              setLinkColor={setLinkColor}
              setTextSize={setTextSize}
              setTreeType={setTreeType}
              textSize={textSize}
              setNodeColor={setNodeColor}
            />
          </div>
        )}
      </div>

      <div className="overlay" style={style.dataContainer}>
        <LinePlot
          data={data2}
          dx={dx}
          dy={dy}
          nodeSize={nodeSize}
          linkColor={linkColor}
          textSize={textSize}
          nodeColor={nodeColor}
        />

        < ForceTree
          data={data2}
        />
      </div>

    </div>
  );
}

export default App;
