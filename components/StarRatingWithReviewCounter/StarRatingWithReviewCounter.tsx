'use client';
import React, { useCallback, useEffect, useState } from 'react';
import EmptyStarIcon from '../Icons/EmptyStarIcon';
import FullStarIcon from '../Icons/FullStarIcon';

interface Iprop {
	reviewCount: number;
	fullStar: number;
}
const StarRatingWithReviewCounter = ({ reviewCount, fullStar }: Iprop) => {
	// Create an array of stars to render
	const stars = [];
	for (let i = 0; i < 5; i++) {
		if (i < fullStar) {
			stars.push(
				<div key={i}>
					<FullStarIcon />
				</div>,
			); // Full star
		} else {
			stars.push(
				<div key={i}>
					<EmptyStarIcon />
				</div>,
			); // Empty star
		}
	}

	return (
		<div className="flex gap-x-2">
			{/* Stars */}
			<div className="flex">{stars}</div>

			{/* Reviw count */}
			<p>({reviewCount})</p>
		</div>
	);
};

export default StarRatingWithReviewCounter;
