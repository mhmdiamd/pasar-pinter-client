"use client";

import { useState, useEffect, useCallback } from "react";

interface SearchHistoryHook {
  searchHistory: string[];
  addToHistory: (term: string) => void;
  clearHistory: () => void;
}

const MAX_HISTORY_ITEMS = 5;

export function useSearchHistory(): SearchHistoryHook {
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  // Use useCallback to memoize functions and prevent unnecessary re-renders
  const loadHistoryFromStorage = useCallback(() => {
    const stored = localStorage.getItem("searchHistory");
    return stored ? JSON.parse(stored) : [];
  }, []);

  // Initial load from localStorage
  useEffect(() => {
    setSearchHistory(loadHistoryFromStorage());
  }, [loadHistoryFromStorage]);

  // Memoized add to history function
  const addToHistory = useCallback(
    (term: string) => {
      const trimmedTerm = term.trim();
      if (!trimmedTerm) return;

      const newHistory = [
        trimmedTerm,
        ...loadHistoryFromStorage().filter(
          (item: string) => item !== trimmedTerm,
        ),
      ].slice(0, MAX_HISTORY_ITEMS);

      setSearchHistory(newHistory);
      localStorage.setItem("searchHistory", JSON.stringify(newHistory));
    },
    [loadHistoryFromStorage],
  );

  // Memoized clear history function
  const clearHistory = useCallback(() => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  }, []);

  return { searchHistory, addToHistory, clearHistory };
}
