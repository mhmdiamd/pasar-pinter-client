import Navbar from "@/app/components/Navbars/NavbarPrimary";
import CookieConsentDrawer from "../components/Drawers/CookieConsentDrawer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
      <CookieConsentDrawer />
    </div>
  );
}
