import React from 'react'


interface Iprop{
    productID? : string
}
const AddToCartButton = ({productID}:Iprop) => {
  return (
    <button className='bg-gray-950 text-white w-full py-2 rounded-md hover:bg-gray-800 transition-all duration-500'>
      Add To Cart
    </button>
  )
}

export default AddToCartButton
