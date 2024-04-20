import React from 'react'
import { Tabs, TabsList, TabsTrigger } from './tabs'
import Tab from './Tab'
import ProductCard from '../ProductCard/ProductCard'

const ProductCardWithCategoryTab = () => {
  return (
     <>
     <Tab defaultTab={'mens'} >
      
      <ProductCard  />
     </Tab>
     </>
  )
}

export default ProductCardWithCategoryTab
