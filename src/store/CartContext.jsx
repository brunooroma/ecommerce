import { createContext, useState } from 'react';
import { collection, addDoc } from 'firebase/firestore'
import firestoreDB from '../services/firebase';

export const cartContext = createContext();

export const CustomCartContextProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [orderId, setOrderId] = useState(false);
    const [quantityCart, setQuantityCart] = useState('')

    const isInCart = (item) => {
        return cart.some(itemCart => itemCart.numero == item.numero)
    }

    const addToCart = (item, quantity) => {
        if (isInCart(item)) {
            alert('Se actualizo la cantidad del item')
            const itemActualizado = cart.map(prod => {
                if (prod.id === item.id) {
                    const productoActualizado = {
                        ...prod,
                        quantity: quantity
                    }
                    return productoActualizado
                }
                else {
                    return prod
                }
            })
            setCart(itemActualizado)
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

    let totalOrden = 0;
    cart.forEach((item) => {
        totalOrden += item.precio * item.quantity
    });

    const totalQuantityCart = () => {
        if (cart.length === 0) {

        } else {
            let nuevo = cart.map(e => e.quantity)
            let total = nuevo.reduce((a, b) => a + b)
            setQuantityCart(total)
        }
    }

    return (
        <cartContext.Provider value={{ cart, addToCart, viewCart, removeItem, clearCart, saveProductsToFirebase, orderId, setOrderId, totalOrden, totalQuantityCart, quantityCart }}>
            {children}
        </cartContext.Provider>
    )
}   