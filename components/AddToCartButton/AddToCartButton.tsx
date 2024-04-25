import { useCartState } from '@/Zustand/useCartState'
import React from 'react'


interface Iprop{
    productID? : string
}
const AddToCartButton = ({productID}:Iprop) => {
      const {cart,AddToCart}:any = useCartState()
  

 
  return (
    <button onClick={(params) => { AddToCart(productID) }} className='bg-gray-950 text-white mx-auto w-full py-2 rounded-md hover:bg-gray-800 transition-all duration-300'>
      Add To Cart
    </button>
  )
}






export default AddToCartButton
