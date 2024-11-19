import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import ProfileContent from "./contents/ProfileContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <ProfileContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
