import { Book, Code, Database, Lock } from "lucide-react";
import Link from "next/link";

const sections = [
  {
    title: "Getting Started",
    description: "Learn the basics of using our platform",
    icon: Book,
    links: [
      { title: "Quick Start Guide", href: "/docs/quick-start" },
      { title: "Platform Overview", href: "/docs/overview" },
      { title: "Basic Concepts", href: "/docs/concepts" },
    ],
  },
  {
    title: "API Reference",
    description: "Detailed API documentation for developers",
    icon: Code,
    links: [
      { title: "Authentication", href: "/docs/api/auth" },
      { title: "Endpoints", href: "/docs/api/endpoints" },
      { title: "Rate Limits", href: "/docs/api/limits" },
    ],
  },
  {
    title: "Data & Privacy",
    description: "Understanding data handling and security",
    icon: Lock,
    links: [
      { title: "Data Processing", href: "/docs/privacy/processing" },
      { title: "Security Measures", href: "/docs/privacy/security" },
      { title: "Compliance", href: "/docs/privacy/compliance" },
    ],
  },
  {
    title: "Integration",
    description: "Connect with our platform",
    icon: Database,
    links: [
      { title: "SDK Setup", href: "/docs/integration/sdk" },
      { title: "Webhooks", href: "/docs/integration/webhooks" },
      { title: "Examples", href: "/docs/integration/examples" },
    ],
  },
];

export default function DocumentationContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Documentation
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Everything you need to know about our platform
            </p>
          </div>
        </div>
        <div
          className="absolute inset-x-0 -z-10 transform-gpu overflow-hidden blur-3xl"
          aria-hidden="true"
        >
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-indigo-200 to-indigo-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
        </div>
      </div>

      {/* Search */}
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search documentation..."
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Documentation Sections */}
      <div className="mx-auto max-w-7xl px-6 pb-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {sections.map((section) => (
            <div
              key={section.title}
              className="relative rounded-2xl border border-gray-200 p-8"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                <section.icon className="h-6 w-6 text-white" />
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                {section.title}
              </h2>
              <p className="mt-2 text-gray-600">{section.description}</p>
              <ul className="mt-6 space-y-3">
                {section.links.map((link) => (
                  <li key={link.title}>
                    <Link
                      href={link.href}
                      className="text-indigo-600 hover:text-indigo-800 text-sm font-medium"
                    >
                      {link.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
