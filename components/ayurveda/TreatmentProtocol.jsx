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
            <div key={index} className="relative pl-12">
              {/* Time indicator */}
              <div className="absolute left-0 top-0 flex flex-col items-center">
                <div className="w-10 h-10 rounded-full flex items-center justify-center text-[11px] font-sans font-semibold" 
                     style={{ backgroundColor: 'rgb(250, 246, 239)', color: 'rgb(201, 169, 97)' }}>
                  {phase.time}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-0.5 flex-1 mt-2" style={{ backgroundColor: 'rgb(229, 223, 211)' }}></div>
                )}
              </div>

              {/* Content */}
              <div className="pb-4">
                <h3 className="text-[18px] font-serif font-medium text-[#1A1A1A] mb-3">
                  {phase.title}
                </h3>
                <p className="text-[15px] font-sans leading-[1.7] text-[#4A4A4A]">
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
