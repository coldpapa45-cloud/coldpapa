"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { MarketCard } from "@/components/product/MarketCard";
import { PortfolioCard } from "@/components/product/PortfolioCard";
import { TradingChart } from "@/components/product/TradingChart";
import { AlertCard } from "@/components/product/AlertCard";
import { sampleMarket } from "@/lib/data";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient background */}
      <div aria-hidden="true" className="absolute inset-0 -z-10 dotted-bg opacity-40" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 -top-40 -z-10 h-[640px]"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(37,99,235,0.18), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 0%, rgba(6,182,212,0.12), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left: copy */}
          <div className="relative">
            <div>
              <span className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--muted)] shadow-[var(--shadow-sm)] backdrop-blur transition-all duration-300 hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-[0_10px_26px_rgba(37,99,235,0.12)]">
                <Sparkles className="size-3.5 text-[var(--primary)]" aria-hidden="true" />
                Early access opening soon
              </span>
            </div>

            <div>
              <h1 className="h-display mt-5 max-w-[20rem] text-[clamp(2.2rem,10vw,4.5rem)] sm:max-w-2xl">
                <span className="text-[var(--ink)]">Trade crypto with</span>
                <br />
                <span className="gradient-text">clarity</span>
                <br />
                <span className="text-[var(--ink)]">and control.</span>
              </h1>
            </div>

            <div>
              <p className="body-lead mt-5 max-w-[20rem] sm:max-w-xl">
                Track markets, manage your portfolio, and act on price moves faster — in one calm,
                uncluttered app built for real-time decisions.
              </p>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="w-[calc(100vw-2rem)] max-w-[20rem] sm:w-auto sm:max-w-none">
                <a href="#waitlist">
                  Join the waitlist
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="w-[calc(100vw-2rem)] max-w-[20rem] sm:w-auto sm:max-w-none">
                <a href="#features">See how it works</a>
              </Button>
            </div>

            <div className="mt-7 flex max-w-[20rem] flex-wrap items-center gap-x-5 gap-y-2 text-xs text-[var(--muted)] sm:max-w-none">
              <span className="flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--success)]" />
                Designed with 2FA + device review
              </span>
              <span className="hidden sm:inline-flex items-center gap-2">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-[var(--primary)]" />
                Real-time market views
              </span>
            </div>
          </div>

          {/* Right: floating product cluster */}
          <div className="relative">
            <FloatingCluster />
          </div>
        </div>
      </div>
    </section>
  );
}

function FloatingCluster() {
  const reduced = useReducedMotion();
  const float = (delay = 0, distance = 8) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -distance, 0] },
          transition: {
            duration: 6 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay,
          },
        };

  return (
    <div className="relative mx-auto h-[440px] w-full max-w-[560px] sm:h-[520px]">
      {/* Backdrop card glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-10 -z-10 h-[80%] rounded-3xl border border-[var(--border)] bg-white/40 shadow-[0_24px_70px_rgba(37,99,235,0.10)] backdrop-blur"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.35) 100%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-6 -z-10 h-48 w-48 -translate-x-1/2 rounded-full bg-[var(--primary)]/10 blur-3xl"
      />

      {/* Trading chart — primary visual */}
      <motion.div
        {...float(0, 10)}
        className="absolute left-0 right-0 top-4 mx-auto w-[94%] max-w-[480px]"
      >
        <TradingChart />
      </motion.div>

      {/* Top-right market card */}
      <motion.div {...float(0.8, 6)} className="absolute right-2 top-0 hidden sm:block">
        <MarketCard ticker={sampleMarket[1]} compact />
      </motion.div>

      {/* Portfolio card — bottom left */}
      <motion.div
        {...float(1.4, 8)}
        className="absolute bottom-0 left-0 w-[58%] max-w-[260px] sm:left-2"
      >
        <PortfolioCard />
      </motion.div>

      {/* Alert — bottom right */}
      <motion.div
        {...float(2, 6)}
        className="absolute bottom-6 right-0 w-[55%] max-w-[260px] sm:right-2"
      >
        <AlertCard />
      </motion.div>
    </div>
  );
}
