import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  src?: string;
  alt: string;
  fallback: React.ReactNode;
  className?: string;
};

/**
 * Renders a Figma-exported PNG from /public/app-preview/<file>.png if provided,
 * else falls back to the CSS/SVG mockup.
 *
 * INTEGRATION POINT: drop PNG/WebP exports of the Coldpapa app frames into
 * /public/app-preview/ (e.g. dashboard.png, portfolio.png, alerts.png) and
 * pass `src="/app-preview/dashboard.png"` to use them.
 */
export function PhoneScreen({ src, alt, fallback, className }: Props) {
  if (src) {
    return (
      <div className={cn("relative h-full w-full", className)}>
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 80vw, 280px"
          className="object-cover"
        />
      </div>
    );
  }
  return <div className={cn("h-full w-full bg-[var(--bg)]", className)}>{fallback}</div>;
}
