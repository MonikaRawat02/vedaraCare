import React from 'react';
import Link from 'next/link';

const SportsPhysiotherapyLocation = () => {
  return (
    <section style={{ padding: '96px 24px', background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Image Section */}
          <div className="relative rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=700&h=800&fit=crop&auto=format" 
              alt="Vedara Care sports physiotherapy clinic in JVC Dubai"
              className="w-full h-[450px] object-cover"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ background: 'linear-gradient(to bottom, rgba(27, 67, 50, 0.3), rgba(27, 67, 50, 0.7))' }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <p className="text-white text-lg font-semibold mt-2" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
                Jumeirah Village Circle, Dubai
              </p>
              <p className="text-white/80 text-sm mt-1">
                Walking distance from Circle Mall
              </p>
            </div>
          </div>

          {/* Info Section */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C9A55A' }}>
              VISIT US
            </p>
            <h2 className="text-3xl sm:text-4xl mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: '#1A1A1A' }}>
              Where sports physiotherapy happens at Vedara Care JVC.
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="text-gray-700">
                Vedara Care Polyclinic<br />
                Building X, Street 2<br />
                Jumeirah Village Circle (JVC)<br />
                Dubai, UAE
              </div>
            </div>

            {/* Phone & WhatsApp */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="text-gray-700">
                <div>+971 4 123 4567</div>
                <div className="flex items-center gap-2 mt-1 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  +971 50 123 4567 (WhatsApp preferred)
                </div>
              </div>
            </div>

            {/* Landmarks */}
            <div className="rounded-lg p-5 mb-6" style={{ background: '#FAF6EF', border: '1px solid rgba(0,0,0,0.05)' }}>
              <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C9A55A' }}>
                LANDMARKS &amp; ACCESS
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                  Walking distance from Circle Mall
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                  3 minutes from FIVE Jumeirah Village Hotel
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                  5 minutes from JSS Private School
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600 pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                  Free patient parking on-site
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                  Easy access from Sheikh Mohammed Bin Zayed Road and Al Khail Road
                </div>
              </div>
            </div>

            {/* Operating Hours */}
            <div className="mb-6">
              <p className="text-sm font-semibold mb-3" style={{ color: '#1A1A1A' }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="inline mr-1">
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12,6 12,12 16,14" />
                </svg>
                Operating Hours
              </p>
              <div className="space-y-2 text-sm text-gray-700">
                <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span>Monday – Friday</span>
                  <span style={{ fontWeight: 500 }}>9:00 AM – 9:00 PM</span>
                </div>
                <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                  <span>Saturday</span>
                  <span style={{ fontWeight: 500 }}>9:00 AM – 7:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span style={{ fontWeight: 500 }}>10:00 AM – 6:00 PM</span>
                </div>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm mb-6 px-4 py-3 rounded-lg" style={{ color: '#6B6B6B', background: '#FAF6EF', lineHeight: 1.7 }}>
              Our JVC clinic has dedicated sports physiotherapy treatment rooms, a full rehabilitation gym for sport-specific exercise progression, modern modality equipment including focused shockwave therapy, and an outdoor space for return-to-sport testing.
            </p>

            {/* Button */}
            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#1b4332' }}
            >
              Book a Sports Assessment
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsPhysiotherapyLocation;
