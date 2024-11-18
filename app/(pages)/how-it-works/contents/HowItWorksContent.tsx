import { Search, Brain, LineChart } from "lucide-react";

const steps = [
  {
    title: "Product Search",
    description:
      "Search across multiple e-commerce platforms simultaneously to find the best deals and products.",
    icon: Search,
    features: ["Multi-platform search", "Instant results", "Filter options"],
  },
  {
    title: "AI Analysis",
    description:
      "Our advanced AI analyzes product details, reviews, and pricing history to provide comprehensive insights.",
    icon: Brain,
    features: ["Price analysis", "Review sentiment", "Quality assessment"],
  },
  {
    title: "Decision Support",
    description:
      "Get personalized recommendations and compare products to make informed purchasing decisions.",
    icon: LineChart,
    features: ["Recommendations", "Comparison tools", "Save options"],
  },
];

export default function HowItWorksContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              How It Works
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Discover how our AI-powered platform helps you make smarter
              shopping decisions with comprehensive product analysis and
              tracking.
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

      {/* Process Steps */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="relative pl-16">
              <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                <step.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h2 className="text-2xl font-semibold leading-7 text-gray-900">
                  {index + 1}. {step.title}
                </h2>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {step.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {step.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2" />
                      <span className="text-sm text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
