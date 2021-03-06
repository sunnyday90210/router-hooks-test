import React from 'react';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();
  return (
    <div className='App'>
      <header className='App-header'>
        <h1>Counter: {counter} </h1>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>
          INCREMENT
        </button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>
          DECREMENT
        </button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      </header>
    </div>
  );
}

export default App;
