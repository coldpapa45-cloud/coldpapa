"use client";

import { useEffect, useMemo, useState } from "react";
import { Calculator, RefreshCw } from "lucide-react";
import { sampleMarket, type Ticker } from "@/lib/data";
import type { MarketSnapshot } from "@/lib/market";
import { cn, formatPct, formatUsd } from "@/lib/utils";
import { AssetGlyph } from "./AssetGlyph";

const refreshMs = 60_000;

type LoadState = "idle" | "loading" | "ready" | "error";

export function LiveMarketCalculator({
  className,
  compact = false,
}: {
  className?: string;
  compact?: boolean;
}) {
  const [assets, setAssets] = useState<Ticker[]>(sampleMarket);
  const [source, setSource] = useState<MarketSnapshot["source"]>("sample");
  const [updatedAt, setUpdatedAt] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadState>("idle");
  const [selectedSymbol, setSelectedSymbol] = useState("BTC");
  const [usdAmount, setUsdAmount] = useState("250");

  useEffect(() => {
    let active = true;

    async function loadMarket() {
      setStatus((current) => (current === "idle" ? "loading" : current));

      try {
        const response = await fetch("/api/market-prices");

        if (!response.ok) {
          throw new Error("Market request failed.");
        }

        const snapshot = (await response.json()) as MarketSnapshot;

        if (!active) {
          return;
        }

        setAssets(snapshot.assets.length ? snapshot.assets : sampleMarket);
        setSource(snapshot.source);
        setUpdatedAt(snapshot.updatedAt);
        setStatus("ready");
      } catch {
        if (!active) {
          return;
        }

        setAssets(sampleMarket);
        setSource("sample");
        setUpdatedAt(new Date().toISOString());
        setStatus("error");
      }
    }

    void loadMarket();
    const interval = window.setInterval(loadMarket, refreshMs);

    return () => {
      active = false;
      window.clearInterval(interval);
    };
  }, []);

  const selectedAsset = useMemo(
    () => assets.find((asset) => asset.symbol === selectedSymbol) ?? assets[0] ?? sampleMarket[0],
    [assets, selectedSymbol],
  );
  const parsedUsd = Number(usdAmount);
  const estimatedAmount =
    Number.isFinite(parsedUsd) && parsedUsd > 0 && selectedAsset.price > 0
      ? parsedUsd / selectedAsset.price
      : 0;
  const updatedLabel = updatedAt
    ? new Intl.DateTimeFormat("en-US", {
        hour: "numeric",
        minute: "2-digit",
      }).format(new Date(updatedAt))
    : "loading";
  const sourceLabel = source === "coincap" ? "CoinCap" : "sample fallback";

  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-[var(--border)] bg-white shadow-[var(--shadow-md)]",
        compact ? "p-3" : "p-4",
        className,
      )}
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-xl bg-[var(--primary-soft)] text-[var(--primary)]">
              <Calculator className="size-4" aria-hidden="true" />
            </span>
            <div>
              <h3 className="text-sm font-semibold leading-tight text-[var(--ink)]">Live price estimate</h3>
              <p className={cn("text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]", compact && "sr-only")}>
                {sourceLabel} · refreshed {updatedLabel}
              </p>
            </div>
          </div>
        </div>
        <span
          className={cn(
            "inline-flex items-center gap-1.5 rounded-full px-2 py-1 text-[10px] font-semibold",
            source === "coincap"
              ? "bg-[var(--success-soft)] text-[var(--success)]"
              : "bg-[var(--surface-2)] text-[var(--muted)]",
          )}
        >
          <RefreshCw className={cn("size-3", status === "loading" && "animate-spin")} aria-hidden="true" />
          {source === "coincap" ? "Close to live" : "Preview"}
        </span>
      </div>

      <div className={cn("grid grid-cols-2 gap-2", compact ? "mt-3" : "mt-4")}>
        {assets.slice(0, compact ? 2 : 4).map((asset) => {
          const active = selectedAsset.symbol === asset.symbol;
          const positive = asset.change24h >= 0;

          return (
            <button
              key={asset.symbol}
              type="button"
              onClick={() => setSelectedSymbol(asset.symbol)}
              className={cn(
                "rounded-xl border p-2 text-left transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#2563eb24]",
                active
                  ? "border-[var(--primary)] bg-[var(--primary-soft)]"
                  : "border-[var(--border)] bg-white hover:border-[var(--primary)]/35",
              )}
            >
              <div className="flex items-center gap-2">
                <AssetGlyph symbol={asset.symbol} size={24} />
                <div className="min-w-0">
                  <div className="text-xs font-semibold leading-tight text-[var(--ink)]">{asset.symbol}</div>
                  <div
                    className={cn(
                      "mono-num text-[10px] font-medium leading-tight",
                      positive ? "text-[var(--success)]" : "text-[var(--danger)]",
                    )}
                  >
                    {positive ? "up" : "down"} {formatPct(Math.abs(asset.change24h))}
                  </div>
                </div>
              </div>
              <div className="mono-num mt-1 text-sm font-semibold text-[var(--ink)]">
                {formatUsd(asset.price)}
              </div>
            </button>
          );
        })}
      </div>

      <div className={cn("rounded-xl border border-[var(--border)] bg-[var(--surface-2)] p-3", compact ? "mt-3" : "mt-4")}>
        <label htmlFor="crypto-calculator-usd" className="text-xs font-medium text-[var(--ink-2)]">
          Estimate purchase
        </label>
        <div className="mt-2 flex items-center gap-2">
          <div className="flex h-11 shrink-0 items-center rounded-xl border border-[var(--border)] bg-white px-3 text-sm font-semibold text-[var(--ink)]">
            USD
          </div>
          <input
            id="crypto-calculator-usd"
            type="number"
            min="0"
            step="10"
            inputMode="decimal"
            value={usdAmount}
            onChange={(event) => setUsdAmount(event.target.value)}
            className="h-11 min-w-0 flex-1 rounded-xl border border-[var(--border)] bg-white px-3.5 mono-num text-sm text-[var(--ink)] focus:border-[var(--primary)] focus:outline-none focus:ring-4 focus:ring-[#2563eb24]"
          />
        </div>
        <div className="mt-3 flex items-end justify-between gap-3">
          <div>
            <div className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">
              Estimated amount
            </div>
            <div className="mono-num text-lg font-semibold text-[var(--ink)]">
              {estimatedAmount.toLocaleString("en-US", {
                maximumFractionDigits: selectedAsset.symbol === "USDC" ? 2 : 6,
              })}{" "}
              {selectedAsset.symbol}
            </div>
          </div>
          <div className="text-right text-[10px] leading-snug text-[var(--muted)]">
            Estimate only.
            <br />
            Execution price may differ.
          </div>
        </div>
      </div>

      {status === "error" && (
        <p className="mt-3 text-xs font-medium text-[var(--danger)]">
          Live market data is temporarily unavailable. Showing preview prices.
        </p>
      )}
    </div>
  );
}
