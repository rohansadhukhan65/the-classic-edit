'use client'
import React, { useState } from 'react'

interface Iprop{
    sizes:any,
    onSelect? : (size:any) => any
}
const SizeSelector = ({sizes , onSelect}:Iprop) => {

    const [SelectedSize ,setSelectedSize] = useState<string>()

    function SizeSelector(size:string) {SelectedSize === size? setSelectedSize('') : setSelectedSize(size)}


  return (
    <>
    <div className='flex'>
      {sizes && sizes.map((size:any,key:number) => (
        <div key={key} onClick={() => {SizeSelector(size)}} 
        className={`border px-3 py-2 cursor-pointer hover:bg-orange-200 transition-all duration-300 ${size === SelectedSize?'bg-orange-200':''}`}>{size}</div>
      ))}
    </div>
    </>
  )
}

export default SizeSelector
