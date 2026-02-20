import { Hero } from "@/components/landing/Hero";
import { TrustBar } from "@/components/landing/TrustBar";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { PricingCards } from "@/components/landing/PricingCards";
import { Comparison } from "@/components/landing/Comparison";
import { AppPreview } from "@/components/landing/AppPreview";
import { RiskReversal } from "@/components/landing/RiskReversal";
import { SocialProof } from "@/components/landing/SocialProof";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <section id="how-it-works">
        <HowItWorks />
      </section>
      <section id="plans">
        <PricingCards />
      </section>
      <Comparison />
      <AppPreview />
      <RiskReversal />
      <SocialProof />
      <section id="faq">
        <FAQ />
      </section>
      <FinalCTA />
      <Footer />
    </>
  );
}
