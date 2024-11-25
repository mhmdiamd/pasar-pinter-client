import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import PrivacyContent from "./contents/PrivacyContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <PrivacyContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
