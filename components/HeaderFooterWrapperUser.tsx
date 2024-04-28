'use client';
import React from 'react';
import Layout from './Layout';
import Header from './Header/Header';
import Footer from './Footer/Footer';

interface Iprop {
	children: any;
}
export default function HeaderFooterWrapperUser({ children }: Iprop) {
	return (
		<Layout>
			<Header />
			{children}
			<Footer />
		</Layout>
	);
}
