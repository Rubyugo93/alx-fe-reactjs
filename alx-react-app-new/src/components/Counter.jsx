
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0); // Initialize count state

  return (
    <div style={{ textAlign: 'center', margin: '20px' }}>
      <h2>Counter Application</h2>
      <p>Current Count: {count}</p>
      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Increment
      </button>
      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Decrement
      </button>
      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '10px', padding: '10px 20px', fontSize: '16px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
