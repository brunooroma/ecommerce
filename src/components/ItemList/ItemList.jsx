import './ItemList.css';
import Item from '../Item/Item';

const ItemList = ({info}) => {
    return(
        <div className = 'contenedorCard'>
            {info.map((e) => {
                return(
                <Item
                    key={e.numero}
                    element={e}
                />
                )
            })
            }
        </div>
    )
}


export default ItemList