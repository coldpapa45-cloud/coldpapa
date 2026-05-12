import { cn } from "@/lib/utils";

const palette: Record<string, { bg: string; fg: string }> = {
  BTC:   { bg: "#FFF1E5", fg: "#F7931A" },
  ETH:   { bg: "#EAF0FF", fg: "#3C56C1" },
  SOL:   { bg: "#F1ECFF", fg: "#7C3AED" },
  USDC:  { bg: "#E8F4FF", fg: "#2775CA" },
  USDT:  { bg: "#E6F7F2", fg: "#26A17B" },
  BNB:   { bg: "#FDF8E1", fg: "#C99400" },
  DOGE:  { bg: "#FBF6DC", fg: "#C2A633" },
  stETH: { bg: "#EAF0FF", fg: "#3C56C1" },
  TRX:   { bg: "#FFE5E5", fg: "#CC0000" },
  ADA:   { bg: "#E5EEFF", fg: "#0033AD" },
  LINK:  { bg: "#E5EEFF", fg: "#2A5ADA" },
  XRP:   { bg: "#EEF2F7", fg: "#0F172A" },
  NGN:   { bg: "#E6F7EE", fg: "#059669" },
  USD:   { bg: "#E6F7EE", fg: "#059669" },
  EUR:   { bg: "#E6F7EE", fg: "#059669" },
  GBP:   { bg: "#E6F7EE", fg: "#059669" },
};

export function AssetGlyph({ symbol, size = 36, className }: { symbol: string; size?: number; className?: string }) {
  const c = palette[symbol] ?? { bg: "#F3F4F6", fg: "#0A0F1E" };
  const letter = symbol.charAt(0).toUpperCase();
  return (
    <div
      className={cn("flex items-center justify-center rounded-full font-bold shrink-0", className)}
      style={{ width: size, height: size, background: c.bg, color: c.fg, fontSize: size * 0.4 }}
      aria-hidden="true"
    >
      {letter}
    </div>
  );
}
