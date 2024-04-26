import { Products } from '@/data';
import {create} from 'zustand'

 

function updateLocalStorage(cartArray:any) {
    
    localStorage.setItem('cart', JSON.stringify(cartArray))
    
}

export const useCartState : any= create((set:any) => ({
    cart: [] ,
    isOpen: 0,
    AddToCart: (pID:any) => set((s:any) => {
        const productToAdd = Products.find((f) => f.ProductID === pID);
        const updatedCart = [...s.cart, productToAdd];
        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),
    RemoveFromCart: (pID:any) => set((s:any) => {
        const updatedCart = s.cart.filter((p:any) => p.ProductID !== pID);
        updateLocalStorage(updatedCart);
        return { cart: updatedCart };
    }),
    cartDisplayHandler: () => set((s:any) => {
        return { isOpen: s.isOpen > 0 ? 0 : 360 };
    }),
    initCart : (initdata:any) => set((s:any)=>{
        return { cart : initdata}
    })
    
}));



 