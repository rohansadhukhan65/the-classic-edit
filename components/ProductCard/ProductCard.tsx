'use client'
import React from 'react'
import './ProductCard.css'
import Image from 'next/image'
import StarRatingWithReviewCounter from '../StarRatingWithReviewCounter/StarRatingWithReviewCounter'
import SizeSelector from '../SizeSelector/SizeSelector'

interface Iprop{
  ProductID?: string;
  ImageUrl? : string;
  Price?: number;
  DiscountPrice?: number;
  DiscountPersentage?: string;
  ProductTitle?: string;
  ProductReviewCount?: number;
  ProductStarCount?: number;
  ProductSizeArray?: any;
}
const ProductCard = ({ProductID,ImageUrl,Price,DiscountPrice,DiscountPersentage,ProductTitle,ProductReviewCount,ProductStarCount,ProductSizeArray}:Iprop) => {
  return (
    <>
      <div className='flex flex-col w-[240px] gap-y-3 m-3'>
        <div>
            {/* Image */}
            <Image
                src={'/Img/productImages/prodOne.png'}
                height={320}
                width={238}
                alt='Product'
                className='rounded-md'
            />
        </div>
        <div className='flex gap-x-3 items-center justify-start'>
            {/* price */}
            <p className='text-xl'>$8,200</p>
            <p className='flex gap-x-2 text-gray-600 text-sm'>
              <del>$9,000</del>
              <span className='text-green-500'>20% OFF</span>
            </p>
        </div>
        <div>
            {/* Product Title */}
            <div>Lorem Ipsum Dolor Amit</div>
        </div>
        <div>
            {/* review star */}
            <StarRatingWithReviewCounter reviewCount={15} fullStar={3}/>
        </div>
        <div>
            {/* size Seceltor */}
            <SizeSelector sizes={['S','M','L','XL','XXL']}/>
        </div>
        <div>
            {/* Add to Cart Button */}
        </div>
      </div>
    </>
  )
}

export default ProductCard
