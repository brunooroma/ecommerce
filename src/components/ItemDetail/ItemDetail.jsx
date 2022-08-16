import './ItemDetail.css';
import {Card} from 'react-bootstrap';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({info, id}) => {
    
    return(
        <div className = 'contenedorCard'>
            <Card style={{ width: '10rem' }} className='card'>
                <Card.Img className='imagen' src={info[id-1].sprites.front_default} />
                <Card.Body>
                    <Card.Title>{info[id-1].name}</Card.Title>
                    <Card.Text>
                        Precio: ${info[id-1].weight}
                    </Card.Text>
                </Card.Body>
                <ItemCount initial={1} stock={10}/>
            </Card>
        </div>
    )
}

export default ItemDetail