import React from 'react';
import Link from 'next/link';

const CareSettings = ({
  bgColor = "bg-[#F8F5EE]",
  label = "CARE SETTINGS",
  title = "Where we deliver rehabilitation.",
  description = "",
  settings = [],
  footer = "",
  linkText = "",
  linkHref = ""
}) => {
  const icons = {
    clinic: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
    home: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 2 0 011 1v4a1 1 0 001 1m-6 0h6" />
      </svg>
    ),
    combined: (
      <svg className="w-6 h-6 text-[#C4A962]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    )
  };

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#C4A962] text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {settings.map((setting, index) => (
            <div key={index} className="bg-white border-t-4 border-[#B8975A] rounded-xl p-8   hover:shadow-md transition-all">
              <div className="w-12 h-12 bg-[#FAF7F2] rounded-lg flex items-center justify-center ">
                {icons[setting.icon]}
              </div>

              <h3 className="text-xl font-serif mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: '#1A1A1A' }}>
                {setting.title}
              </h3>

              <p className="text-[#6B6B6B] mb-5 leading-relaxed text-[14px]">
                {setting.description}
              </p>

              {setting.whenRight && setting.whenRight.length > 0 && (
                <div className="mb-6">
                  <p className="text-xs tracking-[0.15em] uppercase text-[#C4A962] mb-3 font-semibold">
                    WHEN THIS SETTING IS RIGHT
                  </p>
                  <ul className="space-y-2">
                    {setting.whenRight.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                        <span className="text-[#B8975A] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {setting.whatWeDeliver && setting.whatWeDeliver.length > 0 && (
                <div>
                  <p className="text-xs tracking-[0.15em] uppercase text-[#C4A962] mb-3 font-semibold">
                    WHAT WE DELIVER
                  </p>
                  <ul className="space-y-2">
                    {setting.whatWeDeliver.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-[#6B6B6B]">
                        <span className="text-[#B8975A] shrink-0">—</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 text-center">
            <p className="text-[#555555] max-w-3xl mx-auto leading-relaxed">
              {footer}
            </p>
            {linkText && linkHref && (
              <Link href={linkHref} className="text-[#C4A962] hover:underline text-sm inline-block mt-4">
                {linkText}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

const StrokePhases = ({
  bgColor = "bg-[#F8F5F0]",
  label = "PHASE-BASED RECOVERY",
  title = "The phases of stroke recovery — what to expect and when.",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div key={index} className="bg-white rounded-xl overflow-hidden border-l-4 border-[#B8975A] shadow-sm">
              <div className="px-6 py-4">
                <div className="mt-1">
                  <span className="text-4xl font-serif text-[#B8975A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                    {phase.phaseNumber}
                  </span>
                  
                    <h3 className="text-2xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                      {phase.phaseTitle}
                    </h3>
                    {phase.phaseSubtitle && (
                      <p className="text-xs text-[#888] mt-1 uppercase tracking-wider">
                        {phase.phaseSubtitle}
                      </p>
                    )}
                  
                </div>
              </div>
              
              <div className="px-8 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {phase.typicalCharacteristics && phase.typicalCharacteristics.length > 0 && (
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-4 font-semibold">
                        TYPICAL CHARACTERISTICS
                      </p>
                      <ul className="space-y-2">
                        {phase.typicalCharacteristics.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#555]">
                            <span className="text-[#C9A84C] shrink-0 mt-1">—</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {phase.rehabilitationFocus && phase.rehabilitationFocus.length > 0 && (
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-4 font-semibold">
                        REHABILITATION FOCUS
                      </p>
                      <ul className="space-y-2">
                        {phase.rehabilitationFocus.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#555]">
                            <span className="text-[#C9A84C] shrink-0 mt-1">—</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  {phase.familyConsiderations && phase.familyConsiderations.length > 0 && (
                    <div>
                      <p className="text-[10px] tracking-[0.15em] uppercase text-[#C9A84C] mb-4 font-semibold">
                        FAMILY CONSIDERATIONS
                      </p>
                      <ul className="space-y-2">
                        {phase.familyConsiderations.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-[#555]">
                            <span className="text-[#C9A84C] shrink-0 mt-1">—</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <div className="mt-12 text-center">
            <p className="text-[#777] max-w-3xl mx-auto leading-relaxed text-sm">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

const CoordinatedCare = ({
  bgColor = "bg-white",
  label = "COORDINATED CARE",
  title = "Coordination with your broader medical team.",
  description = "",
  specialists = [],
  protocols = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[#6B6B6B] max-w-2xl mx-auto leading-relaxed">
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_37%] gap-16 items-start">
          <div className=" space-y-8">
            {specialists.map((specialist, index) => (
              <div key={index} className=" space-y-2">
                <h3 className="text-xl font-serif text-[#1A1A1A] mb-3" >
                  {specialist.title}
                </h3>
                <p className="text-[#444] leading-relaxed text-[15.2px]">
                  {specialist.description}
                </p>
              </div>
            ))}
          </div>
          
          <div className="bg-[#FAF7F2] border border-[#B8975A] rounded-xl p-8 space-y-6">
            <div className=" pb-6 mb-6">
              <h3 className="text-[#B8975A] text-xs tracking-wide uppercase font-medium" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                Our coordination protocols
              </h3>
              <p className=" text-[#1A1A1A] font-bold ">
                For every stroke patient:
              </p>
            </div>
            <ul className="space-y-3">
              {protocols.map((protocol, index) => (
                <li key={index} className="flex items-start gap-3 text-sm text-[#444]">
                  <span className="text-[#C9A84C] shrink-0 mt-1 text-xs font-bold">✓</span>
                  <span>{protocol}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-[#E5DFD3]">
              <p className="text-xs text-[#888] leading-relaxed">
                We work with whichever providers are part of your care team — your treating neurologist, specialist discharge planners, occupational therapist, speech therapist, and any other specialists involved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const TransparentPricing = ({
  bgColor = "bg-[#F5F0E8]",
  label = "TRANSPARENT PRICING",
  title = "What post-stroke rehabilitation costs.",
  services = [],
  insurance = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <div className="text-[#C9A84C] text-xs font-semibold tracking-[0.2em] uppercase">
            {label}
          </div>
          <h2 className="text-4xl font-serif text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
        </div>

        <div className="bg-white rounded-xl overflow-hidden border border-[#E5DFD3]">
          <div className="grid grid-cols-2 gap-4 px-8 py-4 border-b border-[#E5DFD3] bg-[#FAF7F2]">
            <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9A84C]">
              SERVICE
            </div>
            <div className="text-[10px] font-semibold tracking-[0.15em] uppercase text-[#C9A84C] text-right">
              PRICE
            </div>
          </div>
          
          {services.map((service, index) => (
            <div key={index} className="grid grid-cols-2 gap-4 px-8 py-5 border-b border-[#E5DFD3] last:border-b-0">
              <div className="text-sm text-[#333333]">
                {service.name}
              </div>
              <div className="text-sm text-[#1A1A1A] text-right font-serif" >
                {service.price}
              </div>
            </div>
          ))}
        </div>

        {insurance && (
          <div className="mt-12 text-center max-w-4xl mx-auto">
            <p className="text-[#6B6B6B] leading-relaxed text-sm" dangerouslySetInnerHTML={{ __html: insurance }}>
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CareSettings;
export { StrokePhases, CoordinatedCare, TransparentPricing };
