import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";
import { AssetGlyph } from "@/components/product/AssetGlyph";

const cryptoAssets = [
  { symbol: "BTC",   name: "Bitcoin" },
  { symbol: "ETH",   name: "Ethereum" },
  { symbol: "USDT",  name: "Tether" },
  { symbol: "USDC",  name: "USD Coin" },
  { symbol: "SOL",   name: "Solana" },
  { symbol: "BNB",   name: "BNB" },
  { symbol: "DOGE",  name: "Dogecoin" },
  { symbol: "stETH", name: "Lido stETH" },
  { symbol: "TRX",   name: "TRON" },
  { symbol: "ADA",   name: "Cardano" },
  { symbol: "LINK",  name: "Chainlink" },
];

const fiatCurrencies = [
  { symbol: "NGN", name: "Nigerian Naira" },
  { symbol: "USD", name: "US Dollar" },
  { symbol: "EUR", name: "Euro" },
  { symbol: "GBP", name: "British Pound" },
];

export function AssetsSupported() {
  return (
    <section id="assets" aria-labelledby="assets-title" className="relative bg-[var(--surface-2)]">
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

        <Reveal className="mt-12">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Crypto</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {cryptoAssets.map((a) => (
              <div
                key={a.symbol}
                className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-3.5 py-3 shadow-[var(--shadow-sm)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:shadow-[0_10px_24px_rgba(41,108,233,0.10)]"
              >
                <AssetGlyph symbol={a.symbol} size={36} />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-[var(--ink)]">{a.symbol}</div>
                  <div className="truncate text-[11px] text-[var(--muted)]">{a.name}</div>
                </div>
              </div>
            ))}
          </div>

          <p className="mb-4 mt-8 text-xs font-semibold uppercase tracking-widest text-[var(--muted)]">Fiat</p>
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {fiatCurrencies.map((f) => (
              <div
                key={f.symbol}
                className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-3.5 py-3 shadow-[var(--shadow-sm)]"
              >
                <AssetGlyph symbol={f.symbol} size={36} />
                <div className="min-w-0">
                  <div className="truncate text-sm font-bold text-[var(--ink)]">{f.symbol}</div>
                  <div className="truncate text-[11px] text-[var(--muted)]">{f.name}</div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
