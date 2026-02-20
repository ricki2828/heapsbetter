"use client";

interface SignupProgressProps {
  currentStep: number;
  totalSteps: number;
}

const stepLabels = ["Address", "Plan", "Details", "Install", "Payment"];

export function SignupProgress({ currentStep, totalSteps }: SignupProgressProps) {
  const progress = ((currentStep - 1) / (totalSteps - 1)) * 100;

  return (
    <div className="w-full max-w-xl mx-auto px-6 py-4">
      {/* Progress bar */}
      <div className="relative h-1 bg-dark/10 rounded-full mb-3">
        <div
          className="absolute top-0 left-0 h-full bg-teal rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
        {/* Step dots */}
        {Array.from({ length: totalSteps }).map((_, i) => (
          <div
            key={i}
            className={`absolute top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 transition-colors ${
              i + 1 <= currentStep
                ? "bg-teal border-teal"
                : "bg-white border-dark/20"
            }`}
            style={{ left: `${(i / (totalSteps - 1)) * 100}%`, transform: "translate(-50%, -50%)" }}
          />
        ))}
      </div>

      {/* Labels */}
      <div className="flex justify-between">
        {stepLabels.slice(0, totalSteps).map((label, i) => (
          <span
            key={label}
            className={`text-xs font-body ${
              i + 1 <= currentStep ? "text-dark font-medium" : "text-dark/40"
            }`}
          >
            {label}
          </span>
        ))}
      </div>
    </div>
  );
}
