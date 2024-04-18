import React from 'react'


interface Iprop{
    isActive? : boolean
}
export default function Dots({isActive}:Iprop) {
  return (
    <div className={`h-[14px] w-[14px] border-[2px] border-white rounded-full ${isActive?'bg-white':''}`}>
    </div>
  )
}
