"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { SignupProgress } from "@/components/layout/SignupProgress";
import { CTAButton } from "@/components/shared/CTAButton";

export default function InstallPage() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState("");
  const [timePreference, setTimePreference] = useState<"morning" | "afternoon" | "">("");

  // Generate next 14 available dates (weekdays only)
  const availableDates: string[] = [];
  const start = new Date();
  start.setDate(start.getDate() + 3); // Earliest: 3 days from now
  while (availableDates.length < 14) {
    const day = start.getDay();
    if (day !== 0 && day !== 6) {
      availableDates.push(start.toISOString().split("T")[0]);
    }
    start.setDate(start.getDate() + 1);
  }

  const handleContinue = () => {
    if (!selectedDate || !timePreference) return;
    sessionStorage.setItem("install_booking", JSON.stringify({ date: selectedDate, time: timePreference }));
    router.push("/signup/payment");
  };

  const formatDate = (dateStr: string) => {
    const date = new Date(dateStr + "T00:00:00");
    return date.toLocaleDateString("en-NZ", { weekday: "short", day: "numeric", month: "short" });
  };

  return (
    <div style={{ viewTransitionName: "signup-content" }}>
      <SignupProgress currentStep={4} totalSteps={5} />
      <div className="max-w-md mx-auto px-6 py-12">
        <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-2 text-center">
          When should we set you up?
        </h1>
        <p className="font-body text-dark/60 text-sm text-center mb-8">
          Earliest available: {formatDate(availableDates[0])}
        </p>

        {/* Date grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-2 mb-8">
          {availableDates.slice(0, 12).map((date) => (
            <button
              key={date}
              onClick={() => setSelectedDate(date)}
              className={`py-3 px-2 rounded-lg border-2 text-sm font-body font-medium transition-colors cursor-pointer ${
                selectedDate === date
                  ? "border-teal bg-teal/10 text-dark"
                  : "border-dark/20 text-dark hover:border-dark/40"
              }`}
            >
              {formatDate(date)}
            </button>
          ))}
        </div>

        {/* Time preference */}
        <p className="font-body font-medium text-dark text-sm mb-3">Time preference</p>
        <div className="flex gap-3 mb-8">
          {(["morning", "afternoon"] as const).map((time) => (
            <button
              key={time}
              onClick={() => setTimePreference(time)}
              className={`flex-1 py-3 rounded-lg border-2 font-body font-medium capitalize transition-colors cursor-pointer ${
                timePreference === time
                  ? "border-teal bg-teal/10 text-dark"
                  : "border-dark/20 text-dark hover:border-dark/40"
              }`}
            >
              {time}
            </button>
          ))}
        </div>

        <CTAButton
          variant="primary"
          size="lg"
          onClick={handleContinue}
          disabled={!selectedDate || !timePreference}
          fullWidth
        >
          Continue
        </CTAButton>
      </div>
    </div>
  );
}
