import React from 'react';

const ClassicalTherapies = ({
  bgColor = "bg-white",
  label = "THE FIVE ACTIONS",
  title = "The five classical therapies, explained honestly.",
  subtitle = "Not every patient needs all five. Your doctor will select which actions are appropriate for your dosha pattern, condition, and constitution.",
  items = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-20 space-y-4">
          <p className="text-[12px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block">
            {label}
          </p>
          <h2 className="text-[clamp(24px,3.5vw,40px)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
          <p className="text-[16px] text-[#6B6B6B] font-sans max-w-[600px] mx-auto leading-relaxed">
            {subtitle}
          </p>
        </div>

        <div className="space-y-6">
          {items.map((item, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={index} 
                className="group p-8 md:p-16 border border-[#EAE3D5] rounded-[4px] hover:border-[#C9A961] transition-colors bg-white"
              >
                <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center`}>
                  
                  {/* Content Side (Left for Even, Right for Odd) */}
                  <div className={`space-y-6 ${!isEven ? 'md:order-2' : 'md:order-1'}`}>
                    <div className="space-y-3">
                      <p className="text-[15px] font-sans font-medium text-[#C9A961] opacity-80 uppercase tracking-widest">
                        {item.label}
                      </p>
                      <h3 className="text-[28px] md:text-[36px] font-serif font-normal text-[#1A1A1A] leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    <p 
                      className="text-[16px] leading-[1.75] text-[#5A5A5A] font-sans"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />

                    <div className="space-y-2 pt-2">
                      <p className="text-[13px] text-[#6B6B6B] font-sans">
                        <span className="font-semibold text-[#1A1A1A] uppercase tracking-wider text-[11px] mr-2">Typical use:</span> 
                        <span dangerouslySetInnerHTML={{ __html: item.typicalUse }} />
                      </p>
                      <p className="text-[13px] text-[#6B6B6B] font-sans">
                        <span className="font-semibold text-[#1A1A1A] uppercase tracking-wider text-[11px] mr-2">Duration:</span> 
                        {item.duration}
                      </p>
                    </div>
                  </div>

                  {/* Image Side (Right for Even, Left for Odd) */}
                  <div className={`flex justify-center ${isEven ? 'md:order-2 md:justify-end' : 'md:order-1 md:justify-start'}`}>
                    {item.image ? (
                      <div className="rounded-xl overflow-hidden w-full max-w-[400px] shadow-lg">
                        <img 
                          src={item.image} 
                          alt={item.alt || item.title} 
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ) : (
                      <span className="text-[60px] md:text-[100px] font-serif font-normal text-[#EAE3D5] group-hover:text-[#C9A961]/20 transition-colors leading-none select-none">
                        {item.id}
                      </span>
                    )}
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ClassicalTherapies;
