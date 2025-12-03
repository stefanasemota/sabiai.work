"use client";

import * as React from "react";
import { AppLayout } from "@/components/app-layout";
import { AppCard } from "@/components/app-card";
import { apps, AppCategory } from "@/lib/apps-data";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";

const categories: AppCategory[] = [
  "Text",
  "Image",
  "Code",
  "Audio",
  "Productivity",
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] =
    React.useState<AppCategory | "all">("all");

  const filteredApps =
    selectedCategory === "all"
      ? apps
      : apps.filter((app) => app.category === selectedCategory);

  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
            AI App Directory
          </h1>
        </div>
        <p className="text-muted-foreground">
          Browse and discover the next generation of AI-powered applications.
        </p>
        <Tabs
          defaultValue="all"
          className="space-y-4"
          onValueChange={(value) => setSelectedCategory(value as any)}
        >
          <TabsList>
            <TabsTrigger value="all">All</TabsTrigger>
            {categories.map((category) => (
              <TabsTrigger key={category} value={category}>
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
            >
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {filteredApps.map((app) => (
                  <AppCard key={app.id} app={app} />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </Tabs>
      </div>
    </AppLayout>
  );
}
