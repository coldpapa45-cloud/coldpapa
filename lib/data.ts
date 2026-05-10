import type { LucideIcon } from "lucide-react";
import {
  Activity,
  ArrowLeftRight,
  BookOpen,
  Building2,
  ChartCandlestick,
  KeyRound,
  Lock,
  Send,
  ShieldCheck,
  Smartphone,
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
  { icon: Zap, label: "Fees from 0.5%", detail: "Keep more of every trade" },
  { icon: Activity, label: "Settle in 5 minutes", detail: "Card and mobile money" },
  { icon: ChartCandlestick, label: "Spot, P2P and Demo", detail: "Three modes, one app" },
  { icon: ShieldCheck, label: "PIN-protected and KYC", detail: "3-step identity verification" },
];

export type Feature = {
  icon: LucideIcon;
  title: string;
  body: string;
  accent: "blue" | "cyan" | "violet" | "emerald" | "orange";
};

export const features: Feature[] = [
  {
    icon: Wallet,
    title: "Multi-asset wallet",
    body: "Hold Bitcoin, Ethereum, USDT, USDC, Solana, BNB, Dogecoin, stETH, TRON, Cardano, and Chainlink in one place. Track every coin and every move in real time.",
    accent: "blue",
  },
  {
    icon: Building2,
    title: "Buy crypto your way",
    body: "Pay with a debit or credit card, bank transfer, mobile money, or your existing wallet balance. Pick what works fastest for you, from $1 to $20,000 per transaction.",
    accent: "cyan",
  },
  {
    icon: ArrowLeftRight,
    title: "Convert in one tap",
    body: "Swap between any two supported assets with live rates. No order books, no spread games. Just a clean rate and a confirm button.",
    accent: "violet",
  },
  {
    icon: Send,
    title: "Send and receive",
    body: "Move crypto to anyone, anywhere. Scan a QR code or paste an address and your funds land in seconds.",
    accent: "emerald",
  },
  {
    icon: Activity,
    title: "Real-time market data",
    body: "Live prices, trends, and your watchlist on the Markets tab. Make decisions based on what is happening right now.",
    accent: "blue",
  },
  {
    icon: BookOpen,
    title: "Demo trading",
    body: "Practice with virtual funds before you commit a kobo. Learn the market flow without using real money, then move to live trading when you are ready.",
    accent: "orange",
  },
  {
    icon: ChartCandlestick,
    title: "Withdraw to your bank",
    body: "Cash out straight to a linked Nigerian bank account. UBA, Access Bank, and more. Fiat back in your hands without a middleman.",
    accent: "cyan",
  },
  {
    icon: KeyRound,
    title: "Transaction PIN and KYC",
    body: "Every payout requires your PIN. Identity verification covers email, government ID, and BVN so the only person spending your money is you.",
    accent: "emerald",
  },
];

export type Step = {
  title: string;
  body: string;
};

export const howItWorks: Step[] = [
  {
    title: "Create your account",
    body: "Email and a strong password. That is it to get started.",
  },
  {
    title: "Verify your identity",
    body: "Three short steps: confirm your email, upload a government ID, and add your BVN and address. Most users are cleared within 24 hours.",
  },
  {
    title: "Set your transaction PIN",
    body: "A six-digit PIN that locks every withdrawal and trade. Even if someone gets your phone, they cannot get your money.",
  },
  {
    title: "Fund your wallet",
    body: "Link a bank account, drop in via card or mobile money, or send crypto from another wallet. From $1 to $20,000, your choice.",
  },
  {
    title: "Trade, swap, send, or save",
    body: "Use Spot, P2P, or Demo. Convert in a tap. Send to anyone. Or just hold and watch your portfolio grow.",
  },
];

export type FAQ = {
  q: string;
  a: string;
};

export const faqs: FAQ[] = [
  {
    q: "How long does it take to get verified?",
    a: "Email verification is instant. Most users complete identity verification within 24 hours of submitting their ID and BVN.",
  },
  {
    q: "What are the fees?",
    a: "From 0.5% on wallet transfers up to 2.9% on card payments. The full table is on this page and what you see is what you pay.",
  },
  {
    q: "Which countries can use Coldpapa?",
    a: "190 plus countries. We are strongest in Nigeria, Ghana, and Kenya, with bank and mobile money integrations expanding regularly.",
  },
  {
    q: "Which cryptocurrencies are supported?",
    a: "BTC, ETH, USDT, USDC, SOL, BNB, DOGE, stETH, TRX, ADA, and LINK at launch. New assets are added based on community demand.",
  },
  {
    q: "Is Coldpapa safe?",
    a: "Yes. Every transaction requires your six-digit PIN, all users complete a three-step KYC process, and your data is encrypted end to end.",
  },
  {
    q: "Do I need a BVN?",
    a: "A BVN is required for Nigerian users to comply with local KYC regulations. Users in other countries verify with a government-issued ID and address.",
  },
  {
    q: "What payment methods can I use?",
    a: "Card (debit or credit), bank transfer, mobile money, and wallet balance. Limits range from $1 to $20,000 per transaction depending on the method.",
  },
  {
    q: "Can I practice before risking real money?",
    a: "Yes. Demo Trading gives you virtual funds to practice with real market-style data before you use real money. Switch to live trading when you are ready.",
  },
  {
    q: "What if I forget my PIN or password?",
    a: "Both are recoverable from inside the app. Password reset is via email and PIN reset re-verifies your identity before issuing a new one.",
  },
  {
    q: "How do I contact support?",
    a: "Email support@coldpapa.com or reach us on Instagram and X at @coldpapax.",
  },
];

export const RISK_DISCLAIMER =
  "Crypto assets are volatile and involve risk. Coldpapa does not provide financial advice. Always evaluate your own financial situation before trading.";

export const securityPillars: { icon: LucideIcon; title: string; body: string }[] = [
  {
    icon: Lock,
    title: "Transaction PIN",
    body: "Every withdrawal and trade requires a six-digit code that only you know. A stolen phone does not mean stolen funds.",
  },
  {
    icon: ShieldCheck,
    title: "Three-step identity verification",
    body: "Email, government ID, and BVN aligned with Nigerian KYC requirements. Most users are cleared in under 24 hours.",
  },
  {
    icon: KeyRound,
    title: "Encrypted at rest and in transit",
    body: "Your data is protected from device to server with modern encryption standards and TLS in transit.",
  },
  {
    icon: Smartphone,
    title: "Strong password requirements",
    body: "Minimum 8 characters, mixed case, and numbers required. We will not let you cut corners on your own security.",
  },
  {
    icon: Activity,
    title: "Session controls",
    body: "Review trusted devices, end active sessions, and log out remotely from any device on your account.",
  },
];

export type Stat = {
  value: string;
  label: string;
};

export const statsData: Stat[] = [
  { value: "11", label: "cryptocurrencies supported" },
  { value: "4", label: "fiat currencies" },
  { value: "190+", label: "countries" },
  { value: "0.5%", label: "starting fee" },
  { value: "5 min", label: "average settlement" },
  { value: "24 hr", label: "typical KYC turnaround" },
];

export type FeeRow = {
  method: string;
  fee: string;
  limits: string;
  speed: string;
};

export const feeRows: FeeRow[] = [
  { method: "Wallet balance", fee: "0.5%", limits: "$1 to $10,000", speed: "Instant" },
  { method: "Mobile money", fee: "1.0%", limits: "$5 to $10,000", speed: "5 minutes" },
  { method: "Bank transfer", fee: "1.2%", limits: "$20 to $20,000", speed: "30 minutes" },
  { method: "Card payment", fee: "2.9%", limits: "$10 to $5,000", speed: "5 minutes" },
];

export type ValueProp = {
  eyebrow: string;
  title: string;
  body: string;
};

export const valueProps: ValueProp[] = [
  {
    eyebrow: "Ultra-low fees",
    title: "Keep more of every trade.",
    body: "Pay from 0.5% on wallet transfers and as little as 1.0% on mobile money. No hidden spreads. No withdrawal traps.",
  },
  {
    eyebrow: "Fast execution",
    title: "Your money moves fast.",
    body: "Card payments clear in about 5 minutes. Bank transfers in about 30. Wallet swaps are instant.",
  },
  {
    eyebrow: "Three ways to trade",
    title: "Go live, match peers, or practice.",
    body: "Spot for market orders. P2P to match with real traders. Demo to sharpen your edge without using real funds. One app, three modes.",
  },
];
