"use client";

import { Star } from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

export function BookmarkButton({
  appId,
  className,
}: {
  appId: string;
  className?: string;
}) {
  const { isBookmarked, addBookmark, removeBookmark, isInitialized } =
    useBookmarks();
  const bookmarked = isBookmarked(appId);

  if (!isInitialized) {
    return (
      <Button variant="ghost" size="icon" disabled className={className}>
        <Star className="h-5 w-5" />
      </Button>
    );
  }

  const handleBookmark = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (bookmarked) {
      removeBookmark(appId);
    } else {
      addBookmark(appId);
    }
  };

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            onClick={handleBookmark}
            className={cn("text-muted-foreground hover:text-accent", className)}
            aria-label={bookmarked ? "Remove from favorites" : "Add to favorites"}
          >
            <Star
              className={cn(
                "h-5 w-5 transition-all duration-300",
                bookmarked
                  ? "fill-accent text-accent"
                  : "fill-transparent"
              )}
            />
          </Button>
        </TooltipTrigger>
        <TooltipContent>
          <p>{bookmarked ? "Remove from favorites" : "Add to favorites"}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
