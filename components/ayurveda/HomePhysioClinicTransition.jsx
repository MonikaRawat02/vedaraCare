import React from 'react';
import Link from 'next/link';

const HomePhysioClinicTransition = ({
  bgColor = "bg-[#F5F1E8]",
  label = "TRANSITIONS",
  title = "From home to clinic — when ready, when valuable.",
  description = "",
  whyTransition = [],
  commonTimelines = [],
  clinicInfo = {},
  buttons = [],
  image = "",
  alt = "Clinic transition image"
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">
            {label}
          </div>
          <h2 className="text-4xl font-serif mb-6">
            {title}
          </h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div>
              <h3 className="font-serif text-lg mb-4 font-semibold">
                Why patients transition to clinic visits
              </h3>
              <ul className="space-y-3">
                {whyTransition.map((reason, idx) => (
                  <li key={idx} className="flex gap-2 text-gray-700">
                    <span className="text-[#d4af37] mt-1">•</span>
                    <span className="leading-relaxed">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-serif text-lg mb-4 font-semibold">
                Common transition timelines
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {commonTimelines.map((item, idx) => (
                  <div key={idx} className="bg-[#f5f1e8] p-4 rounded-xl">
                    <p className="font-medium text-gray-900">{item.patientType}</p>
                    <p className="text-sm text-gray-600">{item.timeline}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-[#d4af37]/30 rounded-xl p-6">
              <h3 className="font-serif text-lg mb-3 font-semibold">
                Our JVC clinic
              </h3>
              <ul className="space-y-2 text-sm text-gray-700">
                <li className="flex gap-2">
                  <span className="text-[#d4af37]">📍</span>
                  <span>{clinicInfo.address}</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-[#d4af37]">🕐</span>
                  <span>{clinicInfo.hours}</span>
                </li>
                {clinicInfo.amenities.map((amenity, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span className="text-[#d4af37]">✅</span>
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex gap-4 flex-wrap">
              {buttons.map((button, idx) => (
                button.link ? (
                  <Link key={idx} href={button.link}>
                    <button 
                      className={`px-6 py-3 rounded-full font-medium transition-all ${
                        button.variant === "primary" 
                          ? "bg-[#184c3a] text-white hover:bg-[#153a2d]" 
                          : "text-[#184c3a] hover:underline"
                      }`}
                    >
                      {button.text}
                    </button>
                  </Link>
                ) : (
                  <button 
                    key={idx}
                    className={`px-6 py-3 rounded-full font-medium transition-all ${
                      button.variant === "primary" 
                        ? "bg-[#184c3a] text-white hover:bg-[#153a2d]" 
                        : "text-[#184c3a] hover:underline"
                    }`}
                  >
                    {button.text}
                  </button>
                )
              ))}
            </div>
          </div>

          <div className="bg-gray-200 rounded-xl h-[500px] flex items-center justify-center overflow-hidden">
            {image ? (
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover rounded-xl"
              />
            ) : (
              <span className="text-gray-500 text-center px-4">
                Clinic Transition Image
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePhysioClinicTransition;
