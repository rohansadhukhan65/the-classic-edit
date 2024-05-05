import { collections } from '@/data';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const CollectionCards = () => {
	return (
		<div className='p-14'>
			<h2 className='text-center text-4xl font-semibold my-5'>
				 Collection's
			</h2>
			<div className='flex flex-col justify-center items-center md:flex-row md:gap-5'>
				{collections &&
					collections.slice(0,3).map((collection, key) => (
						<Link  href={`/collection/${collection.name}`} className='' key={key}>
							<Image
								src={collection.image}
								height={578}
								width={402}
								alt={collection.name}
								sizes='(min-width: 808px) 50vw, 100vw'
								// className='md:h-[578] md:w-[402]'
							/>
							<p className='text-center mb-10 mt-5 text-2xl font-normal'>
								{collection.name}
							</p>
						</Link>
					))}
			</div>
		</div>
	);
};

export default CollectionCards;
