import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useCartState } from '@/Zustand/useCartState';
import RightArrowIcon from '../Icons/RightArrowIcon';
import Image from 'next/image';
import './CartDrawer.css';

const CartDrawer = () => {
	const { isOpen, cartDisplayHandler, cart }: any = useCartState();
	const [totalCartPrice, setTotalCartPrice] = useState(0);

	function calculate12Percent(number: any) {
		return number * 0.12;
	}

	useEffect(() => {
		cart.map((p: any) => setTotalCartPrice((pv) => pv + p.Price));
	}, [cart]);

	return (
		<motion.div
			animate={{ width: isOpen }}
			transition={{ delay: 0.3 }}
			className={`${isOpen ? '' : 'hidden'} fixed right-0 top-0 z-10 h-screen bg-white shadow-md overflow-hidden`}
		>
			<div className='relative w-full h-full'>
				{/* Cart Header */}
				<div className='flex'>
					<div className='w-full pl-20 flex flex-col justify-center items-center text-3xl'>
						Cart
					</div>
					<div
						className='ml-auto cursor-pointer'
						onClick={cartDisplayHandler}
					>
						<div className='w-[30px] h-[30px] bg-gray-400 m-6 p-2 rounded-xl flex justify-center items-center'>
							<RightArrowIcon />
						</div>
					</div>
				</div>
				{/* Cart Body */}

				{/* Added Products */}
				<div className='px-5 overflow-y-auto  h-[165px] flex flex-col gap-y-5 prod-View'>
					{cart &&
						cart.map((p: any, k: number) => (
							<div className='flex gap-x-3 w-full' key={k}>
								{/* Image */}
								<div>
									<Image
										src={p.ImageUrl}
										className='rounded-xl'
										height={50}
										width={50}
										alt='The Classic Edit'
									/>
								</div>
								{/* Prod Details */}
								<div className='w-1/2'>
									{/* Product Name */}
									<p className='font-semibold text-xl'>
										{p.ProductTitle.substring(0, 12)}{' '}
										{p.ProductTitle && p.ProductTitle?.length > 12
											? ' ...'
											: ''}
									</p>
									{/* Size */}
									<div className='flex gap-x-2'>
										<p>Size : </p>
										<p className='bg-gray-300 rounded-lg px-1'>M</p>
									</div>
									{/* Price Qunatity */}
									<div className='flex justify-between w-full'>
										<p>$ {p.Price}</p>
										<div className='bg-gray-200 flex rounded-lg'>
											{/* + */}
											<div className='px-2 bg-gray-300 rounded-lg'>
												+
											</div>
											{/* qty */}
											<div className='mx-2'>1</div>
											{/* - */}
											<div className='px-2 rounded-lg bg-gray-300'>
												-
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
				</div>

				{/* Total Pricing */}
				<div className='border-t-[2px] border-b-[2px] border-dashed border-gray-400 my-10 py-5 px-5'>
					<div className='flex justify-between'>
						<p>Total</p>{' '}
						<p>$ {(totalCartPrice && Math.round(totalCartPrice)) || 0}</p>
					</div>
					<div className='flex justify-between'>
						<p>GST</p>{' '}
						<p>
							${' '}
							{(totalCartPrice &&
								Math.round(calculate12Percent(totalCartPrice))) ||
								0}
						</p>
					</div>
					<div className='flex justify-between'>
						<p>Total</p>{' '}
						<p>
							${' '}
							{(totalCartPrice &&
								Math.round(
									totalCartPrice + calculate12Percent(totalCartPrice),
								)) ||
								0}
						</p>
					</div>
				</div>

				{/* Offers */}
				<div className='px-4 flex relative flex-col justify-center'>
					<p className='text-xl font-normal mb-5'>Offers</p>
					{/* offer Card */}
					<div className='flex'>
						<Image
							src={'/offer.png'}
							height={60}
							width={60}
							alt='The Classic Edit'
						/>
						<div className='flex flex-col justify-start items-start px-3'>
							<p className='text-lg font-semibold'>SBI Offer</p>
							<p className='text-sm text-gray-600'>
								Valid only for SBI customer
							</p>
						</div>
						<div className='flex flex-col justify-center items-center'>
							<span className='font-bold bg-gray-200 px-2 py-1 rounded-lg shadow-sm'>
								Apply
							</span>
						</div>
					</div>
				</div>

				{/* Payment Button */}
				<div className='absolute bottom-0 flex justify-around w-full h-16'>
					<div>
						<div className='text-sm'>Payment By</div>
						<div className='font-semibold'>Cash on Delivery</div>
					</div>
					<div>
						<button className='bg-black text-white px-5 py-2 rounded-md'>
							Proceed
						</button>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default CartDrawer;
