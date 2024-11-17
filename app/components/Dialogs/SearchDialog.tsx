"use client";

import { useState, useEffect } from "react";
import { Command } from "cmdk";
import { Search, History, TrendingUp, Store, X } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";

interface SearchResult {
  id: string;
  title: string;
  price: string;
  store: string;
  image: string;
}

const mockResults: SearchResult[] = [
  {
    id: "1",
    title: "Sony WH-1000XM4 Wireless Noise-Canceling Headphones",
    price: "$348.00",
    store: "Amazon",
    image:
      "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&q=80&w=300",
  },
  {
    id: "2",
    title: "Apple AirPods Pro (2nd Generation)",
    price: "$249.00",
    store: "Best Buy",
    image:
      "https://images.unsplash.com/photo-1588423771073-b8903fbb85b5?auto=format&fit=crop&q=80&w=300",
  },
];

const trendingSearches = [
  "Gaming Laptop",
  "Wireless Earbuds",
  "Smart Watch",
  "Mechanical Keyboard",
];

interface SearchDialogProps {
  open: boolean;
  onClose: () => void;
}

export default function SearchDialog({ open, onClose }: SearchDialogProps) {
  const router = useRouter();
  const [query, setQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("recentSearches");
    if (stored) {
      setRecentSearches(JSON.parse(stored));
    }
  }, []);

  const addToRecentSearches = (search: string) => {
    const updated = [
      search,
      ...recentSearches.filter((s) => s !== search),
    ].slice(0, 5);
    setRecentSearches(updated);
    localStorage.setItem("recentSearches", JSON.stringify(updated));
  };

  const handleSearch = (value: string) => {
    if (value.trim()) {
      addToRecentSearches(value);
      router.push(`/search?q=${encodeURIComponent(value)}`);
      onClose();
    }
  };

  return (
    <div
      className={`fixed inset-0 bg-black/50 z-[100] ${open ? "" : "hidden"}`}
    >
      <div className="container max-w-2xl mx-auto px-4 h-full flex items-start pt-[10vh]">
        <div className="w-full bg-white rounded-xl shadow-2xl overflow-hidden">
          <Command className="border-none" loop>
            <div className="flex items-center border-b px-4">
              <Search className="w-4 h-4 text-gray-400 mr-2" />
              <Command.Input
                autoFocus
                placeholder="Search for products across all platforms..."
                value={query}
                onValueChange={setQuery}
                className="flex-1 h-14 outline-none placeholder:text-gray-400"
              />
              {query && (
                <button onClick={() => setQuery("")} className="p-2">
                  <X className="w-4 h-4 text-gray-400" />
                </button>
              )}
              <button onClick={onClose} className="ml-2 p-2">
                <kbd className="px-2 py-1 text-xs bg-gray-100 rounded">ESC</kbd>
              </button>
            </div>

            <Command.List className="max-h-[60vh] overflow-y-auto p-4">
              {query && (
                <Command.Group heading="Results">
                  {mockResults.map((result) => (
                    <Command.Item
                      key={result.id}
                      value={result.title}
                      onSelect={() => handleSearch(result.title)}
                      className="flex items-center gap-4 p-2 rounded hover:bg-gray-100 cursor-pointer relative"
                    >
                      <AspectRatio ratio={1 / 1}>
                        <Image
                          src={result.image}
                          alt={result.title}
                          fill
                          className="w-12 h-12 object-cover rounded"
                        />
                      </AspectRatio>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate">
                          {result.title}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-semibold text-gray-900">
                            {result.price}
                          </span>
                          <span className="flex items-center text-xs text-gray-500">
                            <Store className="w-3 h-3 mr-1" />
                            {result.store}
                          </span>
                        </div>
                      </div>
                    </Command.Item>
                  ))}
                </Command.Group>
              )}

              {!query && (
                <>
                  {recentSearches.length > 0 && (
                    <Command.Group heading="Recent Searches">
                      {recentSearches.map((search) => (
                        <Command.Item
                          key={search}
                          value={search}
                          onSelect={() => handleSearch(search)}
                          className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                        >
                          <History className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600">
                            {search}
                          </span>
                        </Command.Item>
                      ))}
                    </Command.Group>
                  )}

                  <Command.Group heading="Trending Searches">
                    {trendingSearches.map((search) => (
                      <Command.Item
                        key={search}
                        value={search}
                        onSelect={() => handleSearch(search)}
                        className="flex items-center gap-2 p-2 rounded hover:bg-gray-100 cursor-pointer"
                      >
                        <TrendingUp className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600">{search}</span>
                      </Command.Item>
                    ))}
                  </Command.Group>
                </>
              )}
            </Command.List>
          </Command>
        </div>
      </div>
    </div>
  );
}
