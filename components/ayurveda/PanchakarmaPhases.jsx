import React from 'react';

const PanchakarmaPhases = ({
  bgColor = "bg-[#FAF6EF]",
  label = "THE PROTOCOL",
  title = "A Panchakarma programme has three phases. The middle one is what most patients picture. The first and third are what make it work.",
  phases = [],
  subtitle = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1170px] mx-auto">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-normal text-[#1A1A1A] leading-[1.2] max-w-[900px] mx-auto">
            {title}
          </h2>
        </div>

        {/* Phases Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="bg-[#EAE3D5] p-8 md:p-10 rounded-[4px] space-y-8">
              <div className="space-y-4">
                <span className="text-[40px] md:text-[48px] font-serif font-normal text-[#C9A961] leading-none block">
                  {phase.label}
                </span>
                <h3 className="text-[32px] md:text-[38px] font-serif font-normal text-[#1A1A1A] leading-tight">
                  {phase.title}
                </h3>
              </div>

              <div className="space-y-6">
                <div className="space-y-4">
                  {phase.items.slice(0, 2).map((item, i) => (
                    <p key={i} className="text-[15px] leading-[1.6] text-[#4A4A4A] font-sans">
                      {item}
                    </p>
                  ))}
                </div>

                <div className="space-y-3 pt-4">
                  <p className="text-[13px] font-sans font-semibold text-[#C9A961] uppercase tracking-wider">
                    {phase.items[2]}
                  </p>
                  <ul className="space-y-2">
                    {phase.items.slice(3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-[14px] text-[#5A5A5A] font-sans">
                        <span className="w-1 h-1 rounded-full bg-[#C9A961] mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Quote */}
        {subtitle && (
          <div className="text-center max-w-[800px] mx-auto">
            <p className="text-[24px] md:text-[32px] font-serif italic text-[#C9A961] leading-[1.4]">
              {subtitle}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PanchakarmaPhases;
