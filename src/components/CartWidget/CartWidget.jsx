import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus }  from "@fortawesome/free-solid-svg-icons";

const CartWidget = () => {
  return (
    <div className="div-lista">
    <FontAwesomeIcon icon={ faCartPlus } style={{color: 'black', fontSize: '2rem'}} /> 
    </div>
  )
}

export default CartWidget