import React from 'react';
import { Check } from 'lucide-react';

const PracticalGuidance = ({
  bgColor = "bg-white",
  label = "PRACTICAL GUIDANCE",
  title = "How to choose a real Ayurvedic clinic in Dubai.",
  description = 'Not every clinic offering "Ayurveda" in Dubai is offering authentic medical Ayurveda. Use this checklist.',
  checklist = [],
  buttonText = "Verify Vedara Care's DHA License",
  buttonLink = "#"
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[clamp(24px,3.5vw,42px)] font-serif font-medium text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[700px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5 mb-16">
          {checklist.map((item, index) => (
            <div key={index} className="flex gap-5 p-6 rounded-lg border border-[#E5DFD3] bg-[#FAF6EF]">
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-white border border-[#E5DFD3] flex items-center justify-center mt-0.5 shadow-sm">
                <Check className="w-4 h-4 text-[#C9A961]" />
              </div>
              <div className="space-y-2">
                <h4 className="text-[15px] font-semibold text-[#1F4538] leading-snug">
                  {item.title}
                </h4>
                <p className="text-[13.5px] leading-[1.65] text-[#6B6B6B] font-sans">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a 
            href={buttonLink}
            className="inline-flex items-center px-10 py-4 border border-[#1F4538] text-[#1F4538] font-sans font-semibold text-[15px] rounded-md hover:bg-[#1F4538] hover:text-white transition-all duration-300 shadow-sm"
          >
            {buttonText} →
          </a>
        </div>
      </div>
    </section>
  );
};

export default PracticalGuidance;
