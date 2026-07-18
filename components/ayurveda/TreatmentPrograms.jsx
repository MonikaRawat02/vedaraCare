import React from 'react';
import { Check } from 'lucide-react';

const TreatmentPrograms = ({
  bgColor = "bg-white",
  cardBg = "rgb(250, 248, 245)",
  buttonBg = "#25D366",
  buttonText = "Book Assessment",
  label = "",
  title = "",
  description = "",
  programs = [],
  footer = "",
  whatsappNumber = "+971555867466",
  defaultWhatsappMessage = "Hi, I'd like to inquire about treatment programmes at your clinic."
}) => {
  // Helper function to build WhatsApp URL
  const buildWhatsAppUrl = (program) => {
    const message = program.whatsappMessage || defaultWhatsappMessage;
    const cleanNumber = whatsappNumber.replace(/\s/g, '');
    if (message) {
      return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    }
    return `https://wa.me/${cleanNumber}`;
  };


  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <div className="text-sm uppercase tracking-wider mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            {label}
          </div>
          <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '2.5rem', fontWeight: 500 }}>
            {title}
          </h2>
          {description && (
            <p className="text-lg mt-4" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg relative flex flex-col"
              style={{ 
                backgroundColor: cardBg, 
                border: program.featured ? '2px solid rgb(201, 168, 76)' : '1px solid rgb(201, 168, 76)' 
              }}
            >
              {program.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C5A572] text-white px-4 py-1 rounded-md text-[10px] font-bold uppercase tracking-widest whitespace-nowrap">
                  {program.featuredLabel || "Most Common"}
                </div>
              )}
              
              <h3 className="text-xl font-medium mb-2" dangerouslySetInnerHTML={{ __html: program.name }} />
              
              <div className="text-2xl font-medium mb-2" style={{ color: 'rgb(201, 168, 76)' }} dangerouslySetInnerHTML={{ __html: program.price }} />
              
              <div className="text-sm mb-6" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: program.duration }} />
              
              <ul className="space-y-3 mb-6 flex-grow">
                {program.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <Check className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: 'rgb(201, 168, 76)' }} />
                    <span 
                      style={{ color: 'rgb(28, 28, 26)' }}
                      dangerouslySetInnerHTML={{ __html: feature }}
                    />
                  </li>
                ))}
              </ul>
              
              {program.bestFor && (
                <div 
                  className="pt-6 border-t text-sm mb-6" 
                  style={{ borderColor: 'rgb(201, 168, 76)' }}
                >
                  <span className="font-medium">Best for:</span>
                  <p 
                    className="mt-1" 
                    style={{ color: 'rgb(107, 114, 128)' }}
                    dangerouslySetInnerHTML={{ __html: program.bestFor }}
                  />
                </div>
              )}
                                   
              {/* Dynamic Button or WhatsApp Button */}
      {!program.hideButton && (
        <a
          href={buildWhatsAppUrl(program)}
          target="_blank"
          rel="noopener noreferrer"
          className={`w-full text-white text-sm font-semibold py-3 px-6 rounded-lg text-center transition-colors ${
            !(buttonBg?.startsWith('#') || buttonBg?.startsWith('rgb') || buttonBg?.startsWith('rgba'))
              ? buttonBg
              : ''
          }`}
          style={{
            backgroundColor: buttonBg?.startsWith('#') ||
              buttonBg?.startsWith('rgb') ||
              buttonBg?.startsWith('rgba')
              ? buttonBg
              : undefined
          }}>
          {program.buttonText || buttonText}
        </a>
      )}
            </div>
          ))}
        </div>

        {footer && (
          <p className="mt-12 text-center text-sm" style={{ color: 'rgb(107, 114, 128)' }} dangerouslySetInnerHTML={{ __html: footer }} />
        )}
      </div>
    </section>
  );
};

export default TreatmentPrograms;
