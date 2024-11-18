import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import FeaturesContent from "./contents/FeaturesContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <FeaturesContent />
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
