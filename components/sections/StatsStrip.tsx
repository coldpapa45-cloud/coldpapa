import { statsData } from "@/lib/data";
import { Reveal } from "@/components/ui/Reveal";

export function StatsStrip() {
  return (
    <section aria-label="Product statistics" className="border-y border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <Reveal>
          <ul className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-6">
            {statsData.map((s) => (
              <li key={s.label} className="flex flex-col items-center text-center">
                <span className="h-display text-[clamp(1.75rem,4vw,2.5rem)] text-[var(--primary)]">
                  {s.value}
                </span>
                <span className="mt-1 text-xs text-[var(--muted)] leading-tight">{s.label}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
