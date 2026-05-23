import React from 'react';
import Link from 'next/link';

const DoctorLocation = ({ doctor }) => {
  const landmarks = [
    'Next to Circle Mall (2 min walk)',
    '3 min from FIVE Jumeirah Village Hotel',
    '5 min from JSS Private School',
    'Free covered parking available'
  ];

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Map/Image Container */}
          <div className="order-2 lg:order-1">
            <div className="rounded-[8px] p-8" style={{ backgroundColor: 'rgb(240, 233, 221)', aspectRatio: '4/3' }} role="img" aria-label={`Vedara Care Polyclinic location in Jumeirah Village Circle — ${doctor.name}'s clinic`}>
              <div className="h-full flex flex-col items-center justify-center text-center">
                <div className="mb-4">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <h3 className="text-[18px] font-serif font-medium mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(26, 26, 26)' }}>
                  Vedara Care Polyclinic
                </h3>
                <p className="text-[14px] font-sans mb-4" style={{ color: 'rgb(107, 107, 107)' }}>
                  Building 7, Street 2, JVC, Dubai
                </p>
                <a 
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[13px] font-sans font-semibold underline"
                  style={{ color: 'rgb(31, 69, 56)' }}
                >
                  Open in Google Maps
                </a>
              </div>
            </div>
          </div>

          {/* Location Info */}
          <div className="order-1 lg:order-2">
            <span className="text-[13px] font-sans font-semibold tracking-[0.1em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
              VISIT DR. NAIR
            </span>
            <h2 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '32px', fontWeight: '500', color: 'rgb(26, 26, 26)', lineHeight: '1.2', marginBottom: '24px' }}>
              Find us in JVC.
            </h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(247, 245, 240)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(160, 160, 160)" strokeWidth="2">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-sans font-semibold uppercase mb-1" style={{ color: 'rgb(160, 160, 160)' }}>
                    Address
                  </p>
                  <p className="text-[15px] font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                    Building 7, Street 2, Jumeirah Village Circle, Dubai, UAE
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(247, 245, 240)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(160, 160, 160)" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-sans font-semibold uppercase mb-1" style={{ color: 'rgb(160, 160, 160)' }}>
                    Phone
                  </p>
                  <p className="text-[15px] font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                    +971 4 400 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(247, 245, 240)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(160, 160, 160)" strokeWidth="2">
                    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-sans font-semibold uppercase mb-1" style={{ color: 'rgb(160, 160, 160)' }}>
                    WhatsApp
                  </p>
                  <p className="text-[15px] font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                    +971 50 000 0000
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-[8px] flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'rgb(247, 245, 240)' }}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgb(160, 160, 160)" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] font-sans font-semibold uppercase mb-1" style={{ color: 'rgb(160, 160, 160)' }}>
                    Hours
                  </p>
                  <p className="text-[15px] font-sans" style={{ color: 'rgb(26, 26, 26)' }}>
                    Mon-Tue, Thu 10 AM-7 PM · Fri 10 AM-1 PM, 4-8 PM · Sat 10 AM-6 PM · Sun 12-5 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="rounded-[8px] p-5 mb-6" style={{ backgroundColor: 'rgb(240, 233, 221)' }}>
              <p className="text-[14px] font-sans font-semibold mb-3" style={{ color: 'rgb(74, 74, 74)' }}>
                Nearby landmarks
              </p>
              <div className="space-y-2">
                {landmarks.map((landmark, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgb(201, 169, 97)" strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    <span className="text-[14px] font-sans" style={{ color: 'rgb(107, 107, 107)' }}>
                      {landmark}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Link
              href="/book"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded text-[14px] font-medium transition-opacity hover:opacity-90 active:scale-[0.98]"
              style={{ background: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
              Book with Dr. Nair
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorLocation;
