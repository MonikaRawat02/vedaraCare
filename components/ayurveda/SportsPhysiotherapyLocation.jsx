import React from 'react';
import Link from 'next/link';

const SportsPhysiotherapyLocation = ({ data = {} }) => {
  const {
    label = "VISIT US",
    title = "Where physiotherapy happens at Vedara Care JVC.",
    address = "Vedara Care Polyclinic<br />Building 23, District 12<br />Jumeirah Village Circle (JVC), Dubai, UAE",
    phone = "+971 4 567 8900",
    whatsapp = "+971 50 123 4567",
    landmarks = [],
    hours = {
      monday: "9:00 AM – 9:00 PM",
      tuesday: "9:00 AM – 9:00 PM",
      wednesday: "9:00 AM – 9:00 PM",
      thursday: "9:00 AM – 9:00 PM",
      friday: "9:00 AM – 9:00 PM",
      saturday: "9:00 AM – 7:00 PM",
      sunday: "10:00 AM – 6:00 PM"
    },
    description = "",
    buttonText = "Book an Assessment",
    buttonLink = "/book",
    image = "",
    mapEmbed = "",
    alt = "Vedara Care JVC clinic location"
  } = data;

  return (
    <section style={{ padding: '96px 24px', background: '#FFFFFF' }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="relative rounded-xl overflow-hidden h-[450px]">
            {mapEmbed ? (
              <iframe 
                src={mapEmbed}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Clinic Location Map"
              ></iframe>
            ) : image ? (
              <img 
                src={image} 
                alt={alt}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-200">
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
            )}
          </div>

          {/* Info Section */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C9A55A' }}>
              {label}
            </p>
            <h2 className="text-3xl sm:text-4xl mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: '#1A1A1A' }}>
              {title}
            </h2>

            {/* Address */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: address }} />
            </div>

            {/* Phone */}
            <div className="flex items-start gap-3 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9A55A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 flex-shrink-0">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
              <div className="text-gray-700">
                <div>{phone}</div>
              </div>
            </div>

            {/* WhatsApp */}
            {whatsapp && (
              <div className="flex items-start gap-4 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: '#B8922A' }}>
                  <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                </svg>
                <div>
                  <p className="text-sm font-medium mb-0.5" style={{ color: '#131010ff' }}></p>
                  <p className="text-sm" style={{ color: '#6B6455' }}>{whatsapp}</p>
                </div>
              </div>
            )}

            {/* Landmarks */}
            {landmarks.length > 0 && (
              <div className="rounded-lg p-5 mb-6" style={{ background: '#FAF6EF', border: '1px solid rgba(0,0,0,0.05)' }}>
                <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: '#C9A55A' }}>
                  LANDMARKS &amp; ACCESS
                </p>
                <div className="space-y-2">
                  {landmarks.map((landmark, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-600 pb-2" style={{ borderBottom: index < landmarks.length - 1 ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                      <span className="flex-shrink-0 w-1 h-1 rounded-full" style={{ background: '#C9A55A' }}></span>
                      {landmark}
                    </div>
                  ))}
                </div>
              </div>
            )}

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
                {typeof hours === 'object' ? (
                  <>
                    {hours.monday && (
                      <div className="flex justify-between pb-2" style={{ borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                        <span>Monday – Friday</span>
                        <span style={{ fontWeight: 500 }}>{hours.monday}</span>
                      </div>
                    )}
                    {hours.saturday && (
                      <div className="flex justify-between pb-2" style={{ borderBottom: hours.sunday ? '1px solid rgba(0,0,0,0.05)' : 'none' }}>
                        <span>Saturday</span>
                        <span style={{ fontWeight: 500 }}>{hours.saturday}</span>
                      </div>
                    )}
                    {hours.sunday && (
                      <div className="flex justify-between">
                        <span>Sunday</span>
                        <span style={{ fontWeight: 500 }}>{hours.sunday}</span>
                      </div>
                    )}
                  </>
                ) : (
                  <div>{hours}</div>
                )}
              </div>
            </div>

            {/* Description */}
            {description && (
              <p className="text-sm mb-6 px-4 py-3 rounded-lg" style={{ color: '#6B6B6B', background: '#FAF6EF', lineHeight: 1.7 }}>
                {description}
              </p>
            )}

            {/* Button */}
            <Link
              href={buttonLink}
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-white transition-all hover:opacity-90"
              style={{ background: '#1b4332' }}
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SportsPhysiotherapyLocation;
