'use client'
import React from "react";



// Lazy Components .....
const Header = React.lazy(()=> import('../components/Header/Header'))
const FlashSalesBar = React.lazy(()=> import('../components/FlashSalesBar/FlashSalesBar'))
const UserLayout = React.lazy(()=> import('../components/UserLayout'))
const Footer = React.lazy(()=> import('../components/Footer/Footer'))
const HeroSlider = React.lazy(()=> import('../components/HeroSlider/HeroSlider'))
const ProductCardWithCategoryTab = React.lazy(()=> import('../components/ProductCardWithCategoryTab/ProductCardWithCategoryTab'))
const CollectionCards = React.lazy(()=> import('../components/CollectionCards/CollectionCards'))

// Icoon Lazy components .....
const Antistatic = React.lazy(()=> import('../components/Icons/Antistatic'))
const Breathable = React.lazy(()=> import('../components/Icons/Breathable'))
const QuickDry = React.lazy(()=> import('../components/Icons/QuickDry'))
const Streachable = React.lazy(()=> import('../components/Icons/Streachable'))
 

export default function Home() {
     
  return (
  <UserLayout>
    <FlashSalesBar/>
    <Header/>
      <HeroSlider/>

      {/* Tabs Section */}
      <div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
        <div className="text-center text-5xl font-semibold my-5">Bestsellers</div>
        <ProductCardWithCategoryTab/>
      </div>

      {/* Collection Showcase */}
      <div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
        <CollectionCards/>
      </div>


      {/* Into About Section */}
      <div className="w-full bg-[#FFE9D3] py-10 px-5 text-center">
          <div className="text-center text-xl md:text-4xl my-5">Why <span className="font-bold">The Classic Edit?</span></div>
          <p className="md:w-[647px] mx-auto">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut 
            labore et dolore magna aliqua. Lorem ipsum dolor sit amet, 
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Icons */}
          <div className="grid md:grid-cols-4 grid-cols-2">
            <div><Antistatic/></div>
            <div><Breathable/></div>
            <div><QuickDry/></div>
            <div><Streachable/></div>
          </div>
      </div>


      {/* Tab Section 2 */}
      <div className="w-full lg:px-14 my-10 flex flex-col items-center flex-wrap">
        <div className="text-center text-5xl font-semibold my-5">New Arrivals</div>
        <ProductCardWithCategoryTab/>
      </div>

 
    <Footer/>
  </UserLayout>
  );
}
