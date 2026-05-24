import Image from "next/image";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

const screens = [
  {
    src: "/dasboard.png",
    alt: "Coldpapa home screen showing balance, quick actions, and live market prices",
    label: "Home",
  },
  {
    src: "/trade.png",
    alt: "Coldpapa trading screen showing BTC/USDT chart and order book",
    label: "Trade",
  },
  {
    src: "/transactions.png",
    alt: "Coldpapa wallet screen showing assets and recent transactions",
    label: "Wallet",
  },
];

export function AppPreview() {
  return (
    <section
      id="preview"
      aria-labelledby="preview-title"
      className="relative overflow-hidden border-y border-[var(--border)] bg-[var(--surface-2)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 0%, rgba(41,108,233,0.08), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28">
        <Reveal className="max-w-2xl">
          <SectionBadge>App preview</SectionBadge>
          <h2 id="preview-title" className="h-section mt-4">
            A full trading experience in your pocket.
          </h2>
          <p className="body-lead mt-4">
            Manage your balance, place trades, and track every transaction from one clean interface.
          </p>
        </Reveal>

        <Reveal className="mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8 sm:items-start">
            {screens.map((s, i) => (
              <figure key={s.label} className="group flex flex-col items-center">
                <div className="relative w-full overflow-hidden rounded-3xl border border-[var(--border)] shadow-float transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_28px_64px_rgba(41,108,233,0.14)]"
                  style={{ aspectRatio: "9/18" }}
                >
                  <Image
                    src={s.src}
                    alt={s.alt}
                    fill
                    className="object-cover object-top"
                    style={{ inset: "-2px" }}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 33vw, 320px"
                    priority={i === 0}
                  />
                </div>
                <figcaption className="mt-3 text-sm font-medium text-muted">
                  {s.label}
                </figcaption>
              </figure>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
