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
         <div className="relative aspect-[4/3] rounded-[12px] overflow-hidden border border-[#F0E9DF]">
  <iframe
    className="absolute inset-0 w-full h-full"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus"
    loading="lazy"
    allowFullScreen
    referrerPolicy="no-referrer-when-downgrade"
    title="Vedara Care Polyclinic"
  />

  <div className="absolute bottom-4 left-4 bg-white rounded-xl shadow-lg border border-[#F0E9DF] p-4 max-w-[260px]">
    <h4 className="text-[15px] font-semibold text-[#1A1A1A]">
      Vedara Care Polyclinic
    </h4>

    <p className="text-[12px] text-[#6B6B6B] mt-1">
      Jumeirah Village Circle, Dubai
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
