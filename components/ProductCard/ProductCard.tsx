'use client';
import React from 'react';
import './ProductCard.css';
import Image from 'next/image';
import StarRatingWithReviewCounter from '../StarRatingWithReviewCounter/StarRatingWithReviewCounter';
import SizeSelector from '../SizeSelector/SizeSelector';
import AddToCartButton from '../AddToCartButton/AddToCartButton';
import Link from 'next/link';

interface Iprop {
	ProductID: string;
	ImageUrl: string;
	Price: number;
	DiscountPrice: number;
	ProductTitle: string;
	ProductReviewCount: number;
	ProductStarCount: number;
	ProductSizeArray?: any;
}
const ProductCard = ({
	ProductID,
	ImageUrl,
	Price,
	DiscountPrice,
	ProductTitle,
	ProductReviewCount,
	ProductStarCount,
	ProductSizeArray,
}: Iprop) => {
	function calculateDiscount(
		originalPrice: number,
		discountedPrice: number,
	) {
		// Check if prices are valid
		if (originalPrice <= 0 || discountedPrice <= 0) {
			throw new Error('Prices must be greater than zero.');
		}

		// If the discounted price is greater than or equal to the original price, there's no discount
		if (originalPrice <= discountedPrice) {
			return 0.0;
		}

		// Calculate the discount percentage
		const discountAmount = originalPrice - discountedPrice;
		const discountPercentage = (discountAmount / originalPrice) * 100;
		return discountPercentage.toFixed(2);
	}

	return (
		<Link href={`product/${ProductID}`}>
			<div className="flex flex-col w-[170px] md:w-[200px]  gap-y-3 m-3 mx-auto">
				<div className="h-[320px] w-auto relative ">
					{/* Image */}
					<Image
						src={`${ImageUrl}`}
						fill={true}
						alt="Product"
						sizes="(min-width: 808px) 50vw, 100vw"
						className="rounded-md md:h-[320px] h-[250px] w-auto"
					/>
				</div>
				<div className="flex flex-col gap-x-3 items-start justify-start">
					{/* price */}
					<p className="text-xl font-semibold">₹{Price}</p>
					<p className="flex gap-x-2 text-gray-600 text-sm">
						<del>₹{DiscountPrice}</del>
						<span className="text-green-500">
							{calculateDiscount(DiscountPrice, Price)}%
							OFF
						</span>
					</p>
				</div>
				<div>
					{/* Product Title */}
					<div className="font-semibold">
						{ProductTitle.substring(0, 18)}{' '}
						{ProductTitle && ProductTitle?.length > 18
							? ' ...'
							: ''}
					</div>
				</div>
				<div>
					{/* review star */}
					<StarRatingWithReviewCounter
						reviewCount={ProductReviewCount}
						fullStar={ProductStarCount}
					/>
				</div>
				<div>
					{/* size Seceltor */}
					<SizeSelector sizes={ProductSizeArray} />
				</div>
				<div>
					{/* Add to Cart Button */}
					<AddToCartButton productID={ProductID} />
				</div>
			</div>
		</Link>
	);
};

export default ProductCard;
