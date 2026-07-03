import React from 'react';
import { MapPin, Phone, Clock, CircleCheckBig } from 'lucide-react';
import Link from 'next/link';

const TreatmentLocation = ({
  bgColor = "bg-[#F5F1E8]",
  label = "VISIT US",
  title = "Where Kativasti happens at Vedara Care.",
  address = "",
  phone = "",
  email = "",
  whatsapp = "",
  hours = "",
  landmarks = [],
  image = "",
  alt = "Clinic location",
  description = "",
  buttonText = "",
  mapEmbed = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.9894568193345!2d55.20722358578439!3d25.068346479666594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f6dd72f3da587%3A0xe7ecca8687a75b72!2sVedara%20Care%20Polyclinic!5e0!3m2!1sen!2sus!4v1780727442216!5m2!1sen!2sus",
  appointmentInfo = null
}) => {
  const renderHours = () => {
    if (!hours) return null;
    
    if (typeof hours === 'string') {
      return (
        <div className="bg-[#F5F1E8] p-4 rounded-lg">
          <div className="text-xs font-semibold mb-3">Operating Hours</div>
          <div className="space-y-2">
            {hours.split('<br/>').map((line, index) => (
              <div key={index} className="text-sm text-gray-700">
                {line}
              </div>
            ))}
          </div>
         
        </div>
      );
    }
    if (typeof hours === 'object' && hours !== null) {
      return (
        <div className="bg-[#F5F1E8] p-4 rounded-lg">
          <div className="text-xs font-semibold mb-3">Operating Hours</div>
          <div className="space-y-2">
            {hours.monday && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Monday - Friday</span>
                <span className="text-gray-700">{hours.monday}</span>
              </div>
            )}
            {hours.saturday && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Saturday</span>
                <span className="text-gray-700">{hours.saturday}</span>
              </div>
            )}
            {hours.sunday && (
              <div className="flex justify-between text-sm">
                <span className="text-gray-700">Sunday</span>
                <span className="text-gray-700">{hours.sunday}</span>
              </div>
            )}
          </div>
        </div>
      );
    }
    return null;
  };

  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Map / Image */}
          <div className="lg:col-span-5">
            <div className="h-[400px] bg-gray-300 rounded-xl overflow-hidden shadow-lg">
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
                  src={image.startsWith('http') ? image : `/images/${image}`} 
                  alt={alt} 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600">
                  [Google Maps Embed - JVC Location]
                </div>
              )}
            </div>
          </div>

          {/* Location Info */}
          <div className="lg:col-span-7">
            <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
              {label}
            </div>
            
            <h2 className="text-4xl md:text-5xl text-[#1A1A1A] mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              {title}
            </h2>

            <div className="space-y-5 mb-6">
              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin size={20} className="text-[#C8975F] shrink-0 mt-1" />
                <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: address.replace(/<br\/>/g, '<br>') }} />
              </div>

              {/* Phone */}
              <div className="flex items-start gap-3">
                <Phone size={20} className="text-[#C8975F] shrink-0 mt-1" />
                <div className="text-gray-700">
                  <div className="font-medium mb-0.5">Phone</div>
                  <a href={`tel:${phone}`}>{phone}</a>
                </div>
              </div>

              {/* Appointment Info */}
              {appointmentInfo && (
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8975F] shrink-0 mt-1">
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <div>
                    <p className="text-sm font-medium" style={{ color: 'rgb(28, 26, 22)' }}>{appointmentInfo.title}</p>
                    <p className="text-sm" style={{ color: 'rgb(107, 100, 86)' }}>{appointmentInfo.subtitle}</p>
                  </div>
                </div>
              )}

              {/* Email */}
              {email && (
                <div className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#C8975F] shrink-0 mt-1">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <div className="text-gray-700">
                    <div className="font-medium mb-0.5">Email</div>
                    {email}
                  </div>
                </div>
              )}
            </div>
        
            {/* Operating Hours */}
            {(typeof hours === 'object' || typeof hours === 'string') && renderHours()}

            {/* Nearby Landmarks */}
            {landmarks && landmarks.length > 0 && (
              <div className="mt-6">
                <p className="text-xs font-semibold mb-3" style={{ color: '#6B6B6B' }}>
                  Nearby Landmarks
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {landmarks.map((landmark, index) => (
                    <div 
                      key={index} 
                      className="flex items-center gap-2 text-xs" 
                      style={{ color: '#6B6B6B' }}>
                      <CircleCheckBig 
                        size={14} 
                        style={{ color: '#C9A961' }}
                      />
                      <span>{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Description */}
            {description && (
              <p className="text-sm text-gray-600 y-6 p-3 mt-5 border-l-2 border-[#C9A961]" style={{ background: 'rgba(201, 169, 97, 0.05)' }} dangerouslySetInnerHTML={{ __html: description }} />
            )}

            {/* CTA Button */}
            <Link
              href="/book"
              className="inline-flex items-center justify-center mt-5 gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#1A4D3E] hover:bg-opacity-90 text-white px-10 py-3 w-full justify-center"
            >
              {buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentLocation;
