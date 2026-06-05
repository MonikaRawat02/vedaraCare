import React from 'react';

const PhysiotherapySpecializations = ({
  bgColor = "bg-[#F5F1E8]",
  cardBg = "bg-white",
  label = "SPECIALISED CARE",
  title = "Seven physiotherapy specialisations across Dubai's needs.",
  description = "",
  types = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1440px] mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase">
            {label}
          </div>
          <h2 className="text-3xl font-medium text-[#1A1A1A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[800px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div key={index} className={`${cardBg} p-8 rounded-lg border-t-4 border-[#C9A55A] shadow-sm hover:shadow-md transition-all flex flex-col h-full gap-6`}>
              <div className="text-4xl text-[#C9A55A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {type.number}
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  {type.href ? (
                    <a href={type.href} className="text-xl font-sans font-medium text-[#1A1A1A] mb-1 leading-tight block hover:text-[#C9A55A] transition-colors" dangerouslySetInnerHTML={{ __html: type.title }} />
                  ) : (
                    <h3 className="text-xl font-sans font-medium text-[#1A1A1A] mb-1 leading-tight" dangerouslySetInnerHTML={{ __html: type.title }} />
                  )}
                </div>

                <div 
                  className="text-[14px] text-sm text-[#4A4A4A] font-sans leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: type.description }}
                />

                {type.commonConditions && type.commonConditions.length > 0 && (
                  <div className="pt-4 border-t border-gray-50 mt-auto">
                    <p className="text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: `<strong class="text-[#d4af37]">Common Dubai presentations:</strong> ${type.commonConditions.join(", ")}` }} />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-16 text-center max-w-[900px] mx-auto pt-8">
            <p className="text-[#888888] text-sm font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhysiotherapySpecializations;
