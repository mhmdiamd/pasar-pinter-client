import { Check } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with basic product analysis.",
    features: [
      "Limited searches",
      "Basic analysis",
      "No saved products",
      "Standard support",
      "Community access",
    ],
  },
  {
    name: "Pro",
    price: "$9.99",
    description: "Unlock the full potential of AI-powered product analysis.",
    features: [
      "Unlimited searches",
      "Full AI analysis",
      "Save 100 products",
      "Priority support",
      "Advanced comparisons",
      "Price history tracking",
      "Custom alerts",
      "API access (100 calls/day)",
    ],
    featured: true,
  },
  {
    name: "Business",
    price: "$29.99",
    description: "Advanced features for teams and businesses.",
    features: [
      "Everything in Pro",
      "Team features",
      "Unlimited API access",
      "Priority support",
      "Custom integrations",
      "Advanced analytics",
      "Bulk analysis",
      "White-label reports",
    ],
  },
];

export default function PricingContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Pricing Plans
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Choose the perfect plan for your shopping needs.
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

      {/* Pricing Cards */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="grid max-w-md grid-cols-1 gap-8 mx-auto lg:max-w-7xl lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col justify-between rounded-3xl bg-white p-8 ring-1 ring-gray-200 xl:p-10 ${
                plan.featured ? "ring-2 ring-indigo-600" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between gap-x-4">
                  <h2 className="text-lg font-semibold leading-8 text-gray-900">
                    {plan.name}
                  </h2>
                  {plan.featured && (
                    <span className="rounded-full bg-indigo-600/10 px-2.5 py-1 text-xs font-semibold leading-5 text-indigo-600">
                      Most popular
                    </span>
                  )}
                </div>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {plan.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                </p>
                <ul
                  role="list"
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <Check
                        className="h-6 w-5 flex-none text-indigo-600"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              <a
                href="#"
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                  plan.featured
                    ? "bg-indigo-600 text-white hover:bg-indigo-500 focus-visible:outline-indigo-600"
                    : "bg-white text-indigo-600 ring-1 ring-inset ring-indigo-200 hover:ring-indigo-300"
                }`}
              >
                Get started
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
