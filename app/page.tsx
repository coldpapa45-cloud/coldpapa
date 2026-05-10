import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/sections/AnnouncementBar";
import { Hero } from "@/components/sections/Hero";
import { TrustBar } from "@/components/sections/TrustBar";
import { ValueProps } from "@/components/sections/ValueProps";
import { Features } from "@/components/sections/Features";
import { AssetsSupported } from "@/components/sections/AssetsSupported";
import { AppPreview } from "@/components/sections/AppPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { FeesTable } from "@/components/sections/FeesTable";
import { Security } from "@/components/sections/Security";
import { BuiltForAfrica } from "@/components/sections/BuiltForAfrica";
import { DemoTrading } from "@/components/sections/DemoTrading";
import { FAQ } from "@/components/sections/FAQ";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustBar />
        <ValueProps />
        <Features />
        <AssetsSupported />
        <AppPreview />
        <HowItWorks />
        <FeesTable />
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
