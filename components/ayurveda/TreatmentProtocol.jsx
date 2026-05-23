import React from 'react';

const TreatmentProtocol = ({
  bgColor = "bg-[#FAF6EF]",
  label = "",
  title = "",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {label}
          </p>
          
          <h2 className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          
          <p className="text-[16px] font-sans text-[#4A4A4A] max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="max-w-[900px] mx-auto space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="flex gap-6 border-l-4 border-[#C8975F] pl-8 py-4">
              <div className="flex-shrink-0">
                <div className="text-[#C8975F] font-semibold text-sm mb-1">
                  {phase.time}
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-[#1A1A1A] mb-2">
                  {phase.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {phase.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-[13px] text-[#6B6B6B] font-sans text-center max-w-2xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocol;
