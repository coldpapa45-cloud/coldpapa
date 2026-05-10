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
            "radial-gradient(ellipse 60% 50% at 30% 20%, rgba(41,108,233,0.10), transparent 60%), radial-gradient(ellipse 50% 50% at 80% 100%, rgba(0,157,251,0.10), transparent 60%)",
        }}
      />
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 text-center">
        <Reveal>
          <SectionBadge className="mx-auto">Join the waitlist</SectionBadge>
          <h2 id="cta-title" className="h-section mt-4">
            The market does not wait. Why are you?
          </h2>
          <p className="body-lead mt-4">
            Sign up and get early access. We will let you know as soon as your invite is ready.
          </p>
        </Reveal>

        <Reveal className="mt-10 text-left">
          <WaitlistForm />
        </Reveal>
      </div>
    </section>
  );
}
