import './ItemDetail.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect, useContext} from 'react';
import data from'../Data/data';
import { Link } from 'react-router-dom';
import { cartContext } from '../store/CartContext';
import {Button} from 'react-bootstrap';

const ItemDetail = ({id}) => {

    const { cart, addToCart, removeItem, viewCart, clearCart } = useContext(cartContext)

    const [estado, setEstado] = useState(0)
    let [item, setItem] = useState({});

    const getDetalle = () => {
        let detalle = data.find((e) => e.id == id)
        setItem(detalle)
    }

    useEffect(() => {
        getDetalle();
    },[])

    const handleAdd = (counter) => {
        addToCart(item, counter);
        setEstado(counter)
    }

    return(
        <div className = 'contenedorCard'>
            <Card style={{ width: '10rem' }} className='card'>
                <Card.Img className='imagen' src={item.img} />
                <Card.Body>
                    <Card.Title>{item.name}</Card.Title>
                    <Card.Text>
                        Precio: ${item.precio}
                    </Card.Text>
                </Card.Body>
                { estado === 0 ?
                <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
                : <Link to={'/cart'}>Ir al carrito</Link>
            }
                </Card>
                <Button onClick={()=> viewCart()}>Ver</Button>
                <Button onClick={()=> removeItem(item)}>Eliminar Producto</Button>
                <Button onClick={()=> clearCart()}>Limpiar</Button>
        </div>
    )
}

export default ItemDetail