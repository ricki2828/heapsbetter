"use client";

import { useRouter } from "next/navigation";
import { SignupProgress } from "@/components/layout/SignupProgress";
import { AddressChecker } from "@/components/shared/AddressChecker";
import type { AddressResult } from "@/lib/mock-address-data";

export default function AddressPage() {
  const router = useRouter();

  const handleResult = (result: AddressResult) => {
    if (result.available) {
      // Store result in sessionStorage for next step
      sessionStorage.setItem("address_result", JSON.stringify(result));
      setTimeout(() => router.push("/signup/plan"), 1500);
    }
  };

  return (
    <div style={{ viewTransitionName: "signup-content" }}>
      <SignupProgress currentStep={1} totalSteps={5} />
      <div className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="font-display font-bold text-2xl md:text-4xl text-dark mb-8 text-center">
          Where do you need broadband?
        </h1>
        <AddressChecker variant="signup" onResult={handleResult} />
      </div>
    </div>
  );
}
