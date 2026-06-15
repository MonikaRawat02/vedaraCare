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
  // Determine if cards are solid white or light, requiring dark text
  const isWhiteCard = cardBgColor === 'bg-white' || cardBgColor === 'white' || cardBgColor === '#FFFFFF';
  
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1170px] mx-auto">
        <div className="text-center mb-16">
          <span className="text-[13px] font-sans tracking-[0.2em] uppercase block mb-4" style={{ color: '#C9A961' }}>
            {label}
          </span>
          <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6" style={{ color: isDarkText ? '#1A1A1A' : '#F5F0E8' }}>
            {title}
          </h2>
          {description && (
            <p className="text-[17px] font-sans max-w-2xl mx-auto leading-relaxed" style={{ color: isDarkText ? '#6B6B6B' : 'rgba(245, 240, 232, 0.8)' }} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {items.map((review, index) => (
            <div 
              key={index} 
              className={`rounded-xl p-8 flex flex-col relative h-full ${cardBgColor.startsWith('bg-') ? cardBgColor : ''}`}
              style={{ 
                backgroundColor: cardBgColor.startsWith('bg-') ? undefined : cardBgColor,
                border: isDarkText ? '1px solid rgba(26, 26, 26, 0.1)' : '1px solid rgba(245, 240, 232, 0.2)'
              }}
            >
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    style={{ fill: '#C9A961', color: '#C9A961' }} 
                  />
                ))}
              </div>
              
              <h3 style={{ 
                fontFamily: 'sans-serif',
                role: 'paragraph',
                fontSize: '14px', 
                fontWeight: '120', 
                margin: '0px 0px 20px',
                fontStyle: "norrmal", 
                color: (isDarkText || isWhiteCard) ? '#1A1A1A' : '#F5F0E8', 
                lineHeight: '1.35', 
                marginBottom: '16px' 
              }} dangerouslySetInnerHTML={{ __html: `"${review.quote}"` }} />
              
              {review.content && (
                <p className="text-[14px] font-sans  leading-[1.75] mb-8 flex-grow" style={{ color: (isDarkText || isWhiteCard) ? '#4A4A4A' : 'rgba(245, 240, 232, 0.7)' }} dangerouslySetInnerHTML={{ __html: review.content }} />
              )}
              
              <div className="mt-auto pt-4">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: (isDarkText || isWhiteCard) ? '#1A1A1A' : '#F5F0E8' }} dangerouslySetInnerHTML={{ __html: review.author }} />
                  <p className="text-[12px] font-sans" style={{ color: (isDarkText || isWhiteCard) ? '#C9A84C' : '#C9A84C' }} dangerouslySetInnerHTML={{ __html: review.details }} />
                  <p className="text-[12px] font-sans" style={{ color: (isDarkText || isWhiteCard) ? '#FAF7F280' : 'rgba(245, 240, 232, 0.6)' }} dangerouslySetInnerHTML={{ __html: review.details1 }} />
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
                <h4 className="text-[48px] font-serif font-medium leading-none mb-2" style={{ color: '#C9A961' }}>{stat.value}</h4>
                <p className="text-[13px] font-sans tracking-widest uppercase" style={{ color: isDarkText ? '#6B6B6B' : 'rgba(245, 240, 232, 0.7)' }}>{stat.label}</p>
              </div>
            ))}
          </div>
        )}

        {buttonText && (
          <div className="text-center">
            <button 
              className="inline-flex items-center px-8 py-3.5 border border-[#C9A961] text-[#C9A961] font-sans font-bold text-[14px] rounded-md hover:bg-[#C9A961] hover:text-white transition-all duration-300"
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
