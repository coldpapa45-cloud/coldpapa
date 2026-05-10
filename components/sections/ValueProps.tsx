import { valueProps } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

export function ValueProps() {
  return (
    <section aria-labelledby="value-title" className="relative bg-[var(--surface-2)]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <Reveal className="text-center max-w-2xl mx-auto mb-10">
          <SectionBadge className="mx-auto">Why Coldpapa</SectionBadge>
          <h2 id="value-title" className="h-section mt-4">
            More than a wallet. A serious trading floor in your pocket.
          </h2>
        </Reveal>

        <Reveal className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {valueProps.map((v, i) => (
            <div
              key={v.eyebrow}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-6 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/30 hover:shadow-[0_18px_46px_rgba(41,108,233,0.10)]"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-4 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--primary),transparent)] opacity-0 transition-opacity duration-300 group-hover:opacity-80"
              />
              <span className="text-xs font-semibold uppercase tracking-wide text-[var(--primary)]">
                {String(i + 1).padStart(2, "0")}. {v.eyebrow}
              </span>
              <h3 className="h-card mt-3">{v.title}</h3>
              <p className="mt-2 text-sm text-[var(--muted)] leading-relaxed">{v.body}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
