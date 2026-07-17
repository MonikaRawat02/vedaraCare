import React from 'react';

const TreatmentMechanism = ({
  bgColor = "bg-[#F5F1E8]",
  label = "PRECISION OIL THERAPY",
  title = "A therapy designed for one anatomical region, performed exactly as classical texts prescribed.",
  content = [],
  quote = "",
  image = "",
  alt = "",
  imageLeft = false,
  description = "",
  bulletPoints = [],
  additionalText = "",
  showStats = false,
  keyFact = "",
  keyFactLabel = "KEY FACT",
  keyAnatomy = [],
  whatWeRecommendAgainst = null,
  comparisonSection = null,
  coordinationApproach = null
}) => {
  const isContentFormat = content.length > 0;

  return (
    <section className={`${bgColor} py-24 px-6 relative`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Text Header - Centered */}
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl text-[#1A1A1A]" style={{ fontFamily: 'Fraunces, serif' }}>
            {title}
          </h2>
          {description && (
            <p className="text-gray-700 leading-relaxed mt-6 max-w-2xl mx-auto" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>

        {isContentFormat ? (
          /* Content + Image Grid */
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Text Content */}
            <div className={`lg:w-[55%] space-y-6 text-gray-700 leading-relaxed ${imageLeft ? 'lg:order-2' : 'lg:order-1'}`}>
              {content.map((paragraph, index) => (
                <p 
                  key={index}
                  dangerouslySetInnerHTML={{ __html: paragraph }}
                />
              ))}

              {/* What we recommend against */}
              {whatWeRecommendAgainst && (
                <div className="mt-10 p-8 rounded-xl" style={{ backgroundColor: 'rgb(255, 248, 248)', border: '1px solid rgba(212, 24, 61, 0.1)' }}>
                  <h3 className="mb-6 text-base font-semibold" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(28, 21, 10)' }}>
                    {whatWeRecommendAgainst.title}
                  </h3>
                  <div className="space-y-4">
                    {whatWeRecommendAgainst.items.map((item, index) => (
                      <div key={index} className="flex gap-3">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mt-1 shrink-0" style={{ color: 'rgb(212, 24, 61)' }}>
                          <path d="M18 6 6 18"></path>
                          <path d="m6 6 12 12"></path>
                        </svg>
                        <p className="text-gray-700 leading-relaxed">
                          <strong>{item.label}</strong>{item.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote */}
              {quote && (
                <blockquote className="text-2xl italic text-[#C8975F] border-l-4 border-[#C8975F] pl-6 my-8" style={{ fontFamily: 'Fraunces, serif' }}>
                  "{quote}"
                </blockquote>
              )}
            </div>

            {/* Image + Key Fact / Comparison */}
            <div className={`lg:w-[45%] sticky top-24 self-start ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              {image && (
                <img 
                  src={image} 
                  alt={alt} 
                  className="w-full h-[600px] object-cover rounded-xl shadow-lg"/>
              )}

              {/* Comparison Section */}
              {comparisonSection && (
                <div className="mt-6 bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-4 text-center border-r border-gray-100">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(212, 24, 61)' }}>Cortisone at 6 weeks</p>
                      <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(212, 24, 61)' }}>Better</p>
                      <p className="text-[10px] text-gray-500">Short-term relief</p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(42, 122, 74)' }}>Physio at 6 weeks</p>
                      <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(42, 122, 74)' }}>Building</p>
                      <p className="text-[10px] text-gray-500">Tendon remodelling</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 border-b border-gray-100">
                    <div className="p-4 text-center border-r border-gray-100">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(212, 24, 61)' }}>Cortisone at 12 months</p>
                      <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(212, 24, 61)' }}>Worse</p>
                      <p className="text-[10px] text-gray-500">Higher recurrence</p>
                    </div>
                    <div className="p-4 text-center">
                      <p className="text-xs font-semibold mb-2" style={{ color: 'rgb(42, 122, 74)' }}>Physio at 12 months</p>
                      <p className="text-lg font-bold mb-1" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(42, 122, 74)' }}>Better</p>
                      <p className="text-[10px] text-gray-500">Sustained recovery</p>
                    </div>
                  </div>
                  <div className="p-3 text-center bg-[#FAF8F5]">
                    <p className="text-xs text-gray-600">Based on multiple systematic reviews and meta-analyses</p>
                  </div>
                </div>
              )}

              {/* Key Fact / Key Anatomy */}
              {!comparisonSection && (keyAnatomy.length > 0 ? (
                <div className="mt-6 bg-white p-6 rounded-xl" style={{ border: "1px solid rgba(28, 21, 10, 0.08)" }}>
                  <p className="text-xs font-semibold tracking-widest uppercase mb-4" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(201, 168, 76)" }}>
                    Key anatomy
                  </p>
                  <div className="space-y-3">
                    {keyAnatomy.map((item, index) => (
                      <div 
                        key={index} 
                        className="pb-3 last:pb-0"
                        style={{ borderBottom: index < keyAnatomy.length - 1 ? "1px solid rgba(28, 21, 10, 0.06)" : "none" }}
                      >
                        <div className="text-sm font-medium mb-0.5" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(28, 21, 10)" }}>
                          {item.title}
                        </div>
                        <div className="text-xs leading-relaxed" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: "rgb(122, 110, 97)" }}>
                          {item.description}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : keyFact ? (
                <div className="mt-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-2">
                    {keyFactLabel}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {keyFact}
                  </p>
                </div>
              ) : null)}

              {/* Stats Cards */}
              {showStats && (
                <div className="mt-6 grid grid-cols-3 gap-3">
                  <div className="bg-white p-4 rounded-lg text-center border border-[#E5DFD3]">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Fraunces, serif', color: '#1A1A1A' }}>5 kg</div>
                    <div className="text-xs text-gray-600 mt-1">Natural head weight</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-[#E5DFD3]">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Fraunces, serif', color: '#1A1A1A' }}>18 kg</div>
                    <div className="text-xs text-gray-600 mt-1">Load at 30° forward</div>
                  </div>
                  <div className="bg-white p-4 rounded-lg text-center border border-[#E5DFD3]">
                    <div className="text-2xl font-bold" style={{ fontFamily: 'Fraunces, serif', color: '#1A1A1A' }}>&gt;8 hrs</div>
                    <div className="text-xs text-gray-600 mt-1">Avg daily screen time</div>
                  </div>
                </div>
              )}

              {/* Our Coordination Approach */}
              {coordinationApproach && (
                <div className="p-7 sticky top-24 mt-6" style={{border: "1.5px solid rgb(184, 151, 90)", borderRadius: "8px", background: "rgb(250, 246, 238)", fontFamily: "DM Sans, sans-serif"}}>
                  <p className="text-[10px] font-medium tracking-widest uppercase mb-5" style={{color: "rgb(184, 151, 90)"}}>
                    {coordinationApproach.label}
                  </p>
                  {coordinationApproach.subtitle && (
                    <p className="text-sm font-medium mb-4" style={{color: "rgb(28, 26, 22)"}}>
                      {coordinationApproach.subtitle}
                    </p>
                  )}
                  {coordinationApproach.items && coordinationApproach.items.length > 0 && (
                    coordinationApproach.items.map((item, index) => (
                      <div key={index} className="flex items-start gap-2 mb-3 text-sm" style={{color: "rgb(107, 100, 86)"}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-check" style={{color: "rgb(184, 151, 90)", marginTop: "2px", flexShrink: "0"}}>
                          <path d="M20 6 9 17l-5-5"></path>
                        </svg>
                        {item}
                      </div>
                    ))
                  )}
                  {coordinationApproach.bottomSection && (
                    <div className="mt-6 pt-6" style={{borderTop: "1px solid rgba(184, 151, 90, 0.2)"}}>
                      <p className="text-sm font-medium mb-3" style={{color: "rgb(28, 26, 22)"}}>
                        {coordinationApproach.bottomSection.title}
                      </p>
                      {coordinationApproach.bottomSection.items && coordinationApproach.bottomSection.items.length > 0 && (
                        coordinationApproach.bottomSection.items.map((item, index) => (
                          <p key={index} className="text-xs mb-2 leading-[1.5]" style={{color: "rgb(107, 100, 86)"}}>
                            {item}
                          </p>
                        ))
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        ) : (
          /* Bullet Points Format */
          <div className="max-w-3xl mx-auto">
            {bulletPoints.length > 0 && (
              <ul className="space-y-4 mb-8">
                {bulletPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#C8975F' }} />
                    <span className="text-gray-700 leading-relaxed" dangerouslySetInnerHTML={{ __html: point }} />
                  </li>
                ))}
              </ul>
            )}
            {additionalText && (
              <p className="text-gray-700 leading-relaxed text-center" dangerouslySetInnerHTML={{ __html: additionalText }} />
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default TreatmentMechanism;
