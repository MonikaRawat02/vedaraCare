import React from 'react';
import { Star } from 'lucide-react';

const Reviews = ({
  bgColor = "bg-[#1F4538]",
  label = "What Patients Say",
  title = "Verified outcomes, in patients' own words.",
  description = "These are Google reviews from patients personally treated by Dr. Nair at our JVC clinic. Displayed in full, never edited.",
  buttonText = "Read All Reviews for Dr. Nair",
  items = [
    {
      quote: "Dr. Nair is the first doctor in Dubai who actually listened.",
      content: "I have been to four specialists for PCOS over three years. Dr. Nair spent 50 minutes with me on the first visit — asking about my sleep, my stress, my diet. Six months later, my cycles are regular for the first time in a decade.",
      author: "Aisha M.",
      details: "PCOS · 6-month programme · March 2026"
    },
    {
      quote: "After three years of back pain, I finally have a long-term answer.",
      content: "Conventional physiotherapy gave me temporary relief. The 21-day Panchakarma programme changed how I manage my lumbar disc issue. Eight months on and I have not had a single acute episode.",
      author: "Sarah K.",
      details: "Chronic Back Pain · 21-day Panchakarma · January 2026"
    },
    {
      quote: "I was skeptical about Ayurveda. I am not anymore.",
      content: "I came after two years of poor sleep and anxiety that no medication had resolved. Eight weeks of Shirodhara and Medhya Rasayana later, I sleep seven hours without interruption. The clinical precision here surprised me.",
      author: "Rohan D.",
      details: "Stress & Insomnia · 8-week programme · February 2026"
    }
  ],
  stats = [
    { value: "4.9", label: "stars on Google" },
    { value: "42", label: "reviews mentioning Dr. Nair" },
    { value: "97%", label: "would recommend her" }
  ]
}) => {
  const isDarkBg = bgColor === "bg-[#1F4538]" || bgColor === "bg-[#184C3A]";

  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className={`text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6 ${isDarkBg ? 'text-white' : 'text-[#1A1A1A]'}`}>
            {title}
          </h2>
          <p className={`text-[16px] md:text-[18px] font-sans max-w-3xl mx-auto leading-relaxed ${isDarkBg ? 'text-white/90' : 'text-[#4A4A4A]'}`}>
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 flex flex-col shadow-lg relative h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="fill-[#C9A961] text-[#C9A961]" />
                ))}
              </div>
              
              <h3 className="text-[19px] font-serif italic font-medium text-[#1A1A1A] leading-[1.35] mb-4">
                "{review.quote}"
              </h3>
              
              <p className="text-[14px] text-[#4A4A4A] font-sans leading-[1.75] mb-8 flex-grow">
                {review.content}
              </p>
              
              <div className="mt-auto pt-4 border-t border-gray-100 flex justify-between items-center">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px] text-[#1A1A1A]">
                    {review.author}
                  </p>
                  <p className="text-[12px] text-[#888888] font-sans">
                    {review.details}
                  </p>
                </div>
                <div className="w-6 h-6 bg-[#4285F4] rounded-full flex items-center justify-center text-white text-[10px] font-bold">
                  G
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-[48px] font-serif font-medium text-[#C9A961] leading-none mb-2">{stat.value}</h4>
              <p className={`text-[13px] font-sans tracking-widest ${isDarkBg ? 'text-white/70' : 'text-[#4A4A4A]/70'}`}>{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3.5 border border-[#C9A961] text-[#C9A961] font-sans font-bold text-[14px] rounded-md hover:bg-[#C9A961] hover:text-white transition-all duration-300">
            {buttonText}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
