import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import GuideDetailContent, { guides } from "./contents/GuideDetailContent";

type PageProps = {
  params: Promise<{
    slug: keyof typeof guides;
  }>;
};

const page = async ({ params }: PageProps) => {
  return (
    <Fragment>
      <main>
        <GuideDetailContent slug={(await params)?.slug} />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
