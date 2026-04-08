import BuyingHouseHero from "@/components/BuyingHouse/BuyingHouseHero";
import BuyingHouseServices from "@/components/BuyingHouse/BuyingHouseServices";
import ProductExpertise from "@/components/BuyingHouse/ProductExpertise";
import ProductGallery from "@/components/BuyingHouse/ProductGallery";
import BuyingHouseProcess from "@/components/BuyingHouse/BuyingHouseProcess";

export default function BuyingHousePage() {
  return (
    <main className="bg-white">
      <BuyingHouseHero />
      <BuyingHouseServices />
      <ProductExpertise />
      <ProductGallery />
      <BuyingHouseProcess />
    </main>
  );
}