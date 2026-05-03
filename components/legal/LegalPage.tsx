import type { ReactNode } from "react";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { SectionBadge } from "@/components/ui/SectionBadge";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  updated: string;
  sections: LegalSection[];
};

export function LegalPage({ eyebrow, title, intro, updated, sections }: Props) {
  return (
    <>
      <Header />
      <main className="flex-1">
        <section className="relative overflow-hidden border-b border-[var(--border)] bg-[var(--surface-2)]">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 55% 45% at 70% 0%, rgba(37,99,235,0.10), transparent 60%)",
            }}
          />
          <div className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
            <SectionBadge>{eyebrow}</SectionBadge>
            <h1 className="h-section mt-4 text-[var(--ink)]">{title}</h1>
            <p className="body-lead mt-4 max-w-2xl">{intro}</p>
            <p className="mt-6 text-sm text-[var(--muted)]">Last updated: {updated}</p>
          </div>
        </section>

        <section className="bg-white">
          <div className="mx-auto grid max-w-4xl gap-8 px-4 py-14 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--primary-soft)] p-5 text-sm leading-relaxed text-[var(--ink-2)]">
              This page is provided for early-access product transparency and should be reviewed by
              qualified counsel before production launch.
            </div>

            <div className="space-y-8">
              {sections.map((section) => (
                <section key={section.title} className="rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] sm:p-6">
                  <h2 className="h-card text-[var(--ink)]">{section.title}</h2>
                  <div className="mt-3 space-y-3 text-sm leading-relaxed text-[var(--muted)]">
                    {section.body}
                  </div>
                </section>
              ))}
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-5 text-sm text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
              <span>Questions about these policies?</span>
              <Link
                href="/#waitlist"
                className="inline-flex items-center justify-center rounded-full bg-[var(--ink)] px-4 py-2 font-medium text-white transition-all hover:-translate-y-0.5 hover:bg-[#111827] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24]"
              >
                Contact via waitlist
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
