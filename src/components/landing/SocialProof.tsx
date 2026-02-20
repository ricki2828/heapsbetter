export function SocialProof() {
  const testimonials = [
    { quote: "Switched from Spark last month. Same speed, $30 less. Should've done it ages ago.", name: "Sarah T.", location: "Auckland" },
    { quote: "I called support at 9pm on a Tuesday. A real person answered in 40 seconds. Wild.", name: "James M.", location: "Wellington" },
    { quote: "The whole signup took me 4 minutes. Four minutes. My last provider took 3 phone calls.", name: "Alex K.", location: "Christchurch" },
  ];

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12 reveal-on-scroll">
          What people are saying
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal-on-scroll bg-white border-2 border-dark rounded-lg overflow-hidden"
              data-reveal-delay={`${i * 100}`}
            >
              <div className="h-1 bg-orange" />
              <div className="p-6">
                <p className="font-body text-dark text-sm leading-relaxed mb-4">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <p className="font-body font-medium text-dark text-sm">{t.name}</p>
                <p className="font-body text-dark/60 text-xs">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
