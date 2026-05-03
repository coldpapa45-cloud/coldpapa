import { trustItems } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function TrustBar() {
  return (
    <section aria-label="Trust indicators" className="border-y border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-7">
        <Reveal>
          <ul className="grid grid-cols-2 gap-x-6 gap-y-4 md:grid-cols-4 md:gap-x-10">
            {trustItems.map((t) => {
              const Icon = t.icon;
              return (
                <li key={t.label} className="group flex items-start gap-3 rounded-2xl p-2 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[var(--surface-2)]">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)] transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_10px_24px_rgba(37,99,235,0.14)]">
                    <Icon className="size-4" aria-hidden="true" />
                  </span>
                  <div>
                    <div className="text-sm font-semibold text-[var(--ink)] leading-tight">
                      {t.label}
                    </div>
                    <div className="text-xs text-[var(--muted)] mt-0.5">{t.detail}</div>
                  </div>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
