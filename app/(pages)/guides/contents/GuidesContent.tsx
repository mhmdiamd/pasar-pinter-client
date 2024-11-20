import { BookOpen, PlayCircle, Lightbulb, Trophy } from "lucide-react";
import Link from "next/link";

const guides = [
  {
    title: "Getting the Most from AI Analysis",
    description:
      "Learn how to interpret AI insights and make better purchasing decisions.",
    icon: Lightbulb,
    category: "Advanced",
    duration: "10 min read",
    slug: "ai-analysis",
  },
  {
    title: "Price Tracking Strategies",
    description: "Set up effective price alerts and track product history.",
    icon: Trophy,
    category: "Intermediate",
    duration: "8 min read",
    slug: "price-tracking",
  },
  {
    title: "Product Comparison Guide",
    description: "Compare products effectively across multiple platforms.",
    icon: BookOpen,
    category: "Beginner",
    duration: "5 min read",
    slug: "product-comparison",
  },
  {
    title: "Video Tutorials",
    description: "Watch step-by-step tutorials on using platform features.",
    icon: PlayCircle,
    category: "All Levels",
    duration: "45 min total",
    slug: "video-tutorials",
  },
];

export default function Guides() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative bg-[#f8fafc] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-white via-white/95 to-white/90" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(79, 70, 229, 0.05)'/%3E%3C/svg%3E")`,
              backgroundRepeat: "repeat",
            }}
          />
        </div>
        <div className="relative">
          <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
            <div className="mx-auto max-w-2xl text-center">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                User Guides
              </h1>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Step-by-step tutorials and best practices to help you make the
                most of our platform
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {guides.map((guide) => (
            <Link
              key={guide.title}
              href={`/guides/${guide.slug}`}
              className="relative rounded-2xl border border-gray-200 p-8 hover:shadow-lg transition-shadow group"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-600 group-hover:bg-indigo-700 transition-colors">
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
              <div className="mt-4 text-indigo-600 font-medium group-hover:text-indigo-700">
                Read more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
