import logo from './logo.svg';
import './App.css';
import LinePlot from './Components/LinePlot.js';

const data = {
  name: "flare",
  children: [
    {
      name: "analytics",
      children: [
        // ... children of "analytics" node
      ]
    },
    {
      name: "animate",
      children: [
        {
          name: "Easing",
          size: 17010
        },
        {
          name: "FunctionSequence",
          size: 5842
        },
        {
          name: "interpolate",
          children: [
            // ... children of "interpolate" node
          ]
        },
        // ... other children of "animate" node
      ]
    },
    {
      name: "data",
      children: [
        // ... children of "data" node
      ]
    },
    {
      name: "display",
      children: [
        // ... children of "display" node
      ]
    },
    // ... other top-level nodes
  ]
};


function App() {
  return (
    <div className="App">
      <LinePlot data={data} />
    </div>
  );
}

export default App;
