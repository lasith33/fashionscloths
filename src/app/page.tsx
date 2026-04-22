import Navbar from "./navbar/page"

import Footer from "./Home/footer"
import HeroSection from "./Home/heroSection";
import CategorySection from "./Home/categorySection";
import NewWomanArrivals from "./Home/newwomansection";
import NewmanArrivals from "./Home/newmansection";



export default function Home() {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <CategorySection/>
    <NewWomanArrivals/>
    <NewmanArrivals/>
    <Footer />
   
    </>
  );
}
