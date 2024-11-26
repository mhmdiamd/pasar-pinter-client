import AnimatedButton from "@/app/components/Animations/AnimatedButton";
import AnimatedCard from "@/app/components/Animations/AnimatedCard";
import { Button } from "@/components/ui/button";
import { Heart, ExternalLink, MoveRight } from "lucide-react";
import Link from "next/link";

const products = [
  {
    id: 1,
    name: "Premium Wireless Earbuds",
    price: "$199.99",
    rating: 4.8,
    reviews: 2457,
    aiScore: 92,
    image:
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 2,
    name: "Smart Fitness Watch",
    price: "$299.99",
    rating: 4.6,
    reviews: 1893,
    aiScore: 88,
    image:
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 3,
    name: "Ultra HD Monitor",
    price: "$499.99",
    rating: 4.9,
    reviews: 3241,
    aiScore: 95,
    image:
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&q=80&w=1000",
  },
  {
    id: 4,
    name: "Gaming Laptop",
    price: "$1299.99",
    rating: 4.7,
    reviews: 1567,
    aiScore: 90,
    image:
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?auto=format&fit=crop&q=80&w=1000",
  },
];

export default function TrendingProducts() {
  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">
            Trending now
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Most analyzed products
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Discover what other shoppers are analyzing and comparing right now.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <AnimatedCard key={product.id}>
              <article className="flex flex-col items-start bg-white rounded-lg shadow-sm overflow-hidden">
                <div className="relative w-full">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="aspect-square w-full object-cover"
                  />
                  <button className="absolute top-4 right-4 p-2 rounded-full bg-white/80 hover:bg-white">
                    <Heart className="h-5 w-5 text-gray-600 hover:text-red-500" />
                  </button>
                </div>
                <div className="p-4 flex flex-col flex-1 w-full">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-lg font-semibold text-gray-900">
                      {product.price}
                    </span>
                    <div className="flex items-center">
                      <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                        AI Score: {product.aiScore}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg font-medium text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <span className="flex items-center">
                      {product.rating} ★ ({product.reviews} reviews)
                    </span>
                  </div>
                  {/* <Link */}
                  {/*   href={`/products/${product.id}`} */}
                  {/*   className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 mt-auto" */}
                  {/* > */}
                  {/*   View Details */}
                  {/*   <ExternalLink className="h-4 w-4" /> */}
                  {/* </Link> */}
                </div>
              </article>
            </AnimatedCard>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <AnimatedButton>
            <Link
              href="/products"
              className="gap-x-3 min-w-[200px] inline-flex items-center justify-center rounded-md text-sm font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-indigo-600 text-white hover:bg-indigo-700 h-10 px-4 py-2"
            >
              See More <MoveRight />
            </Link>
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
}
