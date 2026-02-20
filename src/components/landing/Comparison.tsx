"use client";

import { useEffect, useRef } from "react";

const rows = [
  { feature: "Price (500 Mbps)", hb: "$85/mo", spark: "~$100/mo", oneNz: "~$105/mo" },
  { feature: "Lock-in contract", hb: "No", spark: "12 months", oneNz: "12 months" },
  { feature: "Exit fees", hb: "$0", spark: "$199", oneNz: "$199" },
  { feature: "Change plan online", hb: "Yes", spark: "Limited", oneNz: "Limited" },
  { feature: "Cancel online", hb: "Yes", spark: "No — must call", oneNz: "No — must call" },
  { feature: "Support wait time", hb: "60 seconds", spark: "10+ minutes", oneNz: "10+ minutes" },
  { feature: "Price hikes", hb: "Never", spark: "Annual", oneNz: "Annual" },
];

export function Comparison() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    let cleanup: (() => void) | undefined;

    import("gsap").then(async ({ gsap }) => {
      const { ScrollTrigger } = await import("gsap/ScrollTrigger");
      gsap.registerPlugin(ScrollTrigger);

      const section = sectionRef.current;
      if (!section) return;

      // "Squeeze vs. Breathe" — HB column expands, competitors compress
      const hbCells = section.querySelectorAll(".col-hb");
      const competitorCells = section.querySelectorAll(".col-competitor");
      const tableRows = section.querySelectorAll(".comparison-row");

      // Rows stagger in
      gsap.from(tableRows, {
        opacity: 0,
        x: -20,
        stagger: 0.08,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      });

      // HB column breathes — scales up
      gsap.from(hbCells, {
        scale: 0.9,
        opacity: 0.5,
        stagger: 0.06,
        duration: 0.6,
        ease: "back.out(1.2)",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      // Competitor columns squeeze — subtle compression
      gsap.from(competitorCells, {
        scaleX: 1.05,
        opacity: 0.3,
        stagger: 0.04,
        duration: 0.5,
        ease: "power2.out",
        scrollTrigger: {
          trigger: section,
          start: "top 65%",
          toggleActions: "play none none none",
        },
      });

      // Savings line punches in
      const savingsLine = section.querySelector(".savings-line");
      if (savingsLine) {
        gsap.from(savingsLine, {
          scale: 0.8,
          opacity: 0,
          duration: 0.8,
          ease: "back.out(1.6)",
          scrollTrigger: {
            trigger: savingsLine,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        });
      }

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    });

    return () => cleanup?.();
  }, []);

  return (
    <section ref={sectionRef} className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12 reveal-on-scroll">
          Why switch?
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block overflow-hidden rounded-lg border-2 border-dark">
          <table className="w-full">
            <thead>
              <tr className="comparison-row">
                <th className="text-left font-display font-bold text-dark p-4 border-b border-dark/10" />
                <th className="col-hb font-display font-bold text-dark p-4 bg-golden/30 border-b border-dark/10 text-center">Heaps Better</th>
                <th className="col-competitor font-display font-bold text-dark/60 p-4 border-b border-dark/10 text-center">Spark</th>
                <th className="col-competitor font-display font-bold text-dark/60 p-4 border-b border-dark/10 text-center">One NZ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={`comparison-row ${i % 2 === 0 ? "bg-light/50" : ""}`}>
                  <td className="font-body font-medium text-dark p-4 border-r border-dark/10">{row.feature}</td>
                  <td className="col-hb font-body text-dark p-4 bg-golden/10 text-center font-medium">{row.hb}</td>
                  <td className="col-competitor font-body text-dark/60 p-4 text-center">{row.spark}</td>
                  <td className="col-competitor font-body text-dark/60 p-4 text-center">{row.oneNz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="reveal-on-scroll border-2 border-dark rounded-lg p-4" data-reveal-delay={`${i * 60}`}>
              <p className="font-body font-medium text-dark text-sm mb-2">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-sm font-body">
                <div className="col-hb bg-golden/20 rounded p-2 text-center">
                  <p className="text-xs text-dark/60">Us</p>
                  <p className="font-medium text-dark">{row.hb}</p>
                </div>
                <div className="col-competitor bg-light rounded p-2 text-center">
                  <p className="text-xs text-dark/60">Spark</p>
                  <p className="text-dark/60">{row.spark}</p>
                </div>
                <div className="col-competitor bg-light rounded p-2 text-center">
                  <p className="text-xs text-dark/60">One NZ</p>
                  <p className="text-dark/60">{row.oneNz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="savings-line text-center font-display font-bold text-xl md:text-2xl text-teal mt-10">
          Switch and save up to $180 a year.
        </p>
      </div>
    </section>
  );
}
