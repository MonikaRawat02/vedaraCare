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
  floatingCard = {}
}) => {
  return (
    <>
      {/* Breadcrumb Bar - Outside and before the Hero Section */}
      <div className="bg-white border-b border-gray-100 h-12 flex items-center">
        <div className="max-w-[1280px] mx-auto px-6 w-full flex items-center gap-1.5 text-[13px]">
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

      <section className={`${bgColor} py-16 md:py-24 px-6 relative overflow-hidden`}>
        <div className="max-w-[1170px] mx-auto">
          <div className="grid lg:grid-cols-[55%_45%] gap-14 items-center">
            {/* Text Content */}
            <div className="space-y-7 order-2 lg:order-1">
              <div className="space-y-4">
                <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
                  {label}
                </span>
                <h1 className="text-[53.325px] font-serif font-normal leading-[1.08] text-[#1A1A1A] mb-7 whitespace-pre-line">
                  {title}
                </h1>
              </div>
              
              <p className="text-[18px] font-sans leading-[1.75] text-[#4A4A4A] max-w-[540px]">
                {description}
              </p>

              <div className="flex flex-wrap gap-3 pt-2">
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#1F4538] text-white rounded-md hover:bg-[#184C3A] transition-all text-[15px] font-sans font-bold shadow-lg">
                  {primaryCTA}
                </button>
                <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#4A7C59] text-white rounded-md hover:opacity-95 transition-all text-[15px] font-sans font-bold shadow-lg">
                  <MessageCircle size={20} className="fill-current" />
                  {secondaryCTA}
                </button>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-8 pt-6">
                {trustSignals.map((signal, index) => (
                  <div key={index} className="flex items-center gap-2 text-[13px] font-sans text-[#5a5a5a]">
                    <Check size={16} className="text-[#C9A961]" />
                    <span>{signal}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Image Content */}
            <div className="relative order-1 lg:order-2">
              <div className="relative aspect-[4/5] rounded-[12px] overflow-hidden shadow-2xl max-h-[628px]">
                <img 
                  src={image.startsWith('http') ? image : `/images/${image}`} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Card */}
              <div className="absolute bottom-5 left-5 bg-white shadow-xl rounded-[8px] px-5 py-4 max-w-[270px] border border-gray-50 z-10">
                <p className="text-[14px] font-sans font-medium text-[#1A1A1A] mb-0.5">
                  {floatingCard.title}
                </p>
                <p className="text-[12px] text-[#5a5a5a] font-sans leading-snug">
                  {floatingCard.subtitle}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AyurvedaHero;
