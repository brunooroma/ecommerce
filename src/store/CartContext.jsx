import { createContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import firestoreDB from '../services/firebase';

export const cartContext = createContext();

export const CustomCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(false);

    const isInCart = (item) => {
        return cart.some(itemCart => itemCart.numero == item.numero)
    }

    const addToCart = (item, quantity) => {
        if (isInCart(item)) {
            console.log('ya tenes!')
        }
        else {
            let copyCart = [...cart]
            copyCart.push({ ...item, quantity })
            setCart(copyCart);
            if (quantity === 1) {
                alert(`Se ha agregado al carrito ${quantity} unidad`)
            } else {
                alert(`Se han agregado al carrito ${quantity} unidades`);
            }
        }
    }

    const saveProductsToFirebase = async (ordenDeCompra) => {
        const collectionRef = collection(firestoreDB, 'orders')
        const docRef = await addDoc(collectionRef, ordenDeCompra)
        setOrderId(docRef.id)
        clearCart()
    }

    const viewCart = () => {
        console.log(cart)
    }

    const clearCart = () => {
        setCart([])
    }

    const removeItem = (item) => {
        if (isInCart(item)) {
            let newCart = cart.filter(e => e.numero !== item.numero)
            setCart(newCart)
        }
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, viewCart, removeItem, clearCart, saveProductsToFirebase, orderId, setOrderId }}>
            {children}
        </cartContext.Provider>
    )
}   