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
  keyFact = ""
}) => {
  const isContentFormat = content.length > 0;

  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
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

              {/* Quote */}
              {quote && (
                <blockquote className="text-2xl italic text-[#C8975F] border-l-4 border-[#C8975F] pl-6 my-8" style={{ fontFamily: 'Fraunces, serif' }}>
                  "{quote}"
                </blockquote>
              )}
            </div>

            {/* Image + Key Fact */}
            <div className={`lg:w-[45%] ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <img 
                 src={image || ""} 
                alt={alt} 
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"/>

              {/* Key Fact */}
              {keyFact && (
                <div className="mt-6 bg-white p-6 rounded-lg border border-gray-100 shadow-sm">
                  <p className="text-[12px] font-semibold tracking-[0.15em] uppercase text-[#C9A84C] mb-2">
                    KEY FACT
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {keyFact}
                  </p>
                </div>
              )}

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
