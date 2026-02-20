"use client";

import { m as motion } from "motion/react";
import { cn } from "@/lib/utils";
import { CTAButton } from "./CTAButton";
import type { Plan } from "@/lib/plans";

interface PlanCardProps {
  plan: Plan;
  selected?: boolean;
  onSelect: () => void;
  isOther?: boolean;
}

export function PlanCard({ plan, selected, onSelect, isOther }: PlanCardProps) {
  return (
    <motion.div
      layout
      style={{ flex: selected ? 1.3 : isOther ? 0.9 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      whileHover={{ y: -4 }}
      whileTap={{ scale: 0.98 }}
      onClick={onSelect}
      role="radio"
      aria-checked={selected}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      className={cn(
        "relative flex flex-col rounded-lg p-6 cursor-pointer transition-colors",
        plan.recommended
          ? "bg-golden border-2 border-dark"
          : "bg-white border-2 border-dark",
        selected && "border-teal border-3",
        plan.recommended && "md:scale-[1.02]"
      )}
    >
      {plan.recommended && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-dark text-white text-xs font-body font-medium uppercase tracking-wider px-3 py-1 rounded-lg">
          Most popular
        </span>
      )}

      <h3 className="font-display font-bold text-2xl uppercase text-dark">
        {plan.name}
      </h3>

      <p className="font-display font-bold text-5xl text-dark mt-2">
        {plan.speed_down}
        <span className="text-lg font-medium ml-1">Mbps</span>
      </p>

      <p className="font-display font-bold text-4xl text-dark mt-4">
        {plan.price_display}
        <span className="text-base font-medium">/mo</span>
      </p>

      <p className="font-body text-dark/80 mt-3 text-sm">{plan.description}</p>

      <ul className="mt-4 space-y-2 flex-1">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-center gap-2 text-sm font-body text-dark">
            <svg className="w-4 h-4 text-teal flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-6">
        <CTAButton variant="primary" fullWidth>
          Yeah, go on then
        </CTAButton>
      </div>

      <p className="text-center text-xs text-dark/60 font-body mt-2">
        30-day money-back
      </p>
    </motion.div>
  );
}
