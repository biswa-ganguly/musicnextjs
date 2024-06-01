import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import InfiniteCards from "@/components/InfiniteCards";
import Instructors from "@/components/Instructors";
import UpcomingProjects from "@/components/UpcomingProjects";
import WhyChooseUs from "@/components/WhyChooseUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiaed bg-grid-white/[0.02] ">
      
      <HeroSection/>
      <FeatureSection/>
      <WhyChooseUs/>
      <InfiniteCards/>
      <UpcomingProjects/>
      <Instructors/>
      <Footer/>
    </main>
  );
}
