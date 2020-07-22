import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';

import '../css/main.css';

const App = () => {
  const [backgroud, setBackgroudVal] = useState("#000000");
  

  function handleColorChange(e)
  {
    
    setBackgroudVal(e.target.value);
  }
 
  
  return (
    <div>
      <h1>Enter time:</h1>
     <p>pick colore: <input type="color" onChange={handleColorChange}></input> </p>
      <div style={{
        background: backgroud,
        fontSize: "40px",
        width:"100px",
        }}>
            color
      </div>
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
