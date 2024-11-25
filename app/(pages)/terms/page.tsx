import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import TermsContent from "./contents/TermsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <TermsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
