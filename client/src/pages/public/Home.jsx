import HeroHome from "../../components/home/HeroHome";
import PromoBanners from "../../components/home/PromoBanners";
import NewArrivals from "../../components/home/NewArrivals";
import TrendingGrid from "../../components/home/TrendingGrid";
import AllProducts from "../../components/home/AllProducts";
import BrandLogos from "../../components/home/BrandLogos";
import InstaFeed from "../../components/home/InstaFeed";
import StyleGallery from "../../components/home/StyleGallery";

export default function Home() {
  return (
    <div className="space-y-20">

      <HeroHome />

      <PromoBanners />

      <NewArrivals />

      <TrendingGrid />

      <AllProducts />

      <BrandLogos />

      <StyleGallery />

      <InstaFeed />

    </div>
  );
}