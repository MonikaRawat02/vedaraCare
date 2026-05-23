import React from 'react';
import { Check, Home } from 'lucide-react';

const HubLocation = ({
  bgColor = "bg-white",
  label = "LOCATION",
  title = "Patients come to us from across Dubai.",
  description = "Our clinic is located in Jumeirah Village Circle, but our patients live across Dubai. For some, home healthcare is the better option.",
  mapImage = "https://images.unsplash.com/photo-1582672097782-a042ee5c3f11?w=800",
  inClinicNeighborhoods = [],
  homeHealthcareNeighborhoods = [],
  footerLinkText = "Learn about our home Ayurveda services →",
  footerLinkHref = "/home-healthcare-jvc/"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 space-y-4">
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase block">
            {label}
          </span>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[700px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Map Illustration Side */}
          <div className="relative aspect-[4/3] bg-[#FAF6EF] rounded-[12px] overflow-hidden flex items-center justify-center p-8 lg:p-12 border border-[#F0E9DF]">
            <div className="relative w-full h-full border-[12px] border-[#184C3A]/5 rounded-full flex items-center justify-center">
                <div className="bg-white p-6 rounded-xl shadow-sm border border-[#F0E9DF] text-center z-10 max-w-[240px]">
                    <div className="w-8 h-8 bg-[#184C3A]/5 rounded-full flex items-center justify-center mx-auto mb-3">
                        <div className="w-2 h-2 bg-[#184C3A] rounded-full"></div>
                    </div>
                    <p className="text-[15px] font-semibold text-[#1A1A1A] mb-1">Vedara Care, JVC</p>
                    <p className="text-[12px] text-[#6B6B6B]">Jumeirah Village Circle, Dubai</p>
                </div>
                <p className="absolute bottom-8 text-[13px] text-[#888888] text-center px-8 leading-relaxed">
                    Serving patients across all Dubai neighbourhoods + Home Healthcare city-wide
                </p>
            </div>
          </div>

          {/* Neighborhoods Side */}
          <div className="space-y-10">
            {/* In-Clinic */}
            <div>
              <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
                IN-CLINIC VISITS (COMMONLY TRAVEL FROM):
              </p>
              <div className="grid grid-cols-2 gap-2">
                {inClinicNeighborhoods.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-[14px] text-[#6B6B6B] font-sans">
                    <Check size={14} className="text-[#C9A961] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Home Healthcare */}
            <div className="pt-8 border-t border-[#F5F5F5]">
              <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase mb-4">
                HOME HEALTHCARE AVAILABLE ACROSS DUBAI:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {homeHealthcareNeighborhoods.map((item, index) => (
                  <div key={index} className="flex items-center gap-2 text-[14px] text-[#6B6B6B] font-sans">
                    <Home size={14} className="text-[#C9A961] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a href={footerLinkHref} className="text-[14px] font-sans font-semibold text-[#C9A961] hover:underline flex items-center gap-1">
                    {footerLinkText}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubLocation;
