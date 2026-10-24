
import Navbar from "./components/Navbar";
import Hero from "./components/Home";
import CategorySection from "./components/CategorySection";
import CardSection from "./components/CardSection";
import BannerSection from "./components/BannerSection"
import TrendingProducts from "./components/TrendingProducts"
import Footer from "./components/Footer"
export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <CategorySection />
      <CardSection />
      <BannerSection />
      <TrendingProducts />
      <Footer />
    </>
  );
}
