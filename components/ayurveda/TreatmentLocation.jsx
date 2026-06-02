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
  mapImage = "",
  mapAlt = "Clinic location map"
}) => {
  const renderHours = () => {
    if (typeof hours === 'string') {
      return hours.split('<br/>').map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < hours.split('<br/>').length - 1 && <br />}
        </React.Fragment>
      ));
    }
    if (typeof hours === 'object') {
      return (
        <div className="grid grid-cols-2 gap-2">
          {hours.monday && (
        <div className="flex justify-between">
          <span className="text-gray-700">Monday - Friday</span>
          <span className="text-gray-700">{hours.monday}</span>
        </div>
      )}
      {hours.saturday && (
        <div className="flex justify-between">
          <span className="text-gray-700">Saturday</span>
          <span className="text-gray-700">{hours.saturday}</span>
        </div>
      )}
      {hours.sunday && (
        <div className="flex justify-between">
          <span className="text-gray-700">Sunday</span>
          <span className="text-gray-700">{hours.sunday}</span>
        </div>
      )}
    </div>
      );
    }
    return null;
  };

  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map / Image */}
          <div className="h-[400px] bg-gray-300 rounded-xl overflow-hidden relative">
            {image ? (
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

          {/* Location Info */}
          <div>
            <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
              {label}
            </div>
            
            <h2 className="text-4xl text-[#1A1A1A] mb-8" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
              {title}
            </h2>

            <div className="space-y-6 mb-8">
              {/* Address */}
              <div className="flex items-start gap-4">
                <MapPin size={24} className="text-[#C8975F] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">
                    Address
                  </div>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: address.replace(/<br\/>/g, '<br>') }} />
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-[#C8975F] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">
                    Contact
                  </div>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: `${phone}${whatsapp ? `<br>WhatsApp: ${whatsapp}` : ''}${email ? `<br>${email}` : ''}` }} />
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#C8975F] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">
                    Hours
                  </div>
                  <div className="text-gray-700" dangerouslySetInnerHTML={{ __html: typeof hours === 'string' ? hours.replace(/<br\/>/g, '<br>') : '' }} />
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div 
              className="p-4 rounded-[8px] mb-8" 
              style={{ 
                background: 'rgb(240, 233, 221)', 
                border: '1px solid rgb(229, 223, 211)' 
              }}
            >
              <p 
                className="text-[13px] font-semibold mb-3" 
                style={{ color: 'rgb(26, 26, 26)' }}
              >
                Nearby landmarks
              </p>
              <ul className="flex flex-col gap-2">
                {landmarks.map((landmark, index) => (
                  <li 
                    key={index} 
                    className="flex items-center gap-2 text-[13px]" 
                    style={{ color: 'rgb(107, 107, 107)' }}
                  >
                    <CircleCheckBig 
                      size={12} 
                      style={{ color: 'rgb(201, 169, 97)' }}
                    />
                    <span dangerouslySetInnerHTML={{ __html: landmark }} />
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-gray-600 mb-6" dangerouslySetInnerHTML={{ __html: description }} />

            <Link
              href="/book"
              className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all bg-[#1A5D4D] hover:bg-[#154935] text-white px-8 py-2"
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
