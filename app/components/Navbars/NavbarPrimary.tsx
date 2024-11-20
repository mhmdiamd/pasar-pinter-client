"use client";

import {
  Search,
  ShoppingBag,
  Menu,
  X,
  Bell,
  Settings,
  LogOut,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Menu as HeadlessMenu, Transition } from "@headlessui/react";
import Link from "next/link";
import SearchDialog from "../Dialogs/SearchDialog";
import { TUser } from "@/lib/types/user";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [user, setUser] = useState<TUser | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  // const [currentUser, setCurrentUser] = useState({
  //   displayName: JSON.parse(localStorage.getItem("auth") as string)?.displayName,
  //   email: JSON.parse(localStorage.getItem("auth") as string)?.email
  // });

  const handleSignOut = async () => {
    try {
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

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
              <Link href="/" className="text-gray-700 hover:text-indigo-600">
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

            <div className="hidden md:flex items-center space-x-4">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100"
              >
                <Search className="h-5 w-5" />
              </button>

              {user ? (
                <div className="flex items-center space-x-4">
                  <button className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100">
                    <Bell className="h-5 w-5" />
                  </button>

                  <HeadlessMenu as="div" className="relative">
                    <HeadlessMenu.Button className="flex items-center">
                      <img
                        src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || "User")}`}
                        alt="Profile"
                        className="h-8 w-8 rounded-full"
                      />
                    </HeadlessMenu.Button>

                    <Transition
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <HeadlessMenu.Items className="absolute right-0 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard/profile"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                              Profile
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                              Dashboard
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link
                              href="/dashboard/saved-products"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                              Saved Products
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <Link
                              href="/settings"
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex items-center px-4 py-2 text-sm text-gray-700`}
                            >
                              <Settings className="h-4 w-4 mr-2" />
                              Settings
                            </Link>
                          )}
                        </HeadlessMenu.Item>
                        <HeadlessMenu.Item>
                          {({ active }) => (
                            <button
                              onClick={handleSignOut}
                              className={`${
                                active ? "bg-gray-100" : ""
                              } flex w-full items-center px-4 py-2 text-sm text-gray-700`}
                            >
                              <LogOut className="h-4 w-4 mr-2" />
                              Sign out
                            </button>
                          )}
                        </HeadlessMenu.Item>
                      </HeadlessMenu.Items>
                    </Transition>
                  </HeadlessMenu>
                </div>
              ) : (
                <div className="flex items-center space-x-4">
                  <Link
                    href="/sign-in"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
                  >
                    Sign in
                  </Link>
                  <Link
                    href="/sign-up"
                    className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2"
                  >
                    Sign up
                  </Link>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setSearchOpen(true)}
                className="text-gray-700 hover:text-indigo-600 p-2 rounded-full hover:bg-gray-100 mr-2"
              >
                <Search className="h-5 w-5" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="text-gray-700 hover:text-indigo-600 p-2"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`fixed inset-0 bg-gray-800/50 z-50 transition-opacity duration-300 ${
            mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          onClick={() => setMobileMenuOpen(false)}
        >
          <div
            className={`fixed inset-y-0 right-0 w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${
              mobileMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <h2 className="text-lg font-semibold">Menu</h2>
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <X className="h-6 w-6" />
              </button>
            </div>

            <div className="px-4 py-6 bg-white/80 backdrop-blur-md">
              {user ? (
                <>
                  <div className="flex items-center space-x-3 mb-6 p-4 bg-gray-50 rounded-lg">
                    <img
                      src={`https://ui-avatars.com/api/?name=${encodeURIComponent(user?.displayName || "User")}`}
                      alt="Profile"
                      className="h-10 w-10 rounded-full"
                    />
                    <div>
                      <p className="font-medium">{user?.displayName}</p>
                      <p className="text-sm text-gray-500">{user?.email}</p>
                    </div>
                  </div>
                  <div className="space-y-1">
                    <Link
                      href="/dashboard/profile"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Profile
                    </Link>
                    <Link
                      href="/dashboard"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Dashboard
                    </Link>
                    <Link
                      href="/dashboard/saved-products"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Saved Products
                    </Link>
                    <Link
                      href="/settings"
                      className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Settings
                    </Link>
                    <button
                      onClick={() => {
                        handleSignOut();
                        setMobileMenuOpen(false);
                      }}
                      className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    >
                      Sign out
                    </button>
                  </div>
                </>
              ) : (
                <div className="space-y-1">
                  <Link
                    href="/"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/how-it-works"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    How it Works
                  </Link>
                  <Link
                    href="/features"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Features
                  </Link>
                  <Link
                    href="/pricing"
                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Pricing
                  </Link>
                  <div className="pt-4 flex flex-col space-y-3">
                    <Link
                      href="/sign-in"
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign in
                    </Link>
                    <Link
                      href="/sign-up"
                      className="w-full inline-flex justify-center items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      Sign up
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </nav>

      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

