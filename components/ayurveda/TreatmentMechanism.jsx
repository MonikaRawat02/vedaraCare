import React from 'react';

const TreatmentMechanism = ({
  bgColor = "bg-white",
  label = "",
  title = "",
  description = "",
  quote = "",
  image = "",
  content = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-14 items-start">
          {/* Text Content */}
          <div className="space-y-6 order-2 lg:order-1">
            <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
              {label}
            </p>
            
            <h2 className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
              {title}
            </h2>
            
            <p className="text-[16px] font-sans leading-[1.75] text-[#4A4A4A]">
              {description}
            </p>

            <div className="space-y-4">
              {content.map((paragraph, index) => (
                <p key={index} className="text-[16px] font-sans leading-[1.75] text-[#4A4A4A]">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote */}
            {quote && (
              <blockquote className="mt-8 text-[18px] leading-[1.8] text-[#1A1A1A] text-left border-l-[3px] border-[#C9A961] pl-[28px]">
                {quote}
              </blockquote>
            )}
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[12px] overflow-hidden shadow-lg">
              <img 
                src={image || "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=450&fit=crop&auto=format"} 
                alt="Ayurvedic Treatment Mechanism" 
                className="w-full h-full object-cover"
                style={{ aspectRatio: '4 / 3' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TreatmentMechanism;
