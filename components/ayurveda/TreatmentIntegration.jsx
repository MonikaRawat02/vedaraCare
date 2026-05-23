import React from 'react';
import { Check } from 'lucide-react';

const TreatmentIntegration = ({
  bgColor = "bg-[#FAF6EF]",
  label = "INTEGRATED CARE AT VEDARA",
  title = "Why our back pain patients often combine Kativasti with physiotherapy.",
  description = "",
  image = "",
  features = [],
  button1Text = "",
  button2Text = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-[55%_45%] gap-12 items-start">
          {/* Text Content */}
          <div className="order-2 lg:order-1 space-y-8">
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
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <Check size={16} className="text-[#C9A961] shrink-0" />
                  <p className="text-[15px] font-sans leading-[1.6] text-[#4A4A4A]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <button className="inline-flex items-center gap-2 px-6 py-3 bg-[#1F4538] text-white rounded-md hover:opacity-90 transition-all text-[14px] font-sans font-medium">
                {button1Text}
              </button>
              <button className="inline-flex items-center gap-2 px-6 py-3 border border-[#1F4538] text-[#1F4538] rounded-md hover:bg-[#1F4538] hover:text-white transition-all text-[14px] font-sans font-medium">
                {button2Text}
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="order-1 lg:order-2">
            <div className="relative rounded-[12px] overflow-hidden shadow-lg">
              <img 
                src={image || "https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?w=600&h=450&fit=crop&auto=format"} 
                alt="Integrated Ayurveda and Physiotherapy" 
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

export default TreatmentIntegration;
