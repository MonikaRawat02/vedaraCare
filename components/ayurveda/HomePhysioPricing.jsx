import React from 'react';

const HomePhysioPricing = ({
  bgColor = "bg-[#FFFFFF]",
  label = "TRANSPARENT PRICING",
  title = "What home physiotherapy in Dubai actually costs.",
  description = "",
  perSessionPricing = [],
  packages = [],
  comparison = [],
  note = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.18em] font-semibold text-[#B8933F] uppercase">
            {label}
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#1C1814] leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            {title}
          </h2>
          <p className="text-[#6B635A] text-base max-w-3xl mx-auto mt-6 leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-12">
          {/* Per-session pricing */}
          <div>
            <h3 className="text-[1.1rem] text-[#1C1814] mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Per-session pricing
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <div className="grid grid-cols-[2fr_1fr] bg-[#F7F2EA] px-6 py-4 rounded-t-xl">
                <span className="text-[#6B635A] font-semibold text-sm uppercase tracking-wider">Service</span>
                <span className="text-[#6B635A] font-semibold text-sm uppercase tracking-wider text-right">Price per session</span>
              </div>
              <div className="divide-y divide-gray-100">
                {perSessionPricing.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[2fr_1fr] px-6 py-5 items-center">
                    <span className="text-[#6B635A] text-base">{item.service}</span>
                    <span className="text-[#1E4D3A] font-bold text-base text-right">{item.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Packages */}
          <div>
            <h3 className="text-[1.1rem] text-[#1C1814] mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Packages (discounted per-session rates)
            </h3>
            <div className="grid md:grid-cols-2 gap-6">
              {packages.map((pkg, idx) => (
                <div key={idx} className="bg-[#F7F2EA] rounded-xl p-6 border border-[#B8933F]/20 hover:border-[#B8933F]/50 transition-colors">
                  <div className="text-xs text-[#6B635A] mb-3 leading-snug">{pkg.name}</div>
                  <div className="text-2xl text-[#1E4D3A]" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>{pkg.price}</div>
                  <div className="text-xs text-[#B8933F] font-semibold mt-1">{pkg.perSession}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h3 className="text-[1.1rem] text-[#1C1814] mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Comparison — clinic vs. home
            </h3>
            <div className="rounded-xl border border-black/10 overflow-hidden mb-8">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-[#1E4D3A] text-[#F7F2EA] text-xs uppercase tracking-wide">
                    <th className="text-left px-6 py-3 font-medium">Service</th>
                    <th className="text-right px-6 py-3 font-medium">Clinic Price</th>
                    <th className="text-right px-6 py-3 font-medium">Home Price</th>
                  </tr>
                </thead>
                <tbody>
                  {comparison.map((item, idx) => {
                    const isPremium = item.service.includes('Home premium');
                    if (isPremium) {
                      return (
                        <tr key={idx} className="bg-[#F7F2EA] border-t border-black/10">
                          <td colSpan="2" className="px-6 py-3 text-xs text-[#6B635A]">{item.service}</td>
                          <td className="px-6 py-3 text-right text-xs font-semibold text-[#B8933F]">{item.homePrice}</td>
                        </tr>
                      );
                    }
                    return (
                      <tr key={idx} className="border-t border-black/5">
                        <td className="px-6 py-4 text-[#1C1814]">{item.service}</td>
                        <td className="px-6 py-4 text-right text-[#6B635A]">{item.clinicPrice}</td>
                        <td className="px-6 py-4 text-right font-semibold text-[#1E4D3A]">{item.homePrice}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          <p className="text-sm text-[#6B635A] text-center max-w-3xl mx-auto leading-relaxed mt-12">
            {note}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioPricing;
