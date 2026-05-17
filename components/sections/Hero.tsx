"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, TrendingUp, Bell, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/Button";

// Sample chart data — illustrative only
const chartPoints = [
  55, 57, 54, 58, 60, 59, 58, 62, 64, 63, 61, 63, 65, 66, 64, 67, 69, 68, 67,
  69, 72, 71, 69, 72, 74, 76, 75, 74, 76, 78, 77, 79, 81, 80, 79, 81, 83, 82,
  81, 83, 85, 84, 86, 88, 86, 88, 90, 89
];

const ASSETS = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: "$68,420",
    change: "+2.41%",
    pos: true,
    color: "#f7931a"
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: "$3,180",
    change: "+0.83%",
    pos: true,
    color: "#627eea"
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: "$142.80",
    change: "+5.12%",
    pos: true,
    color: "#9945ff"
  },
  {
    symbol: "BNB",
    name: "BNB",
    price: "$412.50",
    change: "-1.20%",
    pos: false,
    color: "#f3ba2f"
  }
];

const PORTFOLIO = [
  { symbol: "BTC", pct: 52, color: "#3b82f6" },
  { symbol: "ETH", pct: 24, color: "#8b5cf6" },
  { symbol: "SOL", pct: 14, color: "#06b6d4" },
  { symbol: "Other", pct: 10, color: "#334155" }
];

const TRUST_PILLS = [
  { icon: Zap, text: "Settle in 5 min" },
  { icon: Shield, text: "PIN + KYC verified" },
  { icon: TrendingUp, text: "Fees from 0.5%" },
  { icon: Bell, text: "Smart price alerts" }
];

export function Hero() {
  const reduced = useReducedMotion();

  const fade = (delay = 0) =>
    reduced
      ? { initial: {}, animate: {} }
      : {
          initial: { opacity: 0, y: 20 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.6, delay, ease: "easeOut" as const }
        };

  return (
    <section className="relative overflow-hidden bg-[#060d1f] min-h-screen flex flex-col justify-center">
      {/* Deep background glow layers */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/4 rounded-full opacity-30"
          style={{
            background:
              "radial-gradient(ellipse at center, #2563eb 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -left-48 top-1/3 h-[400px] w-[500px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, #7c3aed 0%, transparent 70%)"
          }}
        />
        <div
          className="absolute -right-24 top-1/4 h-[300px] w-[400px] rounded-full opacity-15"
          style={{
            background:
              "radial-gradient(ellipse at center, #0ea5e9 0%, transparent 70%)"
          }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.5) 1px,transparent 1px)",
            backgroundSize: "48px 48px"
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Centered headline section */}
        <div className="mx-auto max-w-3xl pt-16 pb-10 text-center sm:pt-24 sm:pb-14">
          <motion.div {...fade(0)}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs font-medium text-white/60 backdrop-blur-sm">
              <span
                className="size-1.5 rounded-full bg-emerald-400 animate-pulse"
                aria-hidden="true"
              />
              Built for Africa&apos;s boldest traders
            </span>
          </motion.div>

          <motion.h1
            {...fade(0.1)}
            className="mt-6 text-[clamp(2.6rem,7vw,5rem)] font-extrabold leading-[1.05] tracking-tight text-white"
          >
            Trade crypto{" "}
            <span
              className="inline-block bg-clip-text text-transparent"
              style={{
                backgroundImage:
                  "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #38bdf8 100%)"
              }}
            >
              with clarity
            </span>
            <br className="hidden sm:block" /> and control.
          </motion.h1>

          <motion.p
            {...fade(0.2)}
            className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-white/55 sm:text-lg"
          >
            Buy, sell, swap, and send eleven top cryptocurrencies — with fees
            from 0.5% and settlement in as little as five minutes.
          </motion.p>

          <motion.div
            {...fade(0.3)}
            className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center"
          >
            <Button
              asChild
              size="lg"
              className="group w-full max-w-[280px] sm:w-auto bg-blue-600 hover:bg-blue-500 border-transparent text-white shadow-[0_0_32px_rgba(37,99,235,0.5)]"
            >
              <a href="#waitlist">
                Join the waitlist
                <ArrowRight
                  className="size-4 transition-transform duration-200 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="secondary"
              className="w-full max-w-[280px] sm:w-auto border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white backdrop-blur-sm"
            >
              <a href="#how">See how it works</a>
            </Button>
          </motion.div>

          <motion.div
            {...fade(0.4)}
            className="mt-7 flex flex-wrap justify-center gap-x-5 gap-y-2"
          >
            {TRUST_PILLS.map(({ icon: Icon, text }) => (
              <span
                key={text}
                className="flex items-center gap-1.5 text-xs text-white/40"
              >
                <Icon className="size-3.5 text-blue-400" aria-hidden="true" />
                {text}
              </span>
            ))}
          </motion.div>
        </div>

        {/* ------- Dashboard demo removed ------ */}
        {/* Wide dashboard mockup */}
        {/* <motion.div
          initial={reduced ? {} : { opacity: 0, y: 40 }}
          animate={reduced ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: "easeOut" }}
          className="relative pb-0"
        >
          <DashboardMockup reduced={!!reduced} />
        </motion.div> */}
      </div>
    </section>
  );
}

function DashboardMockup({ reduced }: { reduced: boolean }) {
  const float = (delay = 0) =>
    reduced
      ? {}
      : {
          animate: { y: [0, -6, 0] },
          transition: {
            duration: 7 + delay,
            repeat: Infinity,
            ease: "easeInOut" as const,
            delay
          }
        };

  // Build SVG chart path
  const w = 600;
  const h = 120;
  const min = Math.min(...chartPoints);
  const max = Math.max(...chartPoints);
  const range = max - min || 1;
  const stepX = w / (chartPoints.length - 1);
  const pts = chartPoints
    .map((v, i) => {
      const x = i * stepX;
      const y = h - ((v - min) / range) * (h - 16) - 8;
      return `${x.toFixed(1)},${y.toFixed(1)}`;
    })
    .join(" ");
  const lastPt = chartPoints[chartPoints.length - 1];
  const lastY = h - ((lastPt - min) / range) * (h - 16) - 8;

  // Donut chart math
  const cx = 52;
  const cy = 52;
  const r = 38;
  const circ = 2 * Math.PI * r;
  let offset = 0;
  const segments = PORTFOLIO.map((s) => {
    const dash = (s.pct / 100) * circ;
    const seg = { ...s, dashoffset: circ - offset, dash };
    offset += dash;
    return seg;
  });

  return (
    <motion.div
      {...float(0)}
      className="relative mx-auto max-w-5xl"
      style={{ perspective: "1200px" }}
    >
      {/* Outer glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-px rounded-2xl"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.07), 0 40px 100px rgba(37,99,235,0.25), 0 0 60px rgba(37,99,235,0.12)"
        }}
      />

      {/* Dashboard panel */}
      <div
        className="overflow-hidden rounded-2xl border border-white/10"
        style={{
          background:
            "linear-gradient(160deg, #0d1a35 0%, #0a1428 60%, #080f20 100%)"
        }}
      >
        {/* Top bar */}
        <div className="flex items-center justify-between border-b border-white/[0.06] px-5 py-3">
          <div className="flex items-center gap-2">
            <div className="size-2.5 rounded-full bg-red-500/70" />
            <div className="size-2.5 rounded-full bg-yellow-500/70" />
            <div className="size-2.5 rounded-full bg-green-500/70" />
          </div>
          <span className="text-[11px] font-medium text-white/30">
            coldpapa · dashboard · demo
          </span>
          <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
            ● Demo view
          </span>
        </div>

        <div className="grid grid-cols-1 gap-0 lg:grid-cols-[220px_1fr]">
          {/* Left sidebar — portfolio */}
          <div className="border-b border-white/[0.06] p-5 lg:border-b-0 lg:border-r">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              Portfolio
            </p>
            <p className="mt-1 text-2xl font-bold text-white">$26,048</p>
            <p className="mt-0.5 text-xs text-emerald-400">▲ +$612 today</p>

            {/* Donut */}
            <div className="relative mx-auto mt-5 flex size-[104px] items-center justify-center">
              <svg
                viewBox="0 0 104 104"
                className="absolute inset-0 size-full -rotate-90"
                aria-hidden="true"
              >
                {segments.map((s) => (
                  <circle
                    key={s.symbol}
                    cx={cx}
                    cy={cy}
                    r={r}
                    fill="none"
                    stroke={s.color}
                    strokeWidth={14}
                    strokeDasharray={`${s.dash} ${circ - s.dash}`}
                    strokeDashoffset={s.dashoffset}
                    strokeLinecap="butt"
                  />
                ))}
              </svg>
              <div className="text-center">
                <div className="text-[10px] text-white/40">Total</div>
                <div className="text-sm font-bold text-white">4 assets</div>
              </div>
            </div>

            <div className="mt-4 space-y-2">
              {PORTFOLIO.map((s) => (
                <div
                  key={s.symbol}
                  className="flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="size-2 rounded-full"
                      style={{ background: s.color }}
                    />
                    <span className="text-white/60">{s.symbol}</span>
                  </div>
                  <span className="font-semibold text-white/80">{s.pct}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — chart + assets */}
          <div className="flex flex-col">
            {/* Chart area */}
            <div className="p-5 pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded bg-white/5 px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
                      BTC / USD
                    </span>
                    <span className="text-[10px] text-white/25">
                      1D · Sample data
                    </span>
                  </div>
                  <div className="mt-1 flex items-baseline gap-2">
                    <span className="font-mono text-2xl font-bold text-white">
                      $68,420
                    </span>
                    <span className="font-mono text-sm font-semibold text-emerald-400">
                      ▲ 2.41%
                    </span>
                  </div>
                </div>
                <div className="flex gap-1">
                  {["1H", "1D", "1W", "1M", "1Y"].map((p, i) => (
                    <span
                      key={p}
                      className={`rounded px-2 py-1 text-[10px] font-semibold ${
                        i === 1
                          ? "bg-blue-600 text-white"
                          : "text-white/30 hover:text-white/50"
                      }`}
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 overflow-hidden rounded-xl bg-white/[0.03]">
                <svg
                  viewBox={`0 0 ${w} ${h}`}
                  className="w-full"
                  style={{ height: 120 }}
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <defs>
                    <linearGradient id="hero-fill" x1="0" x2="0" y1="0" y2="1">
                      <stop
                        offset="0%"
                        stopColor="#3b82f6"
                        stopOpacity="0.25"
                      />
                      <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                    </linearGradient>
                    <linearGradient
                      id="hero-stroke"
                      x1="0"
                      x2="1"
                      y1="0"
                      y2="0"
                    >
                      <stop offset="0%" stopColor="#60a5fa" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>
                  </defs>
                  {[0.25, 0.5, 0.75].map((p) => (
                    <line
                      key={p}
                      x1="0"
                      x2={w}
                      y1={h * p}
                      y2={h * p}
                      stroke="rgba(255,255,255,0.04)"
                      strokeWidth={1}
                      strokeDasharray="3 6"
                    />
                  ))}
                  <polyline
                    points={`0,${h} ${pts} ${w},${h}`}
                    fill="url(#hero-fill)"
                    stroke="none"
                  />
                  <polyline
                    points={pts}
                    fill="none"
                    stroke="url(#hero-stroke)"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <circle cx={w} cy={lastY} r={3.5} fill="#60a5fa" />
                  <circle
                    cx={w}
                    cy={lastY}
                    r={8}
                    fill="#60a5fa"
                    fillOpacity={0.2}
                  />
                </svg>
              </div>
            </div>

            {/* Asset ticker row */}
            <div className="mt-auto grid grid-cols-2 gap-px border-t border-white/[0.06] sm:grid-cols-4">
              {ASSETS.map((asset) => (
                <div key={asset.symbol} className="p-4">
                  <div className="flex items-center gap-1.5">
                    <span
                      className="size-5 rounded-full text-[9px] font-bold flex items-center justify-center text-white"
                      style={{
                        background: asset.color + "33",
                        color: asset.color
                      }}
                    >
                      {asset.symbol[0]}
                    </span>
                    <span className="text-xs font-semibold text-white/70">
                      {asset.symbol}
                    </span>
                  </div>
                  <div className="mt-1.5 font-mono text-sm font-bold text-white">
                    {asset.price}
                  </div>
                  <div
                    className={`mt-0.5 font-mono text-[11px] font-semibold ${
                      asset.pos ? "text-emerald-400" : "text-red-400"
                    }`}
                  >
                    {asset.change}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating alert card */}
      <motion.div
        {...float(1.2)}
        className="absolute -right-4 top-16 z-10 hidden w-52 overflow-hidden rounded-xl border border-white/10 bg-[#0d1a35]/90 p-3 shadow-2xl backdrop-blur-md sm:block"
      >
        <div className="flex items-center gap-2">
          <span className="flex size-7 items-center justify-center rounded-lg bg-amber-500/15">
            <Bell className="size-3.5 text-amber-400" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[10px] font-semibold text-white">Price Alert</p>
            <p className="text-[10px] text-white/40">BTC crossed $68,000</p>
          </div>
        </div>
        <div className="mt-2 flex items-center justify-between rounded-lg bg-white/[0.04] px-2 py-1.5">
          <span className="font-mono text-xs font-bold text-white">
            $68,420
          </span>
          <span className="font-mono text-[10px] font-semibold text-emerald-400">
            ▲ 2.41%
          </span>
        </div>
      </motion.div>

      {/* Floating order card */}
      <motion.div
        {...float(0.6)}
        className="absolute -left-4 bottom-16 z-10 hidden w-48 overflow-hidden rounded-xl border border-white/10 bg-[#0d1a35]/90 p-3 shadow-2xl backdrop-blur-md sm:block"
      >
        <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
          Buy order
        </p>
        <div className="mt-1.5 flex items-center justify-between">
          <span className="text-xs font-bold text-white">ETH</span>
          <span className="font-mono text-xs font-semibold text-emerald-400">
            Filled ✓
          </span>
        </div>
        <div className="mt-1 font-mono text-xs text-white/50">
          0.0785 ETH · $250.00
        </div>
        <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-white/10">
          <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500" />
        </div>
      </motion.div>

      {/* Bottom fade into page */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-px inset-x-0 h-20 rounded-b-2xl"
        style={{
          background: "linear-gradient(to bottom, transparent, #060d1f)"
        }}
      />
    </motion.div>
  );
}
