import Image from "next/image";
import { cn } from "@/lib/utils";

export function Logo({ className, tone = "light" }: { className?: string; tone?: "light" | "dark" }) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      {tone === "dark" ? (
        <Image
          src="/full-logo-white.svg"
          alt="Coldpapa"
          width={120}
          height={28}
          className="h-5 w-auto"
          priority
        />
      ) : (
        <Image
          src="/logo-full.svg"
          alt="Coldpapa"
          width={120}
          height={28}
          className="h-5 w-auto"
          priority
        />
      )}
    </span>
  );
}
