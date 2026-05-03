import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { Features } from "@/components/sections/Features";
import { AppPreview } from "@/components/sections/AppPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Security } from "@/components/sections/Security";
import { WaitlistMomentum } from "@/components/sections/WaitlistMomentum";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <Features />
        <AppPreview />
        <HowItWorks />
        <Security />
        <WaitlistMomentum />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
