import React from 'react';

const HowThisPageWorksSection = ({
  bgColor = "bg-white",
  label = "HOW THIS PAGE WORKS",
  title = "A simple way to navigate your skin care options.",
  steps = [],
  linkText,
  linkHref
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-6 mb-16">
          <div className="text-[13px] font-sans font-semibold tracking-[0.15em] uppercase text-[#C9A961]">
            {label}
          </div>
          <h2 className="text-4xl font-serif font-normal text-[#1A1A1A]">
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div key={index} className="relative bg-[#F9F6F0] p-8 rounded-xl border border-[#E5DFD3] overflow-hidden">
              <div className="absolute top-6 right-6 text-5xl font-serif font-normal text-[#E5DFD3]">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="relative z-10">
                <h3 className="text-lg font-medium text-[#1C1714] mb-3 max-w-[180px] leading-snug">
                  {step.title}
                </h3>
                <p className="text-[14px] text-[#7A6F65] font-sans leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {linkText && linkHref && (
          <div className="text-center">
            <a 
              href={linkHref}
              className="inline-flex items-center gap-2 text-[13px] text-[#C9A961] font-sans hover:underline"
            >
              {linkText}
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
};

const WhatToExpectSection = ({
  bgColor = "bg-white",
  label = "WHAT TO EXPECT",
  title = "What happens when you book a consultation.",
  subtitle = "A brief overview — comprehensive details are in our dermatology clinic page.",
  paragraphs = [],
  primaryButton = {},
  secondaryButton = {}
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <div className="text-[13px] font-sans font-semibold tracking-[0.15em] uppercase text-[#C9A961] mb-4">
          {label}
        </div>
        <h2 className="text-[clamp(1.8rem,3.5vw,2.6rem)] font-serif font-normal text-[#1C1714] mb-4 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="text-[#7A6F65] font-sans mb-8">
            {subtitle}
          </p>
        )}
        
        <div className="bg-[#FAF7F2] rounded-3xl p-8 mb-10 text-left">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="text-[#5C4A3A] font-sans leading-relaxed mb-6 last:mb-0">
              {paragraph}
            </p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          {primaryButton.text && primaryButton.href && (
            <a 
              href={primaryButton.href}
              className="inline-flex items-center justify-center px-8 py-4 bg-[#B8965A] text-white font-sans font-medium rounded-full hover:bg-[#a38450] transition-colors"
            >
              {primaryButton.text}
            </a>
          )}
          {secondaryButton.text && secondaryButton.href && (
            <a 
              href={secondaryButton.href}
              className="inline-flex items-center gap-2 text-[#7A6F65] font-sans text-sm hover:text-[#1C1714] transition-colors"
            >
              {secondaryButton.text}
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 12h14"></path>
                <path d="m12 5 7 7-7 7"></path>
              </svg>
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

const PatientPreferencesSection = ({
  bgColor = "bg-[#F0EAE0]",
  cardColor = "bg-white",
   label = "PATIENT PREFERENCES",
  title = "Multiple languages. Discretion. Patient preferences accommodated.",
  description,
  additionalNote,
  cardLabel = "YOUR PREFERENCES",
  preferences = [],
  footerNote
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto ">
        <div className="grid lg:grid-cols-[60fr_40fr] gap-12 items-start">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="text-[13px] font-sans font-semibold tracking-[0.15em] uppercase mb-4 text-[#C9A961]">
              {label}
            </div>
            <h2 className="text-4xl font-serif font-normal text-[#1C1714]">
              {title}
            </h2>
            {description && (
              <p className="text-base leading-relaxed font-sans text-[#5C4A3A]" dangerouslySetInnerHTML={{ __html: description }} />
            )}
            {additionalNote && (
              <p className="text-base leading-relaxed font-sans text-[#5C4A3A]" dangerouslySetInnerHTML={{ __html: additionalNote }} />
            )}
          </div>

          {/* Right Card */}
          <div className={`${cardColor} rounded-xl border border-[#E5DFD3] shadow-sm w-full overflow-hidden`}>
            {cardLabel && (
              <div className="px-6 py-4 bg-[#B8965A]">
                <p className="text-[11px] font-sans font-semibold tracking-[0.15em] uppercase text-white">
                  {cardLabel}
                </p>
              </div>
            )}
            <div className="p-6 space-y-2">
              {preferences.map((item, index) => (
                <div key={index} className="flex items-start gap-3 pb-3  border-[#E5DFD3] last:border-b-0 last:pb-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9A961" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-0.5 flex-shrink-0">
                    <path d="M21.801 10A10 10 0 1 1 17 3.335" />
                      <path d="m9 11 3 3L22 4" />
                  </svg>
                  <span className="text-[13px] text-[#1C1714] font-sans leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
            {footerNote && (
              <div className="px-6 pb-6 pt-4 border-t border-[#E5DFD3]">
                <p className="text-sm text-[#6B6B6B] font-sans" dangerouslySetInnerHTML={{ __html: footerNote }} />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

const PigmentationConcernSelector = ({
  bgColor = "bg-[#FAF8F3]",
  label = "YOUR PIGMENTATION CONCERN",
  title = "What type of pigmentation do you have?",
  description = "",
  types = []
}) => {
  const icons = {
    moon: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
      </svg>
    ),
    flame: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16 5.5 16 9c0 2 1 2 1 4 0 3-1.5 4.5-3 4.5s-3-1.5-3-4.5c0-1 0-2 1-2 0 2.5-2.5 5-3.5 5.5A8 8 0 0017.657 18.657z" />
      </svg>
    ),
    sun: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
    lightning: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    person: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    layers: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    shield: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    question: (
      <svg className="w-8 h-8 text-[#C9A961]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    )
  };

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="text-[#C9A961] text-[13px] font-sans font-semibold tracking-[0.15em] uppercase">
            {label}
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-normal text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[17px] text-[#6B6B6B] font-sans max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {types.map((type, index) => (
            <div key={index} className="bg-white p-8 rounded-xl border border-[#E5DFD3] shadow-sm hover:shadow-md transition-all flex flex-col h-full">
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 bg-[#FAF7F2] rounded-lg flex items-center justify-center">
                  {icons[type.icon] || icons.question}
                </div>
                <div className="text-2xl font-serif font-normal text-[#C9A961]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {type.number}
                </div>
              </div>

              <div className="space-y-3 flex-grow">
                <div>
                  <h3 className="text-xl font-sans font-semibold text-[#1A1A1A] mb-1 leading-tight">
                    {type.title}
                  </h3>
                  {type.subtitle && (
                    <p className="text-[13px] text-[#C9A961] font-sans tracking-wide uppercase">
                      {type.subtitle}
                    </p>
                  )}
                </div>

               <p
                className="text-[14px] text-[#7A6F65] font-sans leading-relaxed"
                dangerouslySetInnerHTML={{ __html: type.description }}
              />

                <div className="pt-4 mt-4 border-t border-[#E5DFD3] space-y-3">
                  {type.howToRecognise && (
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#C9A961] mb-1">
                        How to recognise:
                      </p>
                      <p className="text-[13px] text-[#6B6B6B] font-sans">
                        {type.howToRecognise}
                      </p>
                    </div>
                  )}

                  {type.commonIn && (
                    <div>
                      <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-[#C9A961] mb-1">
                        Common in:
                      </p>
                      <p className="text-[13px] text-[#6B6B6B] font-sans">
                        {type.commonIn}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {type.linkText && type.linkHref && (
                <div className="mt-6 pt-4 border-t border-[#E5DFD3]">
                  <a 
                    href={type.linkHref}
                    className="inline-flex items-center gap-2 text-[13px] font-sans text-[#C9A961] hover:underline"
                  >
                    {type.linkText}
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14"></path>
                      <path d="m12 5 7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PigmentationPricingSection = ({
  bgColor = "bg-[#F0EBE3]",
  label = "COST GUIDANCE",
  title = "Understanding what pigmentation treatment costs at our JVC clinic.",
  description,
  services = [],
  linkText,
  linkHref,
  insuranceText,
}) => {
  return (
    <section className={`${bgColor}`} style={{ padding: '96px 24px' }}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
            {label}
          </div>
          <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
          {description && (
            <p className="text-base mt-4" style={{ color: 'rgb(107,107,107)', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto' }}>
              {description}
            </p>
          )}
        </div>

        <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-8">
          <div className="flex items-center justify-between px-8 py-4 bg-[#1C1C14]">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'white' }}>
              SERVICE CATEGORY
            </p>
            <p className="text-xs font-semibold tracking-[0.15em] uppercase" style={{ color: 'white' }}>
              STARTING FROM
            </p>
          </div>
          {(services || []).map((service, index) => (
            <div key={index} className={`flex items-center justify-between px-8 py-5 ${index % 2 === 1 ? 'bg-[#FAF8F5]' : 'bg-white'}`}>
              <p className="text-sm" style={{ color: 'rgb(26, 26, 26)' }}>
                {service.name}
              </p>
              <p style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)' }}>
                {service.price}
              </p>
            </div>
          ))}
        </div>

        {linkText && linkHref && (
          <div className="text-center mb-6">
            <a 
              href={linkHref}
              className="text-sm hover:underline"
              style={{ color: '#C9A84C' }}
            >
              {linkText}
            </a>
          </div>
        )}

        <p className="text-center" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: insuranceText }}>
        </p>
       
      </div>
    </section>
  );
};

export { PatientPreferencesSection, HowThisPageWorksSection, WhatToExpectSection, PigmentationConcernSelector, PigmentationPricingSection };
