"use client";

import { useState, useEffect, useCallback } from "react";

const BOOKMARKS_STORAGE_KEY = "synapse-ai-bookmarks";

export const useBookmarks = () => {
  const [bookmarkedIds, setBookmarkedIds] = useState<Set<string>>(new Set());
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    try {
      const storedBookmarks = localStorage.getItem(BOOKMARKS_STORAGE_KEY);
      if (storedBookmarks) {
        setBookmarkedIds(new Set(JSON.parse(storedBookmarks)));
      }
    } catch (error) {
      console.error("Failed to read bookmarks from localStorage", error);
    }
    setIsInitialized(true);
  }, []);

  useEffect(() => {
    if (isInitialized) {
      try {
        localStorage.setItem(
          BOOKMARKS_STORAGE_KEY,
          JSON.stringify(Array.from(bookmarkedIds))
        );
      } catch (error) {
        console.error("Failed to save bookmarks to localStorage", error);
      }
    }
  }, [bookmarkedIds, isInitialized]);

  const addBookmark = useCallback((appId: string) => {
    setBookmarkedIds((prev) => new Set(prev).add(appId));
  }, []);

  const removeBookmark = useCallback((appId: string) => {
    setBookmarkedIds((prev) => {
      const newSet = new Set(prev);
      newSet.delete(appId);
      return newSet;
    });
  }, []);

  const isBookmarked = useCallback(
    (appId: string) => bookmarkedIds.has(appId),
    [bookmarkedIds]
  );

  return { bookmarkedIds: Array.from(bookmarkedIds), addBookmark, removeBookmark, isBookmarked, isInitialized };
};
