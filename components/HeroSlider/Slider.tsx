'use client';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { motion, stagger, useAnimate } from 'framer-motion';

interface Iprop {
	Img?: Image;
	link?: string;
	Class?: string;
	ActiveIndex: number;
	children?: React.ReactNode;
	SlideKey: number;
}

interface Image {
	link?: string;
	Width?: number;
	Height?: number;
}
export default function Slider({
	Img,
	link,
	Class,
	ActiveIndex,
	children,
	SlideKey,
}: Iprop) {
	const [active, setActive] = useState<Boolean>(false);
	const [scope, animate] = useAnimate();

	useEffect(() => {
		if (ActiveIndex === SlideKey) {
			setActive(true);
			animate(scope.current, { opacity: 1, x: 0 }, { delay: stagger(0.5) });
		} else {
			setActive(false);
			animate(
				scope.current,
				{ opacity: 1, x: -500 },
				{ delay: stagger(0.5) },
			);
		}
	}, [ActiveIndex, SlideKey, animate, scope]);

	return (
		<div
			ref={scope}
			className={`w-[100%]  ${Class} ${active ? 'block' : 'hidden'}`}
		>
			{Img ? (
				<Image
					src={`${Img && Img.link}`}
					width={2000}
					height={753}
					priority={SlideKey == 1 ? true : false}
					// fill
					sizes='(min-width: 808px) 50vw, 100vw'
					alt='Picture of the author'
					className='md:h-[600px]  h-[500px]'
				/>
			) : (
				''
			)}
			{children}
		</div>
	);
}
