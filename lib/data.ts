import type { LucideIcon } from "lucide-react";
import {
  Activity,
  BellRing,
  ChartCandlestick,
  KeyRound,
  LineChart,
  PieChart,
  ShieldCheck,
  Sparkles,
  Wallet,
  Zap,
} from "lucide-react";

export type Ticker = {
  symbol: string;
  name: string;
  price: number;
  change24h: number;
  spark: number[];
};

export const sampleMarket: Ticker[] = [
  {
    symbol: "BTC",
    name: "Bitcoin",
    price: 68420.0,
    change24h: 2.41,
    spark: [62, 64, 63, 65, 67, 66, 68, 70, 69, 71, 70, 72],
  },
  {
    symbol: "ETH",
    name: "Ethereum",
    price: 3180.42,
    change24h: 0.83,
    spark: [29, 30, 32, 31, 33, 32, 33, 34, 33, 32, 33, 34],
  },
  {
    symbol: "SOL",
    name: "Solana",
    price: 142.8,
    change24h: -1.12,
    spark: [16, 15, 14, 15, 14, 13, 14, 13, 14, 13, 14, 13],
  },
  {
    symbol: "USDC",
    name: "USD Coin",
    price: 1.0,
    change24h: 0.01,
    spark: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10],
  },
];

export type TrustItem = {
  icon: LucideIcon;
  label: string;
  detail: string;
};

export const trustItems: TrustItem[] = [
  { icon: ShieldCheck, label: "Secure account controls", detail: "2FA, device review, session limits" },
  { icon: LineChart, label: "Real-time market views", detail: "Charts, depth, momentum" },
  { icon: BellRing, label: "Smart price alerts", detail: "Set, snooze, route to mobile" },
  { icon: Wallet, label: "Portfolio tracking", detail: "Allocation, P&L, history" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "blue" | "cyan" | "violet" | "emerald";
};

export const features: Feature[] = [
  {
    icon: Activity,
    title: "Real-time market data",
    body: "Live prices, depth, and momentum across major assets, surfaced where decisions get made.",
    accent: "blue",
  },
  {
    icon: PieChart,
    title: "Portfolio tracking",
    body: "See allocation, performance, and history in one calm, uncluttered view.",
    accent: "cyan",
  },
  {
    icon: BellRing,
    title: "Smart price alerts",
    body: "Set thresholds for price, change, or volume — and get a clean notification, not a flood.",
    accent: "violet",
  },
  {
    icon: Zap,
    title: "Fast trading experience",
    body: "Designed for low-friction execution: a precise order ticket, no clutter, no surprises.",
    accent: "emerald",
  },
  {
    icon: ChartCandlestick,
    title: "Advanced charting",
    body: "Candlesticks, indicators, and drawing tools when you need them — out of the way when you don't.",
    accent: "blue",
  },
  {
    icon: KeyRound,
    title: "Secure account controls",
    body: "Two-factor authentication, device review, and session controls help you stay in command of access.",
    accent: "cyan",
  },
];

export type Step = {
  title: string;
  body: string;
};

export const howItWorks: Step[] = [
  {
    title: "Create your account",
    body: "Sign up in minutes. Identity and security checks are designed to keep your account yours.",
  },
  {
    title: "Track the assets you care about",
    body: "Add a watchlist, follow markets in real time, and pin the assets that matter to you.",
  },
  {
    title: "Trade or monitor on your terms",
    body: "Use a precise order ticket when you're ready, or stay in observation mode with smart alerts.",
  },
  {
    title: "Manage your portfolio with clarity",
    body: "Allocation, P&L, and history in one calm view — built for real-time decisions, not noise.",
  },
];

export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  {
    q: "Is the Coldpapa app live?",
    a: "Coldpapa is in early access. Joining the waitlist is the fastest way to get notified when new access windows open.",
  },
  {
    q: "Which assets will be supported?",
    a: "Coldpapa is designed to focus on the most-traded crypto assets at launch. The full supported list will be shared during onboarding and launch updates.",
  },
  {
    q: "Is crypto trading risky?",
    a: "Yes. Crypto assets are volatile and trading involves real risk of loss. Coldpapa does not provide financial advice — always evaluate your own financial situation before trading.",
  },
  {
    q: "How are accounts protected?",
    a: "Coldpapa is built with two-factor authentication, device and session review, and account activity controls so you can manage who has access and when.",
  },
  {
    q: "Which countries will be supported?",
    a: "Country availability is being finalized. We'll share supported regions during onboarding and as new access windows open.",
  },
  {
    q: "Will Coldpapa give me trading advice?",
    a: "No. Coldpapa is a tool for tracking markets, managing your portfolio, and acting on price moves. It does not provide financial advice or guaranteed outcomes.",
  },
];

export const RISK_DISCLAIMER =
  "Crypto assets are volatile and involve risk. Coldpapa does not provide financial advice. Always evaluate your own financial situation before trading.";

export const securityPillars: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: ShieldCheck,
    title: "Two-factor authentication",
    body: "Designed to require a second factor on sign-in and sensitive actions, so a password alone isn't enough.",
  },
  {
    icon: KeyRound,
    title: "Encryption in transit and at rest",
    body: "Account data is encrypted in transit with TLS, and built with modern encryption standards at rest.",
  },
  {
    icon: Sparkles,
    title: "Device and session controls",
    body: "Review trusted devices, end active sessions, and stay in control of where your account is signed in.",
  },
];
