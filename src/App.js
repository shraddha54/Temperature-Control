import React, { useState } from 'react';
const App = () =>{
  const [temperatureValue,setTemperatureValue] = useState(30);
  return(
    
    <div className='app-container'>
      <div className="temperature-display-container">
        <div className="temperature-display">{temperatureValue}℃</div>
      </div>

        <div className="button-container">
          <button onClick={() =>setTemperatureValue(temperatureValue+1)}>+</button>
          <button onClick={() =>setTemperatureValue(temperatureValue-1)}>-</button>
        </div>
    </div>
  );
};

export default App;