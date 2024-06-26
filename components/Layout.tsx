'use client';
import useScrollProgress from '@/Hooks/useScrollProgress';
import React, { lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import { useCartState } from '@/Zustand/useCartState';
import dynamic from 'next/dynamic';

// Components .....
// import CartDrawer from './CartDrawer/CartDrawer';
const CartDrawer = dynamic(() => import('../components/CartDrawer/CartDrawer'));

// Components .....

// variants
const variants = {
	hidden: { opacity: 0 },
	enter: { opacity: 1 },
};

interface Iprop {
	children: any;
}

export default function Layout({ children }: Iprop) {
	const { initCart } = useCartState();
	const completion = useScrollProgress();

	useEffect(() => {
		const localCartClone = JSON.parse(localStorage.getItem('cart') || '[]');
		initCart(localCartClone);
	}, [initCart]);

	return (
		<motion.main
			variants={variants}
			initial='hidden'
			animate='enter'
			transition={{ type: 'liner', delay: 0.2, duration: 0.4 }}
		>
			<Head>
				{/* Specify the favicon */}
				<link rel='shortcut icon' href='/static/favicon.ico' />
			</Head>
			{children}

			{/* CART DRAWER */}
			<CartDrawer />
			{/* COMPLETION BAR */}
			<span
				style={{ transform: `translateY(${completion - 100}%)` }}
				className='fixed z-50 bg-black w-1 top-0 right-0 bottom-0 transition-all duration-700'
			></span>
		</motion.main>
	);
}
