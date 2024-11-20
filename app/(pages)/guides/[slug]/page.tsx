import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import GuideDetailContent, { guides } from "./contents/GuideDetailContent";

type PageProps = {
  params: {
    slug: keyof typeof guides;
  };
};

const page = ({ params }: PageProps) => {
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
