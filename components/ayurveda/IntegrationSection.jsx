import React from 'react';

const IntegrationSection = ({ label, title, description, quote, features, image, imageAlt, primaryButtonText, primaryButtonHref, secondaryButtonText, secondaryButtonHref }) => {
  return (
    <section className="bg-white px-6 md:px-24 py-24">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider">
            {label}
          </div>
          <h2 
            className="text-4xl md:text-5xl" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
          >
            {title}
          </h2>
        </div>
        
        <div className="grid md:grid-cols-5 gap-12 items-center">
          <div className="md:col-span-3 space-y-6">
            <p className="text-lg text-[#374151]">
              {description}
            </p>
            
            {Array.isArray(quote) ? (
              quote.map((q, idx) => (
                <p key={idx} className="text-[#6B7280] leading-relaxed">
                  {q}
                </p>
              ))
            ) : (
              <p className="text-[#6B7280] leading-relaxed">
                {quote}
              </p>
            )}
            
            <div className="grid md:grid-cols-2 gap-4 pt-6">
              {features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="20" 
                    height="20" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="lucide lucide-check text-[#C4A962] mt-1 flex-shrink-0"
                  >
                    <path d="M20 6 9 17l-5-5"></path>
                  </svg>
                  <span className="text-sm text-[#6B7280]">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4 pt-6">
              {primaryButtonText && primaryButtonHref && (
                <a 
                  href={primaryButtonHref}
                  className="bg-[#030213] text-white px-8 py-4 rounded-lg hover:bg-opacity-90 transition-all font-medium"
                >
                  {primaryButtonText}
                </a>
              )}
              
              {secondaryButtonText && secondaryButtonHref && (
                <a 
                  href={secondaryButtonHref}
                  className="border-2 border-[#030213] text-[#030213] px-8 py-4 rounded-lg hover:bg-[#030213] hover:text-white transition-all font-medium"
                >
                  {secondaryButtonText}
                </a>
              )}
            </div>
          </div>
          
          <div className="md:col-span-2">
            <div className="rounded-xl overflow-hidden shadow-xl">
              <img 
                src={image || 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=800&q=80'}
                alt={imageAlt || 'Collaborative care between physiotherapy and Ayurveda teams'} 
                className="w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationSection;
