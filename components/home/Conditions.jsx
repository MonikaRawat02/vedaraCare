import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Conditions = ({
  bgColor = "bg-[#F6F1EA]",
  cardBgColor = "bg-white",
  label = "From Symptom to Solution",
  title = "Conditions our JVC patients come to us for",
  description = "",
  categories = ["All", "Pain", "Womens Health", "Skin and Hair", "Metabolic", "Mental Wellness"],
  items = [],
  footer = "Explore all 30+ conditions we treat"
}) => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const filteredConditions = activeCategory === "All" 
    ? items 
    : items.filter(c => c.category === activeCategory);

  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-6">
            {title}
          </h2>
          {description && (
            <p className="text-[18px] text-[#6B6B6B] font-sans max-w-3xl mx-auto mb-12 leading-relaxed">
              {description}
            </p>
          )}

          {/* Filter Categories */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2 rounded-full text-[14px] font-sans font-medium transition-all border ${
                  activeCategory === cat 
                    ? "bg-[#184C3A] text-white border-[#184C3A]" 
                    : "bg-white text-[#4A4A4A] border-[#E5E5E5] hover:border-[#C9A961]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Conditions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {filteredConditions.map((item, index) => {
            const CardContent = (
              <>
                <div className="flex-1">
                  <span className="text-[13px] font-sans font-medium text-[#C9A961] block mb-3">
                    {item.sub}
                  </span>
                  <h3 className="text-[20px] font-serif font-medium text-[#1A1A1A] leading-tight mb-3">
                    {item.title}
                  </h3>
                  <p className="text-[15px] text-[#4A4A4A] font-sans leading-relaxed">
                    {item.description}
                  </p>
                  {item.programme && (
                    <p className="text-[13px] text-[#C9A961] font-sans font-medium mt-4">
                      {item.programme}
                    </p>
                  )}
                </div>
                <div className="pt-6">
                  <ArrowRight size={18} className="text-[#184C3A] group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </>
            );

            const cardClasses = `${cardBgColor} p-6 rounded-lg border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full group`;

            return item.link ? (
              <a key={index} href={item.link} className={cardClasses}>
                {CardContent}
              </a>
            ) : (
              <div 
                key={index}
                className={cardClasses}
              >
                {CardContent}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-10">
          <p className="text-[#C9A961] font-sans font-medium text-[15px] flex items-center justify-center gap-2">
            {footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
