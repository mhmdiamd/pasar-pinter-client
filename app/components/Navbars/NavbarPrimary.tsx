"use client";

import { Search, ShoppingBag } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import SearchDialog from "../Dialogs/SearchDialog";

export default function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-[60] border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">
                PasarPintar
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/#hero"
                className="text-gray-700 hover:text-indigo-600"
              >
                Home
              </Link>
              <Link
                href="/how-it-works"
                className="text-gray-700 hover:text-indigo-600"
              >
                How it Works
              </Link>
              <Link
                href="/features"
                className="text-gray-700 hover:text-indigo-600"
              >
                Features
              </Link>
              <Link
                href="/pricing"
                className="text-gray-700 hover:text-indigo-600"
              >
                Pricing
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
              </button>
              <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2">
                Sign in
              </button>
              <button className="hidden md:inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2">
                Sign up
              </button>
            </div>
          </div>
        </div>
      </nav>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
