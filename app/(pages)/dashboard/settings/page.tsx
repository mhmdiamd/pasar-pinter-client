import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import SettingsContent from "./contents/SettingsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <SettingsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
