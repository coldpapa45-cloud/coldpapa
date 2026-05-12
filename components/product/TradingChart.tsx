import { cn, formatUsd } from "@/lib/utils";

type Props = {
  symbol?: string;
  price?: number;
  change?: number;
  className?: string;
  height?: number;
};

const chartPoints = [
  62, 63, 61, 64, 66, 65, 64, 67, 69, 68, 66, 67, 69, 70, 68, 71, 72, 70, 71, 73, 75, 74, 72, 75,
  76, 78, 77, 76, 78, 80, 79, 81, 82, 81, 80, 82, 84, 83, 82, 84, 86, 85, 87, 88, 86, 88, 90, 89,
];

export function TradingChart({
  symbol = "BTC/USD",
  price = 68420,
  change = 2.41,
  className,
  height = 180,
}: Props) {
  const positive = change >= 0;
  const min = Math.min(...chartPoints);
  const max = Math.max(...chartPoints);
  const range = max - min || 1;
  const w = 600;
  const h = height;
  const stepX = w / (chartPoints.length - 1);
  const points = chartPoints
    .map((v, i) => {
      const x = i * stepX;
      const y = h - ((v - min) / range) * (h - 24) - 12;
      return `${x.toFixed(2)},${y.toFixed(2)}`;
    })
    .join(" ");

  const last = chartPoints[chartPoints.length - 1];
  const lastY = h - ((last - min) / range) * (h - 24) - 12;

  return (
    <div className={cn("group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-md)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:shadow-[0_20px_50px_rgba(37,99,235,0.14),var(--shadow-md)]", className)}>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--primary-2),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-90"
      />
      <div className="flex items-end justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-[var(--surface-2)] px-1.5 py-0.5 text-[10px] font-semibold tracking-wide text-[var(--muted)] uppercase">
              {symbol}
            </span>
            <span className="text-[11px] text-[var(--muted)]">1D · Demo</span>
          </div>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="mono-num text-2xl font-semibold text-[var(--ink)]">{formatUsd(price)}</span>
            <span
              className={cn(
                "mono-num text-xs font-medium",
                positive ? "text-[var(--success)]" : "text-[var(--danger)]",
              )}
            >
              {positive ? "▲" : "▼"} {Math.abs(change).toFixed(2)}%
            </span>
          </div>
        </div>
        <div className="flex gap-1">
          {["1H", "1D", "1W", "1M", "1Y"].map((p, i) => (
            <span
              key={p}
              className={cn(
                "rounded-md px-2 py-1 text-[11px] font-medium",
                i === 1
                  ? "bg-[var(--ink)] text-white"
                  : "text-[var(--muted)]",
              )}
            >
              {p}
            </span>
          ))}
        </div>
      </div>

      <div className="mt-3">
        <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" aria-hidden="true" style={{ height }}>
          <defs>
            <linearGradient id="tc-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.18" />
              <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="tc-stroke" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="var(--primary)" />
              <stop offset="100%" stopColor="var(--primary-2)" />
            </linearGradient>
          </defs>
          {[0.25, 0.5, 0.75].map((p) => (
            <line key={p} x1="0" x2={w} y1={h * p} y2={h * p} stroke="var(--border)" strokeWidth={1} strokeDasharray="3 5" />
          ))}
          <polyline points={`0,${h} ${points} ${w},${h}`} fill="url(#tc-fill)" stroke="none" />
          <polyline points={points} fill="none" stroke="url(#tc-stroke)" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
          <circle cx={w} cy={lastY} r={4} fill="var(--primary)" />
          <circle cx={w} cy={lastY} r={9} fill="var(--primary)" fillOpacity={0.18} />
        </svg>
      </div>
    </div>
  );
}
