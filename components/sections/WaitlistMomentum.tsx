import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { sampleMarket } from "@/lib/data";
import { MarketCard } from "@/components/product/MarketCard";

export function WaitlistMomentum() {
  return (
    <section aria-labelledby="momentum-title" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.05fr]">
          <Reveal>
            <SectionBadge>Early access</SectionBadge>
            <h2 id="momentum-title" className="h-section mt-4">
              Be among the first to try Coldpapa.
            </h2>
            <p className="body-lead mt-4">
              Join early users getting access first. Get notified as new access windows open and
              shape the product as it rolls out.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-[var(--ink-2)]">
              {[
                "Priority early-access invitations.",
                "Direct line for feedback and feature requests.",
                "Updates on supported assets, regions, and security features.",
              ].map((item) => (
                <li key={item} className="group flex items-start gap-2.5">
                  <span
                    aria-hidden="true"
                    className="mt-1 flex size-4 items-center justify-center rounded-full bg-[var(--success-soft)] text-[var(--success)] transition-all duration-200 group-hover:scale-110 group-hover:shadow-[0_6px_16px_rgba(16,185,129,0.18)]"
                  >
                    <svg viewBox="0 0 12 12" className="size-2.5" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M2 6.5l2.5 2.5L10 3" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-md)] transition-all duration-300 hover:border-[var(--primary)]/30 hover:shadow-[0_20px_52px_rgba(37,99,235,0.12),var(--shadow-md)]">
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-6 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),var(--primary-2),transparent)] opacity-70"
              />
              <div className="flex items-center justify-between">
                <span className="text-xs font-medium uppercase tracking-wide text-[var(--muted)]">
                  Sample market view
                </span>
                <span className="rounded-full bg-[var(--surface-2)] px-2 py-0.5 text-[10px] font-medium text-[var(--muted)]">
                  Illustrative
                </span>
              </div>
              <ul className="mt-4 space-y-2.5">
                {sampleMarket.map((t) => (
                  <li key={t.symbol}>
                    <MarketCard ticker={t} className="w-full" />
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
