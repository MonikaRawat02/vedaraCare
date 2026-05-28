import React from 'react';

const ArthritisPillars = ({
  bgColor = "bg-[#F5F1E8]",
  cardBg = "bg-white",
  label = "THE TREATMENT APPROACH",
  title = "Ayurvedic arthritis treatment has four pillars.",
  description = "Single-pillar approaches — 'just take this anti-inflammatory herb,' 'just do Panchakarma,' 'just rest the joint' — produce limited results because arthritis involves multiple layers requiring integrated treatment. The 3-9 month programme addresses all four pillars consistently.",
  pillars = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase">
            {label}
          </div>
          <h2 className="text-3xl font-medium text-[#1A1A1A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div 
              key={index} 
              className={`${cardBg} p-8 rounded-lg border-t-4 border-[#C9A55A] space-y-4 flex flex-col h-full`}
            >
              <div className="text-4xl text-[#C9A55A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {index + 1}
              </div>
              
              <div className="space-y-4 flex-1">
                <h3 className="text-xl font-sans font-medium text-[#1A1A1A] leading-tight">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#4A4A4A] font-sans leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {description && (
          <div className="max-w-3xl mx-auto text-center pt-4">
            <p className="text-center text-[#6B6B6B] text-base font-sans leading-relaxed">
              {description}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ArthritisPillars;
