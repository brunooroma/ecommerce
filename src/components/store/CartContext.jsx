import {createContext, useState} from 'react';

export const cartContext = createContext();

export const CustomCartContextProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    
    const isInCart = (item) => {
        return cart.some(itemCart => itemCart.id === item.id)
    }

    const addToCart = (item, quantity) => {
        if(isInCart(item)){
            console.log('ya tenes!')
        }
        else{
            let copyCart = [...cart]
            copyCart.push( { ...item, quantity} )
            setCart(copyCart);
            if(quantity === 1) {
                alert(`Se ha agregado al carrito ${quantity} unidad`)
            }else{ 
                alert(`Se han agregado al carrito ${quantity} unidades`);
            }
        }
    }

    const viewCart = () => {
        console.log(cart)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (item) => {
        if(isInCart(item)){
            let newCart = cart.filter(e => e.id !== item.id)
            setCart(newCart)
        }
    }

    return(
        <cartContext.Provider value={{ cart, addToCart, viewCart, removeItem, clearCart }}>
            {children}
        </cartContext.Provider>
    )
}   