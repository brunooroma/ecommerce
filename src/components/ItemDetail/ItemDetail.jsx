import './ItemDetail.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useContext} from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../store/CartContext';
/* import {Button} from 'react-bootstrap'; */

const ItemDetail = ({item}) => {
    const { addToCart } = useContext(cartContext)

    const [flag, setFlag] = useState(0)

    const handleAdd = (counter) => {
        addToCart(item, counter);
        setFlag(counter)
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
                { flag === 0 ?
                <ItemCount initial={1} stock={item.stock} onAdd={handleAdd} />
                : <Link to={'/cart'}>Terminar Compra</Link>
            }
                </Card>
        </div>
    )
}

export default ItemDetail