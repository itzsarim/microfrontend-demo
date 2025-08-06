import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // This App.js will render CounterApp for standalone testing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);