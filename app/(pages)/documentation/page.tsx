import React, { Fragment } from "react";
import DocumentationContent from "./contents/DocumentationContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import AnimatedPage from "@/app/components/Animations/AnimatedPage";

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
