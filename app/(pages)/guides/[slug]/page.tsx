import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import GuideDetailContent, { guides } from "./contents/GuideDetailContent";

type Props = {
  params: {
    slug: keyof typeof guides;
  };
};

const page = ({ params }: Props) => {
  return (
    <Fragment>
      <main>
        <GuideDetailContent slug={params?.slug} />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
