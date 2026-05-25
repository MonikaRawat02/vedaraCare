import React from 'react';
import { Star } from 'lucide-react';

const TreatmentReviews = ({
  bgColor = "bg-[#2A4340]",
  cardBgColor = "rgba(255, 255, 255, 0.05)",
  isDarkText = false,
  label = "PATIENT STORIES",
  title = "Kativasti outcomes from our JVC clinic.",
  description = null,
  items = [],
  stats = [],
  buttonText = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] uppercase block mb-4" style={{ color: 'rgb(201, 169, 97)' }}>
            {label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6" style={{ color: 'rgb(245, 240, 232)' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[17px] font-sans max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgba(245, 240, 232, 0.8)' }}>
              {description}
            </p>
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((review, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 flex flex-col relative h-full ${cardBgColor.startsWith('bg-') ? cardBgColor : ''}`}
              style={{ backgroundColor: cardBgColor.startsWith('bg-') ? undefined : cardBgColor }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    style={{ fill: 'rgb(184, 145, 90)', color: 'rgb(184, 145, 90)' }} 
                  />
                ))}
              </div>
              
              <h3 style={{ 
                fontFamily: 'Fraunces, Georgia, serif', 
                fontSize: '19px', 
                fontWeight: '500', 
                fontStyle: 'italic', 
                color: isDarkText ? '#1A1A1A' : 'rgb(245, 240, 232)', 
                lineHeight: '1.35', 
                marginBottom: '16px' 
              }}>
                "{review.quote}"
              </h3>
              
              {review.content && (
                <p className="text-[14px] font-sans leading-[1.75] mb-8 flex-grow" style={{ color: 'rgba(245, 240, 232, 0.7)' }}>
                  {review.content}
                </p>
              )}
              
              <div className="mt-auto pt-4">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: isDarkText ? '#1A1A1A' : 'rgb(245, 240, 232)' }}>
                    {review.author}
                  </p>
                  <p className="text-[12px] font-sans" style={{ color: isDarkText ? '#6B6B6B' : 'rgba(245, 240, 232, 0.6)' }}>
                    {review.details}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        {stats && stats.length > 0 && (
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <h4 className="text-[48px] font-serif font-medium leading-none mb-2" style={{ color: 'rgb(201, 169, 97)' }}>{stat.value}</h4>
                <p className="text-[13px] font-sans tracking-widest" style={{ color: 'rgba(245, 240, 232, 0.7)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {buttonText && (
          <div className="text-center">
            <button 
              className="inline-flex items-center px-8 py-3.5 border rounded-md hover:opacity-80 transition-all duration-300"
              style={{ 
                borderColor: 'rgb(184, 145, 90)', 
                color: 'rgb(184, 145, 90)' 
              }}
            >
              {buttonText}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentReviews;
