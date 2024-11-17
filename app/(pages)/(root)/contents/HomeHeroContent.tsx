"use client";

import { Fragment, useState } from "react";
import { Search } from "lucide-react";
import SearchDialog from "@/app/components/Dialogs/SearchDialog";

export default function HomeHeroContent() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <Fragment>
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>

        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Find and analyze products across all platforms
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Make smarter shopping decisions with AI-powered product analysis,
              price tracking, and comprehensive reviews from multiple e-commerce
              platforms.
            </p>

            <div className="mt-10">
              <button
                onClick={() => setSearchOpen(true)}
                className="w-full flex items-center gap-2 rounded-lg border py-4 px-4 text-left text-gray-500 shadow-sm hover:border-gray-300 hover:bg-gray-50"
              >
                <Search className="h-5 w-5" />
                <span>Search for any product...</span>
                <div className="ml-auto hidden sm:flex items-center gap-1">
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded">⌘</kbd>
                  <kbd className="px-2 py-1 text-xs bg-gray-100 rounded">K</kbd>
                </div>
              </button>
            </div>

            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3 lg:grid-cols-3">
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-gray-900">1M+</span>
                <span className="text-sm text-gray-600">Products Analyzed</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-gray-900">50+</span>
                <span className="text-sm text-gray-600">Platforms</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-3xl font-bold text-gray-900">100K+</span>
                <span className="text-sm text-gray-600">Users</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </Fragment>
  );
}
