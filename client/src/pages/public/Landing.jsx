import React from "react";
import HeroSection from "../../components/landing/HeroSection";
import DiscountSection from "../../components/landing/DiscountSection";
import TopProducts from "../../components/landing/product/TopProducts";
import Newsletter from "../../components/landing/Newsletter";
import BestSelling from "../../components/landing/BestSelling"
import DiscountProduct from "../../components/landing/product/DiscountProduct";
import ProductsReviewed from "../../components/landing/product/ProductsReviewed";
import BranchLogos from "../../components/landing/BranchLogos";

export default function Landing() {
  return (
    <>
      <HeroSection />
      <DiscountSection />
      <TopProducts />
      <BestSelling />
      <DiscountProduct />
      <ProductsReviewed />
      <BranchLogos />
      <Newsletter />
    </>
  );
}