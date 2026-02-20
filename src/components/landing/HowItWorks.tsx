export function HowItWorks() {
  const steps = [
    { num: 1, title: "Check your address", desc: "See what's available in 10 seconds." },
    { num: 2, title: "Pick your plan", desc: "Three plans. No surprises. No contracts." },
    { num: 3, title: "We handle the switch", desc: "We do the work. You get connected in 3-4 days." },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12">
          How it works
        </h2>

        <div className="relative flex flex-col md:flex-row items-start md:items-center justify-center gap-8 md:gap-12">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-6 left-1/4 right-1/4 h-0.5 bg-teal" aria-hidden="true" />
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-0.5 bg-teal" aria-hidden="true" />

          {steps.map((step, i) => (
            <div
              key={step.num}
              className="reveal-on-scroll relative flex md:flex-col items-start md:items-center gap-4 md:gap-3 flex-1 md:text-center z-10"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-dark text-white flex items-center justify-center font-display font-bold text-lg flex-shrink-0">
                {step.num}
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-dark">{step.title}</h3>
                <p className="font-body text-dark/70 text-sm mt-1">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
