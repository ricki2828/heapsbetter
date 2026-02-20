import { FAQAccordion } from "@/components/shared/FAQAccordion";

const faqItems = [
  { question: "Is this the same network as Spark?", answer: "Yes. Same Chorus fibre network. We're a wholesale partner of 2degrees, who provide the backbone. Your connection runs on the same infrastructure as Spark, One NZ, and 2degrees." },
  { question: "How long does switching take?", answer: "About a week. You sign up in 3-4 minutes. We handle everything with Chorus and your old provider. Your internet stays on the whole time." },
  { question: "Will I lose my number?", answer: "No. Your number transfers automatically. We handle the porting." },
  { question: "What if the internet is slow?", answer: "We guarantee your plan speed. If you're consistently below it, we'll fix it or refund your month. Run a speed test anytime in your account." },
  { question: "Can I really cancel anytime?", answer: "Yes. Online, in 2 minutes, no phone call needed. No exit fees. No guilt trip. Your service runs until the end of your billing period." },
  { question: "Do I need a new router?", answer: "Probably not. Most routers work fine. If you want a new one, we sell them for $49.99 — no rental trap, it's yours to keep." },
  { question: "What happens if there's an outage?", answer: "We monitor the network 24/7. If there's an outage in your area, we'll push a notification to your phone. Our support team is available in under 60 seconds." },
  { question: "Is there a setup fee?", answer: "No. No setup fee, no activation fee, no hidden charges. The price on the plan card is the price you pay." },
  { question: "Do I need to download an app?", answer: "No download needed. Your account works in any browser. You can save it to your home screen for quick access — no app store required." },
  { question: "Can I change my plan without calling?", answer: "Yes. Change, upgrade, or downgrade your plan instantly from your account. No phone call, no waiting." },
];

export function FAQ() {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[720px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12 reveal-on-scroll">
          Questions? Answers.
        </h2>
        <FAQAccordion items={faqItems} />
      </div>
    </section>
  );
}
