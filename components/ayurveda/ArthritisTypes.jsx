import React from 'react';

const ArthritisTypes = ({
  bgColor = "bg-[#FAF8F3]",
  cardBg = "bg-white",
  label = "TYPE MATTERS",
  title = "Seven major arthritis types. Each has different Ayurvedic treatment.",
  description = "The single biggest reason Ayurvedic arthritis treatment underperforms is treating all arthritis types identically. At our JVC clinic, identifying your specific type is the foundation of an effective protocol.",
  types = [],
  footer = "Most patients arrive at our JVC clinic with a clear arthritis diagnosis from rheumatology or orthopaedics. For undiagnosed joint pain, we coordinate with conventional diagnostic workup before designing a treatment plan. Effective Ayurvedic treatment requires accurate diagnosis."
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
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[800px] mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div key={index} className={`${cardBg} p-8 rounded-lg border-t-4 border-transparent hover:border-[#C9A55A] shadow-sm hover:shadow-md transition-all flex flex-col h-full gap-6`}>
              <div className="text-4xl text-[#C9A55A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                {type.number || String.fromCharCode(65 + index)}
              </div>
              
              <div className="space-y-4 flex-1">
                <div>
                  <h3 className="text-xl font-sans font-medium text-[#1A1A1A] mb-1 leading-tight" dangerouslySetInnerHTML={{ __html: type.title }} />
                  <p className="text-[13px] italic text-[#C9A55A] font-sans" dangerouslySetInnerHTML={{ __html: type.subtitle || type.sanskritName }} />
                </div>

                <div 
                  className="text-[14px] text-sm text-[#4A4A4A] font-sans leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: type.description }}
                />

                {(type.realisticOutcomes || type.emphasis) && (
                  <div className="pt-4 border-t border-gray-50 mt-auto">
                    <p className="text-[12px] font-sans font-medium text-[#1A1A1A]  tracking-wider mb-2">
                      {type.realisticOutcomes ? "Realistic outcomes:" : "Ayurvedic emphasis for this type:"}
                    </p>
                    <div 
                      className="text-[12px] text-[#6B6B6B] font-sans leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: type.realisticOutcomes || type.emphasis }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-16 text-center max-w-[900px] mx-auto pt-8">
            <p className="text-[#888888] text-sm font-sans leading-relaxed " dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ArthritisTypes;
