import React from 'react';

const ManualTherapySession = ({
  bgColor = "bg-[#F5F0E8]",
  label = "WHAT TO EXPECT",
  title = "",
  subtitle = "",
  sections = [],
  safetyCard = {}
}) => {
  const {
    label: safetyLabel = "SAFETY STANDARDS",
    safetyStandardsLabel = "For every manual therapy session:",
    contraindicationsLabel = "Contraindications we screen for:",
    sideEffectsLabel = "Side effects you should know:",
    safetyStandards = [],
    contraindications = [],
    sideEffects = [],
    buttonText,
    buttonHref
  } = safetyCard;
  return (
    <section className={`${bgColor} py-16 md:py-24 px-4 md:px-6 lg:px-12`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-16">
          <p className="text-[11px] md:text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-2 md:mb-4">
            {label}
          </p>
          <h2 className="text-2xl md:text-3xl lg:text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-4 md:mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[14px] md:text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid lg:grid-cols-[60%_40%] gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8">
            {sections.map((section, index) => (
              <div key={index} className={index < sections.length - 1 ? "pb-6 md:pb-8 border-b border-[#E5DFD3]" : ""}>
                {section.title && (
                  <h3 className="text-[17px] md:text-[19px] font-serif font-semibold text-[#1A1A1A] mb-3 md:mb-4">
                    {section.title}
                  </h3>
                )}
                {section.content && (
                  <p className="text-[14px] md:text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                    {section.content}
                  </p>
                )}
              </div>
            ))}
          </div>

          {/* Right Sidebar - Safety Card */}
          <div className="md:sticky md:top-6 lg:top-8 w-full max-w-md mx-auto md:max-w-none">
            <div className="bg-white rounded-lg border-2 border-[#C4912A] overflow-hidden">
              {/* Safety Card Header */}
              <div className="p-4 md:p-5 lg:p-7 border-b border-[#E5DFD3]">
                <div className="flex items-center gap-2 md:gap-3 mb-3 md:mb-4">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-[#C4912A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <p className="text-[10px] md:text-xs tracking-[0.2em] uppercase text-[#C4912A] font-semibold">
                    {safetyLabel}
                  </p>
                </div>
              </div>

              {/* Safety Card Content */}
              <div className="p-4 md:p-5 lg:p-7">
                {/* Safety Standards List */}
                {safetyStandards && safetyStandards.length > 0 && (
                  <div className="mb-6 md:mb-8">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em]  text-[#1A1714] mb-3 md:mb-4">
                      {safetyStandardsLabel}
                    </p>
                    <ul className="space-y-2 md:space-y-3">
                      {safetyStandards.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <svg className="w-3.5 h-3.5 md:w-4 md:h-4 text-[#C4912A] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                          <span className="text-[12px] md:text-[13px] text-[#6B6B6B] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Contraindications */}
                {contraindications && contraindications.length > 0 && (
                  <div className="mb-6 md:mb-8 pt-4 md:pt-6 border-t border-[#E5DFD3]">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] text-[#1A1714] mb-3 md:mb-4">
                      {contraindicationsLabel}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {contraindications.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#C9A961] flex-shrink-0 mt-1.5"></div>
                          <span className="text-[12px] md:text-[13px] text-[#6B6B6B] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}


                {/* Side Effects */}
                {sideEffects && sideEffects.length > 0 && (
                  <div className="mb-6 md:mb-8 pt-4 md:pt-6 border-t border-[#E5DFD3]">
                    <p className="text-[10px] md:text-xs font-semibold tracking-[0.15em] uppercase text-[#C4912A] mb-3 md:mb-4">
                      {sideEffectsLabel}
                    </p>
                    <ul className="space-y-1.5 md:space-y-2">
                      {sideEffects.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2 md:gap-3">
                          <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#C9A961] flex-shrink-0 mt-1.5"></div>
                          <span className="text-[12px] md:text-[13px] text-[#6B6B6B] leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                {buttonText && buttonHref && (
                  <a
                    href={buttonHref}
                    className="w-full text-white font-semibold py-3 md:py-4 px-5 md:px-6 rounded flex items-center justify-center gap-2 transition-colors text-xs md:text-sm border-2 border-[#C9A961] bg-[#C9A961] hover:bg-[#B8965A] hover:border-[#B8965A]"
                  >
                    {buttonText}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const ManualTherapyTechniques = ({
  bgColor = "bg-white",
  label = "TECHNIQUES",
  title = "",
  subtitle = "",
  techniques = [],
  footerNote = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {techniques.map((technique, index) => (
            <div
              key={index}
              className="bg-[#F5F0E6] rounded-lg border-t-4 border-[#C4912A] p-7 transition-all duration-300 hover:shadow-md"
            >
              <h3 className="text-[18px] font-serif font-semibold text-[#1A1A1A] mb-2">
                {technique.name}
              </h3>
              {technique.developer && (
                <p className="text-[12px] text-[#C4912A] font-sans mb-4">
                  Developed by {technique.developer}
                </p>
              )}
              <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed mb-6">
                {technique.description}
              </p>
              {technique.applications && technique.applications.length > 0 && (
                <div className="pt-4 border-t border-[#C9A961]/30">
                  <p className="text-[10px] font-sans font-semibold tracking-[0.15em] uppercase text-[#6B6355] mb-3">
                    APPLICATIONS
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {technique.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-white px-3 py-1 rounded text-[11px] text-[#6B6B6B] border border-[#E5DFD3]"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {footerNote && (
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed">
              {footerNote}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const ManualTherapyPricing = ({
  bgColor = "bg-[#F5F0E6]",
  label = "TRANSPARENT PRICING",
  title = "",
  pricingItems = [],
  insuranceNote = "",
  insurers = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
        </div>
        <div className="rounded-xl overflow-hidden" style={{ border: '1px solid rgba(0, 0, 0, 0.08)' }}>
          {pricingItems.map((item, index) => (
            <div 
              key={index}
              className="flex items-center justify-between px-7 py-5 gap-4 transition-colors hover:bg-stone-50"
              style={{ 
                background: item.bg, 
                borderBottom: index < pricingItems.length - 1 ? '1px solid rgba(0, 0, 0, 0.05)' : 'none' 
              }}
            >
              <span className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                {item.name}
              </span>
              <span className="text-sm font-bold flex-shrink-0 ml-6" style={{ color: 'rgb(201, 168, 76)', fontFamily: 'var(--font-display, Fraunces, Georgia, serif)' }}>
                {item.price}
              </span>
            </div>
          ))}
        </div>
        {insuranceNote && (
          <div className="mt-8">
            <p 
              className="text-xs text-[#6B6B6B] text-center max-w-4xl mx-auto mb-6 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: insuranceNote }}
            />
            {insurers && insurers.length > 0 && (
              <div className="flex flex-wrap gap-2 justify-center">
                {insurers.map((insurer, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1.5 rounded text-xs font-semibold" 
                    style={{ background: 'rgba(255,255,255,0.5)', color: 'rgb(107, 107, 107)', border: '1px solid rgba(229, 223, 211, 1)' }}
                  >
                    {insurer}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const HijamaSection = ({
  bgColor = "bg-white",
  label = "HIJAMA — THE ISLAMIC SUNNAH PRACTICE",
  title = "",
  subtitle = "",
  content = [],
  rightSide = {}
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-[11px] font-sans font-semibold tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            {label}
          </p>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-[16px] text-[#6B6B6B] font-sans leading-relaxed max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12">
          {/* Left Content */}
          <div className="space-y-8">
            {content.map((item, index) => (
              <div key={index}>
                {item.title && (
                  <h3 className="text-[18px] font-serif font-semibold text-[#1A1A1A] mb-4">
                    {item.title}
                  </h3>
                )}
                <p className="text-[15px] text-[#6B6B6B] font-sans leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Right Content */}
          <div className="lg:sticky lg:top-8">
            <div className="bg-[#FAF7F2] rounded-xl p-6 border-1 border-[#C9A84C] shadow-lg">
              {rightSide.sections && rightSide.sections.length > 0 && rightSide.sections.map((section, sIndex) => {
                let sectionClass = '';
                if (section.type === 'beige') {
                  sectionClass = 'bg-[#EDE5D8] rounded-xl p-5 my-4';
                } else if (section.type === 'note') {
                  sectionClass = 'bg-white rounded-lg p-5 my-4 border-l-4 border-[#C9A84C] shadow-sm';
                } else {
                  sectionClass = 'mb-4';
                }
                
                return (
                  <div key={sIndex} className={sectionClass}>
                    {section.label && (
                      <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                        {section.label}
                      </div>
                    )}
                    {section.items && (
                      <ul className="space-y-2">
                        {section.items.map((listItem, iIndex) => (
                          <li key={iIndex} className="flex items-start gap-3">
                            <svg className="w-4 h-4 flex-shrink-0 mt-0.5" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
                            </svg>
                            <span className="text-[14px] text-[#4A4A4A] leading-relaxed">{listItem}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {section.text && (
                      <p className="text-[14px] text-[#4A4A4A] leading-relaxed">
                        {section.text}
                      </p>
                    )}
                  </div>
                );
              })}
              {rightSide.buttonText && rightSide.buttonHref && (
                <div className="mt-6">
                  <a
                    href={rightSide.buttonHref}
                    className="w-full text-white font-semibold py-4 px-6 rounded-full flex items-center justify-center gap-2 transition-colors text-sm bg-[#25D366] hover:bg-[#20BD5A] shadow-md"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.488-.495-.67-.5-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                    {rightSide.buttonText}
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ManualTherapyTechniques, ManualTherapyPricing, HijamaSection };
export default ManualTherapySession;
