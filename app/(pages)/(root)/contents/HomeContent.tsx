import Navbar from "@/app/components/Navbars/NavbarPrimary";
import React from "react";
import HomeHeroContent from "./HomeHeroContent";
import HomeFeaturesContent from "./HomeFeaturesContent";
import HomeTrendingProductsContent from "./HomeTrendingProductsContent";
import HomeCallToActionContent from "./HomeCallToActionContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <HomeHeroContent />
        <HomeFeaturesContent />
        <HomeTrendingProductsContent />
        <HomeCallToActionContent />
      </main>
      <FooterPrimary />
    </div>
  );
};

export default HomeContent;
