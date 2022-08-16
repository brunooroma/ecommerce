import './Card.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const Tarjeta = ({info}) => {
    console.log(info)
  return (
    <div>
        {info.map((e) => {
            return(
                <Card key={e.id} style={{ width: '10rem' }} className='card'>
                    <Card.Img className='imagen' src={e.img} />
                    <Card.Body>
                    <Card.Title>{e.name}</Card.Title>
                        <Link to={`/pokemon/${e.id}`}>Ver detalle</Link>
                </Card.Body>
                </Card>
            )
        })
        }
    </div>
  )
}

export default Tarjeta