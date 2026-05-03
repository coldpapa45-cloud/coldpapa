"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#features", id: "features", label: "Features" },
  { href: "/#preview", id: "preview", label: "App preview" },
  { href: "/#how", id: "how", label: "How it works" },
  { href: "/#security", id: "security", label: "Security" },
  { href: "/#faq", id: "faq", label: "FAQ" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActiveSection(`/#${visible.target.id}`);
      },
      { rootMargin: "-25% 0px -60% 0px", threshold: [0.15, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-colors",
        scrolled
          ? "border-b border-[var(--border)] bg-white/75 backdrop-blur supports-[backdrop-filter]:bg-white/60"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="mx-auto flex h-16 w-screen max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Coldpapa home" className="flex items-center">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {navItems.map((n) => {
              const active = activeSection === n.href;
              return (
              <li key={n.href}>
                <Link
                  href={n.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative rounded-full px-3 py-2 text-sm transition-colors duration-200",
                    active ? "text-[var(--ink)]" : "text-[var(--muted)] hover:text-[var(--ink)]",
                  )}
                >
                  <span
                    aria-hidden="true"
                    className={cn(
                      "absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-[linear-gradient(90deg,var(--primary),var(--primary-2))] transition-transform duration-200",
                      active ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100",
                    )}
                  />
                  {n.label}
                </Link>
              </li>
              );
            })}
          </ul>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Button asChild variant="ghost" size="sm" className="hidden md:inline-flex">
            <a href="#waitlist">Sign in</a>
          </Button>
          <Button asChild variant="primary" size="sm" className="hidden sm:inline-flex">
            <a href="#waitlist">
              Join waitlist
            </a>
          </Button>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="fixed right-4 top-3 z-50 inline-flex size-10 items-center justify-center rounded-full text-[var(--ink)] transition-all duration-200 hover:bg-[var(--surface-2)] hover:text-[var(--primary)] active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24] md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-[var(--border)] bg-white">
          <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
            {navItems.map((n) => (
              <li key={n.href}>
                <Link
                  href={n.href}
                  onClick={() => setOpen(false)}
                  aria-current={activeSection === n.href ? "page" : undefined}
                  className={cn(
                    "block rounded-lg px-3 py-2.5 text-[0.95rem] transition-all duration-200 hover:bg-[var(--surface-2)] hover:text-[var(--primary)] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24]",
                    activeSection === n.href ? "bg-[var(--primary-soft)] text-[var(--primary)]" : "text-[var(--ink)]",
                  )}
                >
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
