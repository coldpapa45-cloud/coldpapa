import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

const cryptoAssets = [
  { symbol: "BTC", name: "Bitcoin" },
  { symbol: "ETH", name: "Ethereum" },
  { symbol: "USDT", name: "Tether" },
  { symbol: "USDC", name: "USD Coin" },
  { symbol: "SOL", name: "Solana" },
  { symbol: "BNB", name: "BNB" },
  { symbol: "DOGE", name: "Dogecoin" },
  { symbol: "stETH", name: "Lido Staked ETH" },
  { symbol: "TRX", name: "TRON" },
  { symbol: "ADA", name: "Cardano" },
  { symbol: "LINK", name: "Chainlink" },
];

const fiatCurrencies = [
  { symbol: "NGN", name: "Nigerian Naira" },
  { symbol: "USD", name: "US Dollar" },
  { symbol: "EUR", name: "Euro" },
  { symbol: "GBP", name: "British Pound" },
];

const assetColors: Record<string, string> = {
  BTC: "#F7931A",
  ETH: "#3C56C1",
  USDT: "#26A17B",
  USDC: "#2775CA",
  SOL: "#7C3AED",
  BNB: "#F0B90B",
  DOGE: "#C2A633",
  stETH: "#3C56C1",
  TRX: "#CC0000",
  ADA: "#0033AD",
  LINK: "#2A5ADA",
};

export function AssetsSupported() {
  return (
    <section id="assets" aria-labelledby="assets-title" className="relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal className="text-center max-w-2xl mx-auto">
          <SectionBadge className="mx-auto">Supported assets</SectionBadge>
          <h2 id="assets-title" className="h-section mt-4">
            11 of the most-traded coins. 4 currencies you actually use.
          </h2>
          <p className="body-lead mt-4">
            New assets added regularly based on what the community asks for.
          </p>
        </Reveal>

        <Reveal className="mt-10">
          <div className="mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Crypto</div>
          <div className="flex flex-wrap gap-2">
            {cryptoAssets.map((a) => (
              <span
                key={a.symbol}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-3.5 py-2 text-sm font-medium text-[var(--ink)] shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(41,108,233,0.10)]"
              >
                <span
                  aria-hidden="true"
                  className="size-4 rounded-full flex items-center justify-center text-[9px] font-bold text-white shrink-0"
                  style={{ background: assetColors[a.symbol] ?? "#6B7280" }}
                >
                  {a.symbol[0]}
                </span>
                <span>{a.symbol}</span>
                <span className="text-[var(--muted)] text-xs">{a.name}</span>
              </span>
            ))}
          </div>

          <div className="mt-6 mb-3 text-xs font-semibold uppercase tracking-wide text-[var(--muted)]">Fiat</div>
          <div className="flex flex-wrap gap-2">
            {fiatCurrencies.map((f) => (
              <span
                key={f.symbol}
                className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface-2)] px-3.5 py-2 text-sm font-medium text-[var(--ink)] shadow-[var(--shadow-sm)]"
              >
                <span className="font-bold text-[var(--success)]">{f.symbol}</span>
                <span className="text-[var(--muted)] text-xs">{f.name}</span>
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
