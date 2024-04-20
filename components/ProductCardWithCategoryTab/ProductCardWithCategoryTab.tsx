'use client'
import React, { useEffect, useState } from 'react'
import Tab from './Tab'
import ProductCard from '../ProductCard/ProductCard'
import { Products, collections } from '@/data'

const ProductCardWithCategoryTab = () => {
  const [FilteredProductsByCategory , setFilteredProductsByCategory] =useState(Products) 
  const [SelectedTab , setSelectedTab] =useState<any>(collections[0].name) 

  useEffect(()=>{
    setFilteredProductsByCategory(p => Products.filter((f)=>f.collection == SelectedTab && f))
    console.clear()
    console.log(SelectedTab)
  },[SelectedTab])
  return (
     <>
     <Tab defaultTab={collections[0].name} TabList={collections.map((item) => item.name)} currentTab={(tabName:string)=>{setSelectedTab(tabName)}} >
        <div className='container grid grid-cols-1  md:grid-cols-4 '>
          {FilteredProductsByCategory.map((product,key)=>(<>
            <ProductCard key={key} DiscountPrice={product.Price} ProductReviewCount={product.ProductReviewCount} ProductStarCount={product.ProductStarCount} ImageUrl={product.ImageUrl}  ProductTitle={product.ProductTitle} Price={product.DiscountPrice} ProductSizeArray={product.ProductSizeArray}/>
          </>
          ))}
        </div>
     </Tab>
     <div className='text-center my-5'>
          <button className='py-2 bg-gray-950 text-white px-6 rounded-md hover:bg-gray-800 transition-all duration-200'>View All </button>
     </div>
     </>
  )
}

export default ProductCardWithCategoryTab
