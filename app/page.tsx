'use client';
import CollectionCards from '@/components/CollectionCards/CollectionCards';
import FlashSalesBar from '@/components/FlashSalesBar/FlashSalesBar';
import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import HeroSlider from '@/components/HeroSlider/HeroSlider';
import Antistatic from '@/components/Icons/Antistatic';
import Breathable from '@/components/Icons/Breathable';
import QuickDry from '@/components/Icons/QuickDry';
import Streachable from '@/components/Icons/Streachable';
import ProductCardWithCategoryTab from '@/components/ProductCardWithCategoryTab/ProductCardWithCategoryTab';
import Layout from '@/components/Layout';
import React from 'react';

export default function Home() {
	return (
		<Layout>
			<FlashSalesBar />
			<Header />
			<HeroSlider />

			{/* Tabs Section */}
			<div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
				<div className="text-center text-5xl font-semibold my-5">
					Bestsellers
				</div>
				<ProductCardWithCategoryTab />
			</div>

			{/* Collection Showcase */}
			<div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
				<CollectionCards />
			</div>

			{/* Into About Section */}
			<div className="w-full bg-[#FFE9D3] py-10 px-5 text-center">
				<div className="text-center text-xl md:text-4xl my-5">
					Why{' '}
					<span className="font-bold">The Classic Edit?</span>
				</div>
				<p className="md:w-[647px] mx-auto">
					Lorem ipsum dolor sit amet, consectetur adipiscing
					elit, sed do eiusmod tempor incididunt ut labore et
					dolore magna aliqua. Lorem ipsum dolor sit amet,
					consectetur adipiscing elit, sed do eiusmod tempor
					incididunt ut labore et dolore magna aliqua.
				</p>

				{/* Icons */}
				<div className="grid md:grid-cols-4 grid-cols-2">
					<div>
						<Antistatic />
					</div>
					<div>
						<Breathable />
					</div>
					<div>
						<QuickDry />
					</div>
					<div>
						<Streachable />
					</div>
				</div>
			</div>

			{/* Tab Section 2 */}
			<div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
				<div className="text-center text-5xl font-semibold my-5">
					New Arrivals
				</div>
				<ProductCardWithCategoryTab />
			</div>

			<Footer />
		</Layout>
	);
}
