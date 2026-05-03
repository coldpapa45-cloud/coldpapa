import { features, sampleMarket } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkline } from "@/components/product/Sparkline";
import { AssetGlyph } from "@/components/product/AssetGlyph";
import { cn, formatPct } from "@/lib/utils";

const accentBg: Record<string, string> = {
  blue: "bg-[var(--primary-soft)] text-[var(--primary)]",
  cyan: "bg-[#ECFEFF] text-[#0891B2]",
  violet: "bg-[#F3E8FF] text-[var(--accent-violet)]",
  emerald: "bg-[var(--success-soft)] text-[var(--success)]",
};

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionBadge>Features</SectionBadge>
          <h2 id="features-title" className="h-section mt-4">
            A cleaner way to follow markets and manage your crypto.
          </h2>
          <p className="body-lead mt-4">
            Built around real-time market insight, portfolio clarity, smart alerts, and simple
            execution — without the noise.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--primary)]/35 hover:shadow-[0_18px_46px_rgba(37,99,235,0.12),var(--shadow-md)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className={cn("flex size-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(37,99,235,0.14)]", accentBg[f.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="h-card mt-4">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{f.body}</p>

                {/* Per-feature micro-visual */}
                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-all duration-300 group-hover:border-[var(--primary)]/25 group-hover:bg-white group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                  {i === 0 && <FeatureVisualMarket />}
                  {i === 1 && <FeatureVisualPortfolio />}
                  {i === 2 && <FeatureVisualAlert />}
                  {i === 3 && <FeatureVisualOrder />}
                  {i === 4 && <FeatureVisualChart />}
                  {i === 5 && <FeatureVisualSecurity />}
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function FeatureVisualMarket() {
  const a = sampleMarket[0];
  return (
    <div className="flex items-center justify-between gap-3">
      <div className="flex items-center gap-2">
        <AssetGlyph symbol={a.symbol} size={26} />
        <div>
          <div className="text-xs font-semibold text-[var(--ink)] leading-tight">{a.symbol}</div>
          <div className="text-[10px] text-[var(--muted)] leading-tight">Live · sample</div>
        </div>
      </div>
      <Sparkline values={a.spark} positive width={80} height={26} />
      <div className="text-right">
        <div className="mono-num text-xs font-semibold text-[var(--ink)]">$68,420</div>
        <div className="mono-num text-[10px] font-medium text-[var(--success)]">{formatPct(a.change24h)}</div>
      </div>
    </div>
  );
}

function FeatureVisualPortfolio() {
  const segments = [
    { color: "#F7931A", pct: 48 },
    { color: "#3C56C1", pct: 27 },
    { color: "#7C3AED", pct: 15 },
    { color: "#2775CA", pct: 10 },
  ];
  return (
    <div className="space-y-2">
      <div className="flex h-2 w-full overflow-hidden rounded-full">
        {segments.map((s) => (
          <span key={s.color} style={{ width: `${s.pct}%`, background: s.color }} />
        ))}
      </div>
      <div className="flex justify-between text-[10px] text-[var(--muted)]">
        <span>BTC 48%</span>
        <span>ETH 27%</span>
        <span>SOL 15%</span>
        <span>USDC 10%</span>
      </div>
    </div>
  );
}

function FeatureVisualAlert() {
  return (
    <div className="space-y-1.5">
      {[
        { label: "BTC > $68,000", time: "2m" },
        { label: "ETH 24h change > 2%", time: "12m" },
      ].map((row) => (
        <div key={row.label} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5">
          <span className="flex items-center gap-2 text-[11px] font-medium text-[var(--ink)]">
            <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--primary)]" />
            {row.label}
          </span>
          <span className="mono-num text-[10px] text-[var(--muted)]">{row.time}</span>
        </div>
      ))}
    </div>
  );
}

function FeatureVisualOrder() {
  return (
    <div className="grid grid-cols-2 gap-1.5">
      <div className="rounded-lg bg-[var(--ink)] px-2.5 py-2 text-[11px] font-semibold text-white">Buy BTC</div>
      <div className="rounded-lg border border-[var(--border)] bg-white px-2.5 py-2 text-right mono-num text-[11px] font-semibold text-[var(--ink)]">
        $2,500
      </div>
    </div>
  );
}

function FeatureVisualChart() {
  const pts = [10, 12, 9, 13, 16, 14, 18, 20, 17, 22, 24, 21];
  const min = Math.min(...pts);
  const max = Math.max(...pts);
  const range = max - min || 1;
  const w = 200;
  const h = 40;
  const stepX = w / (pts.length - 1);
  const points = pts.map((v, i) => `${i * stepX},${h - ((v - min) / range) * (h - 6) - 3}`).join(" ");
  return (
    <svg viewBox={`0 0 ${w} ${h}`} className="w-full" preserveAspectRatio="none" aria-hidden="true" style={{ height: 40 }}>
      <defs>
        <linearGradient id="fc" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.22" />
          <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <polyline points={`0,${h} ${points} ${w},${h}`} fill="url(#fc)" stroke="none" />
      <polyline points={points} fill="none" stroke="var(--primary)" strokeWidth={1.6} strokeLinejoin="round" strokeLinecap="round" />
    </svg>
  );
}

function FeatureVisualSecurity() {
  return (
    <div className="flex items-center gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <span
          key={i}
          aria-hidden="true"
          className={cn(
            "flex size-7 items-center justify-center rounded-md border border-[var(--border)] bg-white mono-num text-xs font-semibold",
            i <= 4 ? "text-[var(--ink)]" : "text-[var(--muted-2)]",
          )}
        >
          {i <= 4 ? "•" : "_"}
        </span>
      ))}
      <span className="ml-auto text-[10px] font-medium text-[var(--success)]">2FA on</span>
    </div>
  );
}
