import { cn, formatUsd } from "@/lib/utils";

export function OrderTicket({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-md)]",
        className,
      )}
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">New order</span>
        <span className="rounded-md bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] font-semibold text-[var(--muted)]">BTC/USD</span>
      </div>
      <div className="mt-3 grid grid-cols-2 rounded-xl bg-[var(--surface-2)] p-1 text-xs font-medium">
        <span className="rounded-lg bg-[var(--ink)] py-1.5 text-center text-white">Buy</span>
        <span className="rounded-lg py-1.5 text-center text-[var(--muted)]">Sell</span>
      </div>
      <div className="mt-3 space-y-2">
        <div className="rounded-xl border border-[var(--border)] px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide text-[var(--muted)]">Amount (USD)</div>
          <div className="mono-num text-base font-semibold text-[var(--ink)]">{formatUsd(2500)}</div>
        </div>
        <div className="rounded-xl border border-[var(--border)] px-3 py-2">
          <div className="text-[10px] uppercase tracking-wide text-[var(--muted)]">Estimated</div>
          <div className="mono-num text-base font-semibold text-[var(--ink)]">0.03654 BTC</div>
        </div>
      </div>
      <div className="mt-3 rounded-xl bg-[var(--ink)] py-2.5 text-center text-sm font-semibold text-white">
        Review order
      </div>
      <p className="mt-2 text-[10px] text-[var(--muted)]">Sample order preview · Illustrative data</p>
    </div>
  );
}
