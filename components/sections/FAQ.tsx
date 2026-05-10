import { faqs } from "@/lib/data";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { Plus } from "lucide-react";

export function FAQ() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative border-y border-[var(--border)] bg-[var(--surface-2)]"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal className="text-center">
          <SectionBadge className="mx-auto">FAQ</SectionBadge>
          <h2 id="faq-title" className="h-section mt-4">Common questions.</h2>
          <p className="body-lead mt-4">
            Honest answers about fees, verification, security, and how Coldpapa works.
          </p>
        </Reveal>

        <Reveal className="mt-10 space-y-3">
          {faqs.map((f) => (
            <details
              key={f.q}
              className="group rounded-2xl border border-[var(--border)] bg-white px-5 py-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:shadow-[0_14px_34px_rgba(41,108,233,0.10)] open:border-[var(--primary)]/35 open:shadow-[var(--shadow-md)]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-lg text-left text-[0.95rem] font-semibold text-[var(--ink)] transition-colors focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#296CE924]">
                <span>{f.q}</span>
                <span
                  aria-hidden="true"
                  className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[var(--surface-2)] text-[var(--muted)] transition-all duration-300 group-hover:bg-[var(--primary-soft)] group-hover:text-[var(--primary)] group-open:rotate-45 group-open:bg-[var(--primary)] group-open:text-white"
                >
                  <Plus className="size-4" />
                </span>
              </summary>
              <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">{f.a}</p>
            </details>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
