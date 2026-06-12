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
                <div key={idx} className="bg-[#F7F2EA] p-7 rounded-2xl shadow-sm border border-[#B8933F]/20">
                  <h3 className="text-[1.05rem] text-[#1C1814] mb-3 font-medium" style={{ fontFamily: 'var(--font-display)' }}>
                    {pkg.name}
                  </h3>
                  <div className="text-[2.2rem] font-bold text-[#1E4D3A] mb-2" style={{ fontFamily: 'var(--font-display)' }}>
                    {pkg.price}
                  </div>
                  <p className="text-sm text-[#6B635A]">
                    {pkg.perSession}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Comparison */}
          <div>
            <h3 className="text-[1.1rem] text-[#1C1814] mb-6 font-semibold" style={{ fontFamily: 'var(--font-display)' }}>
              Comparison — clinic vs. home
            </h3>
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 overflow-hidden">
              <div className="grid grid-cols-[2fr_1fr_1fr] bg-[#1E4D3A] text-white px-6 py-4 rounded-t-xl">
                <span className="font-semibold text-sm uppercase tracking-wider">Service</span>
                <span className="font-semibold text-sm uppercase tracking-wider text-center">Clinic Price</span>
                <span className="font-semibold text-sm uppercase tracking-wider text-center">Home Price</span>
              </div>
              <div className="divide-y divide-gray-100">
                {comparison.map((item, idx) => (
                  <div key={idx} className="grid grid-cols-[2fr_1fr_1fr] px-6 py-5 items-center">
                    <span className="text-[#6B635A] text-base">{item.service}</span>
                    <span className="text-[#1C1814] font-medium text-base text-center">{item.clinicPrice}</span>
                    <span className="text-[#1C1814] font-medium text-base text-center">{item.homePrice}</span>
                  </div>
                ))}
              </div>
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
