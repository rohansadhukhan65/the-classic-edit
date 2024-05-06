'use client';
// import CollectionCards from '@/components/CollectionCards/CollectionCards';
// import FlashSalesBar from '@/components/FlashSalesBar/FlashSalesBar';
// import Footer from '@/components/Footer/Footer';
// import Header from '@/components/Header/Header';
// import HeroSlider from '@/components/HeroSlider/HeroSlider';
// import Antistatic from '@/components/Icons/Antistatic';
// import Breathable from '@/components/Icons/Breathable';
// import QuickDry from '@/components/Icons/QuickDry';
// import Streachable from '@/components/Icons/Streachable';
// import ProductCardWithCategoryTab from '@/components/ProductCardWithCategoryTab/ProductCardWithCategoryTab';
// import Layout from '@/components/Layout';
import React from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';

// Components .....
const Layout = dynamic(() => import('../components/Layout'));
const FlashSalesBar = dynamic(
	() => import('../components/FlashSalesBar/FlashSalesBar'),
);
const Header = dynamic(() => import('../components/Header/Header'));
const HeroSlider = dynamic(() => import('../components/HeroSlider/HeroSlider'));
const ProductCardWithCategoryTab = dynamic(
	() =>
		import(
			'../components/ProductCardWithCategoryTab/ProductCardWithCategoryTab'
		),
);
const CollectionCards = dynamic(
	() => import('../components/CollectionCards/CollectionCards'),
);
const Footer = dynamic(() => import('../components/Footer/Footer'));

// Icons .....
// const Antistatic = dynamic(() => import('../components/Icons/Antistatic'));
// const Breathable = dynamic(() => import('../components/Icons/Breathable'));
// const QuickDry = dynamic(() => import('../components/Icons/QuickDry'));
// const Streachable = dynamic(() => import('../components/Icons/Streachable'));

export default function Home() {
	return (
		<Layout>
			<FlashSalesBar />
			<Header />
			<HeroSlider />

			{/* Tabs Section */}
			<div className='w-full px-3 lg:px-14 my-10 flex flex-col items-center flex-wrap'>
				<div className='text-center text-5xl font-semibold my-5'>
					Bestsellers
				</div>
				<ProductCardWithCategoryTab />
			</div>

			{/* Collection Showcase */}
			<div className='w-full lg:px-14 my-10 flex flex-col items-center flex-wrap'>
				<CollectionCards />
			</div>

			{/* Into About Section */}
			<div className='w-full bg-[#FFE9D3] py-10 px-5 text-center'>
				<div className='text-center text-xl md:text-4xl my-5'>
					Why <span className='font-bold'>The Classic Edit?</span>
				</div>
				<p className='md:w-[647px] mx-auto'>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</p>

				{/* Icons */}
				<div className='grid md:grid-cols-4 grid-cols-2'>
					<div className='mx-auto'>
						<Image src={'/anti-static.png'} height={100} width={100} alt='the classic edit' />
					</div>
					<div className='mx-auto'>
						<Image src={'/Breathble.png'} height={100} width={100} alt='the classic edit' />
					</div>
					<div className='mx-auto'>
						<Image src={'/QuickDry.png'} height={100} width={100} alt='the classic edit' />
					</div>
					<div className='mx-auto'>
						<Image src={'/streachble.png'} height={100} width={100} alt='the classic edit' />
					</div>
				</div>
			</div>

			{/* Tab Section 2 */}
			<div className='w-full px-3 lg:px-14 my-10 flex flex-col items-center flex-wrap'>
				<div className='text-center text-5xl font-semibold my-5'>
					New Arrivals
				</div>
				<ProductCardWithCategoryTab />
			</div>

			<Footer />
		</Layout>
	);
}
