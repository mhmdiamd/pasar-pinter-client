import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import SupportContent from "./contents/SupportContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <SupportContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
