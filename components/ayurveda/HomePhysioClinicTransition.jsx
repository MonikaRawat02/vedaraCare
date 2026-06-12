import React from 'react';
import Link from 'next/link';

const HomePhysioClinicTransition = ({
  bgColor = "bg-white",
  label = "TRANSITIONS",
  title = "From home to clinic — when ready, when valuable.",
  description = "",
  whyTransition = [],
  commonTimelines = [],
  clinicInfo = {},
  buttons = [],
  image = "",
  alt = "Clinic transition image"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-[10px] tracking-[0.18em] font-semibold text-[#B8933F] uppercase">
            {label}
          </span>
          <h2 className="mt-3 text-[clamp(1.8rem,3.5vw,2.6rem)] text-[#1C1814] leading-tight" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
            {title}
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-[60fr_40fr] gap-16 items-start">
          <div className="space-y-6 text-[#6B635A] leading-relaxed">
            <p className="text-[1.05rem] text-[#1C1814] font-medium">
              {description}
            </p>
            
            <div>
              <h3 className="text-base text-[#1C1814] mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                Why patients transition to clinic visits
              </h3>
              <ul className="space-y-2.5">
                {whyTransition.map((reason, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8933F] mt-2 shrink-0"></span>
                    <span>{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-base text-[#1C1814] mb-3" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                Common transition timelines
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {commonTimelines.map((item, idx) => (
                  <div key={idx} className="bg-[#F7F2EA] rounded-lg p-4 border border-black/5">
                    <div className="text-xs font-semibold text-[#1C1814] mb-1">
                      {item.patientType}
                    </div>
                    <div className="text-xs text-[#B8933F]">
                      {item.timeline}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-[#1E4D3A]/6 rounded-xl p-6 border border-[#1E4D3A]/15">
              <h3 className="text-base text-[#1C1814] mb-4" style={{ fontFamily: 'var(--font-display)', fontWeight: 500 }}>
                Our JVC clinic
              </h3>
              <div className="space-y-2.5 text-sm">
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-map-pin text-[#B8933F] mt-0.5 shrink-0">
                    <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  <span>{clinicInfo.address}</span>
                </div>
                
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-clock text-[#B8933F] mt-0.5 shrink-0">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>{clinicInfo.hours}</span>
                </div>
                
                {clinicInfo.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    {idx === 0 ? (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-car text-[#B8933F] mt-0.5 shrink-0">
                        <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"></path>
                        <circle cx="7" cy="17" r="2"></circle>
                        <path d="M9 17h6"></path>
                        <circle cx="17" cy="17" r="2"></circle>
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-accessibility text-[#B8933F] mt-0.5 shrink-0">
                        <circle cx="16" cy="4" r="1"></circle>
                        <path d="m18 19 1-7-6 1"></path>
                        <path d="m5 8 3-3 5.5 3-2.36 3.5"></path>
                        <path d="M4.24 14.5a5 5 0 0 0 6.88 6"></path>
                        <path d="M13.76 17.5a5 5 0 0 0-6.88-6"></path>
                      </svg>
                    )}
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3 pt-2">
              {buttons.map((button, idx) => (
                button.link || button.href ? (
                  <Link 
                    key={idx} 
                    href={button.link || button.href} 
                    className={
                      button.variant === "primary" 
                        ? "inline-flex items-center justify-center bg-[#1E4D3A] text-[#F7F2EA] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#163d2e] transition-colors" 
                        : "text-sm text-[#1E4D3A] font-medium hover:text-[#B8933F] transition-colors flex items-center gap-1 pl-2"
                    }
                  >
                    {button.text}
                    {button.variant !== "primary" && " →"}
                  </Link>
                ) : (
                  <button 
                    key={idx}
                    className={
                      button.variant === "primary" 
                        ? "inline-flex items-center justify-center bg-[#1E4D3A] text-[#F7F2EA] px-6 py-3 rounded-full text-sm font-medium hover:bg-[#163d2e] transition-colors" 
                        : "text-sm text-[#1E4D3A] font-medium hover:text-[#B8933F] transition-colors flex items-center gap-1 pl-2"
                    }
                  >
                    {button.text}
                  </button>
                )
              ))}
            </div>
          </div>
          
          <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#1C1814]">
            {image ? (
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover opacity-60"
              />
            ) : null}
            
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3">
              <div className="bg-white rounded-xl shadow-xl p-4 text-center max-w-[220px]">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-[#B8933F]"></div>
                  <span className="text-xs font-bold text-[#1C1814]">Vedara Care Polyclinic</span>
                </div>
                <div className="text-[10px] text-[#6B635A] leading-relaxed">
                  Circle Mall Medical Centre<br />
                  Jumeirah Village Circle (JVC)<br />
                  Dubai, UAE
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap justify-center">
                <span className="bg-white/90 text-[#1C1814] text-[9px] font-medium px-2.5 py-1 rounded-full">Circle Mall</span>
                <span className="bg-white/90 text-[#1C1814] text-[9px] font-medium px-2.5 py-1 rounded-full">FIVE Hotel (3 min)</span>
                <span className="bg-white/90 text-[#1C1814] text-[9px] font-medium px-2.5 py-1 rounded-full">JSS School (5 min)</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioClinicTransition;
