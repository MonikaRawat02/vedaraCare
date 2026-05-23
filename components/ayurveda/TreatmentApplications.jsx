import React from 'react';
import { Check } from 'lucide-react';

const TreatmentApplications = ({
  bgColor = "bg-white",
  label = "CLINICAL APPLICATIONS",
  title = "What Kativasti actually treats — and how it integrates with conventional care.",
  description = "",
  applications = [],
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
          
          {description && (
            <p className="text-[16px] font-sans text-[#4A4A4A] max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-[1100px] mx-auto">
          {applications.map((section, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
                {section.category}
              </h3>
              
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start gap-3">
                    <Check size={16} className="text-[#C9A961] shrink-0 mt-1" />
                    <p className="text-[15px] font-sans leading-[1.6] text-[#4A4A4A]">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-16 text-[14px] text-[#6B6B6B] font-sans text-center max-w-3xl mx-auto">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentApplications;
