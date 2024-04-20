// Components .....
import FlashSalesBar from "@/components/FlashSalesBar/FlashSalesBar";
import UserLayout from "../components/UserLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSlider from "@/components/HeroSlider/HeroSlider";
import ProductCardWithCategoryTab from "@/components/ProductCardWithCategoryTab/ProductCardWithCategoryTab";

export default function Home() {
  return (
  <UserLayout>
    <FlashSalesBar/>
    <Header/>
      <HeroSlider/>
      <ProductCardWithCategoryTab/>
    <Footer/>
  </UserLayout>
  );
}
