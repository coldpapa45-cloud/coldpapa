import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { CheckCircle } from "lucide-react";

const africaPoints = [
  {
    label: "Direct UBA & Access Bank integrations",
    detail: "Withdraw fiat straight to your Nigerian account."
  },
  {
    label: "Mobile money as a first-class payment method",
    detail: "Fund your wallet the way Africans actually move money."
  },
  {
    label: "NGN-first with USD, EUR, and GBP",
    detail:
      "Naira is the default. The other major currencies are right there too."
  },
  {
    label: "BVN-based KYC that clears in under 24 hours",
    detail: "Compliant with Nigerian financial regulations from day one."
  },
  {
    label:
      "190+ countries, with deep coverage across Nigeria, Ghana, and Kenya",
    detail: "Built in Port Harcourt, for traders everywhere on the continent."
  }
];

export function BuiltForAfrica() {
  return (
    <section
      aria-labelledby="africa-title"
      className="relative bg-[var(--surface-2)]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <Reveal>
            <SectionBadge>Built for Africa</SectionBadge>
            <h2 id="africa-title" className="h-section mt-4">
              We didn&apos;t translate a Western app. We built one for here.
            </h2>
            <p className="body-lead mt-4">
              Coldpapa was designed in Nigeria for the way Africans actually
              move money. Naira-first, mobile money native, bank-linked, and
              BVN-aware.
            </p>
          </Reveal>

          <Reveal>
            <ul className="space-y-4">
              {africaPoints.map((p) => (
                <li
                  key={p.label}
                  className="group flex items-start gap-4 rounded-2xl border border-[var(--border)] bg-white p-4 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--success)]/30 hover:shadow-[0_12px_32px_rgba(93,185,117,0.10)]"
                >
                  <CheckCircle
                    className="size-5 shrink-0 text-[var(--success)] mt-0.5"
                    aria-hidden="true"
                  />
                  <div>
                    <div className="text-sm font-semibold text-[var(--ink)] leading-snug">
                      {p.label}
                    </div>
                    <div className="mt-0.5 text-xs text-[var(--muted)]">
                      {p.detail}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
