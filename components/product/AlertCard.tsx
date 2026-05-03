import { BellRing } from "lucide-react";
import { cn } from "@/lib/utils";

export function AlertCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-white p-3.5 shadow-[var(--shadow-md)]",
        className,
      )}
    >
      <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
        <BellRing className="size-4" aria-hidden="true" />
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-semibold text-[var(--ink)]">BTC crossed $68,000</p>
          <span className="shrink-0 mono-num text-[10px] text-[var(--muted)]">2m ago</span>
        </div>
        <p className="mt-0.5 text-xs text-[var(--muted)]">
          Price alert · 24h change <span className="mono-num text-[var(--success)]">+2.41%</span>
        </p>
      </div>
    </div>
  );
}
