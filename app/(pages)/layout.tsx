import Navbar from "@/app/components/Navbars/NavbarPrimary";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      {children}
    </div>
  );
}
