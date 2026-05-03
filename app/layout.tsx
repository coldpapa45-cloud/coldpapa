import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const SITE_TITLE = "Coldpapa | Crypto Trading with Real-Time Market Insight";
const SITE_DESCRIPTION =
  "A modern crypto trading platform for market tracking, portfolio clarity, smart alerts, and secure account controls. Join the waitlist for early access.";

export const metadata: Metadata = {
  metadataBase: new URL("https://coldpapa.example.com"),
  title: {
    default: SITE_TITLE,
    template: "%s · Coldpapa",
  },
  description: SITE_DESCRIPTION,
  applicationName: "Coldpapa",
  keywords: [
    "crypto trading",
    "portfolio tracking",
    "price alerts",
    "real-time market data",
    "cryptocurrency app",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    type: "website",
    url: "/",
    siteName: "Coldpapa",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0a0f1e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
