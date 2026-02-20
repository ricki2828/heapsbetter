"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { CTAButton } from "./CTAButton";
import { mockQualifyAddress, type AddressResult } from "@/lib/mock-address-data";

interface AddressCheckerProps {
  variant: "hero" | "signup";
  onResult?: (result: AddressResult) => void;
  onUnavailable?: (address: string) => void;
}

export function AddressChecker({ variant, onResult, onUnavailable }: AddressCheckerProps) {
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AddressResult | null>(null);
  const [waitlistEmail, setWaitlistEmail] = useState("");
  const [waitlistSubmitted, setWaitlistSubmitted] = useState(false);

  const handleCheck = async () => {
    if (!address.trim()) return;
    setLoading(true);
    setResult(null);

    try {
      const data = await mockQualifyAddress(address);
      setResult(data);
      if (data.available) {
        onResult?.(data);
      } else {
        onUnavailable?.(address);
      }
    } catch {
      setResult({
        address,
        formatted_address: address,
        available: false,
        technologies: [],
      });
    } finally {
      setLoading(false);
    }
  };

  const handleWaitlist = async () => {
    if (!waitlistEmail.trim()) return;
    setWaitlistSubmitted(true);
  };

  const isCompact = variant === "hero";

  return (
    <div
      className={`w-full ${isCompact ? "max-w-lg" : "max-w-xl"}`}
      role="search"
      aria-label="Check broadband availability at your address"
    >
      <div className={`flex gap-2 ${isCompact ? "flex-col sm:flex-row" : "flex-col"}`}>
        <Input
          type="text"
          placeholder="Enter your address"
          value={address}
          onChange={(e) => {
            setAddress(e.target.value);
            setResult(null);
          }}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          autoComplete="street-address"
          disabled={loading}
          className={`flex-1 bg-white border-2 border-dark rounded-lg px-4 py-3 text-base font-body placeholder:text-dark/40 focus:border-teal focus:ring-0 ${
            result
              ? result.available
                ? "border-teal"
                : "border-red"
              : ""
          }`}
        />
        <CTAButton
          variant="primary"
          onClick={handleCheck}
          disabled={loading || !address.trim()}
          className={isCompact ? "sm:w-auto" : ""}
          fullWidth={!isCompact}
        >
          {loading ? (
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
          ) : (
            "Check availability"
          )}
        </CTAButton>
      </div>

      {/* Results */}
      {result && (
        <div className="mt-4" aria-live="polite">
          {result.available ? (
            <div className="flex items-center gap-3">
              {/* Connecting line SVG */}
              <svg className="w-full max-w-xs h-8" viewBox="0 0 200 30" aria-hidden="true">
                <circle cx="15" cy="15" r="6" fill="#2EC4B6" className="animate-pulse" />
                <line x1="21" y1="15" x2="179" y2="15" stroke="#2EC4B6" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="185" cy="15" r="6" fill="#2EC4B6" className="animate-pulse" />
              </svg>
              <p className="text-dark font-body font-medium text-sm">
                You&apos;re covered. Fibre available at{" "}
                <span className="font-medium">{result.formatted_address}</span>.
              </p>
            </div>
          ) : (
            <div>
              <p className="text-dark font-body font-medium">
                We&apos;re not at your address yet.
              </p>
              {!waitlistSubmitted ? (
                <div className="flex gap-2 mt-3">
                  <Input
                    type="email"
                    placeholder="Your email"
                    value={waitlistEmail}
                    onChange={(e) => setWaitlistEmail(e.target.value)}
                    className="flex-1 bg-white border-2 border-dark rounded-lg px-4 py-2 text-sm font-body"
                  />
                  <CTAButton variant="secondary" size="sm" onClick={handleWaitlist}>
                    Notify me
                  </CTAButton>
                </div>
              ) : (
                <p className="text-teal font-body text-sm mt-2">
                  We&apos;ll let you know when we arrive.
                </p>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
