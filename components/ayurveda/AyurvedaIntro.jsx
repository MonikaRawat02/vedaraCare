import React from 'react';

const AyurvedaIntro = ({
  bgColor = "bg-[#FFFFFF]",
  label = "",
  title = "",
  blockquote = "",
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="max-w-[880px] mx-auto text-center">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
            {label}
          </p>
          
          <h2 className="mt-4 mb-10 text-[clamp(1.7rem,2.8vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]  mx-auto">
            {title}
          </h2>
          
          <blockquote className="text-[18px] leading-[1.8] text-[#1A1A1A] text-left border-l-[3px] border-[#C9A961] pl-[28px] mb-8">
            {blockquote}
          </blockquote>

          <p className="mt-8 text-[13px] text-[#6B6B6B] font-sans ">
            {footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AyurvedaIntro;
