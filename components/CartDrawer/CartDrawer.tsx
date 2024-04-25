import React from 'react'
import {motion} from 'framer-motion'
import { useCartState } from '@/Zustand/useCartState'
import RightArrowIcon from '../Icons/RightArrowIcon'

const CartDrawer = () => {
    const{isOpen,cartDisplayHandler,cart}:any= useCartState()
    
  return (
    <motion.div animate={{ width: isOpen  }} transition={{ delay: 0.3 }} className={`${isOpen ?'':'hidden'} fixed right-0 top-0 z-10 bg-white h-screen shadow-md overflow-hidden`}>
      {/* Cart Header */}
      <div className='flex'>
        <div className='w-full pl-20 flex flex-col justify-center items-center text-3xl'>Cart</div>
        <div className='ml-auto cursor-pointer' onClick={cartDisplayHandler}>
            <div className='w-[30px] h-[30px] bg-gray-400 m-6 p-1 rounded-lg flex justify-center items-center'><RightArrowIcon/></div>
        </div>
      </div>
      {/* Cart Body */}
      <div className='px-5'>
        {cart && cart.map((p:any,k:number)=>(<div key={k}>
            {p.ProductTitle}
        </div>))}
      </div>


    </motion.div>
  )
}

export default CartDrawer
