export function Comparison() {
  const rows = [
    { feature: "Price (500 Mbps)", hb: "$85/mo", spark: "~$100/mo", oneNz: "~$105/mo" },
    { feature: "Lock-in contract", hb: "No", spark: "12 months", oneNz: "12 months" },
    { feature: "Exit fees", hb: "$0", spark: "$199", oneNz: "$199" },
    { feature: "Change plan online", hb: "Yes", spark: "Limited", oneNz: "Limited" },
    { feature: "Cancel online", hb: "Yes", spark: "No — must call", oneNz: "No — must call" },
    { feature: "Support wait time", hb: "60 seconds", spark: "10+ minutes", oneNz: "10+ minutes" },
    { feature: "Price hikes", hb: "Never", spark: "Annual", oneNz: "Annual" },
  ];

  return (
    <section className="bg-white py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6">
        <h2 className="font-display font-bold text-2xl md:text-4xl text-dark text-center mb-12">
          Why switch?
        </h2>

        {/* Desktop table */}
        <div className="hidden md:block reveal-on-scroll overflow-hidden rounded-lg border-2 border-dark">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left font-display font-bold text-dark p-4 border-b border-dark/10" />
                <th className="font-display font-bold text-dark p-4 bg-golden/30 border-b border-dark/10 text-center">Heaps Better</th>
                <th className="font-display font-bold text-dark/60 p-4 border-b border-dark/10 text-center">Spark</th>
                <th className="font-display font-bold text-dark/60 p-4 border-b border-dark/10 text-center">One NZ</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-light/50" : ""}>
                  <td className="font-body font-medium text-dark p-4 border-r border-dark/10">{row.feature}</td>
                  <td className="font-body text-dark p-4 bg-golden/10 text-center font-medium">{row.hb}</td>
                  <td className="font-body text-dark/60 p-4 text-center">{row.spark}</td>
                  <td className="font-body text-dark/60 p-4 text-center">{row.oneNz}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile cards */}
        <div className="md:hidden space-y-3">
          {rows.map((row, i) => (
            <div key={i} className="reveal-on-scroll border-2 border-dark rounded-lg p-4" style={{ animationDelay: `${i * 60}ms` }}>
              <p className="font-body font-medium text-dark text-sm mb-2">{row.feature}</p>
              <div className="grid grid-cols-3 gap-2 text-sm font-body">
                <div className="bg-golden/20 rounded p-2 text-center">
                  <p className="text-xs text-dark/60">Us</p>
                  <p className="font-medium text-dark">{row.hb}</p>
                </div>
                <div className="bg-light rounded p-2 text-center">
                  <p className="text-xs text-dark/60">Spark</p>
                  <p className="text-dark/60">{row.spark}</p>
                </div>
                <div className="bg-light rounded p-2 text-center">
                  <p className="text-xs text-dark/60">One NZ</p>
                  <p className="text-dark/60">{row.oneNz}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center font-display font-bold text-xl md:text-2xl text-teal mt-10 reveal-on-scroll">
          Switch and save up to $180 a year.
        </p>
      </div>
    </section>
  );
}
