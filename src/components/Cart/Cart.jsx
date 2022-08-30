import React from 'react'
import { useContext } from 'react';
import {cartContext} from '../../store/CartContext';
import {Card} from 'react-bootstrap';
import {Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Cart = () => {

    const { cart, removeItem, clearCart } = useContext(cartContext)

    const totalPrice = (quantity, price) => {
        let total = quantity * price
        return total
    }

    return (
        <div>            
            {cart.length === 0 ? <div>
                                    <h1>No hay elementos en el carrito</h1>
                                    <Link to={'/'}>Pagina Principal </Link>
                                </div>
            : cart.map((e) => {
                return(
                    <Card key={e.numero} style={{ width: '10rem' }} className='card'>
                        <Card.Img className='imagen' src={e.img} />
                        <Card.Body>
                        <Card.Title>{e.name}</Card.Title>
                        <Card.Text>Unidades: {e.quantity}</Card.Text>
                        <Card.Text>Total: ${totalPrice(e.quantity,e.precio)}</Card.Text>
                        <Button onClick={()=> removeItem(e)}>Eliminar Producto</Button>

                    </Card.Body>
                    </Card>               
                )
            })
            }
            {cart.length === 0 ? <></> : <Button onClick={()=> clearCart()}>Limpiar</Button>}
        </div>
    )
}

export default Cart