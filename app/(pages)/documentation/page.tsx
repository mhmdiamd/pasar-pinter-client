import React, { Fragment } from "react";
import DocumentationContent from "./contents/DocumentationContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <DocumentationContent />
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
