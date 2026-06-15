import React from 'react';

export const SciaticaTypes = ({
  bgColor = "bg-white",
  cardBg = "bg-[#F8F5F0]",
  label = "SPECIFIC SCIATICA TYPES",
  title = "The different sciatica patterns we treat at our JVC clinic.",
  description = "",
  types = [],
  footer = ""
}) => {
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {types.map((type, index) => (
            <div key={index} className={`${cardBg} p-6 rounded-lg border-t-3 border-[#C9A55A] shadow-sm hover:shadow-md transition-all flex flex-col gap-4 h-full`}>
              <div className="text-4xl text-[#C9A55A] font-serif mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
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
              </div>

              {type.typicalSigns && type.typicalSigns.length > 0 && (
                <div className="pt-4 border-t border-gray-100 mt-4">
                  <p className="text-xs text-gray-600 mb-2" dangerouslySetInnerHTML={{ __html: `<strong class="text-[#C9A55A]">TYPICAL SIGNS:</strong>` }} />
                  <ul className="space-y-2">
                    {type.typicalSigns.map((sign, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#6B6B6B]">
                        <span className="text-[#C9A55A] w-3 h-3 rounded-full border border-[#C9A55A] flex items-center justify-center text-[8px]">✓</span>
                        <span dangerouslySetInnerHTML={{ __html: sign }} />
                      </li>
                    ))}
                  </ul>
                </div>
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

export const SciaticaEmergency = ({ data }) => {
  const { emergency = {}, rightCard = {} } = data || {};

  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
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
          <h2 className="text-3xl md:text-5xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
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
                  className="w-full text-white font-semibold py-4 px-6 rounded flex items-center justify-center gap-2 transition-colors text-sm border-2 border-[#1C1C14] bg-[#1C1C14] hover:bg-[#C9A84C] hover:text-[#1C1C14] hover:border-[#C9A84C]"
                >
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
                <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                  {service.name}
                </p>
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
          <p className="mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }}>
            {insuranceText}
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
