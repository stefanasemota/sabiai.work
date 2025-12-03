import { notFound } from "next/navigation";
import Image from "next/image";
import { apps } from "@/lib/apps-data";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { AppLayout } from "@/components/app-layout";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Star, CheckCircle, ExternalLink } from "lucide-react";
import { BookmarkButton } from "@/components/bookmark-button";

export async function generateStaticParams() {
  return apps.map((app) => ({
    id: app.id,
  }));
}

export default function AppPage({ params }: { params: { id: string } }) {
  const app = apps.find((a) => a.id === params.id);

  if (!app) {
    notFound();
  }

  const placeholder = PlaceHolderImages.find((p) => p.id === app.imageId);

  return (
    <AppLayout>
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid md:grid-cols-5 gap-8 lg:gap-12">
          <div className="md:col-span-2">
            {placeholder && (
              <div className="relative aspect-square w-full overflow-hidden rounded-lg shadow-lg shadow-primary/10">
                <Image
                  src={placeholder.imageUrl}
                  alt={app.name}
                  fill
                  className="object-cover"
                  data-ai-hint={placeholder.imageHint}
                />
              </div>
            )}
          </div>

          <div className="md:col-span-3">
            <Badge variant="secondary" className="mb-2">{app.category}</Badge>
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              {app.name}
            </h1>
            <div className="mt-4 flex items-center gap-4">
              <div className="flex items-center gap-1 text-lg text-amber-400">
                <Star className="h-5 w-5 fill-current" />
                <span className="font-bold">{app.rating.toFixed(1)}</span>
                <span className="text-sm text-muted-foreground ml-1">/ 5.0</span>
              </div>
              <BookmarkButton appId={app.id} className="h-10 w-10" />
            </div>
            <p className="mt-6 text-lg text-muted-foreground">
              {app.longDescription}
            </p>

            <div className="mt-8">
              <h2 className="text-2xl font-headline font-semibold">Key Features</h2>
              <ul className="mt-4 space-y-3">
                {app.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-primary" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <Button asChild size="lg">
                <a href={app.url} target="_blank" rel="noopener noreferrer">
                  Launch App
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
