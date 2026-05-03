import Link from "next/link";
import { Logo } from "./Logo";
import { RISK_DISCLAIMER } from "@/lib/data";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "App preview", href: "/#preview" },
      { label: "How it works", href: "/#how" },
      { label: "Security", href: "/#security" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Early access", href: "/#waitlist" },
      { label: "FAQ", href: "/#faq" },
      { label: "Contact", href: "/#waitlist" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Privacy", href: "/privacy" },
      { label: "Terms", href: "/terms" },
      { label: "Risk disclosure", href: "/#security" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-[var(--border)] bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-sm text-sm text-[var(--muted)]">
              A modern crypto trading and portfolio app — designed for clarity, real-time decisions,
              and secure account controls.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">{c.title}</div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-[var(--ink-2)] transition-colors hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24]"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface-2)] p-4 text-xs text-[var(--muted)]">
          <span className="font-medium text-[var(--ink-2)]">Risk disclaimer.</span> {RISK_DISCLAIMER}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-[var(--border)] pt-6 text-xs text-[var(--muted)] sm:flex-row sm:items-center sm:justify-between">
          <span>© {new Date().getFullYear()} Coldpapa. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-[var(--primary)]">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-[var(--primary)]">Terms</Link>
            <span>Illustrative product visuals · Not financial advice</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
