import HeroSection from "@/components/Home/HeroSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import HomeProcess from "@/components/Home/HomeProcess";
import ServicesHighlight from "@/components/Home/ServicesHighlight";
import BuyingHouseServices from "@/components/Home/BuyingHouseServices";
import ProductsServices from "@/components/Home/ProductsServices";
import FactoryCapabilities from "@/components/Home/FactoryCapabilities";
import HomeCTA from "@/components/Home/HomeCTA";

export default function HomePage() {
  return (
    <main className="bg-white">
      <HeroSection />
      <WhyChooseUs />
      <HomeProcess />
      <ServicesHighlight />
      <BuyingHouseServices />
      <ProductsServices />
      <FactoryCapabilities />
      <HomeCTA />
    </main>
  );
}