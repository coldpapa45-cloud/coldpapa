import { cn } from "@/lib/utils";

type Props = {
  children: React.ReactNode;
  className?: string;
  tone?: "light" | "dark";
};

export function SectionBadge({ children, className, tone = "light" }: Props) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium tracking-wide uppercase",
        tone === "light"
          ? "border-[var(--border)] bg-white text-[var(--muted)]"
          : "border-white/15 bg-white/[0.04] text-white/70",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={cn(
          "size-1.5 rounded-full",
          tone === "light" ? "bg-[var(--primary)]" : "bg-[var(--primary-2)]",
        )}
      />
      {children}
    </span>
  );
}
