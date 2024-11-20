'use client'

import { useState } from 'react';
import { Star, Heart, Share2, MessageSquare, Brain, TrendingUp, ShoppingCart, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

// Mock product data
const product = {
  id: '1',
  name: 'Sony WH-1000XM4 Wireless Noise-Canceling Headphones',
  price: 348.00,
  rating: 4.8,
  reviews: 2457,
  description: 'Industry-leading noise canceling with Dual Noise Sensor technology...',
  images: [
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
    'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=1000',
  ],
  aiAnalysis: {
    overallScore: 92,
    priceAnalysis: {
      fairness: 85,
      history: [
        { date: '2024-01', price: 349.99 },
        { date: '2024-02', price: 348.00 },
      ],
    },
    qualityScore: 95,
    features: ['Active Noise Cancellation', 'Bluetooth 5.0', '30-hour Battery Life'],
    pros: ['Excellent noise cancellation', 'Great sound quality', 'Comfortable fit'],
    cons: ['Expensive', 'Limited water resistance'],
  },
};

const comments = [
  {
    id: 1,
    user: {
      name: 'Sarah Johnson',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100',
    },
    content: 'These headphones are amazing! The noise cancellation is incredible.',
    rating: 5,
    date: '2 days ago',
  },
  {
    id: 2,
    user: {
      name: 'Michael Chen',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100',
    },
    content: 'Great sound quality but a bit pricey.',
    rating: 4,
    date: '1 week ago',
  },
];

export default function ProductContent() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [comment, setComment] = useState('');
  const [showShareMenu, setShowShareMenu] = useState(false);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out ${product.name}!`;
    
    switch (platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`);
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`);
        break;
      case 'linkedin':
        window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Product Overview */}
        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Image Gallery */}
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${
                      selectedImage === index ? 'border-indigo-600' : 'border-transparent'
                    }`}
                  >
                    <img src={image} alt={`${product.name} ${index + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{product.name}</h1>
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-5 h-5 ${
                            i < Math.floor(product.rating)
                              ? 'text-yellow-400 fill-current'
                              : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      {product.rating} ({product.reviews} reviews)
                    </span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <button className="p-2 rounded-full hover:bg-gray-100">
                    <Heart className="w-6 h-6 text-gray-600" />
                  </button>
                  <div className="relative">
                    <button
                      onClick={() => setShowShareMenu(!showShareMenu)}
                      className="p-2 rounded-full hover:bg-gray-100"
                    >
                      <Share2 className="w-6 h-6 text-gray-600" />
                    </button>
                    {showShareMenu && (
                      <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="py-1">
                          <button
                            onClick={() => handleShare('facebook')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Facebook className="w-4 h-4 mr-2" />
                            Share on Facebook
                          </button>
                          <button
                            onClick={() => handleShare('twitter')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Twitter className="w-4 h-4 mr-2" />
                            Share on Twitter
                          </button>
                          <button
                            onClick={() => handleShare('linkedin')}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          >
                            <Linkedin className="w-4 h-4 mr-2" />
                            Share on LinkedIn
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="border-t border-b py-4">
                <span className="text-3xl font-bold text-gray-900">${product.price}</span>
              </div>

              <p className="text-gray-600">{product.description}</p>

              <button className="w-full flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700">
                <ShoppingCart className="w-5 h-5 mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>

        {/* AI Analysis */}
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <Brain className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">AI Analysis</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Overall Score */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Overall Score</h3>
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-indigo-600">{product.aiAnalysis.overallScore}</div>
                  <div className="ml-2 text-sm text-gray-600">/100</div>
                </div>
              </div>

              {/* Price Analysis */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Price Analysis</h3>
                <div className="flex items-center">
                  <TrendingUp className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-green-500 font-medium">Fair Price</span>
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  Price has dropped 0.5% in the last month
                </p>
              </div>

              {/* Quality Score */}
              <div className="p-6 bg-gray-50 rounded-lg">
                <h3 className="text-sm font-medium text-gray-500 mb-2">Quality Score</h3>
                <div className="flex items-center">
                  <div className="text-4xl font-bold text-indigo-600">{product.aiAnalysis.qualityScore}</div>
                  <div className="ml-2 text-sm text-gray-600">/100</div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Pros */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Pros</h3>
                <ul className="space-y-2">
                  {product.aiAnalysis.pros.map((pro, index) => (
                    <li key={index} className="flex items-center text-green-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-600 mr-2" />
                      {pro}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Cons */}
              <div>
                <h3 className="text-lg font-medium text-gray-900 mb-4">Cons</h3>
                <ul className="space-y-2">
                  {product.aiAnalysis.cons.map((con, index) => (
                    <li key={index} className="flex items-center text-red-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-red-600 mr-2" />
                      {con}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Comments Section */}
        <div className="mt-8 bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-8">
            <div className="flex items-center gap-2 mb-6">
              <MessageSquare className="w-6 h-6 text-indigo-600" />
              <h2 className="text-xl font-bold text-gray-900">Comments</h2>
            </div>

            {/* Comment Form */}
            <form className="mb-8">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write a comment..."
                rows={3}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <div className="mt-4 flex justify-end">
                <button
                  type="submit"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Post Comment
                </button>
              </div>
            </form>

            {/* Comments List */}
            <div className="space-y-6">
              {comments.map((comment) => (
                <div key={comment.id} className="flex gap-4">
                  <img
                    src={comment.user.image}
                    alt={comment.user.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <div className="flex items-center gap-2">
                      <h4 className="font-medium text-gray-900">{comment.user.name}</h4>
                      <span className="text-sm text-gray-500">{comment.date}</span>
                    </div>
                    <div className="flex items-center mt-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < comment.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
                          }`}
                        />
                      ))}
                    </div>
                    <p className="mt-2 text-gray-600">{comment.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}