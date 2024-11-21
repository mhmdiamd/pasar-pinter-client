"use client";

import { Home, LayoutDashboard, MoveLeft } from "lucide-react";
import { useRouter } from "next/navigation";
import { Fragment, useState } from "react";
import Navbar from "./components/Navbars/NavbarPrimary";
import FooterPrimary from "./components/Footers/FooterPrimary";
export default function NotFound() {
  const router = useRouter();
  const [user, setUser] = useState("");
  const navigate = (v: string) => {
    router.push(v);
  };

  return (
    <Fragment>
      <Navbar />
      <div className="min-h-screen bg-white flex flex-col items-center justify-center relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="relative px-6 py-24 text-center">
          <h1 className="text-9xl font-bold text-gray-900 mb-4 animate-bounce">
            404
          </h1>
          <p className="text-2xl font-semibold text-gray-900 mb-2">
            Page not found
          </p>
          <p className="text-gray-600 mb-8 max-w-md">
            Oops! The page you're looking for doesn't exist or has been moved.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <Home className="w-5 h-5 mr-2" />
              Back to Home
            </button>

            {user && (
              <button
                onClick={() => navigate("/dashboard")}
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
              >
                <LayoutDashboard className="w-5 h-5 mr-2" />
                Go to Dashboard
              </button>
            )}

            <button
              onClick={() => navigate("/")}
              className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors duration-200"
            >
              <MoveLeft className="w-5 h-5 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
      <FooterPrimary />
    </Fragment>
  );
}
