"use client";

import { useState } from "react";
import { Search, SlidersHorizontal, Store, ExternalLink } from "lucide-react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

const mockResults = [
  {
    id: "1",
    title: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    price: 348.0,
    originalPrice: 399.99,
    store: "Amazon",
    rating: 4.8,
    reviews: 2457,
    aiScore: 92,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    title: "Apple AirPods Pro (2nd Generation)",
    price: 249.0,
    originalPrice: 249.0,
    store: "Best Buy",
    rating: 4.7,
    reviews: 1893,
    aiScore: 88,
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=300",
  },
  // Add more mock results as needed
];

const stores = ["All Stores", "Amazon", "Best Buy", "Walmart", "Target"];
const sortOptions = [
  "Relevance",
  "Price: Low to High",
  "Price: High to Low",
  "Rating",
  "AI Score",
];
const priceRanges = [
  "All Prices",
  "Under $50",
  "$50 - $100",
  "$100 - $200",
  "$200+",
];

export default function SearchResults() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q") || "";
  const [selectedStore, setSelectedStore] = useState("All Stores");
  const [selectedSort, setSelectedSort] = useState("Relevance");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Search Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  defaultValue={query}
                  placeholder="Search products..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                />
              </div>
            </div>
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg"
            >
              <SlidersHorizontal className="h-5 w-5" />
              Filters
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
              <select
                value={selectedStore}
                onChange={(e) => setSelectedStore(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                {stores.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>

              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>

              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="block w-full rounded-lg border border-gray-300 px-3 py-2"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
          )}
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockResults.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <div className="aspect-square relative">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4">
                  <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    AI Score: {product.aiScore}
                  </div>
                </div>
              </div>

              <div className="p-4">
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                  <Store className="h-4 w-4" />
                  <span>{product.store}</span>
                </div>

                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  {product.title}
                </h3>

                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-2xl font-bold text-gray-900">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.originalPrice > product.price && (
                    <span className="text-sm text-gray-500 line-through">
                      ${product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>

                <div className="flex items-center text-sm text-gray-500 mb-4">
                  <span className="flex items-center">
                    {product.rating} ★ ({product.reviews} reviews)
                  </span>
                </div>

                <div className="flex gap-2">
                  <Link
                    href={`/products/${product.id}`}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                  >
                    View Details
                    <ExternalLink className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
