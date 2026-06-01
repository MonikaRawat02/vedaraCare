import React from 'react';

const DailyTimeline = ({
  bgColor = "bg-white",
  label = "THE DAILY REALITY",
  title = "A day in a Vedara Care Panchakarma programme.",
  subtitle = "A representative day during Pradhanakarma (main therapy phase). Days vary by phase and protocol.",
  items = []
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1000px] mx-auto">
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

        <div className="relative pl-8 md:pl-0">
          {/* Vertical Line */}
          <div className="absolute left-[35px] md:left-[80px] top-0 bottom-0 w-[1px] bg-[#EAE3D5]"></div>

          <div className="space-y-16">
            {items.map((item, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-start gap-8 md:gap-16">
                {/* Time Circle */}
                <div className="z-10 flex-shrink-0 w-[70px] h-[70px] rounded-full bg-white border border-[#C9A961] flex items-center justify-center text-[13px] font-sans font-bold text-[#C9A961] shadow-sm md:ml-[45px]">
                  {item.time}
                </div>

                {/* Content */}
                <div className="flex-1 pt-4">
                  <div className="space-y-3">
                    <h3 className="text-[22px] md:text-[26px] font-serif font-normal text-[#1A1A1A]">
                      {item.title}
                    </h3>
                    <p className="text-[15px] md:text-[16px] leading-[1.7] text-[#5A5A5A] font-sans max-w-[650px]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DailyTimeline;
