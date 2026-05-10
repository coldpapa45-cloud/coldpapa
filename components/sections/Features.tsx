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
  orange: "bg-[#FFF4E0] text-[var(--accent-orange)]",
};

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionBadge>Features</SectionBadge>
          <h2 id="features-title" className="h-section mt-4">
            Everything you need to trade crypto in Africa.
          </h2>
          <p className="body-lead mt-4">
            A full toolkit built for the way real people actually move money here.
          </p>
        </Reveal>

        <Reveal className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <article
                key={f.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--primary)]/35 hover:shadow-[0_18px_46px_rgba(41,108,233,0.12),var(--shadow-md)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                />
                <div className={cn("flex size-10 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(41,108,233,0.14)]", accentBg[f.accent])}>
                  <Icon className="size-5" aria-hidden="true" />
                </div>
                <h3 className="h-card mt-4">{f.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{f.body}</p>

                {/* Per-feature micro-visual (first 6 features) */}
                {i < 6 && (
                  <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3 transition-all duration-300 group-hover:border-[var(--primary)]/25 group-hover:bg-white group-hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
                    {i === 0 && <FeatureVisualWallet />}
                    {i === 1 && <FeatureVisualBuy />}
                    {i === 2 && <FeatureVisualConvert />}
                    {i === 3 && <FeatureVisualSend />}
                    {i === 4 && <FeatureVisualMarket />}
                    {i === 5 && <FeatureVisualDemo />}
                  </div>
                )}
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function FeatureVisualWallet() {
  const coins = [
    { symbol: "BTC", color: "#F7931A" },
    { symbol: "ETH", color: "#3C56C1" },
    { symbol: "SOL", color: "#7C3AED" },
    { symbol: "USDC", color: "#2775CA" },
  ];
  return (
    <div className="flex items-center gap-1.5">
      {coins.map((c) => (
        <span
          key={c.symbol}
          className="flex size-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
          style={{ background: c.color }}
          aria-label={c.symbol}
        >
          {c.symbol[0]}
        </span>
      ))}
      <span className="ml-auto text-[10px] font-medium text-[var(--muted)]">+7 more</span>
    </div>
  );
}

function FeatureVisualBuy() {
  return (
    <div className="space-y-1.5">
      {["Card", "Bank transfer", "Mobile money"].map((m) => (
        <div key={m} className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5">
          <span className="text-[11px] font-medium text-[var(--ink)]">{m}</span>
          <span className="size-1.5 rounded-full bg-[var(--success)]" aria-hidden="true" />
        </div>
      ))}
    </div>
  );
}

function FeatureVisualConvert() {
  return (
    <div className="flex items-center gap-2">
      <div className="flex-1 rounded-lg bg-white px-2.5 py-2 text-center">
        <div className="text-[10px] text-[var(--muted)]">From</div>
        <div className="mono-num text-xs font-semibold text-[var(--ink)]">BTC</div>
      </div>
      <svg viewBox="0 0 16 16" className="size-4 shrink-0 text-[var(--primary)]" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 8h10M9 4l4 4-4 4" />
      </svg>
      <div className="flex-1 rounded-lg bg-white px-2.5 py-2 text-center">
        <div className="text-[10px] text-[var(--muted)]">To</div>
        <div className="mono-num text-xs font-semibold text-[var(--ink)]">NGN</div>
      </div>
    </div>
  );
}

function FeatureVisualSend() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center gap-2 rounded-lg bg-white px-2.5 py-1.5">
        <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--primary)]" />
        <span className="mono-num text-[11px] font-medium text-[var(--ink)]">0x4f…c9a2</span>
        <span className="ml-auto text-[10px] text-[var(--muted)]">QR</span>
      </div>
      <div className="rounded-lg bg-[var(--primary)] px-2.5 py-1.5 text-center text-[11px] font-semibold text-white">
        Send 0.012 BTC
      </div>
    </div>
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

function FeatureVisualDemo() {
  return (
    <div className="space-y-1.5">
      <div className="flex items-center justify-between">
        <span className="rounded-full bg-[var(--accent-orange)]/15 px-2 py-0.5 text-[10px] font-semibold text-[var(--accent-orange)]">Demo mode</span>
        <span className="mono-num text-[10px] text-[var(--muted)]">Virtual funds</span>
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white px-2.5 py-1.5">
        <span className="text-[11px] font-medium text-[var(--ink)]">BTC/USD</span>
        <span className="mono-num text-[10px] font-medium text-[var(--success)]">+2.41%</span>
      </div>
    </div>
  );
}
