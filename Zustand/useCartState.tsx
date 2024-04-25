import { Products } from '@/data';
import {create} from 'zustand'


function initCart (){
    const localCartClone:any =  localStorage.getItem('cart') || '[]' // local cart only stores product id
    const CartArray =  JSON.parse(localCartClone).map((pid:any)=> Products.find((p)=> p.ProductID === pid))
    return CartArray || []
}
 
function UpdateLocalStorage (arrayID:any){
    localStorage.setItem('cart', JSON.stringify(arrayID));
}

export const useCartState = create((set) => ({
    cart : initCart(),
    isOpen : 0,
    AddToCart : (pID:any) => set((s :any)=>{
        UpdateLocalStorage([...s.cart , Products.find((f)=>f.ProductID === pID)])
        return {cart : [...s.cart , pID]}
    }),
    RemoveFromCart : (pID:any)=> set((s:any)=>{
        const NewCart = s.cart.map((p:any)=> p.ProductID !== pID )
        UpdateLocalStorage(NewCart)
        return {cart : NewCart}
    }),

    cartDisplayHandler : ()=> set((s:any)=>{
        return {isOpen : s.isOpen > 0 ? 0 : 390}
    })
})) 


 