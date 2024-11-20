import React, { Fragment } from "react";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import SearchResultsContent from "./contents/SearchResultsContent";

type Props = {};

const page = (props: Props) => {
  return (
    <Fragment>
      <main>
        <SearchResultsContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
};

export default page;
