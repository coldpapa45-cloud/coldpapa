import { howItWorks } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionBadge>How it works</SectionBadge>
          <h2 id="how-title" className="h-section mt-4 text-white">
            From sign-up to your first trade in minutes.
          </h2>
          <p className="body-lead mt-4">
            Create an account, verify your identity, and place your first trade
            in five straightforward steps.
          </p>
        </Reveal>

        <Reveal className="relative mt-12">
          <ol className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {howItWorks.map((s, i) => (
              <li
                key={s.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_16px_40px_rgba(41,108,233,0.11),var(--shadow-md)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-80"
                />
                <span className="mono-num text-xs font-semibold text-[var(--primary)] transition-colors duration-300 group-hover:text-[var(--primary-2)]">
                  Step {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="h-card mt-2">{s.title}</h3>
                <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">
                  {s.body}
                </p>
                {i < howItWorks.length - 1 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute right-[-14px] top-12 text-[var(--border-strong)]"
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path
                        d="M5 4l6 6-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                )}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
