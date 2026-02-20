"use client";

import { useEffect, useRef } from "react";
import { AddressChecker } from "@/components/shared/AddressChecker";
import { MultiColorStripe } from "@/components/shared/MultiColorStripe";

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    import("gsap").then(({ gsap }) => {
      const tl = gsap.timeline();
      tl.from(".hero-headline", {
        letterSpacing: "-0.02em",
        duration: 0.8,
        ease: "power2.out",
      })
        .from(
          containerRef.current,
          {
            scale: 0.95,
            duration: 0.8,
            ease: "power2.out",
          },
          0
        )
        .from(
          ".brand-stripe-segment",
          {
            scaleX: 0,
            transformOrigin: "left",
            duration: 0.6,
            stagger: 0.1,
            ease: "power2.out",
          },
          0.3
        );
    });
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-golden overflow-hidden">
      {/* Floating circles */}
      <div className="absolute top-20 right-10 w-[200px] h-[200px] rounded-full bg-teal opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-32 left-8 w-[150px] h-[150px] rounded-full bg-orange opacity-15 pointer-events-none" aria-hidden="true" />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] rounded-full bg-teal opacity-10 pointer-events-none hidden md:block" aria-hidden="true" />

      <div ref={containerRef} className="relative z-10 max-w-[720px] mx-auto px-6 text-center flex flex-col items-center gap-8 py-20">
        <h1 className="hero-headline font-display font-bold text-[32px] md:text-[48px] leading-[1.0] text-dark">
          It&apos;s Broadband. Calm Down.
        </h1>

        <p className="font-body text-dark text-base md:text-xl max-w-[600px]">
          Fibre broadband that costs less, does the same thing, and if you call us a real person answers. We know. Groundbreaking.
        </p>

        <AddressChecker variant="hero" />

        <p className="text-dark/80 text-sm font-body">
          No lock-in. No exit fees. 30-day money-back guarantee.
        </p>
      </div>

      {/* Brand stripe */}
      <div className="absolute bottom-0 left-0 right-0 flex" style={{ height: 8 }}>
        <div className="brand-stripe-segment flex-1 bg-golden" />
        <div className="brand-stripe-segment flex-1 bg-orange" />
        <div className="brand-stripe-segment flex-1 bg-teal" />
        <div className="brand-stripe-segment flex-1 bg-red" />
      </div>
    </section>
  );
}
