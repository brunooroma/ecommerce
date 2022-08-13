import './Item.css';

const Item = ({element}) => {
  console.log(element)
  return (
    <div>
        <p>Numero: {element.id}</p>
        <h2>{element.name}</h2>
        <img src={element.sprites.front_default} alt={`Imagen de ${element.name}`} />
        <p>Precio: ${element.weight}</p>
    </div>
  )
}

export default Item