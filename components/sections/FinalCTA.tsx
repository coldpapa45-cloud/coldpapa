import { WaitlistForm } from "@/components/forms/WaitlistForm";
import { SectionBadge } from "@/components/ui/SectionBadge";
import { Reveal } from "@/components/ui/Reveal";

export function FinalCTA() {
  return (
    <section
      id="waitlist"
      aria-labelledby="cta-title"
      className="relative overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(37,99,235,0.10), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(6,182,212,0.10), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
        <Reveal>
          <SectionBadge className="mx-auto">Get early access</SectionBadge>
          <h2 id="cta-title" className="h-section mt-4">
            A cleaner way to follow markets and manage your crypto.
          </h2>
          <p className="body-lead mt-4">
            Join the waitlist for early access. We&apos;ll let you know as soon as your invite is ready.
          </p>
        </Reveal>

        <Reveal className="mt-10 text-left">
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
