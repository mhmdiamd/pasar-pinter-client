export const categories = [
  { id: "electronics", name: "Electronics", count: 1234 },
  { id: "audio", name: "Audio", count: 856 },
  { id: "computers", name: "Computers", count: 943 },
  { id: "gaming", name: "Gaming", count: 657 },
  { id: "cameras", name: "Cameras", count: 432 },
  { id: "smartphones", name: "Smartphones", count: 765 },
  { id: "wearables", name: "Wearables", count: 543 },
  { id: "accessories", name: "Accessories", count: 987 },
];

export const popularProducts = [
  {
    id: "pop1",
    title: "Sony WH-1000XM4",
    price: 348.0,
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300",
    store: "Amazon",
    rating: 4.8,
    aiScore: 92,
  },
  {
    id: "pop2",
    title: "MacBook Pro M1",
    price: 1299.0,
    image:
      "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300",
    store: "Apple Store",
    rating: 4.9,
    aiScore: 95,
  },
  {
    id: "pop3",
    title: "iPad Air",
    price: 599.0,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300",
    store: "Best Buy",
    rating: 4.7,
    aiScore: 90,
  },
  {
    id: "pop4",
    title: "iPad Air",
    price: 599.0,
    image:
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=300",
    store: "Best Buy",
    rating: 4.7,
    aiScore: 90,
  },
];

export const sortOptions = [
  { value: "relevance", label: "Relevance" },
  { value: "price_asc", label: "Price: Low to High" },
  { value: "price_desc", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
  { value: "ai_score", label: "AI Score" },
];

// Generate mock products
export const generateMockProducts = (page: number) => {
  const products = [];
  const startIndex = (page - 1) * 12;

  for (let i = 0; i < 12; i++) {
    const id = startIndex + i;
    products.push({
      id: `prod${id}`,
      title: `Product ${id}`,
      price: 999, // Static or fetch from API
      originalPrice: 1199,
      store: ["Amazon", "Best Buy", "Walmart", "Target"][0], // Static value
      rating: "4.5",
      reviews: 500,
      aiScore: 90,
      image: `https://picsum.photos/id/${id}/300/300`,
      category: "electronics", // Static category
      // id: `prod${id}`,
      // title: `Product ${id}`,
      // price: Math.floor(Math.random() * 1000) + 99,
      // originalPrice: Math.floor(Math.random() * 1200) + 199,
      // store: ["Amazon", "Best Buy", "Walmart", "Target"][
      //   Math.floor(Math.random() * 4)
      // ],
      // rating: (Math.random() * (5 - 4) + 4).toFixed(1),
      // reviews: Math.floor(Math.random() * 2000) + 100,
      // aiScore: Math.floor(Math.random() * 15) + 85,
      // image: `https://picsum.photos/id/${id}/200/200`,
      // category: categories[Math.floor(Math.random() * categories.length)].id,
    });
  }

  return products;
};
