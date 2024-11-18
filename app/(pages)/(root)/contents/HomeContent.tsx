import React, { Fragment } from "react";
import HomeHeroContent from "./HomeHeroContent";
import HomeFeaturesContent from "./HomeFeaturesContent";
import HomeTrendingProductsContent from "./HomeTrendingProductsContent";
import HomeCallToActionContent from "./HomeCallToActionContent";

type Props = {};

const HomeContent = (props: Props) => {
  return (
    <Fragment>
      <HomeHeroContent />
      <HomeFeaturesContent />
      <HomeTrendingProductsContent />
      <HomeCallToActionContent />
    </Fragment>
  );
};

export default HomeContent;
