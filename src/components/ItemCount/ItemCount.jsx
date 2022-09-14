import './ItemCount.css';
import { useState } from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = (props) => {

    const [counter, setCounter] = useState(props.initial)

    const countIncrement = () => {
        if (counter < props.stock) {
            setCounter(counter + 1)
        }
    }

    const countDecrement = () => {
        if (counter > props.initial) {
            setCounter(counter - 1)
        }
    }

    let btn_restar;
    let btn_sumar;
    let btn_restar_desactivar;
    let btn_sumar_desactivar;

    (counter === 1) ? btn_restar_desactivar = {disabled: true} : btn_restar = { opacity: 1 };
    (counter === props.stock) ?  btn_sumar_desactivar = {disabled:true} : btn_sumar = { opacity: 1 };

    return (
        <div className='divContador'>
            <div className='divBoton'>
                <Button variant='danger' className='botonContador' disabled={btn_restar_desactivar} style={btn_restar} onClick={countDecrement}>-</Button>
                <p>{counter}</p>
                <Button variant='primary' className='botonContador' disabled={btn_sumar_desactivar} style={btn_sumar} onClick={countIncrement}>+</Button>
            </div>
            <div>
                <Button variant='primary' className='botonContador' onClick={() => props.onAdd(counter)}>Agregar al Carrito</Button>
            </div>
        </div>
    )
}

export default ItemCount