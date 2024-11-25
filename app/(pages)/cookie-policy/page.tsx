import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import CookiePolicyContent from "./contents/CookiePolicyContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <CookiePolicyContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
