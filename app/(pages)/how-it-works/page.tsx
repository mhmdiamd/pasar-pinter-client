import React, { Fragment } from "react";
import HowItWorksContent from "./contents/HowItWorksContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <HowItWorksContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
