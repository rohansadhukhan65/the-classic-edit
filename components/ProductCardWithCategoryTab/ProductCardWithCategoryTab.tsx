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
  },[SelectedTab])
  return (
     <>
     <Tab defaultTab={collections[0].name} TabList={collections && collections.map((item) => item.name)} currentTab={(tabName:string)=>{setSelectedTab(tabName)}} >
        <div className='container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 md:gap-x-5'>
          {FilteredProductsByCategory && FilteredProductsByCategory.map((product,key)=>(<div key={key}>
            <ProductCard key={key} ProductID={product.ProductID} DiscountPrice={product.Price} ProductReviewCount={product.ProductReviewCount} ProductStarCount={product.ProductStarCount} ImageUrl={product.ImageUrl}  ProductTitle={product.ProductTitle} Price={product.DiscountPrice} ProductSizeArray={product.ProductSizeArray}/>
          </div>
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
