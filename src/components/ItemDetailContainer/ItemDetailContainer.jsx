import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';


const ItemDetailContainer = ({greeting}) => {
    const idURL = useParams().id;

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
    }, []);

    if (error) return <p>{error}</p>

    return(
        <div>
            <div>
                <h1>{greeting}</h1>
            </div>
            {list.length === 0 ? <p>Cargando...</p> : <ItemDetail info={list} id={idURL}/>}
        </div>
    )
}

export default ItemDetailContainer;