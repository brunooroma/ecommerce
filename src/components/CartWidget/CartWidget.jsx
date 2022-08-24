import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus }  from "@fortawesome/free-solid-svg-icons";
import {Link} from 'react-router-dom';
import {useContext, useState, useEffect} from 'react';
import {cartContext} from '../store/CartContext'

const CartWidget = () => {
  const { cart } = useContext(cartContext);
  const [quantityCart, setQuantityCart] = useState('')

  const totalQuantityCart = () => {
    if(cart.length === 0) {

    }else {
      let nuevo = cart.map(e => e.quantity)
      console.log(nuevo)
      let total = nuevo.reduce((a,b) => a+b)
      setQuantityCart(total)
    }
  }

  useEffect(() => {
    totalQuantityCart();
  },[cart])


  return (
    <div>
      {cart.length === 0 ? <div></div>
      : <div className="div-lista">
        <Link to={'/cart'}>
          <FontAwesomeIcon icon={ faCartPlus } style={{color: 'black', fontSize: '2rem'}} /> 
          <span>{quantityCart}</span>
        </Link>
      </div>
      }
  </div>
  )
}

export default CartWidget