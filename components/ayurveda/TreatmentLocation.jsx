import React from 'react';
import { MapPin, Phone, Clock } from 'lucide-react';
import Link from 'next/link';

const TreatmentLocation = ({
  bgColor = "bg-[#F5F1E8]",
  label = "VISIT US",
  title = "Where Kativasti happens at Vedara Care.",
  address = "",
  phone = "",
  email = "",
  hours = "",
  landmarks = [],
  description = "",
  buttonText = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Map Placeholder */}
          <div className="h-[400px] bg-gray-300 rounded-xl overflow-hidden">
            <div className="w-full h-full flex items-center justify-center text-gray-600">
              [Google Maps Embed - JVC Location]
            </div>
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
                  <div className="text-gray-700">
                    {address.split('<br/>').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < address.split('<br/>').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start gap-4">
                <Phone size={24} className="text-[#C8975F] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">
                    Contact
                  </div>
                  <div className="text-gray-700">
                    {phone}
                    <br />
                    {email}
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <Clock size={24} className="text-[#C8975F] shrink-0 mt-1" />
                <div>
                  <div className="font-semibold text-[#1A1A1A] mb-1">
                    Hours
                  </div>
                  <div className="text-gray-700">
                    {hours.split('<br/>').map((line, index) => (
                      <React.Fragment key={index}>
                        {line}
                        {index < hours.split('<br/>').length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Nearby Landmarks */}
            <div className="bg-white p-6 rounded-lg mb-8">
              <div className="font-semibold text-[#1A1A1A] mb-2">
                Nearby Landmarks
              </div>
              <div className="text-sm text-gray-700 space-y-1">
                {landmarks.map((landmark, index) => (
                  <div key={index}>• {landmark}</div>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-600 mb-6">
              {description}
            </p>

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
