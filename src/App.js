import React from 'react';
import './App.css';
import DOMPresentation from './components/DOMPresentation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Comprendre le DOM et React</h1>
      </header>
      <main>
        <DOMPresentation />
      </main>
    </div>
  );
}

export default App;
