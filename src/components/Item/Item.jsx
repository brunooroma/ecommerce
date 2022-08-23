import './Item.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';

const Item = ({element}) => {
  return (
    <div>
      <Card style={{ width: '10rem' }} className='card'>
        <Card.Img className='imagen' src={element.sprites.front_default} />
        <Card.Body>
          <Card.Title>{element.name}</Card.Title>
              <Link to={`/producto/${element.id}`}>Ver detalle</Link>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Item