import HeroSection from "../../components/home/HeroSection";
import Categories from "../../components/home/Categories";
import FeaturedProducts from "../../components/home/FeaturedProducts";
import TrendingProducts from "../../components/home/TrendingProducts";
import FlashSale from "../../components/home/FlashSale";

export default function Home() {
  return (
    <>
      <HeroSection />

      <FlashSale />

      <Categories />

      <FeaturedProducts />

      <TrendingProducts />
    </>
  );
}