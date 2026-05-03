import * as React from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  label?: string;
  className?: string;
};

export function PhoneFrame({ children, label, className }: Props) {
  return (
    <figure className={cn("group flex flex-col items-center gap-3", className)}>
      <div
        className="relative w-full max-w-[280px] aspect-[9/19] rounded-[2.4rem] bg-[var(--ink)] p-2 shadow-[var(--shadow-xl)] transition-all duration-300 ease-out group-hover:-translate-y-1 group-hover:shadow-[0_30px_76px_rgba(37,99,235,0.22),0_12px_34px_rgba(10,15,30,0.18)]"
        style={{
          background: "linear-gradient(180deg, #0a0f1e 0%, #1f2937 100%)",
        }}
      >
        <span
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 rounded-[2.4rem] ring-1 ring-white/10 transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(37,99,235,0.35),0_0_48px_rgba(37,99,235,0.18)]"
        />
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-black/60"
        />
        <div className="relative h-full w-full overflow-hidden rounded-[2rem] bg-white">
          {children}
        </div>
      </div>
      {label && (
        <figcaption className="text-xs font-medium text-[var(--muted)]">{label}</figcaption>
      )}
    </figure>
  );
}
