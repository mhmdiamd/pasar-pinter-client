import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-5 row-start-2 items-center sm:items-start">
        <div className="w-fit max-w-2xl flex flex-col gap-y-1">
          <h3>Selamat datang di</h3>
          <h1 className="font-bold text-6xl">Pasar Pintar</h1>
        </div>

        <div className="w-fit max-w-2xl flex flex-col gap-y-1">
          <p>
            Platform belanja pintar berbasis AI yang menganalisis data produk
            dari berbagai e-commerce secara real-time. Dengan dukungan AI,
            PasarPintar menawarkan rekomendasi produk terbaik, prediksi harga,
            dan insight mendalam untuk membantu pengguna mendapatkan produk
            unggulan dengan harga optimal.
          </p>
        </div>
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <Button size={"lg"} className="rounded-full">
            Cari Sekarang
          </Button>
          <Button size={"lg"} variant="ghost" className="rounded-full">
            Cari Sekarang
          </Button>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p className="text-sm flex items-center">
          <span className="text-xl mr-1">©</span>Copyright by
          <Link className="font-semibold ml-1" href="">
            Muhamad Ilham Darmawan
          </Link>
          . All Right Reserved
        </p>
      </footer>
    </div>
  );
}
