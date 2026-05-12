import Link from "next/link";
import { Mail } from "lucide-react";
import type { ReactNode } from "react";
import { Logo } from "./Logo";
import { RISK_DISCLAIMER } from "@/lib/data";

function XIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" strokeWidth="0" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
    </svg>
  );
}

const cols: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "App preview", href: "/#preview" },
      { label: "Fees", href: "/#fees" },
      { label: "Demo trading", href: "/#features" },
    ],
  },
  {
    title: "Get started",
    links: [
      { label: "Join waitlist", href: "/#waitlist" },
      { label: "Early access", href: "/#waitlist" },
      { label: "How it works", href: "/#how" },
      { label: "Contact us", href: "mailto:support@coldpapa.com" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
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
    ],
  },
];

const iconBase = "size-3.5 shrink-0";

const socials: { label: string; icon: ReactNode; handle: string; href: string }[] = [
  { label: "Instagram", icon: <InstagramIcon className={`${iconBase} text-[#E4405F]`} />, handle: "@coldpapax", href: "https://instagram.com/coldpapax" },
  { label: "X (Twitter)", icon: <XIcon className={`${iconBase} text-white/60`} />, handle: "@coldpapax", href: "https://x.com/coldpapax" },
  { label: "Facebook", icon: <FacebookIcon className={`${iconBase} text-[#1877F2]`} />, handle: "/coldpapax", href: "https://facebook.com/coldpapax" },
  { label: "Email", icon: <Mail className={`${iconBase} text-blue-400`} aria-hidden="true" />, handle: "support@coldpapa.com", href: "mailto:support@coldpapa.com" },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ background: "#060d1f" }}>
      {/* Top glow accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px"
        style={{ background: "linear-gradient(90deg, transparent, rgba(96,165,250,0.4), rgba(167,139,250,0.3), transparent)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-150 -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10"
        style={{ background: "radial-gradient(ellipse at center, #3b82f6 0%, transparent 70%)" }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        {/* Main grid */}
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          {/* Brand column */}
          <div>
            <Logo tone="dark" />
            <p className="mt-3 text-sm leading-relaxed text-white/40">
              A modern crypto trading platform built for Africa — track markets, manage your portfolio,
              and act on price moves faster.
            </p>
            <p className="mt-4 text-xs text-white/25">
              Blameless Hub · Port Harcourt, Nigeria
            </p>
            <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex min-w-0 items-center gap-1.5 text-xs text-white/40 transition-colors hover:text-white/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded"
                >
                  {s.icon}
                  <span className="truncate">{s.handle}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[10px] font-semibold uppercase tracking-widest text-white/30">{c.title}</div>
              <ul className="mt-4 space-y-2.5">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-white/50 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/20 rounded"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Risk disclaimer */}
        <div
          className="mt-12 rounded-2xl border border-white/8 p-4 text-xs leading-relaxed text-white/35"
          style={{ background: "rgba(255,255,255,0.03)" }}
        >
          <span className="font-semibold text-white/50">Risk disclaimer. </span>
          {RISK_DISCLAIMER}
        </div>

        {/* Bottom bar */}
        <div className="mt-6 flex flex-col gap-3 border-t border-white/[0.07] pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <span>© 2026 Coldpapa by Blameless Hub. All rights reserved.</span>
          <span className="flex flex-wrap items-center gap-4">
            <Link href="/privacy" className="transition-colors hover:text-white/50">Privacy</Link>
            <Link href="/terms" className="transition-colors hover:text-white/50">Terms</Link>
            <Link href="/privacy" className="transition-colors hover:text-white/50">Risk disclosure</Link>
          </span>
        </div>
      </div>
    </footer>
  );
}
