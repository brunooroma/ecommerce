import './ItemDetail.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect} from 'react';
import data from'../Data/data';
import { Link } from 'react-router-dom';

const ItemDetail = ({id}) => {

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
        if(counter === 1) {
            alert(`Se ha agregado al carrito ${counter} unidad`)
        }else{ 
            alert(`Se han agregado al carrito ${counter} unidades`);
        }
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
                <ItemCount initial={1} stock={item.stock} onAdd={handleAdd}/>
                : <Link to={'/cart'}>Ir al carrito</Link>
            }
                </Card>
        </div>
    )
}

export default ItemDetail