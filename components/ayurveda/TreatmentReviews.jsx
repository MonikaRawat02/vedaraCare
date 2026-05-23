import React from 'react';
import { Star } from 'lucide-react';

const TreatmentReviews = ({
  bgColor = "bg-[#184C3A]",
  label = "PATIENT STORIES",
  title = "Kativasti outcomes from our JVC clinic.",
  items = [],
  stats = [],
  buttonText = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] text-[#C9A961] uppercase block mb-4">
            {label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6 text-white">
            {title}
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((review, index) => (
            <div key={index} className="bg-white rounded-xl p-8 flex flex-col shadow-lg relative h-full">
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} style={{ fill: 'rgb(201, 169, 97)', color: 'rgb(201, 169, 97)' }} />
                ))}
              </div>
              
              <h3 style={{ fontFamily: 'Fraunces, Georgia, serif', fontSize: '19px', fontWeight: '500', fontStyle: 'italic', color: 'rgb(26, 26, 26)', lineHeight: '1.35', marginBottom: '16px' }}>
                "{review.quote}"
              </h3>
              
              {review.content && (
                <p className="text-[14px] font-sans leading-[1.75] mb-8 flex-grow" style={{ color: 'rgb(74, 74, 74)' }}>
                  {review.content}
                </p>
              )}
              
              <div className="mt-auto pt-4 border-t flex justify-between items-center" style={{ borderColor: 'rgb(245, 245, 245)' }}>
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: 'rgb(26, 26, 26)' }}>
                    {review.author}
                  </p>
                  <p className="text-[12px] font-sans" style={{ color: 'rgb(136, 136, 136)' }}>
                    {review.details}
                  </p>
                </div>
                <div className="w-7 h-7 rounded-full bg-[#4285F4] flex items-center justify-center text-white text-[11px] font-bold flex-shrink-0">
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
              <p className="text-[13px] font-sans tracking-widest text-white/70">{stat.label}</p>
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

export default TreatmentReviews;
