import React from 'react';
import Link from 'next/link';

const PhysiotherapyTwoImage = ({
  bgColor = "bg-white",
  label = "SERVING ALL OF DUBAI",
  title = "Patients travel to our JVC clinic from across Dubai.",
  description1 = "",
  within10Minutes = [],
  within1520Minutes = [],
  within2030Minutes = [],
  description2 = "",
  imageAlt = "Vedara Care JVC physiotherapy clinic Dubai serving all neighbourhoods",
 
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[#d4af37] text-sm tracking-wider mb-4">{label}</div>
          <h2 className="text-4xl font-serif">{title}</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <p className="text-lg">{description1}</p>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-[#d4af37] mb-3">Within 10 minutes:</h4>
                <div className="flex flex-wrap gap-2">
                  {within10Minutes.map((item, idx) => (
                    <span key={idx} className="bg-[#f5f1e8] px-3 py-1 rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#d4af37] mb-3">Within 15-20 minutes:</h4>
                <div className="flex flex-wrap gap-2">
                  {within1520Minutes.map((item, idx) => (
                    <span key={idx} className="bg-[#f5f1e8] px-3 py-1 rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-[#d4af37] mb-3">Within 20-30 minutes:</h4>
                <div className="flex flex-wrap gap-2">
                  {within2030Minutes.map((item, idx) => (
                    <span key={idx} className="bg-[#f5f1e8] px-3 py-1 rounded-full text-sm text-gray-700">{item}</span>
                  ))}
                </div>
              </div>
            </div>
            <p>{description2}</p>
            
          </div>
          <div className="bg-gray-200 rounded-xl flex items-center justify-center aspect-square">
            <p className="text-gray-500">{imageAlt}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhysiotherapyTwoImage;
