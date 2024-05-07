'use client';
import React from 'react';
import { useParams } from 'next/navigation';


import HeaderFooterWrapperUser from '@/components/HeaderFooterWrapperUser';
import CollectionOptionslider from '@/components/CollectionOptionsSlider/CollectionOptionslider';
export default function Page() {
	const { name }:any = useParams();


	return (
		<HeaderFooterWrapperUser>
			<div className='mx-5 sm:mx-10'>
				{/* bread crumps */}
				<div className='border-b border-gray-300 text-gray-700 my-5'>
					<span> Home </span> /{' '}
					<span className='font-semibold'> {name} </span>
				</div>

				{/* collection lists */}
			 	<CollectionOptionslider currentCollectionname={name} />

			</div>
		</HeaderFooterWrapperUser>
	);
}
