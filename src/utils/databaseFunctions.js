import firestoreDB from '../services/firebase'
import { collection, getDocs, query, where, addDoc } from 'firebase/firestore';
import data from '../components/Data/data'

export const getItemsFromDB = (category) => {
    return new Promise((resolve) => {
        if (category) {
            const ecommerceCollection = collection(firestoreDB, 'ecommerce')
            const q = query(ecommerceCollection, where('type', '==', category))
            getDocs(q).then(snapshot => {
                const docsData = snapshot.docs.map(doc => doc.data())
                docsData.sort((a, b) => a.numero - b.numero)
                resolve(docsData)
            })
        } else {
            const ecommerceCollection = collection(firestoreDB, 'ecommerce')
            getDocs(ecommerceCollection).then(snapshot => {
                const docsData = snapshot.docs.map(doc => {
                    return (
                        { ...doc.data(), id: doc.id }
                    )
                })
                docsData.sort((a, b) => a.numero - b.numero)
                resolve(docsData)
            })
        }
    })
}

export const getItemById = (idURL) => {
    return new Promise((resolve) => {
        const ecommerceCollection = collection(firestoreDB, 'ecommerce')
        const q = query(ecommerceCollection, where('numero', '==', idURL))
        getDocs(q).then(snapshot => {
            const docsData = snapshot.docs.map(doc => doc.data())
            resolve(docsData)
        }
        )
    })
}

export const saveProductsToFirebase = async () => {
    const ecommerceCollection = collection(firestoreDB, 'ecommerce')
    for (let item of data) {
        const docref = await addDoc(ecommerceCollection, item)
        console.log(docref.id)
    }
}