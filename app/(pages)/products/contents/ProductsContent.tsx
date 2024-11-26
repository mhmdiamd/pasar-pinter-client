"use client";

import { useState } from "react";
import {
  Filter,
  SlidersHorizontal,
  Store,
  Star,
  TrendingUp,
  Heart,
} from "lucide-react";
import { motion } from "framer-motion";
import AnimatedPage from "@/app/components/Animations/AnimatedPage";
import { useInfiniteScroll } from "@/app/hooks/useInfiniteScroll";
import Link from "next/link";
import { ProductCardSkeleton } from "@/app/components/Loadings/LoadingSkeleton";
import {
  categories,
  generateMockProducts,
  popularProducts,
  sortOptions,
} from "./product-mock";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProductsContent = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedSort, setSelectedSort] = useState("relevance");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000]);

  const fetchProducts = async (page: number) => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return generateMockProducts(page);
  };

  const {
    data: products,
    loading,
    hasMore,
    lastElementRef,
  } = useInfiniteScroll(() => fetchProducts(12), generateMockProducts(12));

  const filteredProducts = products.filter(
    (product) =>
      (!selectedCategory || product.category === selectedCategory) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1],
  );

  return (
    <AnimatedPage>
      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Popular Products Section */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                Popular Right Now
              </h2>
              <TrendingUp className="h-6 w-6 text-indigo-600" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-6">
              {popularProducts.map((product) => (
                <motion.div
                  key={product.id}
                  whileHover={{ y: -4 }}
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
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {product.store}
                      </span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm text-gray-600">
                          {product.rating}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between">
                      <span className="text-sm sm:text-base lg:text-xl font-bold text-gray-900">
                        ${product.price}
                      </span>
                      <button className="p-2 rounded-full hover:bg-gray-100">
                        <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="w-full lg:w-64 flex-shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    Filters
                  </h3>
                  <Filter className="h-5 w-5 text-gray-400" />
                </div>

                {/* Categories */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Categories
                  </h4>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() =>
                          setSelectedCategory(
                            selectedCategory === category.id
                              ? null
                              : category.id,
                          )
                        }
                        className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm ${
                          selectedCategory === category.id
                            ? "bg-indigo-50 text-indigo-600"
                            : "text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        <span>{category.name}</span>
                        <span className="text-xs text-gray-400">
                          ({category.count})
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Price Range */}
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-900 mb-4">
                    Price Range
                  </h4>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <input
                        type="number"
                        value={priceRange[0]}
                        onChange={(e) =>
                          setPriceRange([Number(e.target.value), priceRange[1]])
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        placeholder="Min"
                      />
                      <span className="text-gray-400">-</span>
                      <input
                        type="number"
                        value={priceRange[1]}
                        onChange={(e) =>
                          setPriceRange([priceRange[0], Number(e.target.value)])
                        }
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                        placeholder="Max"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Product Grid */}
            <div className="flex-1">
              <div className="flex flex-col sm:flex-row md:items-center justify-between mb-6 gap-3">
                <h2 className="text-xl font-bold text-gray-900">
                  All Products
                </h2>
                <div className="grid grid-cols-2 md:flex items-center gap-4">
                  <select
                    value={selectedSort}
                    onChange={(e) => setSelectedSort(e.target.value)}
                    className="px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  >
                    <SlidersHorizontal className="h-4 w-4" />
                    Filters
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6">
                {filteredProducts.map((product, index) => (
                  <motion.div
                    key={index}
                    ref={index === products.length - 1 ? lastElementRef : null}
                    whileHover={{ y: -4 }}
                    className="bg-white rounded-lg shadow-sm overflow-hidden"
                  >
                    <Link href={`/products/${product.id}`}>
                      <div className="aspect-square relative">
                        <AspectRatio ratio={1 / 1}>
                          <img
                            src={product.image}
                            alt={product.title}
                            className="object-cover"
                          />
                        </AspectRatio>
                        <div className="absolute top-4 right-4">
                          <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            AI Score: {product.aiScore}
                          </div>
                        </div>
                      </div>
                      <div className="p-4">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm text-gray-500">
                            {product.store}
                          </span>
                          <div className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-400 fill-current" />
                            <span className="ml-1 text-sm text-gray-600">
                              {product.rating}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-sm md:text-lg font-medium text-gray-900 mb-2">
                          {product.title}
                        </h3>
                        <div className="flex items-center justify-between">
                          <span className="text-sm sm:text-base lg:text-xl font-bold text-gray-900">
                            ${product.price}
                          </span>
                          <button className="p-2 rounded-full hover:bg-gray-100">
                            <Heart className="h-5 w-5 text-gray-400 hover:text-red-500" />
                          </button>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}

                {loading && (
                  <>
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                    <ProductCardSkeleton />
                  </>
                )}
              </div>

              {!loading && !hasMore && filteredProducts.length > 0 && (
                <p className="text-center text-gray-500 mt-8">
                  No more products to load
                </p>
              )}

              {!loading && filteredProducts.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500">No products found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </AnimatedPage>
  );
};

export default ProductsContent;
