import './App.css';
import ColorGrid from './components/Colors';
import CellGrid from './components/Cells';
import { useState } from 'react';

function App() {
  const [currentColor, setCurrentColor] = useState(null);
  return (
      <div className="App">
        <ColorGrid setColor={setCurrentColor}/>
        <CellGrid color={currentColor}/>
      </div>
  );
}

export default App;
