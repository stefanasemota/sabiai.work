"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarFooter,
  SidebarSeparator,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import { Logo } from "./logo";
import {
  LayoutGrid,
  Sparkles,
  Star,
  Github,
  ExternalLink,
} from "lucide-react";
import { useBookmarks } from "@/hooks/use-bookmarks";
import { apps } from "@/lib/apps-data";
import { ScrollArea } from "./ui/scroll-area";

export function AppSidebar() {
  const pathname = usePathname();
  const { bookmarkedIds, isInitialized } = useBookmarks();

  const favoriteApps = isInitialized
    ? apps.filter((app) => bookmarkedIds.includes(app.id))
    : [];

  return (
    <Sidebar>
      <SidebarHeader>
        <div className="flex items-center gap-2">
          <Logo className="h-8 w-8 text-primary" />
          <span className="text-xl font-bold font-headline text-primary">
            sabiai.work
          </span>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea className="h-full">
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                asChild
                isActive={pathname === "/"}
                tooltip="App Directory"
              >
                <Link href="/">
                  <LayoutGrid />
                  <span>Directory</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>

          <SidebarSeparator className="my-4" />

          {isInitialized && favoriteApps.length > 0 && (
            <SidebarMenu>
              <SidebarGroupLabel className="!h-auto !px-2 !py-3">
                <div className="flex items-center gap-2">
                  <Star className="text-accent" />
                  <span>Favorites</span>
                </div>
              </SidebarGroupLabel>
              {favoriteApps.map((app) => (
                <SidebarMenuItem key={app.id}>
                  <SidebarMenuButton asChild size="sm" tooltip={app.name}>
                    <a href={app.url} target="_blank" rel="noopener noreferrer">
                      <span>{app.name}</span>
                      <ExternalLink className="ml-auto h-3 w-3" />
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          )}
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="View on GitHub">
              <a
                href="https://github.com/firebase/studio-extra-unofficial"
                target="_blank"
              >
                <Github />
                <span>GitHub</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}
