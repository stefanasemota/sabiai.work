import { AppLayout } from "@/components/app-layout";
import { RecommendationsView } from "@/components/recommendations-view";
import { Sparkles } from "lucide-react";

export default function RecommendationsPage() {
  return (
    <AppLayout>
      <div className="flex-1 space-y-8 p-4 md:p-8 pt-6">
        <div className="flex items-center gap-4">
          <Sparkles className="h-10 w-10 text-primary" />
          <div>
            <h1 className="text-3xl md:text-4xl font-bold tracking-tight font-headline text-primary">
              Personalized Recommendations
            </h1>
            <p className="text-muted-foreground mt-1">
              Discover AI apps tailored just for you based on our analysis.
            </p>
          </div>
        </div>
        <RecommendationsView />
      </div>
    </AppLayout>
  );
}
