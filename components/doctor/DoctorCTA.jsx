import React from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';

const DoctorCTA = ({ doctor }) => {
  return (
    <>
      <section className="bg-[#FAF8EF] py-24 px-6" style={{ backgroundColor: 'rgb(250, 248, 239)' }}>
        <div className="max-w-[1440px] mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* Header Content */}
            <div className="space-y-6">
              <span className="text-[13px] font-sans tracking-[0.1em] text-[#C9A961] uppercase block">
                READY WHEN YOU ARE
              </span>
              <h2 className="text-[32px] md:text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
                Book a consultation with {doctor.firstName}.
              </h2>
              <p className="text-[15px] md:text-[16px] text-[#1A1A1A] font-sans leading-relaxed max-w-2xl mx-auto">
                An Ayurvedic consultation is a diagnostic conversation, not a commitment. You will leave knowing exactly what is going on, what is recommended, and what it costs. Whether you proceed is entirely your decision.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link
                href="/book"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#184C3A] text-white rounded-md hover:bg-[#123a2c] transition-all font-sans font-bold text-[14px]"
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
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 border border-[#184C3A] text-[#184C3A] rounded-md hover:bg-[#184C3A] hover:text-white transition-all font-sans font-semibold text-[14px]"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

            {/* Subtext */}
            <p className="text-[13px] text-[#6B6B6B] font-sans pt-2">
              First consultation from AED 350 · Typical WhatsApp reply under 15 minutes
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default DoctorCTA;
