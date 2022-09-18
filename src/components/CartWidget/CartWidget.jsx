import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { useContext, useState, useEffect } from 'react';
import { cartContext } from '../../store/CartContext'

const CartWidget = () => {
  const { cart, totalQuantityCart, quantityCart } = useContext(cartContext);

  useEffect(() => {
    totalQuantityCart();
  }, [cart])


  return (
    <div>
      {cart.length === 0 ? <div></div>
        : <div className="div-lista">
          <Link to={'/cart'}>
            <FontAwesomeIcon icon={faCartPlus} style={{ color: 'black', fontSize: '2rem' }} />
            <span>{quantityCart}</span>
          </Link>
        </div>
      }
    </div>
  )
}

export default CartWidget