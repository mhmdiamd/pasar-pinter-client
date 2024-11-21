import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import RootDashboardContent from "./contents/RootDashboardContent";
import AnimatedPage from "@/app/components/Animations/AnimatedPage";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <RootDashboardContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
