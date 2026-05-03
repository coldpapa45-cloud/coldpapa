import { securityPillars, RISK_DISCLAIMER } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { ShieldCheck } from "lucide-react";

export function Security() {
  return (
    <section
      id="security"
      aria-labelledby="security-title"
      className="relative overflow-hidden bg-[var(--ink)] text-white"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.18]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 80% 0%, rgba(37,99,235,0.5), transparent 60%), radial-gradient(ellipse 50% 50% at 10% 100%, rgba(6,182,212,0.4), transparent 60%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.4) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16 items-start">
          <Reveal>
            <SectionBadge tone="dark">Security & risk</SectionBadge>
            <h2 id="security-title" className="h-section mt-4 text-white">
              Built with security in mind. Honest about risk.
            </h2>
            <p className="body-lead mt-4 text-white/70">
              Coldpapa is designed with the controls people expect from a serious financial product:
              two-factor authentication, encryption, and device review.
            </p>

            <div className="group mt-8 flex items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_18px_46px_rgba(6,182,212,0.10)]">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--primary-2)]">
                <ShieldCheck className="size-4" aria-hidden="true" />
              </span>
              <div>
                <div className="text-sm font-semibold text-white">Risk disclaimer</div>
                <p className="mt-1 text-xs leading-relaxed text-white/70">{RISK_DISCLAIMER}</p>
              </div>
            </div>
          </Reveal>

          <Reveal>
            <ul className="space-y-3">
              {securityPillars.map((p) => {
                const Icon = p.icon;
                return (
                  <li
                    key={p.title}
                    className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07] hover:shadow-[0_18px_46px_rgba(6,182,212,0.10)]"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[var(--primary-2)] transition-all duration-300 group-hover:scale-105 group-hover:bg-white/15">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="h-card text-white">{p.title}</h3>
                      <p className="mt-1.5 text-sm text-white/65 leading-relaxed">{p.body}</p>
                    </div>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
