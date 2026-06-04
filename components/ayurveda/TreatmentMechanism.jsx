import React from 'react';

const TreatmentMechanism = ({
  bgColor = "bg-[#F5F1E8]",
  label = "PRECISION OIL THERAPY",
  title = "A therapy designed for one anatomical region, performed exactly as classical texts prescribed.",
  content = [],
  quote = "",
  image = "",
  alt = "Therapy content",
  imageLeft = false,
  description = "",
  bulletPoints = [],
  additionalText = ""
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

            {/* Image */}
            <div className={`lg:w-[45%] ${imageLeft ? 'lg:order-1' : 'lg:order-2'}`}>
              <img 
                 src={image || "https://images.unsplash.com/photo-1664549760921-2198b054a592?w=600"} 
                alt={alt} 
                className="w-full h-[400px] object-cover rounded-xl shadow-lg"/>

            </div>
          </div>
        ) : (
          /* Bullet Points Format */
          <div className="max-w-3xl mx-auto">
            {description && (
              <p className="text-gray-700 leading-relaxed mb-8 text-center" dangerouslySetInnerHTML={{ __html: description }} />
            )}
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
