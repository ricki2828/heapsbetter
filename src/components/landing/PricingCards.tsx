"use client";

import { useState } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { PlanCard } from "@/components/shared/PlanCard";
import { plans } from "@/lib/plans";

export function PricingCards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleSelect = (planId: string) => {
    setSelectedId(planId);
    sessionStorage.setItem("selected_plan", planId);
  };

  return (
    <section id="plans" className="bg-light py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-4 reveal-on-scroll">
          Pick your plan
        </h2>
        <p className="font-body text-dark/60 text-center mb-12 reveal-on-scroll">
          Three plans. No surprises. No contracts.
        </p>

        <LazyMotion features={domAnimation}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6" role="radiogroup" aria-label="Choose a broadband plan">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selected={selectedId === plan.id}
                isOther={selectedId !== null && selectedId !== plan.id}
                onSelect={() => handleSelect(plan.id)}
                ctaHref="/signup/address"
              />
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
