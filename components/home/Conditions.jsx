import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';

const Conditions = ({
  label = "From Symptom to Solution",
  title = "Conditions our JVC patients come to us for",
  categories = ["All", "Pain", "Womens Health", "Skin and Hair", "Metabolic", "Mental Wellness"],
  items = [
    { title: "Chronic Back Pain", category: "Pain", description: "Integrated treatment combining manual therapy and Ayurvedic protocols", sub: "Ayurveda and Physio" },
    { title: "PCOS", category: "Womens Health", description: "Hormonal balance through traditional Ayurvedic medicine", sub: "Ayurveda" },
    { title: "Hair Loss", category: "Skin and Hair", description: "Combined approach for hair restoration and scalp health", sub: "Dermatology and Ayurveda" },
    { title: "Neck and Shoulder Pain", category: "Pain", description: "Manual therapy and targeted rehabilitation", sub: "Physio" },
    { title: "Sports Injuries", category: "Pain", description: "Evidence-based sports injury rehabilitation", sub: "Physio" },
    { title: "Acne and Scars", category: "Skin and Hair", description: "Medical-grade acne treatment and scar reduction", sub: "Dermatology" },
    { title: "Frozen Shoulder", category: "Pain", description: "Combined manual therapy and Ayurvedic treatment", sub: "Physio and Ayurveda" },
    { title: "Stress and Anxiety", category: "Mental Wellness", description: "Holistic stress management programs", sub: "Ayurveda and Wellness" },
    { title: "Migraine", category: "Pain", description: "Root cause treatment through Ayurvedic protocols", sub: "Ayurveda" },
    { title: "Knee Pain", category: "Pain", description: "Integrated approach to joint health", sub: "Physio and Ayurveda" },
    { title: "Weight Management", category: "Metabolic", description: "Personalized weight loss programs", sub: "Wellness and Ayurveda" },
    { title: "Postnatal Recovery", category: "Womens Health", description: "Comprehensive postpartum care at clinic or home", sub: "Ayurveda and Home Healthcare" }
  ],
  footer = "Explore all 30+ conditions we treat"
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredConditions = activeCategory === "All" 
    ? items 
    : items.filter(c => c.category === activeCategory);

  return (
    <section className="bg-[#F6F1EA] py-24">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-[13px] font-sans font-semibold tracking-[0.1em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[42px] font-serif font-medium text-[#1A1A1A] leading-[1.2] mb-12">
            {title}
          </h2>

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
          {filteredConditions.map((item, index) => (
            <div 
              key={index}
              className="bg-white p-6 rounded-lg border border-[#E5E5E5] hover:shadow-lg transition-all duration-300 cursor-pointer flex flex-col h-full group"
            >
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
              </div>
              <div className="pt-6">
                <ArrowRight size={18} className="text-[#184C3A] group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#C9A961] font-sans font-medium text-[14px] cursor-pointer hover:underline">
            {footer}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Conditions;
