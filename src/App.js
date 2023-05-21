import './App.css';
import React from 'react';
import 'bootstrap/disct/css/bootstrap.css';
import ListaLibros from './ListaLibros';
import Nav from './Nav';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>Lista de libros</h1>
          <Lista libros/>
        </div>
      </header>
    </div>
  );
}

export default App;
