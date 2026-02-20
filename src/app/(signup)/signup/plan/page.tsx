"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { LazyMotion, domAnimation } from "motion/react";
import { SignupProgress } from "@/components/layout/SignupProgress";
import { PlanCard } from "@/components/shared/PlanCard";
import { CTAButton } from "@/components/shared/CTAButton";
import { plans } from "@/lib/plans";

export default function PlanPage() {
  const router = useRouter();
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const handleContinue = () => {
    if (!selectedId) return;
    sessionStorage.setItem("selected_plan", selectedId);
    router.push("/signup/details");
  };

  return (
    <div style={{ viewTransitionName: "signup-content" }}>
      <SignupProgress currentStep={2} totalSteps={5} />
      <div className="max-w-[1200px] mx-auto px-6 py-12">
        <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-8 text-center">
          Pick your plan
        </h1>

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

        <div className="flex justify-center mt-8">
          <CTAButton
            variant="primary"
            size="lg"
            onClick={handleContinue}
            disabled={!selectedId}
          >
            Continue
          </CTAButton>
        </div>
      </div>
    </div>
  );
}
