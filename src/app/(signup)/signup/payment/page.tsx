"use client";

import { useState, useEffect } from "react";
import { SignupProgress } from "@/components/layout/SignupProgress";
import { CTAButton } from "@/components/shared/CTAButton";
import { getPlanById } from "@/lib/plans";

export default function PaymentPage() {
  const [planName, setPlanName] = useState("");
  const [planPrice, setPlanPrice] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const planId = sessionStorage.getItem("selected_plan") || "stupid-fast";
    const plan = getPlanById(planId);
    if (plan) {
      setPlanName(plan.name);
      setPlanPrice(plan.price_display);
    }
  }, []);

  const handleSubmit = async () => {
    setSubmitting(true);
    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setSubmitting(false);
    setComplete(true);
  };

  if (complete) {
    return (
      <div style={{ viewTransitionName: "signup-content" }}>
        <div className="flex-1 flex flex-col items-center justify-center px-6 py-20 text-center">
          <div className="w-16 h-16 rounded-full bg-teal flex items-center justify-center mb-6">
            <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-4">
            You&apos;re all set.
          </h1>
          <p className="font-body text-dark/70 max-w-md">
            We&apos;ll send you a confirmation email with everything you need to know.
            Welcome to Heaps Better.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ viewTransitionName: "signup-content" }}>
      <SignupProgress currentStep={5} totalSteps={5} />
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-8 text-center">
          You&apos;re almost there
        </h1>

        {/* Order summary */}
        <div className="border-2 border-dark rounded-lg p-6 mb-6">
          <h2 className="font-display font-bold text-lg text-dark mb-4">Order summary</h2>
          <div className="space-y-3 font-body text-sm">
            <div className="flex justify-between">
              <span className="text-dark/60">Plan</span>
              <span className="text-dark font-medium">{planName}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/60">Monthly cost</span>
              <span className="text-dark font-medium">{planPrice}/mo</span>
            </div>
            <div className="flex justify-between">
              <span className="text-dark/60">Setup fee</span>
              <span className="text-teal font-medium">$0</span>
            </div>
            <div className="border-t border-dark/10 pt-3 flex justify-between">
              <span className="text-dark font-medium">First bill</span>
              <span className="text-dark font-bold">{planPrice}</span>
            </div>
          </div>
        </div>

        <p className="text-dark/60 text-xs font-body text-center mb-6">
          No lock-in — cancel anytime. 30-day money-back guarantee.
        </p>

        {/* Mock payment area */}
        <div className="border-2 border-dark/20 rounded-lg p-6 mb-6 bg-white">
          <p className="font-body text-dark/40 text-sm text-center">
            Payment form placeholder — Windcave integration at go-live
          </p>
        </div>

        <CTAButton
          variant="primary"
          size="lg"
          onClick={handleSubmit}
          disabled={submitting}
          fullWidth
        >
          {submitting ? "Processing..." : "Start my broadband"}
        </CTAButton>
      </div>
    </div>
  );
}
