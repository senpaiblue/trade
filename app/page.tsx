import Navbar from "@/components/Navbar";
import Home from "../components/Home";
import HorizontalScrollCarousel from "@/components/FeaturesCarousels";
import ColorChangeCards from "@/components/FeatureCards";
import BasicFAQ from "@/components/Faq";
import VelocityText from "@/components/Footer";

export default function main() {
  return (
    <div className=" py-8">
      <Navbar/>
      <Home />
      <HorizontalScrollCarousel />
      <ColorChangeCards />
      <BasicFAQ />
      <VelocityText/>
    </div>
  );
}
