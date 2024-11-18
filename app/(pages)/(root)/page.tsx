import { Fragment } from "react";
import HomeContent from "./contents/HomeContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";

export default function Home() {
  return (
    <Fragment>
      <main>
        <HomeContent />
      </main>
      <FooterPrimary />
    </Fragment>
  );
}
