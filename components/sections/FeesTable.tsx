import { feeRows } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

export function FeesTable() {
  return (
    <section id="fees" aria-labelledby="fees-title" className="relative bg-[var(--surface-2)]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal className="text-center max-w-xl mx-auto mb-10">
          <SectionBadge className="mx-auto">Fees</SectionBadge>
          <h2 id="fees-title" className="h-section mt-4">Honest fees. Posted up front. No surprises.</h2>
          <p className="body-lead mt-4">
            No hidden spreads. No withdrawal traps. The number you see is the number you pay.
          </p>
        </Reveal>

        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-sm)]">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-[var(--border)] bg-[var(--surface-2)]">
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Method</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Fee</th>
                  <th className="hidden sm:table-cell px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Limits</th>
                  <th className="px-5 py-3.5 text-left text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Speed</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {feeRows.map((row, i) => (
                  <tr key={row.method} className="transition-colors hover:bg-[var(--surface-2)]">
                    <td className="px-5 py-4 font-medium text-[var(--ink)]">{row.method}</td>
                    <td className="px-5 py-4">
                      <span className={`mono-num font-semibold ${i === 0 ? "text-[var(--success)]" : "text-[var(--ink)]"}`}>
                        {row.fee}
                      </span>
                    </td>
                    <td className="hidden sm:table-cell px-5 py-4 text-[var(--muted)]">{row.limits}</td>
                    <td className="px-5 py-4 text-[var(--muted)]">{row.speed}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
