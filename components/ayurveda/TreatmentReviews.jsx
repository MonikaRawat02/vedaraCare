import React from 'react';
import { Star } from 'lucide-react';
import Link from 'next/link';

const TreatmentReviews = ({
  bgColor = "bg-[#2A4340]",
  cardBgColor = "rgba(255, 255, 255, 0.05)",
  statsBgColor = "rgb(24, 20, 18)",
  buttonBgColor = "rgb(28, 25, 23)",
  buttonTextColor = "white",
  buttonBorderColor = "rgb(28, 25, 23)",
  buttonHref = null,
  isDarkText = false,
  label = "PATIENT STORIES",
  title = "Kativasti outcomes from our JVC clinic.",
  description = null,
  items = [],
  stats = [],
  buttonText = "",
  useKneeStyle = false
}) => {
  // Determine if cards are solid white or light, requiring dark text
  const isWhiteCard = cardBgColor === 'bg-white' || cardBgColor === 'white' || cardBgColor === '#FFFFFF' || cardBgColor === 'rgb(255, 255, 255)' || cardBgColor === 'rgb(248, 244, 238)';
  const isWhiteStatsBg = statsBgColor === 'bg-white' || statsBgColor === 'white' || statsBgColor === '#FFFFFF' || statsBgColor === 'rgb(255, 255, 255)' || statsBgColor === 'rgb(248, 244, 238)';
  const isExternalLink = buttonHref && (buttonHref.startsWith('http://') || buttonHref.startsWith('https://') || buttonHref.startsWith('mailto:') || buttonHref.startsWith('tel:') || buttonHref.startsWith('whatsapp:'));
  
  if (useKneeStyle) {
    return (
      <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
        <div className="max-w-[1170px] mx-auto">
          <div className="text-center mb-16">
            <span className="text-[13px] font-sans tracking-[0.2em] uppercase block mb-4" style={{ color: 'rgb(184, 150, 90)' }}>
              {label}
            </span>
            <h2 className="text-[32px] md:text-[42px] font-serif font-medium leading-[1.2] mb-6" style={{ color: 'rgb(28, 25, 23)', fontFamily: 'Fraunces, serif' }}>
              {title}
            </h2>
            {description && (
              <p className="text-[17px] font-sans max-w-2xl mx-auto leading-relaxed" style={{ color: 'rgb(90, 79, 71)' }} dangerouslySetInnerHTML={{ __html: description }} />
            )}
          </div>

          {/* Reviews Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {items.map((review, index) => (
              <div 
                key={index} 
                className="rounded-xl p-8 flex flex-col relative h-full"
                style={{ 
                  backgroundColor: cardBgColor.startsWith('bg-') ? undefined : cardBgColor,
                }}
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      style={{ fill: 'rgb(184, 150, 90)', color: 'rgb(184, 150, 90)' }} 
                    />
                  ))}
                </div>
                
                <h3 style={{ 
                  fontFamily: 'Fraunces, Georgia, serif', 
                  fontSize: '14px', 
                  fontWeight: '400', 
                  fontStyle: 'normal', 
                  color: 'rgb(28, 25, 23)', 
                  lineHeight: '1.5', 
                  marginBottom: '16px' 
                }} dangerouslySetInnerHTML={{ __html: review.quote }} />
                
                <div className="mt-auto pt-4" style={{ borderTop: '1px solid rgba(28, 25, 23, 0.1)' }}>
                  <div className="space-y-0.5">
                    <p className="font-sans font-bold text-base" style={{ color: 'rgb(28, 25, 23)', fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: review.author }} />
                    <p className="text-sm font-sans" style={{ color: 'rgb(184, 150, 90)', fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: review.details }} />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Row */}
          {stats && stats.length > 0 && (
            <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 mb-16" style={{ backgroundColor: statsBgColor }}>
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <h4 className="text-4xl font-serif font-medium leading-none mb-2" style={{ color: isWhiteStatsBg ? 'rgb(201, 153, 97)' : 'rgb(184, 150, 90)', fontFamily: 'Fraunces, serif' }}>{stat.value}</h4>
                  <p className="text-xs font-sans tracking-wider" style={{ color: isWhiteStatsBg ? 'rgb(90, 79, 71)' : 'rgba(255, 255, 255, 0.8)', fontFamily: 'DM Sans, sans-serif' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          )}

          {buttonText && (
            <div className="text-center">
              {buttonHref ? (
                isExternalLink ? (
                  <a 
                    href={buttonHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-0 py-3.5 font-sans font-bold text-sm hover:opacity-90 transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'rgb(184, 150, 90)',
                      border: 'none',
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    {buttonText}
                  </a>
                ) : (
                  <Link 
                    href={buttonHref}
                    className="inline-flex items-center px-0 py-3.5 font-sans font-bold text-sm hover:opacity-90 transition-all duration-300"
                    style={{
                      backgroundColor: 'transparent',
                      color: 'rgb(184, 150, 90)',
                      border: 'none',
                      fontFamily: 'DM Sans, sans-serif'
                    }}
                  >
                    {buttonText}
                  </Link>
                )
              ) : (
                <button 
                  className="inline-flex items-center px-0 py-3.5 font-sans font-bold text-sm hover:opacity-90 transition-all duration-300"
                  style={{
                    backgroundColor: 'transparent',
                    color: 'rgb(184, 150, 90)',
                    border: 'none',
                    fontFamily: 'DM Sans, sans-serif'
                  }}
                >
                  {buttonText}
                </button>
              )}
            </div>
          )}
        </div>
      </section>
    );
  }
  
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
                fontFamily: 'Fraunces, Georgia, serif',
                fontSize: '14px', 
                fontWeight: '400', 
                fontStyle: 'normal', 
                color: (isDarkText || isWhiteCard) ? '#1A1A1A' : '#F5F0E8', 
                lineHeight: '1.5', 
                marginBottom: '17px' 
              }} dangerouslySetInnerHTML={{ __html: `"${review.quote}"` }} />
              
              {review.content && (
                <p className="text-[14px] font-sans  leading-[1.75] mb-8 flex-grow" style={{ color: (isDarkText || isWhiteCard) ? '#4A4A4A' : 'rgba(245, 240, 232, 0.7)' }} dangerouslySetInnerHTML={{ __html: review.content }} />
              )}
              
              <div className="mt-auto pt-4">
                <div className="space-y-0.5">
                  <p className="font-sans font-bold text-[15px]" style={{ color: (isDarkText || isWhiteCard) ? '#1A1A1A' : '#F5F0E8' }} dangerouslySetInnerHTML={{ __html: review.author }} />
                  <p className="text-[12px] font-sans" style={{ color: (isDarkText || isWhiteCard) ? '#141313ff' : '#C9A84C' }} dangerouslySetInnerHTML={{ __html: review.details }} />
                  <p className="text-[12px] font-sans" style={{ color: (isDarkText || isWhiteCard) ? '#f4faf280' : 'rgba(245, 240, 232, 0.6)' }} dangerouslySetInnerHTML={{ __html: review.details1 }} />
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
            {buttonHref ? (
              isExternalLink ? (
                <a 
                  href={buttonHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-8 py-3.5 border border-[#C9A961] text-[#C9A961] font-sans font-bold text-[14px] rounded-md hover:bg-[#C9A961] hover:text-white transition-all duration-300"
                >
                  {buttonText}
                </a>
              ) : (
                <Link 
                  href={buttonHref}
                  className="inline-flex items-center px-8 py-3.5 border border-[#C9A961] text-[#C9A961] font-sans font-bold text-[14px] rounded-md hover:bg-[#C9A961] hover:text-white transition-all duration-300"
                >
                  {buttonText}
                </Link>
              )
            ) : (
              <button 
                className="inline-flex items-center px-8 py-3.5 border border-[#C9A961] text-[#C9A961] font-sans font-bold text-[14px] rounded-md hover:bg-[#C9A961] hover:text-white transition-all duration-300"
              >
                {buttonText}
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentReviews;
