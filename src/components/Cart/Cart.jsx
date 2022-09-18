import React from 'react'
import { useContext, useEffect } from 'react';
import { cartContext } from '../../store/CartContext';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const Cart = () => {

    const { cart, removeItem, clearCart, saveProductsToFirebase, orderId, setOrderId, totalOrden } = useContext(cartContext)

    const totalPrice = (quantity, price) => {
        let total = quantity * price
        return total
    }

    const ordenDeCompra = {
        buyer: {
            nombre: 'Jose',
            apellido: 'Rodriguez',
            email: 'asdd@gmail.com'
        },
        items: { ...cart },
        fecha: new Date(),
    }

    useEffect(() => {
        setOrderId(false)
    }, [])

    if (orderId) {
        return (
            <div>
                <h1>Gracias por su compra</h1>
                <p>Su numero de seguimiento es: {orderId}</p>
            </div>
        )
    }

    return (
        <div>
            {cart.length === 0 ? <div>
                <h1>No hay elementos en el carrito</h1>
                <Link to={'/'}>Pagina Principal </Link>
            </div>
                : <div>
                    {cart.map((e) => {
                        return (
                            <Card key={e.numero} style={{ width: '10rem' }} className='card'>
                                <Card.Img className='imagen' src={e.img} />
                                <Card.Body>
                                    <Card.Title>{e.name}</Card.Title>
                                    <Card.Text>Unidades: {e.quantity}</Card.Text>
                                    <Card.Text>Total: ${totalPrice(e.quantity, e.precio)}</Card.Text>
                                    <Button onClick={() => removeItem(e)}><FontAwesomeIcon icon={faTrash} style={{ color: 'white', fontSize: '1rem' }} /></Button>

                                </Card.Body>
                            </Card>
                        )
                    })
                    }
                    <p>Total Compra: ${totalOrden}</p>
                </div>
            }
            {cart.length === 0 ? <></>
                : <div>
                    <Button onClick={() => saveProductsToFirebase(ordenDeCompra)}>Confirmar Compra</Button>
                    <Button onClick={() => clearCart()}>Limpiar</Button>
                </div>
            }
        </div>
    )
}

export default Cart