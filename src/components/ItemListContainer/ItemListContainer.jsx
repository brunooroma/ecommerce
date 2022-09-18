import './ItemListContainer.css';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import Tarjeta from '../Tarjeta/Tarjeta';

import { getItemsFromDB } from '../../utils/databaseFunctions';

const ItemListContainer = ({ greeting }) => {

    let { category } = useParams();

    const [listFilter, setListFilter] = useState([]);
    const [list, setList] = useState([]);

    useEffect(() => {
        if (category) {
            getItemsFromDB(category).then(response => setListFilter(response))
        } else {
            getItemsFromDB().then(response => setList(response))
        }
    }, [category])

    return (
        <div>
            <div>
                <h1>{`${greeting} ${category ? category : ''}`}</h1>
            </div>
            {!category ? <ItemList info={list} /> : <Tarjeta info={listFilter} />}
        </div>
    )
}

export default ItemListContainer