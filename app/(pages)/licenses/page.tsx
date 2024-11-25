import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import LicensesContent from "./contents/LicensesContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <LicensesContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
