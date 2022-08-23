import './Card.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const Tarjeta = ({info}) => {
  return (
    <div>
        {info && info.length > 0 && info.map((e) => {
            return(
                <Card key={e.id} style={{ width: '10rem' }} className='card'>
                    <Card.Img className='imagen' src={e.img} />
                    <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                        <Link to={`/producto/${e.id}`}>Ver detalle</Link>
                </Card.Body>
                </Card>
            )
        })
        }
        {!info && <h1>No hay Pokemon con ese tipo</h1>}
    </div>
  )
}

export default Tarjeta