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
          <div className="bg-white rounded-xl border border-[#E5DFD3] shadow-sm w-full overflow-hidden">
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
                <p className="text-sm text-[#6B6B6B] font-sans">
                  {footerNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export { PatientPreferencesSection, HowThisPageWorksSection, WhatToExpectSection };
