import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import ProductsContent from "./contents/ProductsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <ProductsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
