import Link from "next/link";
import { Logo } from "./Logo";
import { RISK_DISCLAIMER } from "@/lib/data";

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Markets", href: "/#preview" },
      { label: "Demo Trading", href: "/#features" },
      { label: "Fees", href: "/#fees" },
      { label: "Join waitlist", href: "/#waitlist" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Blameless Hub", href: "/#how" },
      { label: "Early access", href: "/#waitlist" },
      { label: "Press inquiries", href: "mailto:support@coldpapa.com" },
      { label: "Contact", href: "mailto:support@coldpapa.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Help center", href: "/#faq" },
      { label: "Security", href: "/#security" },
      { label: "Market data", href: "/#preview" },
      { label: "Launch updates", href: "/#waitlist" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms of service", href: "/terms" },
      { label: "Privacy policy", href: "/privacy" },
      { label: "AML policy", href: "/terms" },
      { label: "Risk disclosure", href: "/#security" },
    ],
  },
];

const socials = [
  { label: "Instagram", handle: "@coldpapax", href: "https://instagram.com/coldpapax" },
  { label: "X (Twitter)", handle: "@coldpapax", href: "https://x.com/coldpapax" },
  { label: "Facebook", handle: "/coldpapax", href: "https://facebook.com/coldpapax" },
  { label: "Email", handle: "support@coldpapa.com", href: "mailto:support@coldpapa.com" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--ink)] text-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <Logo tone="dark" />
            <p className="mt-3 text-sm text-white/50">
              Trade smarter. Pay less. Built for Africa.
            </p>
            <p className="mt-4 text-xs text-white/40">
              Blameless Hub · Port Harcourt, Nigeria
            </p>
            <div className="mt-5 space-y-1.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="flex items-center gap-2 text-xs text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                >
                  <span className="font-medium text-white/30 w-16 shrink-0">{s.label}</span>
                  {s.handle}
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-xs font-semibold uppercase tracking-wide text-white/40">{c.title}</div>
              <ul className="mt-3 space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 rounded"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-xs text-white/50">
          <span className="font-medium text-white/70">Risk disclaimer.</span> {RISK_DISCLAIMER}
        </div>

        <div className="mt-6 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Coldpapa by Blameless Hub. Cryptocurrency trading involves risk. Trade responsibly.</span>
          <span className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/70">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/70">Terms</Link>
            <span>Crypto assets involve risk. Trade responsibly.</span>
          </span>
        </div>
      </div>
    </footer>
  );
}
