import { cn } from "@/lib/utils";

export function Logo({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 256 256"
      className={cn("h-6 w-6 text-primary", className)}
    >
      <path
        fill="currentColor"
        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm45.48,153.48a12,12,0,0,1-17,17l-30.2-30.2a12,12,0,0,1,0-17ZM99.52,144.48a12,12,0,0,1-17,0L52.28,114.22a12,12,0,0,1,17-17l30.24,30.23A12,12,0,0,1,99.52,144.48Zm50.22-82.22a12,12,0,0,1-17,0l-48-48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,149.74,62.26Z"
      />
    </svg>
  );
}
