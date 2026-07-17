import React from 'react';

const BackPainAcuteAndPricing = ({ data }) => {
  const { acute = {}, pricing = {} } = data || {};
  
  return (
    <>
      {/* Acute Back Pain Section */}
      <section className="bg-[#F2EDE5]" style={{ padding: '96px 24px' }}>
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-xs tracking-[0.2em] uppercase mb-4" style={{ color: '#C9A84C' }}>
              {acute.label}
            </div>
            <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26,26,26)' }}>
              {acute.title}
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-12 items-start">
            <div className="space-y-6">
              <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                {acute.description1}
              </p>
              <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                {acute.description2}
              </p>
              <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                {acute.description3}
              </p>
              
              <div className="bg-white rounded-lg p-6 border-l-4 border-[#1C3D2E]">
                <p className="text-xs" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
                 <strong className='text-[#1A1A14]'>Red flags requiring A&E first (not physiotherapy):</strong> bladder or bowel changes (incontinence or retention), saddle anaesthesia (numbness in genital/anal area), progressive bilateral leg weakness, history of cancer with new back pain, history of significant trauma, fever with back pain, severe night pain unrelieved by position changes. These features may indicate cauda equina syndrome or other emergencies — A&E evaluation comes first, then physiotherapy follow-up.
                </p>
              </div>
            </div>
            
            <div>
              <div className="bg-white rounded-lg p-7 border-2 border-[#B8965A]">
                <h3 className="text-xs tracking-[0.2em] uppercase mb-3" style={{ color: '#C9A84C' }}>
                  {acute.redFlagsTitle}
                </h3>
                <p className="text-xs mb-4" style={{ color: 'rgb(107, 107, 107)' }}>
                  {acute.redFlagsDescription}
                </p>
                <ul className="flex flex-col gap-2 mb-8">
                  {(acute.redFlags || []).map((flag, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs">
                      <div className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: '#EF4444' }}></div>
                      <span style={{ color: 'rgb(107, 107, 107)' }}>{flag}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs mb-4" style={{ color: 'rgb(107, 107, 107)' }}>
                  {acute.nonRedFlagsTitle}
                </p>
                <ul className="space-y-3 mb-8">
                  {(acute.nonRedFlagsPoints || []).map((point, index) => (
                    <li key={index} className="flex items-center gap-3 text-xs">
                      <svg className="w-4 h-4 flex-shrink-0" style={{ color: 'rgb(26,77,46)' }} fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"></path>
                      </svg>
                      <span style={{ color: 'rgb(107, 107, 107)' }}>{point}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="https://wa.me/971555867466?text=Hello%20Vedara%20Care,%20I%20would%20like%20to%20inquire%20about%20back%20pain%20physiotherapy%20and%20book%20a%20same-day%20appointment."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center gap-2 transition-colors text-sm"
                  style={{ backgroundColor: '#25d366' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#20b358'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#25d366'}
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.488-.492-.67-.5h-.572c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.879 1.213 3.078c.148.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.823 9.823 0 01 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.823 0 00-3.48-8.413z"></path>
                  </svg>
                  {acute.buttonText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-white" style={{ padding: '96px 24px' }}>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="text-sm tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
              {pricing.label}
            </div>
            <h2 className="text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', color: 'rgb(26, 26, 26)' }}>
              {pricing.title}
            </h2>
          </div>

          <div className="bg-white rounded-lg border border-[#E5DFD3] overflow-hidden mb-12">
            {(pricing.services || []).map((service, index) => (
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

          <p className="text-center mb-8" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: pricing.insuranceText }} />

          <div className="flex flex-wrap justify-center gap-3">
            {(pricing.insurances || []).map((insurer, index) => (
              <span key={index} className="bg-[#FAF8F5] px-4 py-2 rounded-full text-xs border border-[#E5DFD3]" style={{ color: 'rgb(107, 107, 107)' }}>
                {insurer}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export const BackPainTreatmentPhases = ({
  bgColor = "bg-[#F8F5EE]",
  label = "TREATMENT PHASES",
  title = "The four phases of back pain physiotherapy.",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="text-center  mx-auto mb-16 space-y-4">
          <div className="text-xs tracking-[0.2em] uppercase text-[#C9A84C]">
            {label}
          </div>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
          {description && (
            <p className="text-sm text-[#6B6B6B]" style={{ lineHeight: '1.7' }}>
              {description}
            </p>
          )}
        </div>
        
        <div className="space-y-8 mb-16">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex gap-6 items-start">
              <div className="flex-shrink-0 flex flex-col items-center">
                <div 
                  className="w-16 h-16 rounded-full bg-[#1C3D2E] text-[#B8965A] flex items-center justify-center text-2xl font-bold"
                  style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                  {phase.number}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-px h-[150px]" style={{ background: '#D9C7A7' }}></div>
                )}
              </div>
              
              <div className="flex-1 bg-white rounded-xl border border-[#E5DFD3] p-7">
                <div className="flex justify-between items-start mb-5">
                  <h3 
                    className="text-lg"
                    style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                    {phase.title}
                  </h3>
                  <div className="text-xs text-[#C9A84C] font-medium px-3 py-1.5 rounded-full border border-[#C9A84C] bg-[#FAF8F5]">
                    {phase.duration}
                  </div>
                </div>
                
                <ul className="space-y-2 mb-6">
                  {phase.items.map((item, idx) => (
                    <li key={idx} className="text-sm text-[#6B6B6B] flex items-start gap-3">
                      <span className="text-[#C9A84C] mt-1 flex-shrink-0">→</span>
                      <span style={{ lineHeight: '1.6' }}>{item}</span>
                    </li>
                  ))}
                </ul>
                
                {phase.expected && (
                  <div className="pt-4 border-t border-[#E5DFD3] text-xs text-[#6B6B6B]">
                    <strong className="text-[#4A4A4A]">Expected outcome:</strong> {phase.expected}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {footer && (
          <p className="text-xs text-[#6B6B6B] text-center" style={{ lineHeight: '1.7' }}>
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export const BackPainIntegratedCare = ({
  bgColor = "bg-[#FAF8F5]",
  label = "WHEN TO CONSIDER OPTIONS",
  title = "When physiotherapy alone may not produce the outcomes you need.",
  paragraph1 = "",
  paragraph2 = "",
  noteTitle = "",
  noteDescription = "",
  linkText = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-8">
          <div className="text-xs tracking-[0.2em] uppercase text-[#C9A84C] mb-4">
            {label}
          </div>
          <h2 className="text-3xl md:text-4xl" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
        </div>
        <div className="space-y-6 mb-10">
          <p className="text-base leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
            {paragraph1}
          </p>
          <p className="text-base leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
            {paragraph2}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-[#B8965A] p-8 mb-10 text-center">
          <h3 className="text-lg mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
            {noteTitle}
          </h3>
          <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
            {noteDescription}
          </p>
        </div>
        <div className="text-center">
          <a href="/conditions/back-pain-ayurveda-dubai/" className="text-sm underline" style={{ color: 'rgb(26, 77, 46)' }}>
            {linkText}
          </a>
        </div>
      </div>
    </section>
  );
};

export default BackPainAcuteAndPricing;
