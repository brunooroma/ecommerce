import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { getItemById } from '../../utils/databaseFunctions';


const ItemDetailContainer = ({ greeting }) => {
    const idURL = useParams().id;

    let [item, setItem] = useState({});

    useEffect(() => {
        getItemById(idURL).then(response => setItem(...response));
    }, [])

    return (
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            <ItemDetail item={item} />
        </div>
    )
}

export default ItemDetailContainer;