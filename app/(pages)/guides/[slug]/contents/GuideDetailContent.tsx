"use client";

import { BookOpen, Clock, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const guides = {
  "ai-analysis": {
    title: "Getting the Most from AI Analysis",
    description:
      "Learn how to interpret AI insights and make better purchasing decisions.",
    category: "Advanced",
    duration: "10 min read",
    author: "Sarah Johnson",
    date: "March 15, 2024",
    content: `
      <h2>Understanding AI Product Analysis</h2>
      <p>AI analysis provides deep insights into product quality, value, and authenticity by processing vast amounts of data from multiple sources. Here's how to make the most of these insights:</p>
      
      <h3>1. Quality Assessment</h3>
      <p>Our AI analyzes thousands of user reviews and product specifications to evaluate:</p>
      <ul>
        <li>Build quality and durability</li>
        <li>Performance metrics</li>
        <li>Reliability scores</li>
        <li>Common issues and their frequency</li>
      </ul>

      <h3>2. Value Analysis</h3>
      <p>Understand the true value of a product through:</p>
      <ul>
        <li>Price history tracking</li>
        <li>Feature-to-price ratio comparison</li>
        <li>Market positioning analysis</li>
        <li>Alternative product suggestions</li>
      </ul>

      <h3>3. Authenticity Verification</h3>
      <p>Protect yourself from counterfeit products with our AI-powered verification system that checks:</p>
      <ul>
        <li>Seller reputation and history</li>
        <li>Price consistency with market standards</li>
        <li>Product listing authenticity markers</li>
        <li>Review pattern analysis</li>
      </ul>
    `,
  },
  "price-tracking": {
    title: "Price Tracking Strategies",
    description: "Set up effective price alerts and track product history.",
    category: "Intermediate",
    duration: "8 min read",
    author: "Michael Chen",
    date: "March 14, 2024",
    content: `
      <h2>Mastering Price Tracking</h2>
      <p>Effective price tracking can save you significant money on your purchases. Here's how to use our tools effectively:</p>

      <h3>1. Setting Up Price Alerts</h3>
      <p>Learn how to:</p>
      <ul>
        <li>Create custom price thresholds</li>
        <li>Configure notification preferences</li>
        <li>Set up multiple tracking scenarios</li>
        <li>Use seasonal pricing insights</li>
      </ul>

      <h3>2. Understanding Price History</h3>
      <p>Make informed decisions by:</p>
      <ul>
        <li>Analyzing historical price trends</li>
        <li>Identifying seasonal patterns</li>
        <li>Comparing across multiple retailers</li>
        <li>Predicting future price changes</li>
      </ul>

      <h3>3. Advanced Tracking Features</h3>
      <p>Take advantage of:</p>
      <ul>
        <li>Cross-platform price comparison</li>
        <li>Price drop predictions</li>
        <li>Coupon and deal stacking</li>
        <li>Price protection monitoring</li>
      </ul>
    `,
  },
  // Add more guides as needed
};

export default function GuideDetailContent({
  slug,
}: {
  slug: keyof typeof guides;
}) {
  const guide = guides[slug as keyof typeof guides];

  if (!guide) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Guide not found</h1>
          <Link
            href="/guides"
            className="mt-4 text-indigo-600 hover:text-indigo-500"
          >
            Back to guides
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-white border-b">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <Link
            href="/guides"
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700 mb-8"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to guides
          </Link>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800">
                  {guide.category}
                </span>
                <div className="flex items-center text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-1" />
                  {guide.duration}
                </div>
              </div>

              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl mb-4">
                {guide.title}
              </h1>

              <p className="text-xl text-gray-600">{guide.description}</p>
            </div>
          </div>

          <div className="mt-8 flex items-center text-sm text-gray-500">
            <BookOpen className="h-4 w-4 mr-2" />
            <span>
              Written by {guide.author} • {guide.date}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <div
          className="prose prose-lg prose-indigo max-w-none"
          dangerouslySetInnerHTML={{ __html: guide.content }}
        />
      </div>
    </div>
  );
}
