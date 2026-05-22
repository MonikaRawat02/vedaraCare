import React from 'react';
import Link from 'next/link';

const DoctorHero = ({ doctor }) => {
  return (
    <section className="bg-[#F9F5EF] py-0" style={{ backgroundColor: 'rgb(250, 246, 239)' }}>
      {/* Breadcrumb - Exact as requested */}
      <div className="bg-white border-b" style={{ borderColor: 'rgb(229, 223, 211)' }}>
        <div className="max-w-[1280px] mx-auto px-6 h-12 flex items-center gap-2" style={{ fontSize: '13px', color: 'rgb(107, 107, 107)' }}>
          <Link href="/" className="hover:opacity-70 transition-opacity">Home</Link>
          <span className="opacity-35">/</span>
          <Link href="/doctors" className="hover:opacity-70 transition-opacity">Doctors</Link>
          <span className="opacity-35">/</span>
          <span style={{ color: 'rgb(26, 26, 26)' }}>{doctor.name}</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1280px] mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row gap-12 md:gap-16 items-start md:items-center">
          {/* Doctor Image Container */}
          <div className="w-full md:w-[45%] flex-shrink-0">
            <div className="relative rounded-[12px] overflow-hidden" style={{ aspectRatio: '4 / 5', backgroundColor: 'rgb(228, 216, 200)' }}>
              {/* Image placeholder - you will add your image here */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center text-[#8B7355]">
                  <div className="w-24 h-24 bg-[#C9A961]/20 rounded-full mx-auto mb-4"></div>
                  <p className="text-[14px] font-sans">Doctor Image Placeholder</p>
                </div>
              </div>
              
              {/* Bottom Info Card */}
              <div className="absolute bottom-0 left-0 right-0 m-4 p-4 rounded-[8px]" style={{ backgroundColor: 'rgb(255, 255, 255)', boxShadow: 'rgba(0, 0, 0, 0.13) 0px 4px 28px' }}>
                <p className="text-[11px] font-bold tracking-[0.13em] uppercase mb-1" style={{ color: 'rgb(201, 169, 97)' }}>
                  DHA-LICENSED • BAMS • MD (AYURVEDA)
                </p>
                <p className="text-[13px]" style={{ color: 'rgb(26, 26, 26)' }}>
                  15+ years • 5,000+ patients • License DHA-P-0048291
                </p>
              </div>
            </div>
          </div>

          {/* Doctor Info */}
          <div className="flex-1 md:w-[55%]">
            <span className="text-[13px] font-sans font-bold tracking-[0.18em] uppercase block mb-3" style={{ color: 'rgb(201, 169, 97)' }}>
              AYURVEDIC PHYSICIAN AT VEDARA CARE POLYCLINIC, JVC
            </span>
            <h1 className="text-[48px] font-serif font-medium mb-2" style={{ color: 'rgb(26, 26, 26)', lineHeight: '1.15' }}>
              {doctor.name}
            </h1>
            <p className="text-[18px] font-serif italic mb-8" style={{ color: 'rgb(201, 169, 97)' }}>
              {doctor.title}
            </p>
            
            <p className="text-[15px] font-sans leading-relaxed mb-8" style={{ color: 'rgb(74, 74, 74)' }}>
              {doctor.bio}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <Link
                href="/book"
                className="px-6 py-3 rounded-[6px] text-[14px] font-sans font-bold text-center transition-all flex items-center justify-center gap-2"
                style={{ backgroundColor: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                  <line x1="16" y1="2" x2="16" y2="6"/>
                  <line x1="8" y1="2" x2="8" y2="6"/>
                  <line x1="3" y1="10" x2="21" y2="10"/>
                </svg>
                Book a Consultation
              </Link>
              <a
                href="https://wa.me/971XXXXXXXX"
                className="px-6 py-3 rounded-[6px] text-[14px] font-sans font-bold flex items-center justify-center gap-2 transition-all"
                style={{ backgroundColor: 'rgb(74, 124, 89)', color: 'rgb(255, 255, 255)' }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Divider */}
            <div className="border-t pt-5" style={{ borderColor: 'rgb(229, 223, 211)' }}>
              {/* Bottom Info Grid with Gold Checkmark Icons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-5">
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                  DHA-Licensed Practitioner
                </div>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                  45-60 Min First Consultations
                </div>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                  Speaks English, Hindi, Malayalam, Arabic
                </div>
                <div className="flex items-center gap-2 text-[13px]" style={{ color: 'rgb(107, 107, 107)' }}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-big">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                    <path d="m9 11 3 3L22 4"/>
                  </svg>
                  Insurance Direct Billing Available
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorHero;
