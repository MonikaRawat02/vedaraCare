import React from 'react';
import { Check } from 'lucide-react';

const TreatmentPrograms = ({
  bgColor = "bg-white",
  label = "",
  title = "",
  description = "",
  programs = [],
  footer = "",
  whatsappUrl = "https://wa.me/971500000000" // Default WhatsApp URL
}) => {
  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="text-sm uppercase tracking-wider mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            {label}
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 500 }}>
            {title}
          </h2>
          {description && (
            <p className="text-lg mt-4" style={{ color: 'rgb(107, 114, 128)' }}>
              {description}
            </p>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg relative flex flex-col"
              style={{ 
                backgroundColor: 'rgb(250, 248, 245)', 
                border: program.featured ? '2px solid rgb(201, 169, 97)' : 'none' 
              }}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A572] text-white px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  {program.featuredLabel || "Most Common"}
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-2">
                {program.name}
              </h3>
              
              <div className="text-2xl font-medium mb-2" style={{ color: 'rgb(201, 169, 97)' }}>
                {program.price}
              </div>
              
              <div className="text-sm mb-6" style={{ color: 'rgb(107, 114, 128)' }}>
                {program.duration}
              </div>
              
              <ul className="space-y-3 mb-6 flex-grow">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'rgb(201, 169, 97)' }} />
                    <span style={{ color: 'rgb(28, 28, 26)' }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              
              {program.bestFor && (
                <div 
                  className="pt-6 border-t text-sm mb-6" 
                  style={{ borderColor: 'rgb(201, 169, 97)' }}
                >
                  <span className="font-medium">Best for:</span>
                  <p className="mt-1" style={{ color: 'rgb(107, 114, 128)' }}>
                    {program.bestFor}
                  </p>
                </div>
              )}

              {/* WhatsApp Button */}
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#25D366] hover:bg-[#20BD5A] text-white text-sm font-semibold py-3 px-6 rounded-lg text-center transition-colors"
              >
                Enquire on WhatsApp
              </a>
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-center text-sm" style={{ color: 'rgb(107, 114, 128)' }}>
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentPrograms;
