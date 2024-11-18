import { Brain, LineChart, Share2, ShoppingBag, Star, Zap } from "lucide-react";

const features = [
  {
    name: "AI Analysis",
    description:
      "Get detailed AI-powered insights about products, including quality, value, and authenticity analysis.",
    icon: Brain,
    features: ["Sentiment analysis", "Price tracking", "Quality assessment"],
  },
  {
    name: "Multi-Platform",
    description:
      "Search and compare products across multiple e-commerce platforms simultaneously.",
    icon: ShoppingBag,
    features: ["Universal search", "Real-time sync", "Platform comparison"],
  },
  {
    name: "Price Tracking",
    description:
      "Track price history and get alerts when products reach your target price.",
    icon: LineChart,
    features: ["Historical data", "Price alerts", "Trend analysis"],
  },
  {
    name: "Review Analysis",
    description:
      "AI-powered review summarization and sentiment analysis from verified purchases.",
    icon: Star,
    features: ["Review summary", "Sentiment scores", "Verified filtering"],
  },
  {
    name: "Smart Comparisons",
    description:
      "Compare similar products with detailed feature analysis and recommendations.",
    icon: Zap,
    features: [
      "Feature matching",
      "Side-by-side view",
      "Recommendation engine",
    ],
  },
  {
    name: "Personalization",
    description:
      "Save your favorite products and share analysis with friends and family.",
    icon: Share2,
    features: ["Custom alerts", "Saved searches", "History tracking"],
  },
];

export default function FeaturesContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Features
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Explore our comprehensive set of features designed to help you
              make smarter shopping decisions.
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

      {/* Features Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.name} className="relative">
              <div className="rounded-2xl border border-gray-200 p-8 h-full">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <feature.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h2 className="mt-6 text-2xl font-semibold leading-7 text-gray-900">
                  {feature.name}
                </h2>
                <p className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </p>
                <ul className="mt-8 space-y-3">
                  {feature.features.map((item) => (
                    <li key={item} className="flex items-center">
                      <div className="h-1.5 w-1.5 rounded-full bg-indigo-600 mr-2" />
                      <span className="text-sm text-gray-600">{item}</span>
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
