// Components .....
import FlashSalesBar from "@/components/FlashSalesBar/FlashSalesBar";
import UserLayout from "../components/UserLayout";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import HeroSlider from "@/components/HeroSlider/HeroSlider";

export default function Home() {
  return (
  <UserLayout>
    <FlashSalesBar/>
    <Header/>
      <HeroSlider/>
      <div className="h-96 mt-96 pt-96"></div>
    <Footer/>
  </UserLayout>
  );
}
