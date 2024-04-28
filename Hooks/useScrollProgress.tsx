'use client';
import React, { useState, useEffect } from 'react';

export default function useScrollProgress(): number {
	const [completion, setCompletion] = useState<number>(0);

	useEffect(() => {
		const updateScrollCompletion = () => {
			const currentProgress: number = window.scrollY;
			const scrollHeight: number =
				document.body.scrollHeight - window.innerHeight;

			if (scrollHeight) {
				setCompletion(
					Number((currentProgress / scrollHeight).toFixed(2)) *
						100,
				);
			}
		};

		// Add scroll event listener
		window.addEventListener('scroll', updateScrollCompletion);

		// Clean up event listener on unmount
		return () => {
			window.removeEventListener('scroll', updateScrollCompletion);
		};
	}, []);

	return completion;
}
