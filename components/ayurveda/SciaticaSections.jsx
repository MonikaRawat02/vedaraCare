import React from 'react';
import Link from 'next/link';

export const SciaticaTypes = ({
  bgColor = "bg-white",
  cardBg = "bg-[#F8F5F0]",
  label = "SPECIFIC SCIATICA TYPES",
  title = "The different sciatica patterns we treat at our JVC clinic.",
  description = "",
  types = [],
  footer = "",
  gridCols = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
  typicalSignsLabel = "TYPICAL SIGNS:",
  borderPosition = "top" // 'top' (default) or 'left'
}) => {
  const TypeItem = ({ type, index }) => {
    const card = (
      <div className={`${cardBg} p-6 rounded-lg ${borderPosition === 'left' ? 'border-l-3' : 'border-t-3'} border-[#C9A55A] shadow-sm transition-all duration-300 flex flex-col gap-4 h-full ${type.href ? 'cursor-pointer hover:shadow-xl hover:-translate-y-1 hover:border-[#B8963E]' : ''}`}>
        <div className="text-4xl text-[#C9A55A] font-serif mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
          {type.number}
        </div>

        <div className="space-y-4 flex-grow">
          <div>
            <h3
              className="text-xl font-sans font-medium text-[#1A1A1A] mb-1 leading-tight"
              dangerouslySetInnerHTML={{ __html: type.title }}
            />
          </div>

          {type.subTitle && (
            <p className="text-[#B8963E] text-sm tracking-wider" dangerouslySetInnerHTML={{ __html: type.subTitle }} />
          )}

          <div
            className="text-[14px] text-sm text-[#4A4A4A] font-sans leading-relaxed description-link-container"
            dangerouslySetInnerHTML={{ __html: type.description }}
          />
        </div>

        {((type.typicalSigns && type.typicalSigns.length > 0) || (type.typicalImpairmentPatterns && type.typicalImpairmentPatterns.length > 0)) && (
          <div className="pt-4 border-t border-gray-100 mt-4">
            <p className="text-xs text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: `<strong class="text-[#C9A55A]">${typicalSignsLabel}</strong>` }} />
            <ul className="space-y-2">
              {(type.typicalSigns || type.typicalImpairmentPatterns).map((sign, idx) => (
                <li key={idx} className="text-xs text-[#6B6B6B]">
                  {sign.startsWith("Typical recovery:") ? (
                    <div className="flex items-center gap-2">
                      <span className="text-[#C9A55A] w-3 h-3 rounded-full border border-[#C9A55A] flex items-center justify-center text-[8px]">✓</span>
                      <span dangerouslySetInnerHTML={{ __html: sign }} />
                    </div>
                  ) : (
                    <span dangerouslySetInnerHTML={{ __html: sign }} />
                  )}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    );

    if (type.href) {
      if (type.href.startsWith('/')) {
        return (
          <Link key={index} href={type.href} className="block no-underline">
            {card}
          </Link>
        );
      }
      return (
        <a key={index} href={type.href} className="block no-underline" target="_blank" rel="noopener noreferrer">
          {card}
        </a>
      );
    }
    return (
      <div key={index}>
        {card}
      </div>
    );
  };

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <div className="text-[#C9A55A] text-sm font-medium tracking-wider uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-semibold text-[#1A1A1A] font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[800px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className={gridCols}>
          {types.map((type, index) => (
            <TypeItem key={index} type={type} index={index} />
          ))}
        </div>

        {footer && (
          <div className="mt-5 text-center max-w-[900px] mx-auto pt-8 footer-link-container">
            <p className="text-[#888888] text-sm font-sans leading-relaxed" dangerouslySetInnerHTML={{ __html: footer }} />
            <style jsx global>{`
              .footer-link-container a,
              .description-link-container a {
                color: #C9A55A;
                text-decoration: none;
                transition: all 0.2s ease;
              }
              .footer-link-container a:hover,
              .description-link-container a:hover {
                text-decoration: underline;
                color: #B8963E;
              }
            `}</style>
          </div>
        )}
      </div>
    </section>
  );
};

export const SciaticaEmergency = ({ data }) => {
  const { emergency = {}, rightCard = {} } = data || {};

  return (
    <section className="bg-[#F8F5F0]" style={{ padding: '96px 24px' }}>
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            {emergency.label}
          </div>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
            {emergency.title}
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
          <div className="max-h-[700px] overflow-y-auto pr-4 space-y-6 no-scrollbar">
            <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
              {emergency.description1}
            </p>
            <div>
              <h3 className="text-lg font-serif mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
                {emergency.subtitle1}
              </h3>
              <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                {emergency.description2}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-serif mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
                {emergency.subtitle2}
              </h3>
              <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                {emergency.description3}
              </p>
              <ul className="mt-4 space-y-2">
                {(emergency.redFlags || []).map((flag, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm">
                    <svg className="w-4 h-4 flex-shrink-0" style={{ color: '#C0392B' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    </svg>
                    <span style={{ color: 'rgb(107, 107, 107)' }}>{flag}</span>
                  </li>
                ))}
              </ul>
              <p className=" mt-4" style={{ color: '#C0392B' }} dangerouslySetInnerHTML={{ __html: emergency.caudaEquinaNote }} />
            </div>
            {emergency.subtitle3 && (
              <div>
                <h3 className="text-lg font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
                  {emergency.subtitle3}
                </h3>
                <ul className="space-y-2">
                  {(emergency.otherFeatures || []).map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'rgb(26,77,46)' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                      </svg>
                      <span style={{ color: 'rgb(107, 107, 107)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {emergency.subtitle4 && (
              <div>
                <h3 className="text-lg font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
                  {emergency.subtitle4}
                </h3>
                <ul className="space-y-2">
                  {(emergency.physioIndications || []).map((indication, index) => (
                    <li key={index} className="flex items-center gap-3 text-sm">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'rgb(26,77,46)' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                      </svg>
                      <span style={{ color: 'rgb(107, 107, 107)' }}>{indication}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <div>
            <div className="rounded-lg border-2 border-[#B8965A] overflow-hidden">
              <div className="bg-[#1C1C14] p-7">
                <div className="flex items-center gap-3 mb-4">
                  <svg className="w-8 h-8 text-[#C9A84C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77-1.333.192 3 1.732 3z" />
                  </svg>
                  <h3 className="text-xs tracking-[0.2em] uppercase text-[#C9A84C]">
                    {rightCard.label}
                  </h3>
                </div>
                <p className="text-white font-medium" style={{ fontSize: '18px' }}>
                  {rightCard.title}
                </p>
              </div>
              <div className="bg-white p-7">
                <ul className="flex flex-col gap-3 mb-6">
                  {(rightCard.features || []).map((feature, index) => (
                    <li key={index} className="rounded-sm p-4 flex items-center gap-3 text-sm border border-gray-200">
                      <svg className="w-5 h-5 text-[#EF4444] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77-1.333.192 3 1.732 3z" />
                      </svg>
                      <span style={{ color: 'rgb(26,26,26)' }}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs leading-relaxed mb-2" style={{ color: 'rgb(107,107,107)' }} dangerouslySetInnerHTML={{ __html: rightCard.note }} />
                <p className="text-xs mb-8" style={{ color: 'rgb(107,107,107)' }}>
                  {rightCard.footer}
                </p>
                <a
                  href={rightCard.buttonHref}
                  className="w-full text-white font-semibold py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors text-sm border-2 border-[#1C1C14] bg-[#1C1C14] hover:bg-[#C9A84C] hover:text-[#1C1C14] hover:border-[#C9A84C]">
                  {rightCard.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const SciaticaPricing = ({
  bgColor = "bg-white",
  label = "TRANSPARENT PRICING",
  title = "What sciatica physiotherapy at our JVC clinic costs.",
  services = [],
  insuranceText = "",
  insurances = []
}) => {
  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            {label}
          </div>
          <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
        </div>

        <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
          {services.map((service, index) => {
            let bgClass = 'bg-white';
            let borderClass = '';
            let priceColor = 'rgb(26, 26, 26)';
            
            if (
              service.name === "Acute sciatica package — 10 sessions over 6-8 weeks" ||
              service.name === "Chronic sciatica programme — 16 sessions over 8-12 weeks"
            ) {
              bgClass = 'bg-[#FAF8F5]';
              borderClass = 'border-t border-b border-[#C9A84C]';
              priceColor = 'rgb(201, 168, 76)';
            }

            return (
              <div key={index} className={`flex items-center justify-between px-8 py-5 ${bgClass} ${borderClass} border-b border-[#E5DFD3]`}>
                <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }} dangerouslySetInnerHTML={{ __html: service.name }} />
                <p style={{ fontFamily: 'Fraunces, Georgia, serif', color: priceColor }}>
                  {service.price}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-[#F2EDE5] rounded-lg p-8 border border-[#E5DFD3]">
          <div className="text-[#C9A84C] text-xs tracking-[0.2em] uppercase mb-4">
            INSURANCE DIRECT-BILLING
          </div>
          <p className="mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: insuranceText }}>
          </p>
          <div className="flex flex-wrap gap-3">
            {insurances.map((insurer, index) => (
              <span key={index} className="bg-white px-4 py-2 rounded text-xs border border-[#E5DFD3]" style={{ color: 'rgb(107, 107, 107)' }}>
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SciaticaTreatment = ({ data, showBorderLeft = true, rightContentStyle = 'tags', bgColor = 'bg-white', showStepNumbers = false, showComparison = false, colRatio = 'lg:grid-cols-[55%_45%]' }) => {
  const { treatment = {}, rightContent = {} } = data || {};

  return (
    <section className={`${bgColor} py-16 md:py-24 px-4 md:px-6 lg:px-12`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10 md:mb-12">
          <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
            {treatment.label}
          </div>
          <h2 className="text-4xl md:text-3xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontWeight: 500 }}>
            {treatment.title}
          </h2>
        </div>
        {treatment.intro && (
          <p className="text-base mb-10 md:mb-12 max-w-[720px] mx-auto" style={{ color: 'rgb(107,107,107)', lineHeight: '1.8', fontSize: '14px', textAlign: 'center' }} dangerouslySetInnerHTML={{ __html: treatment.intro }}>
          </p>
        )}
        <div className={`grid grid-cols-1 ${colRatio} gap-8 lg:gap-12 items-start`}>
          <div className="space-y-6 md:space-y-8">
            {(treatment.steps || []).map((step, index) => {
              const displayNumber = step.number || (index + 1 < 10 ? `0${index + 1}` : `${index + 1}`);
              const hasTitle = step.title && step.title.trim() !== '';
              return (
                <div key={index} className={`space-y-3 ${showBorderLeft ? 'border-l-4 border-[#C9A84C] pl-6' : ''}`}>
                  {showStepNumbers ? (
                    <>
                      {hasTitle && (
                        <div className="flex items-start gap-3">
                          <div className="w-7 h-7 rounded-full bg-white border-2 border-[#C9A84C] flex items-center justify-center text-xs font-serif flex-shrink-0" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                            {displayNumber}
                          </div>
                          <h3 className="text-lg font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontSize: '19px', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: step.title }}>
                          </h3>
                        </div>
                      )}
                      {step.description && (
                        <p className={hasTitle ? "text-base ml-10" : "text-base"} style={{ color: 'rgb(107,107,107)', lineHeight: '1.8', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: step.description }}>
                        </p>
                      )}
                    </>
                  ) : (
                    <>
                      {hasTitle && (
                        <h3 className="text-lg font-serif" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)', fontSize: '19px', fontWeight: 600 }} dangerouslySetInnerHTML={{ __html: step.title }}>
                        </h3>
                      )}
                      {step.description && (
                        <p className="text-base" style={{ color: 'rgb(107,107,107)', lineHeight: '1.8', fontSize: '15px' }} dangerouslySetInnerHTML={{ __html: step.description }}>
                        </p>
                      )}
                    </>
                  )}
                </div>
              );
            })}
            {treatment.whatWeRecommendAgainst && (
              <div className="mt-10 p-8 rounded-xl" style={{ backgroundColor: 'rgb(255, 248, 248)', border: '1px solid rgba(212, 24, 61, 0.1)' }}>
                <h3 className="mb-6 text-base font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                  {treatment.whatWeRecommendAgainst.title}
                </h3>
                <div className="space-y-4">
                  {treatment.whatWeRecommendAgainst.items.map((item, index) => (
                    <div key={index} className="flex gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0" style={{ color: 'rgb(212, 24, 61)' }}>
                        <path d="M18 6 6 18"></path>
                        <path d="m6 6 12 12"></path>
                      </svg>
                      <p className="text-gray-700 leading-relaxed">
                        <strong>{item.label}</strong>{item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {treatment.footer && (
              <blockquote className="py-6 border-y border-[#E5DFD3] mt-6 italic" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif', fontSize: '19px', lineHeight: '1.7' }} dangerouslySetInnerHTML={{ __html: treatment.footer }}>
              </blockquote>
            )}
          </div>
          <div className="md:sticky md:top-6 lg:top-8 space-y-5 md:space-y-6 w-full max-w-md mx-auto md:max-w-none">
            {rightContent.image && (
              <div className="rounded-md overflow-hidden">
                <img src={rightContent.image} alt={rightContent.alt || ''} className="w-full object-cover" style={{ aspectRatio: '4/5' }} />
              </div>
            )}
            {showComparison && (
              <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm w-full">
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="p-4 text-center border-r border-gray-100">
                    <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(212, 24, 61)' }}>Cortisone at 6 weeks</p>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(212, 24, 61)' }}>Better</p>
                    <p className="text-[10px] text-gray-500">Short-term relief</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(42, 122, 74)' }}>Physio at 6 weeks</p>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(42, 122, 74)' }}>Building</p>
                    <p className="text-[10px] text-gray-500">Tendon remodelling</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 border-b border-gray-100">
                  <div className="p-4 text-center border-r border-gray-100">
                    <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(212, 24, 61)' }}>Cortisone at 12 months</p>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(212, 24, 61)' }}>Worse</p>
                    <p className="text-[10px] text-gray-500">Higher recurrence</p>
                  </div>
                  <div className="p-4 text-center">
                    <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(42, 122, 74)' }}>Physio at 12 months</p>
                    <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(42, 122, 74)' }}>Better</p>
                    <p className="text-[10px] text-gray-500">Sustained recovery</p>
                  </div>
                </div>
                <div className="p-3 text-center bg-[#FAF8F5]">
                  <p className="text-xs text-gray-600">Based on multiple systematic reviews and meta-analyses</p>
                </div>
              </div>
            )}
            {rightContentStyle === 'tags' && rightContent.tags && rightContent.tags.length > 0 && (
              <div className="grid grid-cols-2 gap-3 w-full">
                {rightContent.tags.map((tag, index) => (
                  <div key={index} className="bg-[#F8F5F0] p-3 rounded text-center border border-[#E5DFD3] flex items-center justify-center gap-2">
                    <svg className="w-3 h-3 flex-shrink-0" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                    </svg>
                    <span style={{ fontSize: '13px', color: '#1C1C14' }}>{tag}</span>
                  </div>
                ))}
              </div>
            )}
            {rightContentStyle === 'tagsBox' && rightContent.tags && rightContent.tags.length > 0 && (
              <div className="bg-white p-4 rounded-lg border-l-4 border-[#C9A84C] shadow-sm w-full">
                {rightContent.label && (
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-3" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                    {rightContent.label}
                  </div>
                )}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                  {rightContent.tags.map((tag, index) => (
                    <div key={index} className="bg-[#F8F5F0] p-2 rounded text-center border border-[#E5DFD3] flex items-center justify-center gap-1.5">
                      <svg className="w-2.5 h-2.5 flex-shrink-0" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                      </svg>
                      <span style={{ fontSize: '11px', color: '#1C1C14' }}>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rightContentStyle === 'list' && rightContent.items && rightContent.items.length > 0 && (
              <div className="bg-white p-5 rounded-md border border-gray-200 shadow-sm w-full">
                {rightContent.label && (
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                    {rightContent.label}
                  </div>
                )}
                <div className="space-y-2.5">
                  {rightContent.items.map((item, index) => (
                    <div key={index} className="flex items-center gap-3 py-1">
                      <div className="w-7 h-7 rounded-full bg-[#1C1A16] flex items-center justify-center text-white text-xs font-serif flex-shrink-0" style={{color: '#C49A2C',fontFamily: 'Fraunces, Georgia, serif' }}>
                        {item.number}
                      </div>
                      <span style={{ fontSize: '13px', color: '#1C1C14', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1.4' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rightContentStyle === 'simpleBox' && (rightContent.text || rightContent.description) && (
              <div className="bg-white p-6 rounded-lg border-l-4 border-[#C9A84C] shadow-sm w-full">
                {rightContent.label && (
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                    {rightContent.label}
                  </div>
                )}
                <p style={{ fontSize: '15px', color: '#1C1C14', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1.7' }}>{rightContent.text || rightContent.description}</p>
              </div>
            )}
            {rightContentStyle === 'bulletList' && rightContent.items && rightContent.items.length > 0 && (
              <div className="bg-[#FAF7F2] p-6 rounded-xl border border-[#E5DFD3] w-full">
                {rightContent.label && (
                  <div className="text-[11px] tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C', fontFamily: 'Fraunces, Georgia, serif' }}>
                    {rightContent.label}
                  </div>
                )}
                <div className="space-y-2">
                  {rightContent.items.map((item, index) => (
                    <div key={index} className="flex items-start gap-3 pb-3 border-b border-[#E5DFD3] last:border-b-0 last:pb-0">
                      <div className="w-2 h-2 rounded-full bg-[#C9A84C] flex-shrink-0 mt-1.5"></div>
                      <span style={{ fontSize: '13px', color: '#333333', fontFamily: 'Inter, system-ui, sans-serif', lineHeight: '1.5' }}>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rightContentStyle === 'keyAnatomy' && rightContent.keyAnatomy && rightContent.keyAnatomy.length > 0 && (
              <div className="mt-6 bg-white p-6 rounded-xl w-full" style={{ border: "1px solid rgba(28, 21, 10, 0.08)" }}>
                {rightContent.label && (
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(201, 168, 76)" }}>
                    {rightContent.label}
                  </p>
                )}
                <div className="space-y-3">
                  {rightContent.keyAnatomy.map((item, index) => (
                    <div 
                      key={index} 
                      className="pb-3 last:pb-0"
                      style={{ borderBottom: index < rightContent.keyAnatomy.length - 1 ? "1px solid rgba(28, 21, 10, 0.06)" : "none" }}
                    >
                      <div className="text-sm font-medium mb-0.5" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(28, 21, 10)" }}>
                        {item.title}
                      </div>
                      <div className="text-xs leading-relaxed" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(122, 110, 97)" }}>
                        {item.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rightContentStyle === 'keyFact' && rightContent.keyFact && rightContent.keyFact.length > 0 && (
              <div className="mt-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm w-full">
                {rightContent.label && (
                  <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-2">
                    {rightContent.label}
                  </p>
                )}
                {rightContent.keyFact.map((item, index) => (
                  <p key={index} className="text-sm text-gray-700 leading-relaxed">
                    {item.description}
                  </p>
                ))}
              </div>
            )}
            {rightContentStyle === 'hairCycle' && rightContent.hairCycle && rightContent.hairCycle.length > 0 && (
              <div className="mt-6 p-6 rounded-xl bg-white w-full" style={{ border: "1px solid rgba(28, 21, 10, 0.08)" }}>
                {rightContent.label && (
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(201, 168, 76)" }}>
                    {rightContent.label}
                  </p>
                )}
                <div className="grid grid-cols-3 gap-3">
                  {rightContent.hairCycle.map((item, index) => (
                    <div key={index} className="p-3 rounded-lg text-center" style={{ backgroundColor: "rgb(248, 234, 224)" }}>
                      <p className="text-xl font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: "rgb(184, 150, 58)" }}>
                        {item.percentage}
                      </p>
                      <p className="text-xs font-semibold mb-1" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(28, 21, 10)" }}>
                        {item.phase}
                      </p>
                      <p className="text-xs" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(107, 107, 107)" }}>
                        {item.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
            {rightContentStyle === 'peelDepthAndFitzpatrick' && (
              <div className="w-full space-y-6">
                {/* Peel Penetration Depths */}
                <div className="bg-[#FAF7F2] rounded-xl p-6 border border-[#E5DFD3]">
                  <p className="text-xs font-semibold tracking-widest uppercase mb-6" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "#C9A961" }}>
                    {rightContent.peelDepthsLabel || "PEEL PENETRATION DEPTHS"}
                  </p>
                  <div className="space-y-5">
                    {rightContent.peelDepths.map((depth, idx) => (
                      <div key={idx} className={idx < rightContent.peelDepths.length - 1 ? "pb-5 border-b border-[#E5DFD3]" : ""}>
                        <div className="flex items-start gap-3">
                          <div className="w-4 h-4 rounded mt-1 flex-shrink-0" style={{ backgroundColor: depth.color }}></div>
                          <div>
                            <p className="text-sm font-semibold mb-1" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(28, 28, 20)" }}>
                              {depth.title}
                            </p>
                            <p className="text-xs" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(74, 69, 64)" }}>
                              {depth.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Fitzpatrick Skin Type Spectrum */}
                {rightContent.fitzpatrick && (
                  <div>
                    <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "#C9A961" }}>
                      {rightContent.fitzpatrickLabel || "FITZPATRICK SKIN TYPE SPECTRUM"}
                    </p>
                    <div className="grid grid-cols-6 gap-2 mb-4">
                      {rightContent.fitzpatrick.types.map((type, idx) => (
                        <div key={idx} className="p-2 rounded text-center" style={{ backgroundColor: type.color, height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <p className="text-sm font-semibold" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: type.textColor || "rgba(241, 241, 238, 1)" }}>
                            {type.label}
                          </p>
                        </div>
                      ))}
                    </div>
                    <div className="p-3 rounded-lg" style={{ backgroundColor: "#F0EBE3" }}>
                      <p className="text-xs text-center" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "#777777" }}>
                        {rightContent.fitzpatrick.note}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}
            {rightContentStyle === 'acneScarTypes' && (
              <div className="w-full bg-white rounded-xl p-6 shadow-sm border border-[rgba(28,21,10,0.06)]">
                <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "#C9A961" }}>
                  {rightContent.label || "ACNE SCAR TYPES — CROSS SECTION"}
                </p>
                {/* Diagram */}
                {rightContent.diagram && (
                  <div className="mb-4 p-8 rounded-lg" style={{ backgroundColor: "#FAF7F2" }}>
                    <svg viewBox="0 0 340 280" width="100%" height="auto" xmlns="http://www.w3.org/2000/svg">
                      {/* Skin Layers */}
                      <rect x="20" y="60" width="300" height="180" fill="#F0E0CB" rx="8"></rect>
                      <rect x="20" y="60" width="300" height="50" fill="#F7E8D0" rx="8"></rect>
                      <rect x="20" y="110" width="300" height="70" fill="#E9D4BC" rx="8"></rect>
                      <rect x="20" y="180" width="300" height="60" fill="#E5CDB7" rx="8"></rect>
                      
                      {/* Layer Labels */}
                      <text x="30" y="55" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#777777" fontWeight="600">EPIDERMIS</text>
                      <text x="30" y="105" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#777777" fontWeight="600">DERMIS</text>
                      <text x="30" y="175" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#777777" fontWeight="600">SUB-DERMIS</text>
                      
                      {/* Ice Pick Scar */}
                      <rect x="70" y="78" width="30" height="30" fill="#5F5F5F" rx="3" opacity="0.8"></rect>
                      <line x1="85" y1="60" x2="85" y2="78" stroke="#1F1F1F" strokeWidth="3"></line>
                      <text x="55" y="145" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#1F1F1F" fontWeight="600">Ice Pick</text>
                      <text x="55" y="155" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#777777">Deep, narrow</text>
                      
                      {/* Boxcar Scar */}
                      <rect x="130" y="85" width="40" height="35" fill="#5F5F5F" rx="3" opacity="0.6"></rect>
                      <text x="130" y="145" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#1F1F1F" fontWeight="600">Boxcar</text>
                      <text x="130" y="155" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#777777">Wide, defined edges</text>
                      
                      {/* Rolling Scar */}
                      <path d="M 190 90 Q 205 100 220 90 Q 235 80 250 90" fill="none" stroke="#5F5F5F" strokeWidth="3" strokeLinecap="round" opacity="0.8"></path>
                      <text x="190" y="145" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#1F1F1F" fontWeight="600">Rolling</text>
                      <text x="190" y="155" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#777777">Undulating surface</text>
                      
                      {/* Hypertrophic Scar */}
                      <ellipse cx="275" cy="55" rx="22" ry="14" fill="#1F1F1F" opacity="0.8"></ellipse>
                      <text x="245" y="85" fontFamily="DM Sans, sans-serif" fontSize="9" fill="#1F1F1F" fontWeight="600">Hypertrophic</text>
                      <text x="245" y="95" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#777777">Raised scar</text>
                      
                      {/* Skin Surface */}
                      <text x="240" y="45" fontFamily="DM Sans, sans-serif" fontSize="8" fill="#777777">SKIN SURFACE</text>
                      
                      {/* Dashed Line */}
                      <line x1="20" y1="60" x2="320" y2="60" stroke="#C9A961" strokeWidth="1" strokeDasharray="5,5"></line>
                    </svg>
                  </div>
                )}
                {/* Key Points */}
                {rightContent.keyPoints && rightContent.keyPoints.length > 0 && (
                  <div className="space-y-3">
                    {rightContent.keyPoints.map((point, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-3 h-3 rounded-full mt-1 flex-shrink-0" style={{ backgroundColor: point.color || "#1C1C14" }}></div>
                        <p className="text-xs leading-relaxed" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(74, 69, 64)" }}>
                          {point.text}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            )}
            {rightContent.bottomContent && (
              <div dangerouslySetInnerHTML={{ __html: rightContent.bottomContent }} />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export const SciaticaTimeline = ({ data }) => {
  const { timeline = {} } = data || {};

  return (
    <section className="bg-[#F0EBE3]" style={{ padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C' }}>
            {timeline.label}
          </div>
          <h2 className="text-4xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
            {timeline.title}
          </h2>
          <p className="text-base mt-4" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', maxWidth: '700px', margin: '0 auto', fontSize: '16px' }}>
            {timeline.description}
          </p>
        </div>

        <div className="relative">
          {/* Single vertical line */}
          <div className="absolute left-[39px] top-[24px] w-0.5 h-[calc(100%-48px)] bg-[#C9A84C]"></div>
          {(timeline.phases || []).map((phase, index) => (
            <div key={index} className={`relative flex gap-8 mb-12 ${index === (timeline.phases || []).length - 1 ? 'mb-0' : ''}`}>
              <div className="flex-shrink-0 w-20 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-[#1C1C14] flex items-center justify-center text-[#C9A84C] text-lg font-serif z-10" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {phase.number}
                </div>
              </div>
              <div className="flex-1">
                <div className="bg-white p-8 rounded-lg">
                  <div className="text-xs tracking-[0.2em] uppercase mb-2" style={{ color: '#C9A84C' }}>
                    {phase.week}
                  </div>
                  <h3 className="text-2xl md:text-3xl mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                    Phase {phase.number} — {phase.title}
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                    <ul className="space-y-3">
                      {(phase.leftItems || []).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3" style={{ color: 'rgb(107, 107, 107)', fontSize: '14px' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                    <ul className="space-y-3">
                      {(phase.rightItems || []).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-3" style={{ color: 'rgb(107, 107, 107)', fontSize: '14px' }}>
                          <svg className="w-4 h-4 flex-shrink-0 mt-1" style={{ color: '#C9A84C' }} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                          </svg>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-[#F8F5F0] p-6 rounded border-l-4 border-[#C9A84C]">
                    <p className="text-sm" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.6' }}>
                      <span style={{ color: '#C9A84C', fontWeight: 600, fontSize: '13px', letterSpacing: '0.1em' }}>EXPECTED OUTCOME:</span> {phase.expectedOutcome}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {timeline.footer && (
          <div className="mt-16 text-center max-w-[800px] mx-auto">
            <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
              {timeline.footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};
