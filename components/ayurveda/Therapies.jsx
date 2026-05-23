import React from 'react';
import { Zap, Sparkles, Droplets, Shield, Leaf, Wind, Activity, Flame } from 'lucide-react';

const Therapies = ({ 
  bgColor = "bg-[#F0E9DD]", 
  cardBgColor = "bg-white",
  label, 
  title, 
  description, 
  items 
}) => {
  const getIcon = (index) => {
    const icons = [
      <Zap size={20} className="text-[#C9A961]" />,
      <Sparkles size={20} className="text-[#C9A961]" />,
      <Droplets size={20} className="text-[#C9A961]" />,
      <Shield size={20} className="text-[#C9A961]" />,
      <Leaf size={20} className="text-[#C9A961]" />,
      <Wind size={20} className="text-[#C9A961]" />,
      <Activity size={20} className="text-[#C9A961]" />,
      <Flame size={20} className="text-[#C9A961]" />
    ];
    return icons[index % icons.length];
  };

  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-[1280px] mx-auto">
        <div className="text-center mb-14 space-y-0">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] text-[#C9A961] uppercase">
            {label}
          </p>
          <h2 className="mt-4 mb-4 text-[#1A1A1A] font-serif text-[clamp(1.7rem,2.8vw,2.5rem)] leading-[1.15] font-normal  mx-auto">
            {title}
          </h2>
          <p className="text-[17px] text-[#6B6B6B] font-sans max-w-[640px] mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {items.map((item, index) => (
            <div key={index} className={`${cardBgColor} p-6 rounded-[8px] border border-[#E5E5E5] hover:border-[#C9A961] transition-all duration-200 flex flex-col h-full group`}>
              <div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#C9A961]/10 mb-6 group-hover:bg-[#C9A961]/20 transition-colors">
                {getIcon(index)}
              </div>
              
              <h3 className="text-[17px] font-serif font-medium text-[#1A1A1A] mb-2">
                {item.title}
              </h3>
              
              <p className="text-[14px] text-[#6B6B6B] font-sans leading-relaxed flex-1">
                {item.description}
              </p>
              
              <div className="mt-4 pt-4 border-t border-[#F0E9DD] space-y-2">
                <p className="text-[12px] text-[#6B6B6B] font-sans leading-relaxed">
                  <span className="font-medium text-[#1A1A1A]">{item.duration}</span>
                  <span> · Best for: {item.bestFor}</span>
                </p>
                {item.link ? (
                  <a href={item.link} className="text-[12px] font-sans font-medium text-[#C9A961] flex items-center gap-1 hover:underline">
                    Learn more →
                  </a>
                ) : (
                  <button className="text-[12px] font-sans font-medium text-[#C9A961] flex items-center gap-1 hover:underline">
                    Learn more →
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Therapies;
