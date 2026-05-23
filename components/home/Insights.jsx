import React from 'react';
import { Check } from 'lucide-react';

const Insights = ({
  title = "Dubai Health & Wellness Insights",
  subtitle = "Expert health advice and insights for Dubai residents",
  items = [
    {
      category: "Ayurveda",
      title: "Ayurveda for PCOS: A Natural Approach to Hormonal Balance",
      readTime: "5 min read"
    },
    {
      category: "Physiotherapy",
      title: "Best Treatments for Back Pain in Dubai: What Actually Works",
      readTime: "7 min read"
    },
    {
      category: "Physiotherapy",
      title: "Physiotherapy vs Chiropractic: Which is Right for You?",
      readTime: "6 min read"
    },
    {
      category: "Dermatology",
      title: "Hair Loss Causes in Dubai's Climate: Expert Insights",
      readTime: "5 min read"
    }
  ]
}) => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-[1440px] mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-[42px] font-serif font-medium text-[#184C3A] leading-[1.2]">
            {title}
          </h2>
          <p className="text-[18px] text-[#5A5A5A] font-sans max-w-2xl mx-auto">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((card, index) => (
            <div 
              key={index} 
              data-slot="card"
              className="bg-white text-[#1C1C1C] flex flex-col gap-6 rounded-xl border-none h-full shadow-lg hover:shadow-xl transition-all cursor-pointer group"
            >
              <div data-slot="card-content" className="p-6 space-y-4">
                <span 
                  data-slot="badge"
                  className="inline-flex items-center justify-center rounded-md border border-transparent px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 bg-[#184C3A] text-white"
                >
                  {card.category}
                </span>
                
                <h3 className="text-[18px] font-serif font-semibold mb-3 line-clamp-2 leading-[1.5] group-hover:text-[#184C3A] transition-colors">
                  {card.title}
                </h3>

                <div className="flex items-center justify-between text-sm text-[#5A5A5A] pt-4">
                  <span className="font-sans">{card.readTime}</span>
                  <div className="inline-flex items-center rounded-md border border-gray-100 px-2 py-0.5 text-[12px] font-medium w-fit whitespace-nowrap gap-1 text-[#1C1C1C]">
                    <Check size={12} className="text-[#184C3A] shrink-0" />
                    Medically Reviewed
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Insights;
