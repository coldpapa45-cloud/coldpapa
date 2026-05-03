import { cn, formatUsd } from "@/lib/utils";

type Holding = { symbol: string; name: string; pct: number; value: number; color: string };

const holdings: Holding[] = [
  { symbol: "BTC", name: "Bitcoin", pct: 48, value: 12480, color: "#F7931A" },
  { symbol: "ETH", name: "Ethereum", pct: 27, value: 7020, color: "#3C56C1" },
  { symbol: "SOL", name: "Solana", pct: 15, value: 3900, color: "#7C3AED" },
  { symbol: "USDC", name: "USD Coin", pct: 10, value: 2600, color: "#2775CA" },
];

export function PortfolioCard({ className }: { className?: string }) {
  const total = holdings.reduce((s, h) => s + h.value, 0);
  const radius = 38;
  const circumference = 2 * Math.PI * radius;
  let offset = 0;

  return (
    <div
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-md)] transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[var(--primary)]/35 hover:shadow-[0_18px_44px_rgba(37,99,235,0.14),var(--shadow-md)]",
        className,
      )}
    >
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--success),var(--primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-80"
      />
      <div className="flex items-center justify-between">
        <div>
          <div className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">Portfolio</div>
          <div className="mono-num mt-0.5 text-xl font-semibold text-[var(--ink)]">{formatUsd(total)}</div>
        </div>
        <div className="rounded-full bg-[var(--success-soft)] px-2 py-0.5 mono-num text-[11px] font-medium text-[var(--success)]">
          ▲ +1.84%
        </div>
      </div>

      <div className="mt-3 flex items-center gap-4">
        <svg viewBox="0 0 100 100" className="size-[88px] -rotate-90" aria-hidden="true">
          <circle cx="50" cy="50" r={radius} fill="none" stroke="var(--surface-2)" strokeWidth="10" />
          {holdings.map((h) => {
            const length = (h.pct / 100) * circumference;
            const segment = (
              <circle
                key={h.symbol}
                cx="50"
                cy="50"
                r={radius}
                fill="none"
                stroke={h.color}
                strokeWidth="10"
                strokeDasharray={`${length} ${circumference - length}`}
                strokeDashoffset={-offset}
                strokeLinecap="butt"
              />
            );
            offset += length;
            return segment;
          })}
        </svg>
        <ul className="flex-1 space-y-1.5">
          {holdings.map((h) => (
            <li key={h.symbol} className="flex items-center justify-between gap-3 text-xs">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-2 rounded-full" style={{ background: h.color }} />
                <span className="font-medium text-[var(--ink)]">{h.symbol}</span>
              </span>
              <span className="mono-num text-[var(--muted)]">{h.pct}%</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
