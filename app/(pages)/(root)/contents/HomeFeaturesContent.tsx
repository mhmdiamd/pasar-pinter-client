import { Brain, LineChart, Share2, ShoppingBag, Star, Zap } from "lucide-react";

const features = [
  {
    name: "AI Analysis",
    description:
      "Get detailed AI-powered insights about products, including quality, value, and authenticity analysis.",
    icon: Brain,
  },
  {
    name: "Price Tracking",
    description:
      "Track price history and get alerts when products reach your target price.",
    icon: LineChart,
  },
  {
    name: "Multi-Platform",
    description:
      "Search and compare products across multiple e-commerce platforms simultaneously.",
    icon: ShoppingBag,
  },
  {
    name: "Review Analysis",
    description:
      "AI-powered review summarization and sentiment analysis from verified purchases.",
    icon: Star,
  },
  {
    name: "Smart Comparisons",
    description:
      "Compare similar products with detailed feature analysis and recommendations.",
    icon: Zap,
  },
  {
    name: "Save & Share",
    description:
      "Save your favorite products and share analysis with friends and family.",
    icon: Share2,
  },
];

export default function HomeFeaturesContent() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Powerful features
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to make informed purchases
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Our AI-powered platform helps you make smarter shopping decisions
            with comprehensive product analysis and tracking.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                  <feature.icon
                    className="h-5 w-5 flex-none text-indigo-600"
                    aria-hidden="true"
                  />
                  {feature.name}
                </dt>
                <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
