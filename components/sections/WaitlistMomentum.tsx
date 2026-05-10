import { Reveal } from "@/components/ui/Reveal";
import { SectionBadge } from "@/components/ui/SectionBadge";

export function WaitlistMomentum() {
  return (
    <section id="download" aria-labelledby="download-title" className="relative">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 50%, rgba(41,108,233,0.07), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 60%, rgba(0,157,251,0.06), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24">
        <Reveal className="text-center">
          <SectionBadge className="mx-auto">Get the app</SectionBadge>
          <h2 id="download-title" className="h-section mt-4">
            The market doesn&apos;t wait.
          </h2>
          <p className="body-lead mt-4 mx-auto max-w-xl">
            Join the access list and get notified as Coldpapa opens new download windows.
          </p>

          <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href="#waitlist"
              className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-5 py-3.5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:shadow-[0_14px_34px_rgba(41,108,233,0.12)]"
              aria-label="Join the waitlist for Google Play access"
            >
              <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true" fill="currentColor">
                <path d="M3.18 23.75c.34.2.73.25 1.1.14l11.37-11.37L12.5 9.37 3.18 23.75zm16.16-12.06-3.1-1.79-3.4 3.41 3.4 3.4 3.12-1.8a1.75 1.75 0 0 0 0-3.22zM4.09.21C3.73.1 3.33.16 3 .36L12.5 9.87l3.14-3.14L4.1.21zm8.41 9.16L3.1.2A1.75 1.75 0 0 0 3 2.23v19.55c.03.63.38 1.2.92 1.5l9.34-9.33-3.14-3.14-.62.56z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[var(--muted)]">Get notified for</div>
                <div className="text-sm font-semibold text-[var(--ink)]">Google Play</div>
              </div>
            </a>

            <a
              href="#waitlist"
              className="inline-flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-white px-5 py-3.5 shadow-[var(--shadow-sm)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--primary)]/30 hover:shadow-[0_14px_34px_rgba(41,108,233,0.12)]"
              aria-label="Join the waitlist for App Store access"
            >
              <svg viewBox="0 0 24 24" className="size-6 shrink-0" aria-hidden="true" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98l-.09.06c-.22.14-2.18 1.27-2.16 3.8.03 3.02 2.65 4.03 2.68 4.04l-.07.18zM13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-[10px] text-[var(--muted)]">Get notified for</div>
                <div className="text-sm font-semibold text-[var(--ink)]">App Store</div>
              </div>
            </a>
          </div>

          <p className="mt-5 text-xs text-[var(--muted)]">No public store links are published yet.</p>
        </Reveal>
      </div>
    </section>
  );
}
