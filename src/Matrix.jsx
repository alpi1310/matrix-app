import React, { useState } from 'react';
import './App.css'; // Assuming you have some CSS to style the boxes

function App() {
  const [boxes, setBoxes] = useState(Array(9).fill('red'));

  const handleClick = (index) => {
    const updatedBoxes = [...boxes];
    updatedBoxes[index] = 'green';
    
    if (index === updatedBoxes.length - 1) {
      for (let i = 0; i < updatedBoxes.length; i++) {
        updatedBoxes[i] = 'orange';
      }
    }
    
    setBoxes(updatedBoxes);
  };

  return (
    <div className="App">
      <h1>Click on the boxes</h1>
      <div className="box-container">
        {boxes.map((color, index) => (
          <div
            key={index}
            className="box"
            style={{ backgroundColor: color }}
            onClick={() => handleClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
}

export default App;

