'use client';
import React, { useEffect, useState } from 'react';
import UserIcon from '../Icons/UserIcon';
import SearchIcon from '../Icons/SearchIcon';
import ShoppingCartIcon from '../Icons/ShoppingCartIcon';
import { useCartState } from '@/Zustand/useCartState';
import Link from 'next/link';
import MobileNav from '../Icons/MobileNav';
import Logo from '../Icons/Logo';
import LogoMobile from '../Icons/LogoMobile';
import Image from 'next/image';

export default function Header() {
	const { cartDisplayHandler, cart }: any = useCartState();
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
		<nav
			className={`bg-[#F5F0EB] w-full ${isScrolled ? 'fixed top-0 shadow-md' : ''} flex justify-between items-center h-[60px] sm:h-[80px] z-10 px-5`}
		>
			{/* Logo & Mobile Nav */}
			<div className='flex gap-x-6'>
				<div className='md:hidden cursor-pointer flex items-center justify-center'>
					<MobileNav />
				</div>
				<Link
					href={'/'}
					className='md:text-xl md:block hidden cursor-pointer font-bold'
				>
					<Image src={'/Logo.png'} width={140} height={70} alt='The Classic Edit' />
				</Link>
				<Link
					href={'/'}
					className='md:text-xl md:hidden cursor-pointer font-bold'
				>
					<LogoMobile />
				</Link>
			</div>
			{/* Menu */}
			<div className='gap-5 hidden md:flex'>
				<Link href={'/'} className='cursor-pointer'>
					Home
				</Link>
				<Link href={'/'} className='cursor-pointer'>
					Men
				</Link>
				<Link href={'/'} className='cursor-pointer'>
					Women
				</Link>
				<Link href={'/'} className='cursor-pointer'>
					Exclusive
				</Link>
				<Link href={'/'} className='cursor-pointer'>
					Blog
				</Link>
			</div>
			{/* Nav Icons */}
			<div className='flex gap-2'>
				<div className='cursor-pointer'>
					<SearchIcon />
				</div>
				<Link href={'/login'} className='cursor-pointer'>
					<UserIcon />
				</Link>
				<div
					className='cursor-pointer relative'
					onClick={cartDisplayHandler}
				>
					<ShoppingCartIcon />{' '}
					<span className='absolute flex justify-center items-center top-3 -right-3 bg-gray-950 text-white rounded-full p-3 h-[3px] w-[3px] sm:h-[18px] sm:w-[18px]'>
						{cart.length}
					</span>
				</div>
				{/* Nav Icon */}
			</div>
		</nav>
	);
}
