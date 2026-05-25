import React from 'react';
import { Star } from 'lucide-react';

const TreatmentReviews = ({
  bgColor = "bg-[#2A4340]",
  label = "PATIENT STORIES",
  title = "Kativasti outcomes from our JVC clinic.",
  items = [],
  stats = [],
  buttonText = ""
}) => {
  const isLightBackground = bgColor.includes('#F7F3EC') || bgColor.includes('#FFFFFF') || bgColor.includes('white') || bgColor.includes('#FAF8F5');
  
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] uppercase block mb-4" style={{ color: isLightBackground ? 'rgb(184, 144, 30)' : 'rgb(201, 169, 97)' }}>
            {label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6" style={{ color: isLightBackground ? 'rgb(0, 0, 0)' : 'rgb(245, 240, 232)' }}>
            {title}
          </h2>
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((review, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8 flex flex-col relative h-full"
              style={{ backgroundColor: isLightBackground ? 'rgb(255, 255, 255)' : 'rgba(255, 255, 255, 0.05)' }}
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
                color: isLightBackground ? 'rgb(0, 0, 0)' : 'rgb(245, 240, 232)', 
                lineHeight: '1.35', 
                marginBottom: '16px' 
              }}>
                "{review.quote}"
              </h3>
              
              {review.content && (
                <p className="text-[14px] font-sans leading-[1.75] mb-8 flex-grow" style={{ color: isLightBackground ? 'rgba(0, 0, 0, 0.7)' : 'rgba(245, 240, 232, 0.7)' }}>
                  {review.content}
                </p>
              )}
              
              <div className="mt-auto pt-4">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: isLightBackground ? 'rgb(0, 0, 0)' : 'rgb(245, 240, 232)' }}>
                    {review.author}
                  </p>
                  <p className="text-[12px] font-sans" style={{ color: isLightBackground ? 'rgba(0, 0, 0, 0.6)' : 'rgba(245, 240, 232, 0.6)' }}>
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
                <h4 className="text-[48px] font-serif font-medium leading-none mb-2" style={{ color: isLightBackground ? 'rgb(184, 144, 30)' : 'rgb(201, 169, 97)' }}>{stat.value}</h4>
                <p className="text-[13px] font-sans tracking-widest" style={{ color: isLightBackground ? 'rgba(0, 0, 0, 0.7)' : 'rgba(245, 240, 232, 0.7)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {buttonText && (
          <div className="text-center">
            <button 
              className="inline-flex items-center px-8 py-3.5 border rounded-md hover:opacity-80 transition-all duration-300"
              style={{ 
                borderColor: isLightBackground ? 'rgb(184, 144, 30)' : 'rgb(184, 145, 90)', 
                color: isLightBackground ? 'rgb(184, 144, 30)' : 'rgb(184, 145, 90)' 
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
