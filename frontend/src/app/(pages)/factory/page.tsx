import FactoryHero from "@/components/Factory/FactoryHero";
import FactoryCTA from "@/components/Factory/FactoryCTA";
import AdvancedMachinery from "@/components/Factory/AdvancedMachinery";
import MachineryInventory from "@/components/Factory/MachineryInventory";

export default function FactoryPage() {
  return (
    <main className="bg-white">
      <FactoryHero />
      <FactoryCTA />
      <AdvancedMachinery />
      <MachineryInventory />
    </main>
  );
}