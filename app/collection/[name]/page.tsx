'use client';
import Breadcrumbs from '@/components/BreadCrumps/BreadCrumps';
import HeaderFooterWrapperUser from '@/components/HeaderFooterWrapperUser';
import { useParams } from 'next/navigation';
import React from 'react';

export default function Page() {
	const { name } = useParams();

	return (
		<HeaderFooterWrapperUser>
			{name}
		</HeaderFooterWrapperUser>
	);
}
