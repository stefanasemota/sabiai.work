"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { getRecommendationsAction } from "@/app/recommendations/actions";
import { AIApp } from "@/lib/apps-data";
import { AppCard } from "./app-card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Skeleton } from "./ui/skeleton";

export function RecommendationsView() {
  const [recommendations, setRecommendations] = useState<AIApp[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleGetRecommendations = async () => {
    setIsLoading(true);
    setError(null);
    setRecommendations(null);

    const result = await getRecommendationsAction();
    if (result.success) {
      setRecommendations(result.data || []);
    } else {
      setError(result.error || "An unknown error occurred.");
    }
    setIsLoading(false);
  };

  return (
    <div className="space-y-8">
      <div className="p-6 border border-dashed rounded-lg flex flex-col items-center text-center">
        <h2 className="text-xl font-headline font-semibold">Your AI-Powered Suggestions</h2>
        <p className="mt-2 max-w-2xl text-muted-foreground">
          Click the button below to have our AI analyze a sample profile and suggest the most relevant apps for you from our directory.
        </p>
        <Button
          onClick={handleGetRecommendations}
          disabled={isLoading}
          className="mt-4"
        >
          {isLoading ? "Analyzing..." : "Generate My Recommendations"}
        </Button>
      </div>

      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-48 w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[150px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      {error && (
        <Alert variant="destructive">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <AnimatePresence>
        {recommendations && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, staggerChildren: 0.1 }}
          >
            {recommendations.length > 0 ? (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {recommendations.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            ) : (
              <Alert>
                <Terminal className="h-4 w-4" />
                <AlertTitle>No Recommendations Found</AlertTitle>
                <AlertDescription>
                  We couldn't find any specific recommendations at this time. Try exploring the directory!
                </AlertDescription>
              </Alert>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
