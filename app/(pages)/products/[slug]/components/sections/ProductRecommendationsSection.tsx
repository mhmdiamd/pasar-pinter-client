import { ExternalLink } from "lucide-react";
import Link from "next/link";

interface Product {
  id: string;
  title: string;
  price: number;
  store: string;
  rating: number;
  reviews: number;
  aiScore: number;
  image: string;
}

interface ProductRecommendationsProps {
  currentProductId: string;
  category: string;
}

const mockRecommendations: Product[] = [
  {
    id: "3",
    title: "Bose QuietComfort 45",
    price: 329.0,
    store: "Best Buy",
    rating: 4.7,
    reviews: 1856,
    aiScore: 89,
    image:
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "4",
    title: "Sennheiser Momentum 4",
    price: 379.95,
    store: "Amazon",
    rating: 4.6,
    reviews: 1243,
    aiScore: 87,
    image:
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "5",
    title: "Apple AirPods Max",
    price: 549.0,
    store: "Apple Store",
    rating: 4.8,
    reviews: 2134,
    aiScore: 91,
    image:
      "https://images.unsplash.com/photo-1613040809024-b4ef7ba99bc3?auto=format&fit=crop&q=80&w=300",
  },
];

export default function ProductRecommendationsSection({
  currentProductId,
  category,
}: ProductRecommendationsProps) {
  // Filter out the current product from recommendations
  const recommendations = mockRecommendations.filter(
    (product) => product.id !== currentProductId,
  );

  return (
    <div className="bg-gray-50 rounded-lg p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">
        Similar Products You Might Like
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {recommendations.map((product) => (
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
              <div className="text-sm text-gray-500 mb-2">{product.store}</div>

              <h3 className="text-base font-medium text-gray-900 mb-2 line-clamp-2">
                {product.title}
              </h3>

              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-lg font-bold text-gray-900">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="flex items-center text-sm text-gray-500 mb-4">
                <span className="flex items-center">
                  {product.rating} ★ ({product.reviews} reviews)
                </span>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
              >
                View Details
                <ExternalLink className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
