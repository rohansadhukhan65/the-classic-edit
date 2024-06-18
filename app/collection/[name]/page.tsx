'use client';
import React, { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';

import HeaderFooterWrapperUser from '@/components/HeaderFooterWrapperUser';
import CollectionOptionslider from '@/components/CollectionOptionsSlider/CollectionOptionslider';
import { Products } from '@/data';
import { Product } from '@/Data/DataStructures';
export default function Page() {
	const { name }: any = useParams();

	const [CollectionProducts, setCollectionProducts] = useState<Product[]>(Products);

	useEffect(() => {
		setCollectionProducts((p) =>
			p.filter((product) => product.collection === name),
		);
	}, [name]);
	return (
		<HeaderFooterWrapperUser>
			<div className='mx-5 sm:mx-10'>
				{/* bread crumps */}
				<div className='border-b border-gray-300 text-gray-700 my-5'>
					<Link href={'/'}> Home </Link> /{' '}
					<span className='font-semibold'> {name} </span>
				</div>
				{/* collection lists */}
				<CollectionOptionslider currentCollectionname={name} />
			</div>
		</HeaderFooterWrapperUser>
	);
}
