import './ItemListContainer.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import data from '../Data/data';
import Tarjeta from '../Card/Card';

import { getItemsFromDB, getItemFromDBbyCategory } from '../../services/firebase';

const ItemListContainer = ({greeting}) => {

    let {category} = useParams();

    const [listFilter, setListFilter] = useState([]);
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

    const getTipo = () => {
        let listaPokemonTipo = data.filter((e) => e.type === category)
        if(listaPokemonTipo.length > 0){
            setListFilter(listaPokemonTipo)
        }else{
            setListFilter(null)
        }
    }

    const getInfo = async () => {
        try{
            const result = await fetch('https://pokeapi.co/api/v2/pokemon')
            .then((resp) => resp.json())
            .then((data) => {
                return data.results;
            });
            
            const newArray = result.map(async (e) => {
                const pokemon = await fetch(e.url);
                const arrPokemones = await pokemon.json();
                return arrPokemones;
            })

            Promise.all(newArray).then(data => {
                setList(data);
            });
        } catch(err){
            setError('Error de API');
        }
    }

    useEffect(() => {
        getItemsFromDB().then(response => setList(response))
    }, [])

    useEffect(() => {
        if(category) {
            getItemFromDBbyCategory(category).then((response) => setListFilter(response))
        }
    },[category]);

    if (error) return <p>{error}</p>

    return(
        <div>
            <div>
                <h1>{`${greeting} ${category ? category : ''}`}</h1>
            </div>
            {!category ? <ItemList info={list} /> : <Tarjeta info={listFilter} /> }
        </div>
    )
}


export default ItemListContainer