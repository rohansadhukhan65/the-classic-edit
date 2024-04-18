'use client'
import useScrollProgress from '@/hooks/useScrollProgress'
import React from 'react'
import { motion } from 'framer-motion'


// variants 
const variants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 }
}


interface Iprop {
    children : any
}
export default function UserLayout({children}:Iprop) {
  const completion = useScrollProgress()
  return (
    <motion.main variants={variants} initial='hidden' animate='enter' transition={{ type: 'liner', delay: 0.2, duration: 0.4 }}>
    
      {children}
  
    {/* COMPLETION BAR */}
    <span style={{transform:`translateY(${completion - 100}%)`}} className='fixed z-50 bg-black w-1 top-0 right-0 bottom-0 transition-all duration-700'></span>
    </motion.main>
  )
}
