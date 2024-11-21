import { ShoppingBag } from "lucide-react";
import Link from "next/link";

const navigation = {
  // company: [
  //   { name: "About", href: "#" },
  //   { name: "Blog", href: "#" },
  //   { name: "Jobs", href: "#" },
  //   { name: "Press", href: "#" },
  // ],
  product: [
    { name: "Features", href: "/features" },
    { name: "How it works", href: "/how-it-works" },
    { name: "Pricing", href: "/pricing" },
  ],
  resources: [
    { name: "Documentation", href: "/documentation" },
    { name: "Guides", href: "/guides" },
    { name: "Support", href: "/support" },
  ],
  legal: [
    { name: "Privacy", href: "/privacy" },
    { name: "Terms", href: "/tnc" },
    { name: "Cookie Policy", href: "/cookie-policy" },
  ],
};

export default function FooterPrimary() {
  return (
    <footer className="bg-gray-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-12 xl:gap-8">
          <div className="space-y-8 col-span-4">
            <div className="flex items-center space-x-2">
              <ShoppingBag className="h-8 w-8 text-indigo-500" />
              <span className="text-xl font-bold text-white">PasarPintar</span>
            </div>
            <p className="text-sm leading-6 text-gray-300">
              Making shopping smarter with AI-powered product analysis and price
              tracking.
            </p>
          </div>
          <div className="col-span-8 mt-16 gap-8 xl:mt-0">
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Resources
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.resources.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Product
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.product.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Legal
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.legal.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-gray-300 hover:text-white"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} PasarPintar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
