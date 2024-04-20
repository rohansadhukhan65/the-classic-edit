'use client'
import React from 'react'
import './ProductCard.css'
import Image from 'next/image'
import StarRatingWithReviewCounter from '../StarRatingWithReviewCounter/StarRatingWithReviewCounter'
import SizeSelector from '../SizeSelector/SizeSelector'
import AddToCartButton from '../AddToCartButton/AddToCartButton'

interface Iprop{
  ProductID?: string;
  ImageUrl : string;
  Price: number;
  DiscountPrice: number;
  ProductTitle?: string;
  ProductReviewCount: number;
  ProductStarCount: number;
  ProductSizeArray?: any;
}
const ProductCard = ({ProductID,ImageUrl,Price,DiscountPrice,ProductTitle,ProductReviewCount,ProductStarCount,ProductSizeArray}:Iprop) => {
  
  function calculateDiscount(originalPrice:number, discountedPrice:number) {
    // Check if prices are valid
    if (originalPrice <= 0 || discountedPrice <= 0) {
        throw new Error("Prices must be greater than zero.");
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
    <>
      <div className='flex flex-col w-[240px] gap-y-3 m-3 mx-auto'>
        <div>
            {/* Image */}
            <Image
                src={`${ImageUrl}`}
                height={320}
                width={238}
                alt='Product'
                className='rounded-md md:h-[320px]'
            />
        </div>
        <div className='flex gap-x-3 items-center justify-start'>
            {/* price */}
            <p className='text-xl'>₹{Price}</p>
            <p className='flex gap-x-2 text-gray-600 text-sm'>
              <del>₹{DiscountPrice}</del>
              <span className='text-green-500'>{calculateDiscount(DiscountPrice,Price)}% OFF</span>
            </p>
        </div>
        <div>
            {/* Product Title */}
            <div>{ProductTitle}</div>
        </div>
        <div>
            {/* review star */}
            <StarRatingWithReviewCounter reviewCount={ProductReviewCount} fullStar={ProductStarCount}/>
        </div>
        <div>
            {/* size Seceltor */}
            <SizeSelector sizes={ProductSizeArray}/>
        </div>
        <div>
            {/* Add to Cart Button */}
            <AddToCartButton/>
        </div>
      </div>
    </>
  )
}

export default ProductCard
