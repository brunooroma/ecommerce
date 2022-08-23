import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CustomCartContextProvider } from './components/store/CartContext';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <CustomCartContextProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Pokemones 1º Generacion'} />} />
          <Route path='/producto/:id' element={<ItemDetailContainer greeting={'Detalle Pokemon'}/>} />
          <Route path='/categoria/:category' element={<ItemListContainer greeting={'Pokemones de tipo:'} />} />
          <Route path='/cart' element={<h1>Carrito en construccion</h1>} />
          <Route path='*' element={<h1>No hay nada para ver... Circule</h1>} />
        </Routes>
        </CustomCartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
