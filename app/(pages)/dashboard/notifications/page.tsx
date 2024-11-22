import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import NotificationsContent from "./contents/NotificationsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <NotificationsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
