// Components .....
import FlashSalesBar from "@/components/FlashSalesBar/FlashSalesBar";
import UserLayout from "../components/UserLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import ProductCardWithCategoryTab from "@/components/ProductCardWithCategoryTab/ProductCardWithCategoryTab";
import CollectionCards from "@/components/CollectionCards/CollectionCards";

export default function Home() {
  return (
  <UserLayout>
    <FlashSalesBar/>
    <Header/>
      <HeroSlider/>

      {/* Tabs Section */}
      <div className="container px-36 mx-auto my-10">
        <div className="text-center text-5xl font-semibold my-5">Bestsellers</div>
        <ProductCardWithCategoryTab/>
      </div>

      {/* Collection Showcase */}
      <div className="container px-36 mx-auto my-10">
      <CollectionCards/>
      </div>

      <div className="container px-36 mx-auto my-10">
        <div className="text-center text-5xl font-semibold my-5">New Arrivals</div>
        <ProductCardWithCategoryTab/>
      </div>
      
    <Footer/>
  </UserLayout>
  );
}
