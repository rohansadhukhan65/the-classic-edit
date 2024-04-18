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
      <div className='h-5'>Logo</div>
      {/* Menu */}
      <div className='flex gap-5'>
        <div>Home</div>
        <div>Men</div>
        <div>Women</div>
        <div>Exclusive</div>
        <div>Blog</div>
      </div>
      {/* Nav Icons */}
      <div className='flex gap-2'>
        <div><SearchIcon/></div>
        <div><UserIcon/></div>
        <div><ShoppingCartIcon/></div>
      </div>
    </nav>
  )
}
