"use client";

import { useEffect, useRef, useState } from "react";

export function useInfiniteScroll<T>(
  fetchMore: () => Promise<T[]>,
  initialData: T[] = [],
) {
  const [data, setData] = useState<T[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver>();

  const lastElementRef = (node: HTMLElement | null) => {
    if (loading) return;
    if (observer.current) observer.current.disconnect();

    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        loadMore();
      }
    });

    if (node) observer.current.observe(node);
  };

  const loadMore = async () => {
    setLoading(true);
    try {
      const newItems = await fetchMore();
      if (newItems.length === 0) {
        setHasMore(false);
      } else {
        setData((prev) => [...prev, ...newItems]);
      }
    } catch (error) {
      console.error("Error loading more items:", error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, hasMore, lastElementRef };
}
