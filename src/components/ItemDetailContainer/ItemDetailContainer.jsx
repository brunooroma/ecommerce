import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = ({greeting}) => {
    const idURL = useParams().id;

    return(
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            <ItemDetail id={idURL}/>
        </div>
    )
}

export default ItemDetailContainer;