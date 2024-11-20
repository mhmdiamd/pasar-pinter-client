"use client"

import { useState } from 'react';
import { Heart, Store, ExternalLink, Trash2, Bell, BellOff, Filter } from 'lucide-react';
import Link from 'next/link';

const savedProducts = [
  {
    id: '1',
    title: 'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
    price: 348.00,
    originalPrice: 399.99,
    store: 'Amazon',
    rating: 4.8,
    reviews: 2457,
    aiScore: 92,
    image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300',
    priceAlert: true,
    alertPrice: 300,
    dateAdded: '2024-03-15',
  },
  {
    id: '2',
    title: 'Apple AirPods Pro (2nd Generation)',
    price: 249.00,
    originalPrice: 249.00,
    store: 'Best Buy',
    rating: 4.7,
    reviews: 1893,
    aiScore: 88,
    image: 'https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=300',
    priceAlert: false,
    dateAdded: '2024-03-14',
  },
];

const sortOptions = ['Recently Added', 'Price: Low to High', 'Price: High to Low', 'Name', 'AI Score'];

export default function SavedProductsContent() {
  const [selectedSort, setSelectedSort] = useState('Recently Added');
  const [showPriceAlertModal, setShowPriceAlertModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);
  const [alertPrice, setAlertPrice] = useState('');

  const handleRemoveProduct = (productId: string) => {
    // Implement remove functionality
    console.log('Remove product:', productId);
  };

  const handleTogglePriceAlert = (productId: string) => {
    setSelectedProductId(productId);
    setShowPriceAlertModal(true);
    const product = savedProducts.find(p => p.id === productId);
    setAlertPrice(product?.alertPrice?.toString() || '');
  };

  const handleSavePriceAlert = () => {
    // Implement save price alert functionality
    console.log('Save price alert:', selectedProductId, alertPrice);
    setShowPriceAlertModal(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Saved Products</h1>
            <p className="text-gray-600 mt-1">Track and monitor your favorite products</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="block rounded-lg border border-gray-300 px-3 py-2"
              >
                {sortOptions.map((option) => (
                  <option key={option} value={option}>{option}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden">
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
                <div className="flex items-center justify-between gap-2 text-sm text-gray-500 mb-2">
                  <div className="flex items-center gap-2">
                    <Store className="h-4 w-4" />
                    <span>{product.store}</span>
                  </div>
                  <span className="text-xs">Added {product.dateAdded}</span>
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
                  <button
                    onClick={() => handleTogglePriceAlert(product.id)}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    title={product.priceAlert ? 'Edit price alert' : 'Set price alert'}
                  >
                    {product.priceAlert ? (
                      <Bell className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <BellOff className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                  <button
                    onClick={() => handleRemoveProduct(product.id)}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                    title="Remove from saved products"
                  >
                    <Trash2 className="h-5 w-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Price Alert Modal */}
        {showPriceAlertModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Set Price Alert</h3>
              <div className="mb-4">
                <label htmlFor="alertPrice" className="block text-sm font-medium text-gray-700 mb-1">
                  Alert me when price drops below
                </label>
                <div className="relative">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                  <input
                    type="number"
                    id="alertPrice"
                    value={alertPrice}
                    onChange={(e) => setAlertPrice(e.target.value)}
                    className="block w-full pl-8 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    placeholder="Enter price"
                  />
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <button
                  onClick={() => setShowPriceAlertModal(false)}
                  className="px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 rounded-lg"
                >
                  Cancel
                </button>
                <button
                  onClick={handleSavePriceAlert}
                  className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700"
                >
                  Save Alert
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}