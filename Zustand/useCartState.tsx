import { Products } from '@/data';
import {create} from 'zustand'

function initCart() {
    let localCartClone
    if (typeof window !== 'undefined') {
     localCartClone = JSON.parse(localStorage.getItem('cart') || '[]');
    }
    return localCartClone;
}

function updateLocalStorage(cartArray:any) {
    if (typeof window !== 'undefined') {
    localStorage.setItem('cart', JSON.stringify(cartArray));
    }
}

export const useCartState = create((set) => ({
    cart: initCart() || [],
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
    })
}));



 