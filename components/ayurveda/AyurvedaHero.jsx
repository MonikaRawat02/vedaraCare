import React from 'react';
import { MessageCircle, Calendar, Check } from 'lucide-react';

const AyurvedaHero = ({
  bgColor = "bg-[#FAF6EF]",
  breadcrumb = [],
  label = "",
  title = "",
  description = "",
  image = "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&w=2070&auto=format&fit=crop",
  alt = "Ayurvedic Treatment",
  primaryCTA = "",
  secondaryCTA = "",
  trustSignals = [],
  floatingCard = {},
  patientsTreated = null
}) => {
  return (
    <>
      {/* Breadcrumb Bar - Outside and before the Hero Section */}
      <div className="bg-white border-b border-gray-100 h-12 flex items-center">
        <div className="max-w-[1280px] mx-auto px-4 sm:px-6 w-full flex items-center gap-1.5 text-[13px]">
          {breadcrumb.map((item, index) => (
            <React.Fragment key={index}>
              {item.href ? (
                <a href={item.href} className="font-sans text-[#6B6B6B] hover:text-[#184C3A] transition-colors">{item.label}</a>
              ) : (
                <span className="font-sans text-[#1A1A1A]">{item.label}</span>
              )}
              {index < breadcrumb.length - 1 && (
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#6B6B6B]">
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      <section className={`${bgColor} py-10 sm:py-16 md:py-24 px-4 sm:px-6 relative overflow-hidden`}>
        <div className="max-w-[1170px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%] gap-8 md:gap-10 lg:gap-14 items-start">
            {/* Left Column: Heading + Desc */}
            <div className="order-1 lg:col-span-1">
              <div className="space-y-5 sm:space-y-7">
                <div className="space-y-3 sm:space-y-4">
                  <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
                    {label}
                  </span>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[53.325px] font-serif font-normal leading-[1.1] sm:leading-[1.08] text-[#1A1A1A] mb-5 sm:mb-7 whitespace-pre-line">
                    {title}
                  </h1>
                </div>
                
                <p 
                  className="text-[16px] sm:text-[18px] font-sans leading-[1.75] text-[#4A4A4A] max-w-full lg:max-w-[540px]"
                  dangerouslySetInnerHTML={{ __html: description }}
                />
              </div>
              
              {/* Desktop: Buttons + Trust Signals (below desc) */}
              <div className="hidden lg:block space-y-5 sm:space-y-7 mt-5 sm:mt-7">
                <div className="flex flex-wrap gap-3 pt-2">
                  <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#1F4538] text-white rounded-md hover:bg-[#184C3A] transition-all text-[14px] sm:text-[15px] font-sans font-bold shadow-lg">
                    {primaryCTA}
                  </button>
                  <button className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-[#4A7C59] text-white rounded-md hover:opacity-95 transition-all text-[14px] sm:text-[15px] font-sans font-bold shadow-lg">
                    <MessageCircle size={20} className="fill-current" />
                    {secondaryCTA}
                  </button>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-8 pt-4 sm:pt-6">
                  {trustSignals.map((signal, index) => (
                    <div key={index} className="flex items-center gap-2 text-[13px] font-sans text-[#5a5a5a]">
                      <Check size={16} className="text-[#C9A961]" />
                      <span>{signal}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Image */}
            <div className="relative order-2 lg:col-span-1 w-full">
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden shadow-2xl max-h-[500px] sm:max-h-[628px] w-full">
                <img 
                  src={image.startsWith('http') || image.startsWith('/') ? image : `/images/${image}`} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Patients Treated Badge */}
              {patientsTreated && (
                <div className="absolute top-3 sm:top-5 right-3 sm:right-5 bg-white shadow-xl rounded-[8px] px-3 sm:px-5 py-2 sm:py-4 border border-gray-50 z-10">
                  <p className="text-[20px] sm:text-[24px] font-serif font-bold text-[#1A1A1A] mb-0.5">
                    {patientsTreated.count}
                  </p>
                  <p className="text-[11px] sm:text-[12px] font-sans text-[#5a5a5a]">
                    {patientsTreated.label}
                  </p>
                </div>
              )}
              {/* Floating Card */}
              <div className="absolute bottom-3 sm:bottom-5 left-3 sm:left-5 bg-white shadow-xl rounded-[8px] px-3 sm:px-5 py-2 sm:py-4 max-w-[220px] sm:max-w-[270px] border border-gray-50 z-10">
                <p className="text-[11px] sm:text-[12px] font-sans font-medium text-[#C9A961] mb-0.5">
                  {floatingCard.title}
                </p>
                <p 
                  className="text-[11px] sm:text-[12px] text-[#5a5a5a] font-sans leading-snug"
                  dangerouslySetInnerHTML={{ __html: floatingCard.subtitle }}
                />
              </div>
            </div>

            {/* Mobile & Tablet Only: Buttons + Trust Signals (below image) */}
            <div className="order-3 lg:hidden space-y-5 mt-5">
              <div className="flex flex-wrap gap-3 pt-2">
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F4538] text-white rounded-md hover:bg-[#184C3A] transition-all text-[14px] font-sans font-bold shadow-lg">
                  {primaryCTA}
                </button>
                <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#4A7C59] text-white rounded-md hover:opacity-95 transition-all text-[14px] font-sans font-bold shadow-lg">
                  <MessageCircle size={18} className="fill-current" />
                  {secondaryCTA}
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-4 sm:gap-x-8 pt-4">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-2 text-[13px] font-sans text-[#5a5a5a]">
                    <Check size={16} className="text-[#C9A961]" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AyurvedaHero;
