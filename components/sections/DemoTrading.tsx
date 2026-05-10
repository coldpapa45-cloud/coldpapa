import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";

export function DemoTrading() {
  return (
    <section aria-labelledby="demo-title" className="relative overflow-hidden bg-ink text-white">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.15]"
        style={{
          background:
            "radial-gradient(ellipse 60% 60% at 80% 50%, rgba(249,169,72,0.5), transparent 70%), radial-gradient(ellipse 40% 40% at 20% 50%, rgba(41,108,233,0.4), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <SectionBadge tone="dark">New to crypto?</SectionBadge>
            <h2 id="demo-title" className="h-section mt-4 text-white">Practice. Learn. Grow.</h2>
            <p className="body-lead mt-4 text-white/70">
              Demo Trading gives you a fully-loaded virtual portfolio to play with. Place real trades
              against real market data without using real funds. When you&apos;ve found your strategy,
              switch to live in one tap.
            </p>
            <div className="mt-8">
              <Button asChild size="lg" variant="secondary">
                <a href="#waitlist">
                  Try Demo Trading
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Button>
            </div>
          </Reveal>

          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-6">
              <div className="mb-4 flex items-center justify-between">
                <span className="rounded-full bg-[var(--accent-orange)]/20 px-3 py-1 text-xs font-semibold text-[var(--accent-orange)]">
                  Demo mode active
                </span>
                <span className="mono-num text-xs text-white/40">Virtual funds</span>
              </div>

              <div className="space-y-3">
                {[
                  { pair: "BTC / USD", change: "+2.41%", positive: true, price: "$68,420" },
                  { pair: "ETH / USD", change: "+0.83%", positive: true, price: "$3,180" },
                  { pair: "SOL / USD", change: "-1.12%", positive: false, price: "$142.80" },
                ].map((row) => (
                  <div key={row.pair} className="flex items-center justify-between rounded-xl bg-white/[0.06] px-4 py-3">
                    <span className="text-sm font-medium text-white">{row.pair}</span>
                    <div className="text-right">
                      <div className="mono-num text-xs text-white/60">{row.price}</div>
                      <div className={`mono-num text-xs font-semibold ${row.positive ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>
                        {row.change}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-center text-sm font-semibold text-white">
                Place a demo trade
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
