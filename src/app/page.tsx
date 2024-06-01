import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiaed bg-grid-white/[0.02] ">
      
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
    </main>
  );
}
