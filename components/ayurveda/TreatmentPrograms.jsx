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
              className={`bg-[#FAF7F2] p-8 rounded-lg relative ${program.featured ? 'ring-2 ring-[#C8975F]' : ''}`}
            >
              {program.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8975F] text-white px-4 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                  Most Common for Chronic Pain
                </div>
              )}
              
              <h3 className="text-2xl font-semibold text-[#1A1A1A] mb-2">
                {program.name}
              </h3>
              
              <div className="text-3xl text-[#1A5D4D] mb-2" style={{ fontFamily: 'var(--font-serif)' }}>
                {program.price}
              </div>
              
              <div className="text-sm text-[#C8975F] mb-6">
                {program.duration}
              </div>
              
              <div className="space-y-2 mb-6">
                {program.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 text-[#C8975F] mt-0.5 shrink-0" />
                    <span className="text-gray-700">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              
              {program.bestFor && (
                <div className="text-sm text-gray-600 mb-6">
                  <span className="font-semibold">Best for:</span> {program.bestFor}
                </div>
              )}
              
              <button className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive h-9 px-4 py-2 has-[>svg]:px-3 w-full bg-[#25D366] hover:bg-[#20BD5A] text-white">
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
