import React from 'react';
import { Check } from 'lucide-react';

const PostnatalPlanAhead = ({
  bgColor = "bg-[#F8F5F0]",
  cardBg = "#FFFFFF",
  label = "PLAN AHEAD",
  title = "",
  description = "",
  listTitle = "",
  listItems = [],
  buttonText = "",
  image = "",
  alt = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 overflow-hidden`}>
      <div className="max-w-[1400px] mx-auto">
        {/* Centered Header */}
        <div className="text-center mb-12  mx-auto">
          <span className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[clamp(1.75rem,2vw,2.5rem)] font-serif font-normal text-[#1A1A1A] leading-[1.2]">
            {title}
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text Content (Left) */}
          <div className="space-y-8">
            <p className="text-[16px] text-[#4A4A4A] font-sans leading-relaxed">
              {description}
            </p>

            {listTitle && (
              <div className="space-y-4">
                <h4 className="text-[15px] font-sans font-bold text-[#1A1A1A]">{listTitle}</h4>
                <ul className="space-y-3">
                  {listItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-[14px] text-[#4A4A4A] font-sans">
                      <Check className="w-4 h-4 text-[#C9A961] mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <button className="inline-flex items-center gap-2 px-8 py-4 bg-[#C9A961] text-white rounded-md hover:opacity-90 transition-all text-[14px] font-sans font-bold shadow-md">
              {buttonText}
            </button>
          </div>

          {/* Image Content (Right) */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-[12px] overflow-hidden shadow-2xl">
              <img 
                src={image} 
                alt={alt} 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostnatalPlanAhead;
