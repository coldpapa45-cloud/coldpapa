import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Coldpapa — Crypto Trading with Real-Time Market Insight";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          background:
            "linear-gradient(135deg, #0a0f1e 0%, #111a30 60%, #0d1426 100%)",
          color: "white",
          padding: "80px",
          fontFamily: "system-ui, sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            fontSize: 28,
            fontWeight: 600,
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: 12,
              background: "linear-gradient(135deg, #2563eb 0%, #06b6d4 100%)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "white",
              fontSize: 24,
              fontWeight: 700,
            }}
          >
            C
          </div>
          Coldpapa
        </div>

        <div
          style={{
            marginTop: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 24,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              maxWidth: 980,
            }}
          >
            Trade crypto with clarity and control.
          </div>
          <div
            style={{
              fontSize: 28,
              color: "rgba(255,255,255,0.65)",
              maxWidth: 800,
              lineHeight: 1.4,
            }}
          >
            Real-time markets, portfolio clarity, smart alerts, and secure account controls.
          </div>
          <div
            style={{
              display: "flex",
              gap: 16,
              marginTop: 16,
              fontSize: 22,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            <span
              style={{
                padding: "10px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Join the waitlist · Early access
            </span>
          </div>
        </div>

        <div
          style={{
            position: "absolute",
            top: -200,
            right: -200,
            width: 700,
            height: 700,
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(37,99,235,0.4) 0%, rgba(37,99,235,0) 70%)",
          }}
        />
      </div>
    ),
    { ...size },
  );
}
