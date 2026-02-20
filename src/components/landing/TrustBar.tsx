export function TrustBar() {
  const badges = [
    "Powered by Chorus fibre",
    "2degrees network partner",
    "No lock-in contracts",
    "60-second support",
  ];

  return (
    <section className="bg-light py-5">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
          {badges.map((badge, i) => (
            <span
              key={badge}
              className={`reveal-on-scroll text-dark/60 text-sm font-body font-medium whitespace-nowrap`}
              style={{ animationDelay: `${i * 80}ms` }}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
