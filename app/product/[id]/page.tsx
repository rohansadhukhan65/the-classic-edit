'use client';

import HeaderFooterWrapperUser from '@/components/HeaderFooterWrapperUser';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Page() {
	const { id } = useParams();
	return (
		<HeaderFooterWrapperUser>
			<div className="container">Product {id}</div>
		</HeaderFooterWrapperUser>
	);
}
