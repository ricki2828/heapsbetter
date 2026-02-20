import { CTAButton } from "@/components/shared/CTAButton";

export function FinalCTA() {
  return (
    <section className="bg-golden py-16 md:py-24 reveal-on-scroll">
      <div className="max-w-[640px] mx-auto px-6 text-center">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark mb-4">
          Ready to stop overpaying?
        </h2>
        <p className="font-body text-dark/80 mb-8">
          Same fibre. Better deal. No strings attached.
        </p>
        <CTAButton variant="primary" href="/signup/address" size="lg">
          Yeah, go on then
        </CTAButton>
        <p className="text-dark/60 text-sm font-body mt-4">
          No lock-in. Cancel anytime. 30-day money-back guarantee.
        </p>
      </div>
    </section>
  );
}
