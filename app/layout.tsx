import type { Metadata, Viewport } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap"
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap"
});

const SITE_TITLE =
  "Coldpapa Trade Smarter, Pay Less. Crypto for Africa's Boldest Traders.";
const SITE_DESCRIPTION =
  "Buy, sell, swap, and store crypto with ultra-low fees and fast settlement. Spot, P2P, and demo trading built for Africa. Get started in minutes.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coldpapa.com"),
  title: {
    default: SITE_TITLE,
    template: "%s · Coldpapa"
  },
  description: SITE_DESCRIPTION,
  applicationName: "Coldpapa",
  keywords: [
    "crypto trading",
    "Africa crypto app",
    "Nigeria crypto",
    "P2P trading",
    "demo trading",
    "portfolio tracking",
    "NGN crypto",
    "buy Bitcoin Nigeria",
    "cryptocurrency app"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Coldpapa Crypto trading built for Africa.",
    description:
      "Trade smarter, pay less. 11 cryptocurrencies, 4 fiat options, fees from 0.5%, settlement in as little as 5 minutes.",
    type: "website",
    url: "/",
    siteName: "Coldpapa",
    locale: "en_US"
  },
  twitter: {
    card: "summary_large_image",
    title: "Coldpapa Crypto trading built for Africa.",
    description:
      "Trade smarter, pay less. 11 cryptocurrencies, 4 fiat options, fees from 0.5%, settlement in as little as 5 minutes."
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico"
  }
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}
    >
      <body
        className="min-h-full flex flex-col font-[family-name:var(--font-inter)]"
        style={{ background: "#060d1f" }}
      >
        {children}
      </body>
    </html>
  );
}
