import { Fragment } from "react";
import HomeContent from "./contents/HomeContent";
import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import AnimatedPage from "@/app/components/Animations/AnimatedPage";

export default function Home() {
  return (
    <Fragment>
      <AnimatedPage>
        <main>
          <HomeContent />
        </main>
      </AnimatedPage>
      <FooterPrimary />
    </Fragment>
  );
}
