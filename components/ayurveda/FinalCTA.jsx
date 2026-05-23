import React from 'react';
import { MessageCircle } from 'lucide-react';

const FinalCTA = ({
  bgColor = "bg-[#FAF6EF]",
  label = "READY TO START?",
  title = "",
  description = "",
  button1Text = "",
  button2Text = "",
  bullets = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[880px] mx-auto text-center">
        <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
          {label}
        </p>
        
        {title && (
          <h2 className="text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2] mb-8">
            {title}
          </h2>
        )}
        
        <p className="text-[17px] font-sans leading-[1.8] text-[#6B6B6B] mb-10">
          {description}
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
          <button className="inline-flex items-center justify-center gap-2 px-8 py-6 rounded-md text-[16px] font-medium transition-all"
                  style={{ backgroundColor: 'rgb(31, 69, 56)', color: 'rgb(255, 255, 255)' }}>
            {button1Text}
          </button>
          
          <button className="inline-flex items-center justify-center gap-2 px-8 py-6 rounded-md text-[16px] font-medium transition-all border"
                  style={{ borderColor: 'rgb(37, 211, 102)', color: 'rgb(37, 211, 102)' }}>
            <MessageCircle size={24} strokeWidth={2} />
            {button2Text}
          </button>
        </div>

        <p className="text-sm text-gray-600">
          {bullets.join(' · ')}
        </p>
      </div>
    </section>
  );
};

export default FinalCTA;
