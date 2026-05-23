import React from 'react';

const TreatmentOils = ({
  bgColor = "bg-[#FAF6EF]",
  label = "",
  title = "",
  description = "",
  oils = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {label}
          </p>
          
          <h2 className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          
          <p className="text-[16px] font-sans text-[#4A4A4A] max-w-2xl mx-auto">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-[1000px] mx-auto">
          {oils.map((oil, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm border" 
                 style={{ borderColor: 'rgb(229, 223, 211)' }}>
              <h3 className="text-[20px] font-serif font-medium mb-2" style={{ color: 'rgb(201, 169, 97)' }}>
                {oil.name}
              </h3>
              
              <p className="text-[13px] font-sans font-semibold mb-4" style={{ color: 'rgb(31, 69, 56)' }}>
                {oil.description}
              </p>
              
              <p className="text-[15px] font-sans leading-[1.7] mb-4" style={{ color: 'rgb(74, 74, 74)' }}>
                {oil.content}
              </p>
              
              <p className="text-[13px] font-sans" style={{ color: 'rgb(107, 107, 107)' }}>
                {oil.indication}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-[14px] text-[#6B6B6B] font-sans text-center max-w-2xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentOils;
