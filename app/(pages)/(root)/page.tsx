import ComingSoonDialog from "@/app/components/Dialogs/ComingSoonDialog";
import ContactUsDrawer from "@/app/components/Drawers/ContactUsDrawer";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaRegCopyright } from "react-icons/fa";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen px-5 md:p-8 pb-5 md:pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-5 row-start-2 items-start">
        <div className="w-fit max-w-2xl flex flex-col gap-y-1">
          <h3>Welcome in</h3>
          <h1 className="font-bold text-5xl md:text-6xl">Pasar Pintar</h1>
        </div>

        <div className="w-fit max-w-2xl flex flex-col gap-y-1">
          <p>
            A smart shopping platform based on AI that analyzes product data
            from various e-commerce sites in real-time. With the support of AI,
            PasarPintar offers the best product recommendations, price
            predictions, and deep insights to help users find premium products
            at the optimal price.
          </p>
        </div>
        <div className="flex gap-4 items-center ">
          <ComingSoonDialog>
            <Button size={"lg"} className="rounded-full">
              Find Now
            </Button>
          </ComingSoonDialog>

          <ContactUsDrawer>
            <Button size={"lg"} variant="ghost" className="rounded-full">
              Contact Us
            </Button>
          </ContactUsDrawer>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <div className="flex gap-x-1 items-center">
          <FaRegCopyright size={14} />

          <p className="text-xs items-center text-center">
            Copyright by
            <Link className="font-semibold ml-1" href="">
              Kelompok 16
            </Link>
            . All Right Reserved
          </p>
        </div>
      </footer>
    </div>
  );
}
