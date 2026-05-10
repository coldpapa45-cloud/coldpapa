"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { PortfolioCard } from "@/components/product/PortfolioCard";
import { TradingChart } from "@/components/product/TradingChart";
import { LiveMarketCalculator } from "@/components/product/LiveMarketCalculator";

const heroBadges = [
  { emoji: "⚡", text: "Settle in 5 minutes" },
  { emoji: "🔐", text: "PIN-protected & KYC-verified" },
  { emoji: "💸", text: "Fees from 0.5%" },
  { emoji: "🌍", text: "Naira, USD, EUR, GBP" },
];

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
            "radial-gradient(ellipse 60% 50% at 70% 0%, rgba(41,108,233,0.18), transparent 60%), radial-gradient(ellipse 40% 40% at 20% 0%, rgba(0,157,251,0.12), transparent 60%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 pt-10 pb-16 sm:pt-20 sm:pb-28 lg:pt-24 lg:pb-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
          {/* Left: copy */}
          <div className="relative">
            <div>
              <span className="group inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-xs font-medium text-[var(--muted)] shadow-[var(--shadow-sm)] backdrop-blur transition-all duration-300 hover:border-[var(--primary)]/30 hover:bg-white hover:shadow-[0_10px_26px_rgba(41,108,233,0.12)]">
                Built for Africa&apos;s boldest traders.
              </span>
            </div>

            <div>
              <h1 className="h-display mt-5 max-w-[20rem] text-[clamp(2.2rem,10vw,4.5rem)] sm:max-w-2xl">
                <span className="text-[var(--ink)]">Trade smarter.</span>
                <br />
                <span className="gradient-text">Pay less.</span>
                <br />
                <span className="text-[var(--ink)]">Move faster.</span>
              </h1>
            </div>

            <div>
              <p className="body-lead mt-5 max-w-[20rem] sm:max-w-xl">
                Coldpapa is the crypto wallet and trading app made for Africa. Buy, sell, swap, and
                send eleven of the world&apos;s top cryptocurrencies with fees from 0.5% and settlement in
                as little as five minutes.
              </p>
            </div>

            <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center">
              <Button asChild size="lg" className="group w-[calc(100vw-2rem)] max-w-[20rem] sm:w-auto sm:max-w-none">
                <a href="#waitlist">
                  Join the waitlist
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-0.5" aria-hidden="true" />
                </a>
              </Button>
              <Button asChild size="lg" variant="secondary" className="hidden w-[calc(100vw-2rem)] max-w-[20rem] sm:inline-flex sm:w-auto sm:max-w-none">
                <a href="#how">See how it works</a>
              </Button>
            </div>

            <LiveMarketCalculator className="mt-4 max-w-[20rem] sm:hidden" compact />

            <div className="mt-7 hidden max-w-[20rem] flex-wrap items-center gap-x-3 gap-y-2 sm:flex sm:max-w-none">
              {heroBadges.map((b) => (
                <span
                  key={b.text}
                  className="inline-flex items-center gap-1.5 rounded-full border border-[var(--border)] bg-white/80 px-2.5 py-1 text-xs font-medium text-[var(--ink-2)] shadow-[var(--shadow-sm)]"
                >
                  <span aria-hidden="true">{b.emoji}</span>
                  {b.text}
                </span>
              ))}
            </div>
          </div>

          {/* Right: floating product cluster */}
          <div className="relative hidden sm:block">
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
    <div className="relative mx-auto h-[610px] w-full max-w-[560px] sm:h-[590px]">
      {/* Backdrop card glow */}
      <div
        aria-hidden="true"
        className="absolute inset-x-6 top-10 -z-10 h-[80%] rounded-3xl border border-[var(--border)] bg-white/40 shadow-[0_24px_70px_rgba(41,108,233,0.10)] backdrop-blur"
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

      {/* Live estimate widget */}
      <motion.div
        {...float(0.8, 6)}
        className="absolute right-0 top-[235px] z-20 w-[92%] max-w-[360px] sm:right-2 sm:top-[245px] sm:w-[360px]"
      >
        <LiveMarketCalculator compact />
      </motion.div>

      {/* Portfolio card — bottom left */}
      <motion.div
        {...float(1.4, 8)}
        className="absolute bottom-2 left-0 z-10 w-[42%] max-w-[220px] sm:left-2"
      >
        <PortfolioCard />
      </motion.div>
    </div>
  );
}
