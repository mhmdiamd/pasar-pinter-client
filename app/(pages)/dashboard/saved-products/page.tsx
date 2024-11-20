import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import SavedProductsContent from "./contents/SavedProductsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <SavedProductsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
