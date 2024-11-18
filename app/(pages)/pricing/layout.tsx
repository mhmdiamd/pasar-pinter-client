import FooterPrimary from "@/app/components/Footers/FooterPrimary";
import { Fragment } from "react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <main>{children}</main>
      <FooterPrimary />
    </Fragment>
  );
}
