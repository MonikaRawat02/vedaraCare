import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import Link from 'next/link';

const PostnatalLocation = ({
  bgColor = "bg-white",
  label = "WHERE WE WORK",
  title = "",
  description = "",
  address = "",
  phone = "",
  hours = "",
  landmarks = [],
  image = "",
  alt = "",
  buttonText = "",
  footerNote = "",
  reverse = false,
  mapEmbed = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1400px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Content */}
          <div className={`space-y-8 ${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <div className="space-y-4">
              <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
                {label}
              </span>
              <h2 className="text-[36px] font-serif font-normal text-[#030213] leading-[1.2]">
                {title}
              </h2>
            </div>

            <div className="space-y-6">
              <p className="text-[15px] text-[#030213] font-sans leading-relaxed opacity-80" dangerouslySetInnerHTML={{ __html: description }} />
            </div>

            {/* Clinic Card */}
            <div className="p-8 rounded-xl bg-[#FAF8F5] border border-[#E5DFD3]">
              <h4 className="text-[18px] font-sans font-bold text-[#030213] mb-4">Vedara Care Polyclinic</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <div>
                    <p className="text-[13px] text-[#030213] opacity-50 mb-1 font-sans">Address</p>
                    <p className="text-[14px] text-[#030213] font-sans" dangerouslySetInnerHTML={{ __html: address }} />
                  </div>
                  <div>
                    <p className="text-[14px] text-[#030213] font-sans flex items-center gap-2">
                      <Phone size={14} className="text-[#C9A961]" />
                      {phone}
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <p className="text-[13px] text-[#030213] opacity-50 mb-1 font-sans">Hours</p>
                    <p className="text-[14px] text-[#030213] font-sans" dangerouslySetInnerHTML={{ __html: hours }} />
                  </div>
                </div>
              </div>
            </div>

            {/* Landmarks */}
            {landmarks.length > 0 && (
              <ul className="space-y-3">
                {landmarks.map((landmark, index) => (
                  <li key={index} className="flex items-center gap-3 text-[14px] text-[#030213] font-sans opacity-80">
                    <MapPin size={16} className="text-[#E54D4D]" />
                    <span dangerouslySetInnerHTML={{ __html: landmark }} />
                  </li>
                ))}
              </ul>
            )}

            {footerNote && (
              <p className="text-[12px] text-[#030213] font-sans  opacity-60">
                {footerNote}
              </p>
            )}

            {buttonText && (
              <Link
                href="/book"
                className="inline-flex items-center justify-center px-8 py-4 bg-[#1A4D3E] text-white rounded-md hover:opacity-90 transition-all text-[14px] font-sans font-bold shadow-md"
              >
                {buttonText}
              </Link>
            )}
          </div>

          {/* Right Image or Map */}
          <div className={`relative ${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="aspect-[4/3] rounded-[24px] overflow-hidden shadow-2xl">
              {mapEmbed ? (
                <iframe 
                  src={mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={alt}
                />
              ) : (
                <img 
                  src={image} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnatalLocation;
