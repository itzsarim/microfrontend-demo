import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

// Dynamically load the remote CounterApp component
// The 'counter_app' comes from the 'remotes' configuration in webpack.config.js
// './CounterApp' is the exposed module name from the remote application
const RemoteCounterApp = React.lazy(() => import('counter_app/CounterApp'));

// Simple To-Do App component for the host
const TodoApp = () => {
  const [todos, setTodos] = React.useState([]);
  const [newTodo, setNewTodo] = React.useState('');

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, newTodo.trim()]);
      setNewTodo('');
    }
  };

  return (
    <div style={{ padding: '20px', border: '1px solid #ccc', borderRadius: '8px', margin: '20px', maxWidth: '400px', backgroundColor: '#f9f9f9' }}>
      <h2 style={{ color: '#333' }}>Host's To-Do App</h2>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new todo"
        style={{ width: 'calc(100% - 80px)', padding: '8px', marginRight: '10px', borderRadius: '4px', border: '1px solid #ddd' }}
      />
      <button
        onClick={addTodo}
        style={{ padding: '8px 12px', backgroundColor: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
      >
        Add
      </button>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ padding: '8px 0', borderBottom: '1px dotted #eee' }}>{todo}</li>
        ))}
      </ul>
    </div>
  );
};

const Home = () => (
  <div style={{ padding: '20px', textAlign: 'center' }}>
    <h1 style={{ color: '#28a745' }}>Welcome to the Host Application!</h1>
    <p>Navigate using the links above to see the host's To-Do app or the remote Counter app.</p>
  </div>
);

const App = () => {
  return (
    <Router>
      <div style={{ fontFamily: 'Arial, sans-serif' }}>
        <nav style={{ backgroundColor: '#333', padding: '10px 20px', borderRadius: '8px', margin: '10px' }}>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', justifyContent: 'space-around' }}>
            <li>
              <Link to="/" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Home</Link>
            </li>
            <li>
              <Link to="/todo" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>To-Do App</Link>
            </li>
            <li>
              <Link to="/counter" style={{ color: 'white', textDecoration: 'none', padding: '8px 15px', borderRadius: '5px', transition: 'background-color 0.3s' }}>Remote Counter App</Link>
            </li>
          </ul>
        </nav>

        <Suspense fallback={<div style={{ textAlign: 'center', padding: '50px' }}>Loading remote app...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/todo" element={<TodoApp />} />
            <Route path="/counter" element={<RemoteCounterApp />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
};

export default App;