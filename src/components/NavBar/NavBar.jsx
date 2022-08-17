import {NavLink} from 'react-router-dom';
import {Stack} from 'react-bootstrap';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

const NavBar = () => {
  
    const categorias = ['Planta','Fuego','Agua','Volador','Bicho','Normal'];

    let styleLinks = {
      textDecoration: 'none',
      color: 'black'
    }

    return (
    <div className='divNavBar'>
      <div>
        <h1><NavLink style={styleLinks}  to={'/'}>PokeCommerce</NavLink></h1>
      </div>
      <div className='divCategorias'>
        <Stack direction="horizontal" gap={5}>
        {categorias.map((cat) => <NavLink style={styleLinks} key={cat} to={`/categoria/${cat.toLowerCase()}`}>{cat}</NavLink>)}
        </Stack>
      </div>
      <div className='divCarrito'>
        <CartWidget />
      </div>
    </div>
  );
}

export default NavBar;