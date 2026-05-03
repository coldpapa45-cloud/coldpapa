import { sampleMarket } from "@/lib/data";
import { AssetGlyph } from "./AssetGlyph";
import { Sparkline } from "./Sparkline";
import { cn, formatPct, formatUsd } from "@/lib/utils";
import { ChartCandlestick } from "lucide-react";

const chartPoints = [
  62, 63, 61, 64, 66, 65, 67, 69, 68, 70, 72, 71, 73, 75, 74, 76, 78, 77, 79, 81, 80, 82, 84, 83, 85,
];

export function MiniDashboard({ className }: { className?: string }) {
  const assets = sampleMarket.slice(0, 3);
  const min = Math.min(...chartPoints);
  const max = Math.max(...chartPoints);
  const range = max - min || 1;
  const w = 100;
  const h = 36;
  const stepX = w / (chartPoints.length - 1);
  const points = chartPoints
    .map((v, i) => `${(i * stepX).toFixed(2)},${(h - ((v - min) / range) * (h - 6) - 3).toFixed(2)}`)
    .join(" ");

  return (
    <div className={cn("flex h-full flex-col gap-3 p-3.5", className)}>
      <div className="flex items-center justify-between">
        <div>
          <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Portfolio</div>
          <div className="mono-num text-[1.05rem] font-semibold text-[var(--ink)] leading-tight">{formatUsd(26000)}</div>
        </div>
        <span className="rounded-full bg-[var(--success-soft)] mono-num px-1.5 py-0.5 text-[10px] font-medium text-[var(--success)]">
          ▲ +1.84%
        </span>
      </div>

      <div className="rounded-xl border border-[var(--border)] bg-white p-2.5">
        <div className="flex items-center justify-between text-[10px]">
          <span className="flex items-center gap-1 text-[var(--muted)]">
            <ChartCandlestick className="size-3" aria-hidden="true" />
            BTC/USD
          </span>
          <span className="mono-num font-medium text-[var(--success)]">+2.41%</span>
        </div>
        <svg viewBox={`0 0 ${w} ${h}`} className="mt-1 w-full" preserveAspectRatio="none" aria-hidden="true" style={{ height: 38 }}>
          <defs>
            <linearGradient id="md-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
          </defs>
          <polyline points={`0,${h} ${points} ${w},${h}`} fill="url(#md-fill)" stroke="none" />
          <polyline points={points} fill="none" stroke="var(--primary)" strokeWidth={1.5} strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      </div>

      <div className="flex-1 space-y-1.5">
        <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Watchlist</div>
        {assets.map((a) => (
          <div key={a.symbol} className="flex items-center justify-between rounded-lg px-1.5 py-1">
            <div className="flex items-center gap-2">
              <AssetGlyph symbol={a.symbol} size={22} />
              <div>
                <div className="text-[11px] font-semibold text-[var(--ink)] leading-tight">{a.symbol}</div>
                <div className="text-[9px] text-[var(--muted)] leading-tight">{a.name}</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Sparkline values={a.spark} positive={a.change24h >= 0} width={32} height={14} />
              <div className="text-right">
                <div className="mono-num text-[10px] font-semibold text-[var(--ink)] leading-tight">{formatUsd(a.price)}</div>
                <div
                  className={cn(
                    "mono-num text-[9px] font-medium leading-tight",
                    a.change24h >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]",
                  )}
                >
                  {formatPct(a.change24h)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
