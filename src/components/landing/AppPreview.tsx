export function AppPreview() {
  const features = [
    { icon: "gauge", text: "See your speed in real time" },
    { icon: "card", text: "Pay and manage bills" },
    { icon: "arrows", text: "Change your plan instantly" },
    { icon: "chat", text: "Get help in 60 seconds" },
  ];

  const icons: Record<string, React.ReactNode> = {
    gauge: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" d="M12 2a10 10 0 100 20 10 10 0 000-20z" />
        <path strokeLinecap="round" d="M12 6v6l4 2" />
      </svg>
    ),
    card: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    arrows: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
      </svg>
    ),
    chat: (
      <svg className="w-6 h-6 text-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
      </svg>
    ),
  };

  return (
    <section className="bg-light py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Phone mockup */}
          <div className="reveal-on-scroll md:w-2/5 flex justify-center">
            <div className="w-[240px] md:w-[280px] bg-dark rounded-[24px] p-3 shadow-none">
              <div className="bg-white rounded-[18px] overflow-hidden">
                <div className="bg-teal p-4 text-white">
                  <p className="font-display font-bold text-sm">Heaps Better</p>
                  <p className="font-body text-xs mt-1 opacity-80">Your dashboard</p>
                </div>
                <div className="p-4 space-y-3">
                  <div className="text-center">
                    <p className="font-display font-bold text-3xl text-dark">487</p>
                    <p className="font-body text-xs text-dark/60">Mbps download</p>
                  </div>
                  <div className="h-px bg-dark/10" />
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-dark/60">Plan</span>
                    <span className="text-dark font-medium">Stupid Fast</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-dark/60">Next bill</span>
                    <span className="text-dark font-medium">$85 — 15 Mar</span>
                  </div>
                  <div className="flex justify-between text-xs font-body">
                    <span className="text-dark/60">Status</span>
                    <span className="text-teal font-medium">Connected</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="md:w-3/5">
            <h2 className="font-display font-bold text-2xl md:text-4xl text-dark mb-2 reveal-on-scroll">
              Your account, sorted.
            </h2>
            <p className="font-body text-dark/70 mb-8 reveal-on-scroll">
              Check your speed, pay your bill, change your plan. No phone calls needed.
            </p>

            <div className="space-y-5">
              {features.map((f, i) => (
                <div
                  key={f.text}
                  className="reveal-on-scroll flex items-center gap-4"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-10 h-10 rounded-lg bg-teal/10 flex items-center justify-center flex-shrink-0">
                    {icons[f.icon]}
                  </div>
                  <p className="font-body font-medium text-dark">{f.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
