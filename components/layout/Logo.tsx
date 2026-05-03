import { cn } from "@/lib/utils";

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  const fg = tone === "light" ? "var(--ink)" : "#fff";
  return (
    <span className={cn("inline-flex items-center gap-2 font-semibold tracking-tight", className)}>
      <span
        aria-hidden="true"
        className="relative inline-flex size-7 items-center justify-center rounded-lg"
        style={{
          background: "linear-gradient(135deg, var(--primary) 0%, var(--primary-2) 100%)",
        }}
      >
        <svg viewBox="0 0 16 16" className="size-3.5 text-white" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M2 11l3-3 2 2 4-5 3 4" />
        </svg>
      </span>
      <span style={{ color: fg }}>Coldpapa</span>
    </span>
  );
}
