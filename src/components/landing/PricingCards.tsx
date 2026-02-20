"use client";

import { useState } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import { PlanCard } from "@/components/shared/PlanCard";
import { plans } from "@/lib/plans";

export function PricingCards() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12">
          Pick your plan
        </h2>

        <LazyMotion features={domAnimation}>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6" role="radiogroup" aria-label="Choose a broadband plan">
            {plans.map((plan) => (
              <PlanCard
                key={plan.id}
                plan={plan}
                selected={selectedId === plan.id}
                isOther={selectedId !== null && selectedId !== plan.id}
                onSelect={() => setSelectedId(plan.id)}
              />
            ))}
          </div>
        </LazyMotion>
      </div>
    </section>
  );
}
