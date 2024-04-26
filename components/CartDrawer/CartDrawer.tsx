import React, { useEffect, useState } from 'react'
import {motion} from 'framer-motion'
import { useCartState } from '@/Zustand/useCartState'
import RightArrowIcon from '../Icons/RightArrowIcon'
import Image from 'next/image'

const CartDrawer = () => {
    const{isOpen,cartDisplayHandler,cart}:any= useCartState()
    const [totalCartPrice , setTotalCartPrice] = useState(0)

    function calculate12Percent(number:any) {
      return number * 0.12;
    }


    useEffect(()=>{
      setTotalCartPrice(pv => cart.map((p:any)=> p.Price + pv)[0])
    },[cart])
  return (
    <motion.div animate={{ width: isOpen  }} transition={{ delay: 0.3 }} className={`${isOpen ?'':'hidden'} fixed right-0 top-0 z-10 bg-white h-screen shadow-md overflow-hidden`}>
     <div className='relative h-full w-full'>
        {/* Cart Header */}
        <div className='flex'>
          <div className='w-full pl-20 flex flex-col justify-center items-center text-3xl'>Cart</div>
          <div className='ml-auto cursor-pointer' onClick={cartDisplayHandler}>
              <div className='w-[30px] h-[30px] bg-gray-400 m-6 p-2 rounded-xl flex justify-center items-center'><RightArrowIcon/></div>
          </div>
        </div>
        {/* Cart Body */}

        {/* Added Products */}
        <div className='px-5 overflow-y-auto  h-[165px] flex flex-col gap-y-5'>
          {cart && cart.map((p:any,k:number)=>(<div className='flex' key={k}>
              {/* Image */}
              <div>
                <Image src={p.ImageUrl} className='rounded-xl'  height={50} width={50} alt='The Classic Edit'/>
              </div>
          </div>))}
        </div>

        {/* Total Pricing */}
        <div className='border-t-[2px] border-b-[2px] border-dashed border-gray-400 my-10 py-5 px-5'>
        <div className='flex justify-between'><p>Total</p> <p>$ {totalCartPrice && Math.round(totalCartPrice) || 0}</p></div>
        <div className='flex justify-between'><p>GST</p> <p>$ {totalCartPrice && Math.round(calculate12Percent(totalCartPrice)) || 0}</p></div>
        <div className='flex justify-between'><p>Total</p> <p>$ {totalCartPrice && Math.round(totalCartPrice + calculate12Percent(totalCartPrice)) || 0}</p></div>
        </div>

        {/* Payment Button */}
        <div className='absolute bottom-0 flex justify-around w-full h-16'>
          <div>Payment By</div>
          <div><button className='bg-black text-white px-5 py-2 rounded-md'>Proceed</button></div>
        </div>
     </div>
    </motion.div>
  )
}

export default CartDrawer
