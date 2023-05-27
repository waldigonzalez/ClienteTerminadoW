
import React from 'react';
import 'bootstrap/disct/css/bootstrap.css';
import {BrowswrRouter, Route, Routes} from 'react-router-dom';
import ListaLibros from './ListaLibros';
import AgregarLibro from './AgregarLibro';
import Nav from './Nav';
import EditarLibro from './EditarLibro';

function App() {
  return (
    <div className="App">
      <Nav/>
      <header className="App-header">
        <BrowswrRouter>
        <Rutes>
          <Route path= "/" element ={<ListaLibros/>}/>
          <Route path= "/agregar" element ={<agregarLibros/>}/>
          <Route path='/editar/:id'element= {<EditarLibro/>}/>
        </Rutes>
        
        </BrowswrRouter>
      </header>
    </div>
  );
}

export default App;
