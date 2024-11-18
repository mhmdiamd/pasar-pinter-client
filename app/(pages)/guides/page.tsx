import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import GuidesContent from "./contents/GuidesContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <GuidesContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
