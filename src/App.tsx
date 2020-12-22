import React from 'react';
import { Tictactoe } from './features/tictactoe/Tictactoe';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Tictactoe />
      </header>
    </div>
  );
}

export default App;
