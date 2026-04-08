import AboutHero from "@/components/AboutUs/AboutHero";
import AboutIntro from "@/components/AboutUs/AboutIntro";
import AboutFeatures from "@/components/AboutUs/AboutFeatures";
import AboutProcess from "@/components/AboutUs/AboutProcess";

export default function AboutPage() {
  return (
    <main className="bg-white">
      <AboutHero />
      <AboutIntro />
      <AboutFeatures />
      <AboutProcess />
    </main>
  );
}