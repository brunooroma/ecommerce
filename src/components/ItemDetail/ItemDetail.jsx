import './ItemDetail.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';
import {useState, useEffect} from 'react';
import data from'../Data/data';

const ItemDetail = ({id}) => {
    
    let [item, setItem] = useState({});

    const getDetalle = () => {
        let detalle = data.find((e) => e.id == id)
        setItem(detalle)
    }

    useEffect(() => {
        getDetalle();
    },[])

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
                <ItemCount initial={1} stock={item.stock}/>
            </Card>
        </div>
    )
}

export default ItemDetail