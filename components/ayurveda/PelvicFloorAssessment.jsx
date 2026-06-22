import React from 'react';

const PelvicFloorAssessment = ({ data }) => {
  const isAssessment = data.steps && data.rightCards;
  const isPostnatal = data.content && data.sideBoxes;

  return (
    <section 
      className="py-24 px-6 md:px-8"
      style={{ background: "rgb(250, 246, 238)" }}
    >
      <style>{`
        strong {
          color: rgb(26, 26, 26) !important;
        }
      `}</style>
      <div className={`${isAssessment ? 'max-w-7xl' : 'max-w-6xl'} mx-auto`}>
        <div className={`text-center ${isAssessment ? 'mb-14' : 'mb-12'}`}>
          <p 
            className="text-xs font-medium tracking-widest uppercase mb-4"
            style={{ color: "rgb(184, 151, 90)", fontFamily: "DM Sans, sans-serif" }}
          >
            {data.label}
          </p>
          <h2 
            className="text-4xl md:text-5xl mb-5"
            style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "rgb(28, 26, 22)", lineHeight: isAssessment ? 1.15 : 1.2 }}
          >
            {data.title}
          </h2>
          <p 
            className={`${isAssessment ? 'text-lg' : 'text-base'} leading-relaxed max-w-2xl mx-auto`}
            style={{ color: "rgb(107, 100, 86)", fontFamily: "DM Sans, sans-serif" }}
          >
            {data.description}
          </p>
        </div>
        
        <div 
          className="grid gap-14 items-start"
          style={{ gridTemplateColumns: isAssessment ? "minmax(0, 55fr) minmax(0, 45fr)" : "minmax(0, 1fr) minmax(0, 1fr)" }}
        >
          {/* Left Content */}
          <div 
            className="space-y-8"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            {isAssessment && (
              <p 
                className="text-lg leading-[1.8]"
                style={{ color: "rgb(28, 26, 22)" }}
                dangerouslySetInnerHTML={{ __html: data.intro }}
              />
            )}
            
            {isAssessment && data.steps.map((step, index) => (
              <div key={index}>
                <h3 
                  className="text-xl mb-3"
                  style={{ fontFamily: "Fraunces, serif", fontWeight: 500, color: "rgb(28, 26, 22)" }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-base leading-[1.8]"
                  style={{ color: "rgb(107, 100, 86)" }}
                >
                  {step.description}
                </p>
              </div>
            ))}
            
            {isPostnatal && data.content.map((section, index) => (
              <div key={index}>
                {section.heading && (
                  <h3 className="text-lg font-medium mb-3" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 26, 22)' }}>
                    {section.heading}
                  </h3>
                )}
                <p className="text-sm leading-relaxed" style={{ color: 'rgb(107, 100, 86)' }}>
                  {section.paragraph}
                </p>
              </div>
            ))}
          </div>
          
          {/* Right Content */}
          <div className="space-y-5">
            {isAssessment && data.rightCards.map((card, index) => (
              <div 
                key={index}
                className="p-6"
                style={{ 
                  border: "1.5px solid rgb(184, 151, 90)", 
                  borderRadius: "8px", 
                  background: "rgb(255, 255, 255)", 
                  fontFamily: "DM Sans, sans-serif" 
                }}
              >
                <p 
                  className="text-[10px] font-medium tracking-widest uppercase mb-4"
                  style={{ color: "rgb(184, 151, 90)" }}
                >
                  {card.label}
                </p>
                {card.title && (
                  <p 
                    className="text-sm font-medium mb-3"
                    style={{ color: "rgb(28, 26, 22)" }}
                  >
                    {card.title}
                  </p>
                )}
                {card.items.map((item, itemIndex) => (
                  <div 
                    key={itemIndex}
                    className="flex items-start gap-2 mb-2.5 text-sm"
                    style={{ color: "rgb(107, 100, 86)" }}
                  >
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="14" 
                      height="14" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="lucide lucide-check"
                      style={{ color: "rgb(184, 151, 90)", marginTop: "2px", flexShrink: 0 }}
                    >
                      <path d="M20 6 9 17l-5-5" />
                    </svg>
                    {item}
                  </div>
                ))}
              </div>
            ))}
            
            {isAssessment && (
              <button 
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-all duration-200 hover:opacity-90 active:scale-[0.98] w-full justify-center"
                style={{ 
                  background: "rgb(184, 151, 90)", 
                  color: "rgb(255, 255, 255)", 
                  fontFamily: "DM Sans, sans-serif", 
                  borderRadius: "4px" 
                }}
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  width="16" 
                  height="16" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  className="lucide lucide-calendar"
                  style={{ flexShrink: 0 }}
                >
                  <path d="M8 2v4" />
                  <path d="M16 2v4" />
                  <rect width="18" height="18" x="3" y="4" rx="2" />
                  <path d="M3 10h18" />
                </svg>
                {data.buttonText}
              </button>
            )}
            
            {isPostnatal && (
              <div className="space-y-6">
                {data.image && (
                  <div className="rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={data.image} 
                      alt={data.alt} 
                      className="w-full h-auto"
                    />
                  </div>
                )}
                
                {data.sideBoxes && data.sideBoxes.length > 0 && (
                  <div className="space-y-4">
                    {data.sideBoxes.map((box, index) => (
                      <div 
                        key={index} 
                        className="p-5 border rounded-lg" 
                        style={{ 
                          background: 'rgb(255, 255, 255)', 
                          borderColor: 'rgba(184, 151, 90, 0.3)',
                          fontFamily: 'DM Sans, sans-serif' 
                        }}
                      >
                        <p className="text-xs font-medium tracking-widest uppercase mb-3" style={{ color: 'rgb(184, 151, 90)' }}>
                          {box.label}
                        </p>
                        <div className="space-y-2">
                          {box.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start gap-2 text-xs" style={{ color: 'rgb(107, 100, 86)' }}>
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="14" 
                                height="14" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="lucide lucide-check"
                                style={{ color: "rgb(184, 151, 90)", marginTop: "2px", flexShrink: 0 }}
                              >
                                <path d="M20 6 9 17l-5-5" />
                              </svg>
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
                
                {data.readMoreText && (
                  <div className="text-left">
                    <a 
                      href={data.readMoreLink || '#'}
                      className="inline-flex items-center gap-1 text-xs font-medium tracking-wide transition-all duration-200 hover:opacity-80"
                      style={{ 
                        color: 'rgb(184, 151, 90)', 
                        fontFamily: 'DM Sans, sans-serif' 
                      }}
                    >
                      {data.readMoreText}
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="10" 
                        height="10" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="lucide lucide-arrow-right"
                        style={{ flexShrink: 0 }}
                      >
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PelvicFloorAssessment;
