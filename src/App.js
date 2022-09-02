import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import NavBar from './components/NavBar/NavBar';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { CustomCartContextProvider } from './store/CartContext';
import Cart from './components/Cart/Cart';

/* import { saveProductsToFirebase } from './services/firebase'; */

function App() {
  return (
    <div className="App">
      <BrowserRouter>
{/*       <button onClick={() => saveProductsToFirebase()}>Enviar Datos</button> */}
      <CustomCartContextProvider>
      <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={'Pokemones 1º Generacion'} />} />
          <Route path='/producto/:id' element={<ItemDetailContainer greeting={'Detalle Pokemon'}/>} />
          <Route path='/categoria/:category' element={<ItemListContainer greeting={'Pokemones de tipo:'} />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<h1>No hay nada para ver... Circule</h1>} />
        </Routes>
        </CustomCartContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
