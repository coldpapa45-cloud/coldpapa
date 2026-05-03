import { cn, formatPct, formatUsd } from "@/lib/utils";
import { AssetGlyph } from "./AssetGlyph";
import { Sparkline } from "./Sparkline";
import type { Ticker } from "@/lib/data";

type Props = {
  ticker: Ticker;
  className?: string;
  compact?: boolean;
};

export function MarketCard({ ticker, className, compact = false }: Props) {
  const positive = ticker.change24h >= 0;
  return (
    <div
      className={cn(
        "group relative flex items-center justify-between gap-4 overflow-hidden rounded-2xl border border-[var(--border)] bg-white px-4 py-3 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:shadow-[0_14px_34px_rgba(37,99,235,0.12),var(--shadow-sm)]",
        compact ? "min-w-[220px]" : "min-w-[260px]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 left-0 w-1 bg-[linear-gradient(180deg,var(--primary),var(--primary-2))] opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      />
      <div className="flex items-center gap-3">
        <AssetGlyph symbol={ticker.symbol} size={compact ? 32 : 36} />
        <div>
          <div className="text-sm font-semibold leading-tight text-[var(--ink)]">{ticker.symbol}</div>
          <div className="text-[11px] text-[var(--muted)] leading-tight">{ticker.name}</div>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <Sparkline values={ticker.spark} positive={positive} width={56} height={24} />
        <div className="text-right">
          <div className="mono-num text-sm font-semibold text-[var(--ink)]">{formatUsd(ticker.price)}</div>
          <div
            className={cn(
              "mono-num text-[11px] font-medium",
              positive ? "text-[var(--success)]" : "text-[var(--danger)]",
            )}
          >
            <span aria-hidden="true">{positive ? "▲" : "▼"}</span> {formatPct(Math.abs(ticker.change24h))}
            <span className="sr-only">{positive ? "up" : "down"}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
