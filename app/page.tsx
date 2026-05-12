import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { AssetsSupported } from "@/components/sections/AssetsSupported";
import { AppPreview } from "@/components/sections/AppPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Security } from "@/components/sections/Security";
import { BuiltForAfrica } from "@/components/sections/BuiltForAfrica";
import { DemoTrading } from "@/components/sections/DemoTrading";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <Features />
        <AssetsSupported />
        <AppPreview />
        <HowItWorks />
        <Security />
        <BuiltForAfrica />
        <DemoTrading />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
