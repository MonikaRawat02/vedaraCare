import React from 'react';
import { Check, MessageCircle } from 'lucide-react';

const TreatmentPrograms = ({
  bgColor = "bg-white",
  label = "PROGRAMMES",
  title = "Three ways patients work with Kativasti at our Dubai clinic.",
  programs = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {label}
          </p>
          
          <h2 className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`relative p-8 rounded-[8px] border ${program.featured ? 'border-[#C9A961] bg-[#FAF6EF] scale-105 z-10' : 'border-[#E5E5E5] bg-[#FAF6EF]'}`}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A961] text-white text-[11px] font-sans font-semibold px-4 py-1 rounded-full">
                  Best Course for Chronic Pain
                </div>
              )}
              
              <h3 className="text-[20px] font-serif font-medium mb-2" style={{ color: 'rgb(31, 69, 56)' }}>
                {program.name}
              </h3>
              
              <p className="text-[24px] font-serif font-medium mb-1" style={{ color: 'rgb(31, 69, 56)' }}>
                {program.price}
              </p>
              
              <p className="text-[13px] font-sans mb-6" style={{ color: 'rgb(107, 107, 107)' }}>
                {program.duration}
              </p>
              
              <div className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2">
                    <Check size={14} className="text-[#C9A961] shrink-0 mt-0.5" />
                    <p className="text-[13px] font-sans leading-[1.5]" style={{ color: 'rgb(74, 74, 74)' }}>
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
              
              <button className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#4A7C59] text-white rounded-md hover:opacity-90 transition-all text-[13px] font-sans font-medium">
                <MessageCircle size={14} />
                {program.buttonText}
              </button>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-[13px] text-[#6B6B6B] font-sans text-center max-w-2xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentPrograms;
