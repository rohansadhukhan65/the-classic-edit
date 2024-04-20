'use client'
import React, { useEffect, useState } from 'react'
import UserIcon from '../Icons/UserIcon'
import SearchIcon from '../Icons/SearchIcon'
import ShoppingCartIcon from '../Icons/ShoppingCartIcon'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  return (
    <nav className={`bg-[#F5F0EB] w-full ${isScrolled ? 'fixed top-0 shadow-md' : ''} flex justify-around items-center h-[80px]`}>
      {/* Logo */}
      <div className='h-5 cursor-pointer'>Logo</div>
      {/* Menu */}
      <div className='gap-5 hidden md:flex'>
        <div className='cursor-pointer'>Home</div>
        <div className='cursor-pointer'>Men</div>
        <div className='cursor-pointer'>Women</div>
        <div className='cursor-pointer'>Exclusive</div>
        <div className='cursor-pointer'>Blog</div>
      </div>
      {/* Nav Icons */}
      <div className='flex gap-2'>
        <div className='cursor-pointer'><SearchIcon/></div>
        <div className='cursor-pointer'><UserIcon/></div>
        <div className='cursor-pointer'><ShoppingCartIcon/></div>
        {/* Nav Icon */}
        <div className='block md:hidden cursor-pointer'>Nav</div>
      </div>

      
    </nav>
  )
}
