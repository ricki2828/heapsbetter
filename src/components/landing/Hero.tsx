"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { AddressChecker } from "@/components/shared/AddressChecker";
import { CTAButton } from "@/components/shared/CTAButton";
import type { AddressResult } from "@/lib/mock-address-data";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline();

      // Bandwidth Breath — container scales up
      tl.from(containerRef.current, {
        scale: 0.92,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Headline letter-spacing expands
      tl.from(
        ".hero-headline",
        {
          letterSpacing: "-0.05em",
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        0.1
      );

      // Subheadline fades up
      tl.from(
        ".hero-sub",
        {
          y: 20,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.4
      );

      // Address checker and CTA fade up
      tl.from(
        ".hero-actions",
        {
          y: 30,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        0.6
      );

      // Brand stripe draws in left-to-right
      tl.from(
        ".brand-stripe-segment",
        {
          scaleX: 0,
          transformOrigin: "left",
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
        },
        0.4
      );

      // Floating circles drift in
      tl.from(
        ".hero-circle",
        {
          scale: 0,
          opacity: 0,
          duration: 1.2,
          stagger: 0.15,
          ease: "back.out(1.4)",
        },
        0.3
      );
    });
  }, []);

  const handleAddressResult = (result: AddressResult) => {
    if (result.available) {
      sessionStorage.setItem("address_result", JSON.stringify(result));
      setTimeout(() => router.push("/signup/plan"), 1200);
    }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-golden overflow-hidden">
      {/* Floating circles */}
      <div
        className="hero-circle absolute top-20 right-10 w-[200px] h-[200px] rounded-full bg-teal/15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hero-circle absolute bottom-32 left-8 w-[150px] h-[150px] rounded-full bg-orange/15 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="hero-circle absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-teal/10 pointer-events-none hidden md:block"
        aria-hidden="true"
      />

      <div
        ref={containerRef}
        className="relative z-10 max-w-[720px] mx-auto px-6 text-center flex flex-col items-center gap-6 pt-24 pb-16 md:pt-28 md:pb-20"
      >
        <h1 className="hero-headline font-display font-bold text-[32px] md:text-[48px] leading-[1.0] text-dark tracking-tight">
          It&apos;s Broadband. Calm Down.
        </h1>

        <p className="hero-sub font-body text-dark/90 text-base md:text-xl max-w-[600px] leading-relaxed">
          Fibre broadband that costs less, does the same thing, and if you call
          us a real person answers. We know. Groundbreaking.
        </p>

        <div className="hero-actions flex flex-col items-center gap-5 w-full">
          <CTAButton variant="primary" href="/signup/address" size="lg">
            Yeah, go on then
          </CTAButton>

          <div className="w-full max-w-lg">
            <p className="font-body text-dark/50 text-xs mb-2 uppercase tracking-wider">
              Or check your address first
            </p>
            <AddressChecker variant="hero" onResult={handleAddressResult} />
          </div>
        </div>

        <p className="text-dark/60 text-sm font-body mt-2">
          No lock-in. No exit fees. 30-day money-back guarantee.
        </p>
      </div>

      {/* Brand stripe — visible colors on golden bg */}
      <div
        className="absolute bottom-0 left-0 right-0 flex"
        style={{ height: 8 }}
      >
        <div className="brand-stripe-segment flex-1 bg-dark" />
        <div className="brand-stripe-segment flex-1 bg-orange" />
        <div className="brand-stripe-segment flex-1 bg-teal" />
        <div className="brand-stripe-segment flex-1 bg-red" />
      </div>
    </section>
  );
}
