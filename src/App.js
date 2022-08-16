import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Pokemones 1º Generacion'} />} />
          <Route path='/pokemon/:id' element={<ItemDetailContainer greeting={'Detalle Pokemon'}/>} />
          <Route path='/categoria/:idCategory' element={<ItemListContainer greeting={'Pokemones de tipo:'} />} />
          <Route path='*' element={<h1>No hay nada para ver... Circule</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
