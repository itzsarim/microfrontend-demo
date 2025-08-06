// This file is primarily for running the counter-app in standalone mode.
// When consumed by the host, the host directly imports CounterApp.js.
import React from 'react';
import CounterApp from './CounterApp';

const App = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#f0f2f5' }}>
      <CounterApp />
    </div>
  );
};

export default App;