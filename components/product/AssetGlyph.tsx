import { cn } from "@/lib/utils";

const palette: Record<string, { bg: string; fg: string }> = {
  BTC: { bg: "#FFF1E5", fg: "#F7931A" },
  ETH: { bg: "#EAF0FF", fg: "#3C56C1" },
  SOL: { bg: "#F1ECFF", fg: "#7C3AED" },
  USDC: { bg: "#E8F4FF", fg: "#2775CA" },
  XRP: { bg: "#EEF2F7", fg: "#0F172A" },
};

export function AssetGlyph({ symbol, size = 36, className }: { symbol: string; size?: number; className?: string }) {
  const c = palette[symbol] ?? { bg: "#F3F4F6", fg: "#0A0F1E" };
  const letter = symbol.charAt(0);
  return (
    <div
      className={cn("flex items-center justify-center rounded-full font-semibold", className)}
      style={{ width: size, height: size, background: c.bg, color: c.fg, fontSize: size * 0.42 }}
      aria-hidden="true"
    >
      {letter}
    </div>
  );
}
