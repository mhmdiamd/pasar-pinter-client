import { BookOpen, PlayCircle, Lightbulb, Trophy } from "lucide-react";

const guides = [
  {
    title: "Getting the Most from AI Analysis",
    description:
      "Learn how to interpret AI insights and make better purchasing decisions.",
    icon: Lightbulb,
    category: "Advanced",
    duration: "10 min read",
    href: "/guides/ai-analysis",
  },
  {
    title: "Price Tracking Strategies",
    description: "Set up effective price alerts and track product history.",
    icon: Trophy,
    category: "Intermediate",
    duration: "8 min read",
    href: "/guides/price-tracking",
  },
  {
    title: "Product Comparison Guide",
    description: "Compare products effectively across multiple platforms.",
    icon: BookOpen,
    category: "Beginner",
    duration: "5 min read",
    href: "/guides/comparison",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on using platform features.",
    icon: PlayCircle,
    category: "All Levels",
    duration: "45 min total",
    href: "/guides/tutorials",
  },
];

export default function GuidesContent() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-indigo-800">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              User Guides
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Step-by-step tutorials and best practices
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

      {/* Guides Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {guides.map((guide) => (
            <a
              key={guide.title}
              href={guide.href}
              className="relative rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600">
                  <guide.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                    {guide.category}
                  </span>
                  <p className="text-xs text-gray-500 mt-1">{guide.duration}</p>
                </div>
              </div>
              <h2 className="mt-4 text-2xl font-semibold text-gray-900">
                {guide.title}
              </h2>
              <p className="mt-2 text-gray-600">{guide.description}</p>
              <div className="mt-4 text-indigo-600 font-medium">
                Read more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}
