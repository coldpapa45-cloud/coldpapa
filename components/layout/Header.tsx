"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const navItems = [
  { href: "/#features", id: "features", label: "Features" },
  { href: "/#preview", id: "preview", label: "Markets" },
  { href: "/#how", id: "how", label: "How it works" },
  { href: "/#security", id: "security", label: "Security" },
  { href: "/#faq", id: "faq", label: "Faq" }
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const getActive = () => {
      const trigger = window.scrollY + window.innerHeight * 0.35;
      let current = "";
      for (const item of navItems) {
        const el = document.getElementById(item.id);
        if (el && el.offsetTop <= trigger) current = item.id;
      }
      setActiveSection(current ? `/#${current}` : "");
    };

    getActive();
    window.addEventListener("scroll", getActive, { passive: true });
    return () => window.removeEventListener("scroll", getActive);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 transition-all duration-300 border-0",
        scrolled ? "shadow-[0_4px_24px_rgba(0,0,0,0.4)]" : ""
      )}
      style={{
        background: scrolled ? "rgba(6,13,31,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : undefined
      }}
    >
      <div className="mx-auto flex h-16 w-screen max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="Coldpapa home" className="flex items-center">
          <Logo tone="dark" />
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
                      "group relative rounded-full px-3 py-2 text-sm font-medium transition-colors duration-200",
                      active ? "text-white" : "text-white/55 hover:text-white"
                    )}
                  >
                    <span
                      aria-hidden="true"
                      className={cn(
                        "absolute inset-x-3 bottom-1 h-0.5 origin-left rounded-full bg-white/70 transition-transform duration-200",
                        active
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
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
          <a
            href="#waitlist"
            className={cn(
              "hidden sm:inline-flex items-center rounded-full px-4 py-2 text-sm font-semibold transition-all duration-200",
              "border border-white/20 bg-white/10 text-white hover:bg-white/20",
              !scrolled && "backdrop-blur-sm"
            )}
          >
            Join waitlist
          </a>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
            className="inline-flex size-10 items-center justify-center rounded-full text-white/70 transition-all duration-200 hover:bg-white/10 hover:text-white active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-white/20 md:hidden"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="md:hidden border-t border-white/10 overflow-hidden"
            style={{
              background: "rgba(6,13,31,0.96)",
              backdropFilter: "blur(14px)"
            }}
          >
            <ul className="mx-auto max-w-6xl px-4 py-3 sm:px-6">
              {navItems.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    onClick={() => setOpen(false)}
                    aria-current={activeSection === n.href ? "page" : undefined}
                    className={cn(
                      "block rounded-lg px-3 py-2.5 text-[0.95rem] font-medium transition-all duration-200 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30",
                      activeSection === n.href
                        ? "bg-white/15 text-white"
                        : "text-white/70"
                    )}
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2 pt-2 border-t border-white/10">
                <a
                  href="#waitlist"
                  onClick={() => setOpen(false)}
                  className="block rounded-lg bg-white px-3 py-2.5 text-center text-sm font-semibold text-blue-700"
                >
                  Join waitlist
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
