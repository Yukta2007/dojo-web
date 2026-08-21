import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import HeroSection from "./components/home/HeroSection";
import Quotes from "./components/home/Quotes";
import FloatingCards from "./components/home/FloatingCards";
import BeltJourney from "./components/home/BeltJourney";
import FeaturedVideo from "./components/home/FeaturedVideo";

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <HeroSection />
        <Quotes />
        <FloatingCards />
        <BeltJourney />
        <FeaturedVideo />
      </main>

      <Footer />
    </>
  );
}