import './ItemCount.css';
import {useState} from 'react';
import {Button} from 'react-bootstrap';

const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial)

    const countIncrement = () => {
        if(counter < props.stock){
        setCounter(counter + 1)
    }
    }

    const countDecrement = () => {
        if(counter > props.initial){
        setCounter(counter - 1)
    }
    }

/*     const addCart = () => {
        (counter === props.initial) ? alert(`Se ha agregado al carrito ${counter} unidad`) : alert(`Se han agregado al carrito ${counter} unidades`);
    } */

    let btn_restar;
    let btn_sumar;

    (counter == 1) ? btn_restar = {opacity: 0.5} : btn_restar = {opacity: 1};
    (counter == props.stock) ? btn_sumar = {opacity: 0.5} : btn_sumar = {opacity: 1};

  return (
    <div className='divContador'>
        <div className='divBoton'>
            <Button variant='danger' className='botonContador' style={btn_restar} onClick={countDecrement}>-</Button>
            <p>{counter}</p>
            <Button variant='primary' className='botonContador' style={btn_sumar} onClick={countIncrement}>+</Button>
        </div>
        <div>
            <Button variant='primary' className='botonContador' onClick={() => props.onAdd(counter)}>Agregar al Carrito</Button>
        </div>
    </div>
  )
}

export default ItemCount