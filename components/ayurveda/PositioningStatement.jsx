import React from 'react';

const PositioningStatement = ({
  bgColor = "bg-white",
  cardBg = "bg-[#FAF7F2]",
  label = "AN EXPLICIT POSITIONING STATEMENT",
  title = "Ayurvedic migraine treatment works alongside your medications — not instead of them.",
  cards = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-4`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase mb-4">
            {label}
          </div>
          <h2 className="text-[36px] font-medium text-[#1A1A1A] font-serif max-w-3xl mx-auto mb-6 leading-[1.2]" style={{ fontFamily: 'Fraunces, Georgia, serif' }}>
            {title}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <div 
              key={index} 
              className={`${cardBg} p-8 rounded-lg flex flex-col h-full`}
            >
              <h3 className="text-[18px] font-sans font-semibold text-[#1A1A1A] leading-tight mb-4">
                {card.title}
              </h3>
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-relaxed">
                {card.content}
              </p>
            </div>
          ))}
        </div>

        {footer && (
          <div className="max-w-3xl mx-auto text-center mt-12">
            <p className="text-[#6B6B6B] text-[16px] font-sans leading-relaxed">
              {footer}
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default PositioningStatement;
