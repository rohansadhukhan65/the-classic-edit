import React, { useRef } from 'react';
import { collections } from '@/data';
import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';
import LeftArrowSolid from '../Icons/LeftArrowSolid';
import RightArrowSolid from '../Icons/RightArrowSolid';

interface Iprop {
	currentCollectionname: string;
}
const CollectionOptionslider = ({ currentCollectionname }: Iprop) => {
	const collectionSlider = useRef(null);
	return (
		<div className='relative w-full'>
            
			{/* Slider container */}
			<div
				ref={collectionSlider}
				className='mb-5 sm:mx-14 overflow-x-scroll scroll-style flex flex-nowrap overflow-hidden scroll-smooth'
			>
				{/* Collection cards to select */}
				{collections.map((item, key) => (
					<motion.div
						key={key}
						initial={{ opacity: 0, y: 100 }}
						whileInView={{
							opacity: 1,
							y: 0,
							transition: { delay: 0.2, ease: 'easeOut' },
						}}
					>
						<Link
							href={`/collection/${item.name}`}
							className='flex flex-col flex-shrink-0 gap-y-2 w-[240px] mr-5 mt-14 cursor-pointer'
						>
							{/* Collection Card */}
							<div className='bg-black rounded-lg text-white flex justify-around relative'>
								<Image
									className='absolute bottom-0 left-[23px] drop-shadow-[0_5px_5px_#f1f1f1]'
									src={item.modelImage}
									height={117}
									width={78}
									alt=''
								/>
								<div className='w-[50%]'></div>
								<p className='text-[20px] font-bold my-5 w-[50%]'>
									{item.name}
								</p>
							</div>
							{/* black divider */}
							{item.name === currentCollectionname && (
								<div className='bg-gray-900 rounded-lg h-[10px]'></div>
							)}
						</Link>
					</motion.div>
				))}
			</div>

			{/* Control Buttons */}
			<button
				onClick={() => {
					const collectionSliderCurrent: any = collectionSlider.current;
					const currentScrollPositionLeft =
						collectionSliderCurrent.scrollLeft;
					collectionSliderCurrent.scrollLeft =
						currentScrollPositionLeft - 240;
				}}
				className='absolute top-[49%] -left-0 hidden sm:block'
				type='button'
			>
				<LeftArrowSolid />
			</button>
			<button
				onClick={() => {
					const collectionSliderCurrent: any = collectionSlider.current;
					const currentScrollPositionLeft =
						collectionSliderCurrent.scrollLeft;
					collectionSliderCurrent.scrollLeft =
						currentScrollPositionLeft + 240;
				}}
				className='absolute top-[49%] -right-0 hidden sm:block'
				type='button'
			>
				<RightArrowSolid />
			</button>

		</div>
	);
};

export default CollectionOptionslider;
