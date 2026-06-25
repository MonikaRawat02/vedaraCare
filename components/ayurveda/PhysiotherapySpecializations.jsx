import React from 'react';

const PhysiotherapySpecializations = ({
  bgColor = "bg-[#F5F1E8]",
  cardBg = "bg-white",
  cardBorder = "border-t-4 border-[#C9A55A]",
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
          <h2 className="text-3xl font-medium text-[#1A1A1A] font-serif">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[800px] mx-auto leading-relaxed" dangerouslySetInnerHTML={{ __html: description }} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div key={index} className={`${cardBg} p-8 rounded-lg ${cardBorder} shadow-sm hover:shadow-md transition-all flex flex-col h-full`}>
              <div className="text-4xl text-[#C9A55A] font-serif mb-6">
                {type.number}
              </div>
              
              <div className="space-y-4 flex-grow">
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

                {type.typicalSigns && (
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A55A' }}>Typical signs:</p>
                    <p className="text-[12px] text-[#6B6B6B]" dangerouslySetInnerHTML={{ __html: type.typicalSigns }} />
                  </div>
                )}

                {type.commonQuestions && type.commonQuestions.length > 0 && (
                  <div className="pt-4 mt-4 border-t border-gray-100">
                    <p className="text-[10px] font-semibold tracking-widest uppercase mb-2" style={{ color: '#C9A55A' }}>Common Questions:</p>
                    <ul className="space-y-1">
                      {type.commonQuestions.map((q, qIndex) => (
                        <li key={qIndex} className="text-[12px] text-[#6B6B6B] font-sans">
                          {q}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {type.commonConditions && type.commonConditions.length > 0 && (
                  <div className="pt-4 border-t border-gray-50 mt-4">
                    <p className="text-xs text-gray-600" dangerouslySetInnerHTML={{ __html: `<strong class="text-[#d4af37]">Common Dubai presentations:</strong> ${type.commonConditions.join(", ")}` }} />
                  </div>
                )}
              </div>

              {type.linkText && type.linkHref && (
                <a 
                  href={type.linkHref}
                  className="inline-flex items-center gap-1 text-[14px] font-sans mt-4 text-[#C9A55A] hover:underline"
                >
                  {type.linkText}
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </a>
              )}
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-5 text-center max-w-[900px] mx-auto pt-8 hover:text-[#C9A55A] transition-colors">
            <p className="text-[#888888] text-sm font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PhysiotherapySpecializations;
