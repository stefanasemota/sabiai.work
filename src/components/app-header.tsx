import { SidebarTrigger } from "@/components/ui/sidebar";
import { Logo } from "@/components/logo";
import Link from "next/link";

export function AppHeader() {
  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur md:px-6">
      <div className="flex items-center gap-2 md:hidden">
        <SidebarTrigger />
        <Link href="/" className="flex items-center gap-2">
          <Logo />
          <span className="font-bold font-headline">Synapse</span>
        </Link>
      </div>
      <div className="flex-1" />
    </header>
  );
}
