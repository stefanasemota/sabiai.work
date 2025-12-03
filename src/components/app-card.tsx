import Link from "next/link";
import Image from "next/image";
import type { AIApp } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star } from "lucide-react";
import { PlaceHolderImages } from "@/lib/placeholder-images";
import { BookmarkButton } from "./bookmark-button";
import { cn } from "@/lib/utils";

interface AppCardProps {
  app: AIApp;
  className?: string;
}

export function AppCard({ app, className }: AppCardProps) {
  const placeholder = PlaceHolderImages.find((p) => p.id === app.imageId);

  return (
    <Link href={`/app/${app.id}`} className="group block">
      <Card className={cn("flex h-full flex-col overflow-hidden transition-all duration-300 hover:border-primary hover:shadow-lg hover:shadow-primary/10", className)}>
        <CardHeader className="relative p-0">
          {placeholder && (
            <Image
              src={placeholder.imageUrl}
              alt={app.name}
              width={500}
              height={500}
              className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              data-ai-hint={placeholder.imageHint}
            />
          )}
          <div className="absolute top-2 right-2">
            <BookmarkButton appId={app.id} />
          </div>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow p-4">
          <Badge variant="secondary" className="w-fit mb-2">{app.category}</Badge>
          <CardTitle className="text-lg font-headline group-hover:text-primary transition-colors">
            {app.name}
          </CardTitle>
          <CardDescription className="mt-2 text-sm flex-grow">
            {app.description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <div className="flex items-center gap-1 text-sm text-amber-400">
            <Star className="h-4 w-4 fill-current" />
            <span>{app.rating.toFixed(1)}</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
}
