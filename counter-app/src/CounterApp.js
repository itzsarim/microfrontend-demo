import React, { useState } from 'react';

const CounterApp = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ padding: '20px', border: '1px solid #007bff', borderRadius: '8px', margin: '20px', maxWidth: '300px', textAlign: 'center', backgroundColor: '#e6f7ff' }}>
      <h2 style={{ color: '#0056b3' }}>Remote Counter App</h2>
      <p style={{ fontSize: '2em', margin: '15px 0', color: '#333' }}>Count: {count}</p>
      <button
        onClick={() => setCount(count + 1)}
        style={{ padding: '10px 20px', fontSize: '1em', margin: '5px', backgroundColor: '#28a745', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}
      >
        Increment
      </button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ padding: '10px 20px', fontSize: '1em', margin: '5px', backgroundColor: '#dc3545', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', boxShadow: '2px 2px 5px rgba(0,0,0,0.2)' }}
      >
        Decrement
      </button>
    </div>
  );
};

export default CounterApp;