import React from 'react';
import ReactDOM from 'react-dom';

import { useState } from 'react';

import '../css/main.css';

const App = () => {
  const [sec, setSecVal] = useState(0);
  const [minit, setMiniVal] = useState(0);
  const [hour, setHourVal] = useState(0);
 
  function handleSecondChange(e)
  {
    const val= Number(e.target.value)
    setSecVal(val);
    setMiniVal(x => val/60);
    setHourVal(x => val/3600);
   
  }
  function handleMinitsChange(e)
  {
   
    const val= Number(e.target.value)
    setMiniVal(val);
    setSecVal(x => val*60);
    setHourVal(x => val/60);

  }
  function handleHoursChange(e)
  {
    const val= Number(e.target.value)
    setHourVal(val);
    setMiniVal(x => val*60); 
    setSecVal(x => val*3600);
    
  }
  return (
    <div>
      <h1>Enter time:</h1>
     <p>seconds: <input type="number" value={sec} onChange={handleSecondChange}></input> </p>
     <p>minits: <input type="number" value={minit} onChange={handleMinitsChange}></input> </p>
     <p>hours: <input type="number" value={hour} onChange={handleHoursChange}></input> </p>      
     
    </div>
  )
};


// main.js
const root = document.querySelector('main');
ReactDOM.render(<App />, root);
