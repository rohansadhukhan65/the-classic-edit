import dynamic from 'next/dynamic';
import React from 'react';
const CollectionCards = dynamic(
	() => import('../components/CollectionCards/CollectionCards'),
);

const NotFound = () => {
	return (
		<div>
            <p className='text-5xl text-red-400 text-center mt-24 font-bold'>OOps ! Sorry could not Find your path !</p>
			<div className='w-full lg:px-14 my-10 flex flex-col items-center flex-wrap'>
				<CollectionCards />
			</div>
		</div>
	);
};
export default NotFound;
