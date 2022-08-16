import './ItemListContainer.css';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom'
import ItemList from '../ItemList/ItemList';
import data from '../Data/data';
import Tarjeta from '../Card/Card';

const ItemListContainer = ({greeting}) => {

    let {category} = useParams();
    console.log(category)

    let [type, setType] = useState([]);

    const getTipo = () => {
        let detalleTipo = data.filter((e) => e.type === category)
            setType(detalleTipo)      
    }

    const [list, setList] = useState([]);
    const [error, setError] = useState(null);

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
        getInfo()
        getTipo()
    },[]);

    if (error) return <p>{error}</p>

    return(
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            {(category == undefined) ? <ItemList info={list} /> : <Tarjeta info={type} /> }
        </div>
    )
}


export default ItemListContainer