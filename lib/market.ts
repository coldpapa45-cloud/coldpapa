import { sampleMarket, type Ticker } from "@/lib/data";

export type MarketSnapshot = {
  assets: Ticker[];
  source: "coincap" | "sample";
  updatedAt: string;
  stale: boolean;
  message?: string;
};

type CoinCapAsset = {
  id: string;
  symbol: string;
  name: string;
  priceUsd: string;
  changePercent24Hr: string | null;
};

const supportedAssets = [
  { id: "bitcoin", symbol: "BTC" },
  { id: "ethereum", symbol: "ETH" },
  { id: "solana", symbol: "SOL" },
  { id: "usd-coin", symbol: "USDC" },
] as const;

const sparkBySymbol = new Map(sampleMarket.map((asset) => [asset.symbol, asset.spark]));

export function sampleMarketSnapshot(message?: string): MarketSnapshot {
  return {
    assets: sampleMarket,
    source: "sample",
    updatedAt: new Date().toISOString(),
    stale: true,
    message,
  };
}

export async function fetchCoinCapMarket(): Promise<MarketSnapshot> {
  const token = process.env.COINCAP_API_KEY;

  if (!token) {
    return sampleMarketSnapshot("CoinCap is not configured.");
  }

  const ids = supportedAssets.map((asset) => asset.id).join(",");
  const response = await fetch(`https://api.coincap.io/v2/assets?ids=${ids}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    next: { revalidate: 45 },
  });

  if (!response.ok) {
    return sampleMarketSnapshot("CoinCap market data is temporarily unavailable.");
  }

  const payload = (await response.json()) as { data?: CoinCapAsset[]; timestamp?: number };
  const assets = (payload.data ?? [])
    .map((asset) => {
      const price = Number(asset.priceUsd);
      const change24h = Number(asset.changePercent24Hr ?? 0);

      if (!Number.isFinite(price) || !Number.isFinite(change24h)) {
        return null;
      }

      return {
        symbol: asset.symbol,
        name: asset.name,
        price,
        change24h,
        spark: sparkBySymbol.get(asset.symbol) ?? [10, 11, 10, 12, 13, 12, 14, 13],
      };
    })
    .filter((asset): asset is Ticker => asset !== null)
    .sort((a, b) => supportedAssets.findIndex((asset) => asset.symbol === a.symbol) - supportedAssets.findIndex((asset) => asset.symbol === b.symbol));

  if (assets.length === 0) {
    return sampleMarketSnapshot("CoinCap returned no usable market data.");
  }

  return {
    assets,
    source: "coincap",
    updatedAt: payload.timestamp ? new Date(payload.timestamp).toISOString() : new Date().toISOString(),
    stale: false,
  };
}
