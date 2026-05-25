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
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          
          <h2 className="text-4xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className={`bg-white p-8 rounded-xl relative border border-gray-200 ${program.featured ? 'ring-2 ring-[#C5A572] border-[#C5A572]' : ''} flex flex-col h-full`}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A572] text-white px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  {program.featuredLabel || "Most Common"}
                </div>
              )}
              
              <div className="flex-1">
                <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                  {program.name}
                </h3>
                
                <div className="text-3xl text-[#C5A572] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                  {program.price}
                </div>
                
                <div className="text-sm text-[#C5A572] mb-6">
                  {program.duration}
                </div>
                
                <div className="space-y-2 mb-6">
                  {program.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-2 text-sm">
                      <Check className="w-4 h-4 text-[#C5A572] mt-0.5 shrink-0" />
                      <span className="text-gray-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
                
                {program.bestFor && (
                  <div className="text-sm text-gray-600 mb-6 pt-2 border-t border-gray-200">
                    <span className="font-semibold">Best for:</span> {program.bestFor}
                  </div>
                )}
              </div>
              
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all w-full bg-[#25D366] hover:bg-[#20BD5A] text-white py-2.5 mt-auto">
                <MessageCircle className="w-4 h-4" />
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
