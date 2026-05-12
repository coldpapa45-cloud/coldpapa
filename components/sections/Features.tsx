"use client";

import {
  Wallet,
  Building2,
  ArrowLeftRight,
  Send,
  Activity,
  BookOpen,
  ChartCandlestick,
  KeyRound,
} from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { Sparkline } from "@/components/product/Sparkline";
import { sampleMarket } from "@/lib/data";

const demoSpark = [48, 52, 50, 55, 53, 57, 60, 58, 62, 65, 63, 68];
const marketSpark = [62, 64, 63, 65, 67, 66, 68, 70, 69, 71, 70, 74];

const cards = [
  {
    id: "wallet",
    col: "lg:col-span-2",
    icon: Wallet,
    color: "#2563eb",
    colorSoft: "rgba(37,99,235,0.09)",
    label: "Multi-asset wallet",
    body: "Hold Bitcoin, Ethereum, USDT, USDC, Solana, BNB, Dogecoin, stETH, TRON, Cardano, and Chainlink in one place. Track every coin in real time.",
  },
  {
    id: "market",
    col: "lg:col-span-1",
    icon: Activity,
    color: "#0891b2",
    colorSoft: "rgba(8,145,178,0.09)",
    label: "Real-time market data",
    body: "Live prices, trends, and your watchlist on the Markets tab. Make decisions based on what is happening right now.",
  },
  {
    id: "buy",
    col: "lg:col-span-1",
    icon: Building2,
    color: "#059669",
    colorSoft: "rgba(5,150,105,0.09)",
    label: "Buy crypto your way",
    body: "Pay with a debit card, bank transfer, or mobile money — from $1 to $20,000 per transaction.",
  },
  {
    id: "convert",
    col: "lg:col-span-1",
    icon: ArrowLeftRight,
    color: "#7c3aed",
    colorSoft: "rgba(124,58,237,0.09)",
    label: "Convert in one tap",
    body: "Swap between any two supported assets with live rates. No order books, no spread games.",
  },
  {
    id: "send",
    col: "lg:col-span-1",
    icon: Send,
    color: "#047857",
    colorSoft: "rgba(4,120,87,0.09)",
    label: "Send and receive",
    body: "Move crypto to anyone, anywhere. Scan a QR code or paste an address and your funds land in seconds.",
  },
  {
    id: "demo",
    col: "lg:col-span-2",
    icon: BookOpen,
    color: "#d97706",
    colorSoft: "rgba(217,119,6,0.09)",
    label: "Demo trading",
    body: "Practice with virtual funds before you commit a kobo. Learn the market flow without real money, then switch to live when you are ready.",
  },
  {
    id: "withdraw",
    col: "lg:col-span-2",
    icon: ChartCandlestick,
    color: "#1d4ed8",
    colorSoft: "rgba(29,78,216,0.09)",
    label: "Withdraw to your bank",
    body: "Cash out straight to UBA, Access Bank, and more. Fiat back in your hands without a middleman — same-day settlement.",
  },
  {
    id: "kyc",
    col: "lg:col-span-2",
    icon: KeyRound,
    color: "#6d28d9",
    colorSoft: "rgba(109,40,217,0.09)",
    label: "Transaction PIN and KYC",
    body: "Every payout requires your PIN. Identity verification covers email, government ID, and BVN — so only you can access your funds.",
  },
];

export function Features() {
  return (
    <section id="features" aria-labelledby="features-title" className="relative bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        {/* Section header */}
        <Reveal className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-1 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">
            Features
          </span>
          <h2 id="features-title" className="mt-5 text-3xl font-extrabold leading-tight tracking-tight text-[var(--ink)] sm:text-4xl">
            Everything you need to trade crypto in Africa.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-[var(--muted)]">
            A full toolkit built for the way real people actually move money here.
          </p>
        </Reveal>

        {/* Bento grid */}
        <Reveal className="mt-12 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <article
                key={card.id}
                className={`group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--border)] bg-white p-5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_46px_rgba(37,99,235,0.10)] ${card.col}`}
                style={{ borderTopColor: "transparent" }}
              >
                {/* Colored top accent stripe */}
                <div
                  aria-hidden="true"
                  className="absolute inset-x-0 top-0 h-[3px] rounded-t-2xl transition-opacity duration-300 opacity-70 group-hover:opacity-100"
                  style={{ background: `linear-gradient(90deg, ${card.color}, transparent)` }}
                />

                {/* Icon */}
                <div
                  className="flex size-10 items-center justify-center rounded-xl mt-1 transition-transform duration-300 group-hover:scale-105"
                  style={{ background: card.colorSoft }}
                >
                  <Icon className="size-5" style={{ color: card.color }} aria-hidden="true" />
                </div>

                {/* Text */}
                <h3 className="mt-4 text-base font-bold leading-tight text-[var(--ink)]">{card.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">{card.body}</p>

                {/* Per-card mini visual */}
                <div className="mt-5">
                  <CardVisual id={card.id} color={card.color} />
                </div>
              </article>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}

function CardVisual({ id, color }: { id: string; color: string }) {
  const surf = "bg-[var(--surface-2)]";
  const border = "border border-[var(--border)]";

  if (id === "wallet") {
    const coins = [
      { symbol: "BTC", color: "#f7931a" },
      { symbol: "ETH", color: "#3c56c1" },
      { symbol: "SOL", color: "#7c3aed" },
      { symbol: "USDC", color: "#2775ca" },
    ];
    const holdings = [
      { symbol: "BTC", val: "$14,210", pct: "+2.41%", pos: true },
      { symbol: "ETH", val: "$6,362", pct: "+0.83%", pos: true },
      { symbol: "SOL", val: "$4,284", pct: "-1.12%", pos: false },
    ];
    return (
      <div className="space-y-2">
        <div className={`flex items-center gap-2 rounded-xl p-2.5 ${surf} ${border}`}>
          {coins.map((c) => (
            <span
              key={c.symbol}
              className="flex size-7 items-center justify-center rounded-full text-[10px] font-bold text-white"
              style={{ background: c.color }}
              aria-label={c.symbol}
            >
              {c.symbol[0]}
            </span>
          ))}
          <span className="ml-auto text-[10px] font-medium text-[var(--muted)]">+7 more</span>
        </div>
        {holdings.map((h) => (
          <div key={h.symbol} className={`flex items-center justify-between rounded-xl px-2.5 py-1.5 ${surf} ${border}`}>
            <span className="text-xs font-semibold text-[var(--ink)]">{h.symbol}</span>
            <span className="font-mono text-xs font-semibold text-[var(--ink)]">{h.val}</span>
            <span className={`font-mono text-[10px] font-semibold ${h.pos ? "text-[var(--success)]" : "text-[var(--danger)]"}`}>{h.pct}</span>
          </div>
        ))}
      </div>
    );
  }

  if (id === "market") {
    return (
      <div className={`rounded-xl p-2.5 ${surf} ${border}`}>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs font-bold text-[var(--ink)]">BTC</div>
            <div className="font-mono text-[10px] text-[var(--muted)]">Live · sample</div>
          </div>
          <div className="text-right">
            <div className="font-mono text-xs font-bold text-[var(--ink)]">$68,420</div>
            <div className="font-mono text-[10px] font-semibold text-[var(--success)]">+2.41%</div>
          </div>
        </div>
        <div className="mt-2">
          <Sparkline values={marketSpark} positive width={180} height={32} />
        </div>
      </div>
    );
  }

  if (id === "buy") {
    const methods = ["Card", "Bank transfer", "Mobile money"];
    return (
      <div className="space-y-1.5">
        {methods.map((m) => (
          <div key={m} className={`flex items-center justify-between rounded-xl px-2.5 py-1.5 bg-white ${border}`}>
            <span className="text-[11px] font-medium text-[var(--ink)]">{m}</span>
            <span className="size-1.5 rounded-full bg-[var(--success)]" aria-hidden="true" />
          </div>
        ))}
      </div>
    );
  }

  if (id === "convert") {
    return (
      <div className="flex items-center gap-2">
        <div className={`flex-1 rounded-xl px-2.5 py-2 text-center bg-white ${border}`}>
          <div className="text-[10px] text-[var(--muted)]">From</div>
          <div className="font-mono text-xs font-bold text-[var(--ink)]">BTC</div>
        </div>
        <svg viewBox="0 0 16 16" className="size-4 shrink-0" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M3 8h10M9 4l4 4-4 4" />
        </svg>
        <div className={`flex-1 rounded-xl px-2.5 py-2 text-center bg-white ${border}`}>
          <div className="text-[10px] text-[var(--muted)]">To</div>
          <div className="font-mono text-xs font-bold text-[var(--ink)]">NGN</div>
        </div>
      </div>
    );
  }

  if (id === "send") {
    return (
      <div className="space-y-1.5">
        <div className={`flex items-center gap-2 rounded-xl px-2.5 py-1.5 bg-white ${border}`}>
          <span className="size-1.5 rounded-full" style={{ background: color }} aria-hidden="true" />
          <span className="font-mono text-[11px] text-[var(--ink)]">0x4f…c9a2</span>
          <span className="ml-auto text-[10px] text-[var(--muted)]">QR</span>
        </div>
        <div className="rounded-xl px-2.5 py-1.5 text-center text-[11px] font-bold text-white" style={{ background: color }}>
          Send 0.012 BTC
        </div>
      </div>
    );
  }

  if (id === "demo") {
    return (
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="rounded-full px-2 py-0.5 text-[10px] font-bold" style={{ background: "rgba(217,119,6,0.10)", color: "#d97706" }}>
            Demo mode
          </span>
          <span className="font-mono text-[10px] text-[var(--muted)]">Virtual funds · $10,000</span>
        </div>
        <div className={`rounded-xl p-2.5 ${surf} ${border}`}>
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[var(--ink)]">BTC/USD</span>
            <span className="font-mono text-[10px] font-semibold text-[var(--success)]">+2.41%</span>
          </div>
          <div className="mt-1.5">
            <Sparkline values={demoSpark} positive width={260} height={36} />
          </div>
        </div>
      </div>
    );
  }

  if (id === "withdraw") {
    const banks = [
      { name: "UBA", color: "#ef4444" },
      { name: "Access", color: "#1d4ed8" },
      { name: "GTB", color: "#f59e0b" },
    ];
    return (
      <div className="flex items-center gap-2">
        {banks.map((b) => (
          <div key={b.name} className={`flex flex-1 flex-col items-center rounded-xl py-2 bg-white ${border}`}>
            <span className="size-6 rounded-full text-[9px] font-bold text-white flex items-center justify-center" style={{ background: b.color }}>
              {b.name[0]}
            </span>
            <span className="mt-1 text-[10px] text-[var(--muted)]">{b.name}</span>
          </div>
        ))}
        <div className={`flex flex-1 flex-col items-center rounded-xl py-2 ${surf} ${border}`}>
          <span className="text-sm font-bold text-[var(--muted)]">+</span>
          <span className="mt-1 text-[10px] text-[var(--muted)]">more</span>
        </div>
      </div>
    );
  }

  if (id === "kyc") {
    const steps = [
      { step: "01", label: "Email", done: true },
      { step: "02", label: "Gov ID", done: true },
      { step: "03", label: "BVN", done: false },
    ];
    return (
      <div className="flex items-center gap-2">
        {steps.map((s, i) => (
          <div key={s.step} className="flex flex-1 items-center gap-1">
            <div className={`flex-1 rounded-xl p-2 text-center bg-white ${border}`}>
              <div className="text-[9px] font-semibold text-[var(--muted)]">{s.step}</div>
              <div className={`mt-0.5 text-[11px] font-bold ${s.done ? "text-[var(--ink)]" : "text-[var(--muted)]"}`}>{s.label}</div>
              <div className={`mt-1 size-1.5 rounded-full mx-auto ${s.done ? "bg-[var(--success)]" : "bg-[var(--border)]"}`} aria-hidden="true" />
            </div>
            {i < steps.length - 1 && (
              <div className="h-px w-2 shrink-0 bg-[var(--border)]" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    );
  }

  return null;
}
