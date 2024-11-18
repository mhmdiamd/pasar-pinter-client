import React, { Fragment } from "react";
import PricingContent from "./contents/PricingContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <PricingContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
