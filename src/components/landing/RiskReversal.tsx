export function RiskReversal() {
  const cards = [
    {
      title: "No lock-in",
      desc: "Cancel online in 2 minutes. No phone calls. No fees. No guilt trip.",
      icon: (
        <svg className="w-8 h-8 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "30-day money-back",
      desc: "Not happy? Full refund within 30 days. No questions asked.",
      icon: (
        <svg className="w-8 h-8 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Speed guarantee",
      desc: "We guarantee your speed or your money back for that month.",
      icon: (
        <svg className="w-8 h-8 text-golden" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="bg-dark py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <div
              key={card.title}
              className="reveal-on-scroll border-2 border-golden rounded-lg p-6"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="mb-4">{card.icon}</div>
              <h3 className="font-display font-bold text-xl text-light mb-2">{card.title}</h3>
              <p className="font-body text-light/70 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
