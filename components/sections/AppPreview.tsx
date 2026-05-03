import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { PhoneFrame } from "@/components/product/PhoneFrame";
import { PhoneScreen } from "@/components/product/PhoneScreen";
import { MiniDashboard } from "@/components/product/MiniDashboard";
import { OrderTicket } from "@/components/product/OrderTicket";
import { AlertCard } from "@/components/product/AlertCard";
import { sampleMarket } from "@/lib/data";
import { AssetGlyph } from "@/components/product/AssetGlyph";
import { Sparkline } from "@/components/product/Sparkline";
import { cn, formatPct, formatUsd } from "@/lib/utils";

/**
 * Set to `true` once you've dropped Figma exports into /public/app-preview/
 * (dashboard.png, portfolio.png, alerts.png). While `false`, the CSS/SVG
 * mockup fallbacks render — keeping the page polished without broken images.
 */
const USE_FIGMA_SCREENSHOTS = false;

const screenshot = (file: string) => (USE_FIGMA_SCREENSHOTS ? `/app-preview/${file}` : undefined);

export function AppPreview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-title"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface-2)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(37,99,235,0.08), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionBadge>App preview</SectionBadge>
          <h2 id="preview-title" className="h-section mt-4">
            A polished mobile experience, designed for real-time decisions.
          </h2>
          <p className="body-lead mt-4">
            Dashboard, portfolio, alerts, and a precise order ticket — all in one place.
            Visuals here are illustrative previews, not live data.
          </p>
        </Reveal>

        <Reveal className="mt-12 -mx-4 sm:mx-0">
          <div className="flex snap-x snap-mandatory gap-6 overflow-x-auto px-4 pb-4 no-scrollbar sm:pb-0 lg:grid lg:grid-cols-3 lg:gap-8 lg:overflow-visible lg:px-0">
            <div className="snap-center shrink-0 w-[78%] sm:w-[55%] lg:w-auto">
              <PhoneFrame label="Dashboard">
                <PhoneScreen
                  src={screenshot("dashboard.png")}
                  alt="Coldpapa dashboard with portfolio, market chart, and watchlist"
                  fallback={<MiniDashboard />}
                />
              </PhoneFrame>
            </div>
            <div className="snap-center shrink-0 w-[78%] sm:w-[55%] lg:w-auto">
              <PhoneFrame label="Portfolio">
                <PhoneScreen
                  src={screenshot("portfolio.png")}
                  alt="Coldpapa portfolio view with allocation and holdings"
                  fallback={<PortfolioMock />}
                />
              </PhoneFrame>
            </div>
            <div className="snap-center shrink-0 w-[78%] sm:w-[55%] lg:w-auto">
              <PhoneFrame label="Alerts & Trade">
                <PhoneScreen
                  src={screenshot("alerts.png")}
                  alt="Coldpapa price alerts and order ticket"
                  fallback={<AlertsMock />}
                />
              </PhoneFrame>
            </div>
          </div>
        </Reveal>

        <p className="mt-6 text-center text-xs text-[var(--muted)]">
          Sample market view · Illustrative data
        </p>
      </div>
    </section>
  );
}

function PortfolioMock() {
  const holdings = [
    { symbol: "BTC", name: "Bitcoin", pct: 48, value: 12480, color: "#F7931A" },
    { symbol: "ETH", name: "Ethereum", pct: 27, value: 7020, color: "#3C56C1" },
    { symbol: "SOL", name: "Solana", pct: 15, value: 3900, color: "#7C3AED" },
    { symbol: "USDC", name: "USD Coin", pct: 10, value: 2600, color: "#2775CA" },
  ];
  return (
    <div className="flex h-full flex-col gap-3 p-3.5">
      <div>
        <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Total balance</div>
        <div className="mono-num text-xl font-semibold leading-tight text-[var(--ink)]">{formatUsd(26000)}</div>
        <div className="mono-num text-[11px] font-medium text-[var(--success)]">▲ +$471.20 (1.84%) · 24h</div>
      </div>

      <div className="flex h-2 w-full overflow-hidden rounded-full">
        {holdings.map((h) => (
          <span key={h.symbol} style={{ width: `${h.pct}%`, background: h.color }} />
        ))}
      </div>

      <div className="flex-1 space-y-1.5">
        <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Holdings</div>
        {holdings.map((h) => (
          <div key={h.symbol} className="flex items-center justify-between rounded-lg bg-white px-2 py-1.5">
            <div className="flex items-center gap-2">
              <AssetGlyph symbol={h.symbol} size={22} />
              <div>
                <div className="text-[11px] font-semibold leading-tight text-[var(--ink)]">{h.symbol}</div>
                <div className="text-[9px] leading-tight text-[var(--muted)]">{h.name}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="mono-num text-[10px] font-semibold leading-tight text-[var(--ink)]">{formatUsd(h.value)}</div>
              <div className="mono-num text-[9px] leading-tight text-[var(--muted)]">{h.pct}%</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function AlertsMock() {
  return (
    <div className="flex h-full flex-col gap-3 p-3">
      <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Recent alerts</div>
      <div className="space-y-2">
        <AlertCard className="shadow-none" />
        <div className="flex items-start gap-2.5 rounded-2xl border border-[var(--border)] bg-white p-3">
          <span className="mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-lg bg-[#F3E8FF] text-[var(--accent-violet)]">
            <svg viewBox="0 0 16 16" className="size-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M2 12l4-4 3 3 5-7" />
            </svg>
          </span>
          <div className="min-w-0 flex-1">
            <div className="flex items-center justify-between gap-2">
              <p className="truncate text-[11px] font-semibold text-[var(--ink)]">ETH 24h up &gt; 2%</p>
              <span className="mono-num text-[9px] text-[var(--muted)]">12m</span>
            </div>
            <p className="text-[10px] text-[var(--muted)]">
              Now <span className="mono-num text-[var(--success)]">+2.18%</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-1">
        <OrderTicket className="shadow-none" />
      </div>

      <div className="mt-auto">
        <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)] mb-1.5">Watchlist</div>
        <div className="space-y-1">
          {sampleMarket.slice(0, 2).map((a) => (
            <div key={a.symbol} className="flex items-center justify-between rounded-lg bg-white px-2 py-1">
              <div className="flex items-center gap-2">
                <AssetGlyph symbol={a.symbol} size={20} />
                <div className="text-[10px] font-semibold text-[var(--ink)]">{a.symbol}</div>
              </div>
              <Sparkline values={a.spark} positive={a.change24h >= 0} width={36} height={14} />
              <div
                className={cn(
                  "mono-num text-[10px] font-medium",
                  a.change24h >= 0 ? "text-[var(--success)]" : "text-[var(--danger)]",
                )}
              >
                {formatPct(a.change24h)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
