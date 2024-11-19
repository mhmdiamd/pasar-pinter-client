import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import ProductDetailContent from "./contents/ProductDetailContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <ProductDetailContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
