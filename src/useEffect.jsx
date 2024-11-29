import React, { useState, useEffect } from 'react';

function TrafficLight() {
  const [light, setLight] = useState('red');

  useEffect(() => {
    const interval = setInterval(() => {
      setLight((prevLight) => {
        if (prevLight === 'red') return 'green';
        if (prevLight === 'green') return 'yellow';
        if (prevLight === 'yellow') return 'red';
      });
    }, light === 'green' ? 120000 : 1000); 
    return () => clearInterval(interval);
  }, []); 

 
  const lightStyles = {
    red: { backgroundColor: light === 'red' ? 'red' : 'gray', height: '100px', width: '100px', borderRadius: '50%' },
    yellow: { backgroundColor: light === 'yellow' ? 'yellow' : 'gray', height: '100px', width: '100px', borderRadius: '50%' },
    green: { backgroundColor: light === 'green' ? 'green' : 'gray', height: '100px', width: '100px', borderRadius: '50%' },
  };
  return (
    <fieldset>

    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '200px', flexDirection: 'column' }}>
      <div style={lightStyles.red}></div>
      <div style={lightStyles.yellow}></div>
      <div style={lightStyles.green}></div>
    </div>
    </fieldset>
  );
}

export default TrafficLight;
