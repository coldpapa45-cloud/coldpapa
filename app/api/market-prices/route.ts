import { NextResponse } from "next/server";
import { fetchCoinCapMarket } from "@/lib/market";

export const runtime = "nodejs";
export const revalidate = 45;

export async function GET() {
  const snapshot = await fetchCoinCapMarket();

  return NextResponse.json(snapshot, {
    headers: {
      "Cache-Control": "public, s-maxage=45, stale-while-revalidate=120",
    },
  });
}
