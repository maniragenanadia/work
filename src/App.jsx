import { useState } from 'react'
import './App.css'
import TrafficLight from './useEffect';


function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1 class="header">usestate hook</h1>
      <h2>Count: {count}</h2>

      <button onClick={decrement}>Decrement</button>
      <button onClick={increment}>Increment</button>
      
      <br></br><br></br>

      <h1 class="traffic">useEffect hook</h1>

    <TrafficLight />

    </div>
  );
}

export default Counter;

