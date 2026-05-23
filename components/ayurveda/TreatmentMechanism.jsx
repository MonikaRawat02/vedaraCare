import React from 'react';

const TreatmentMechanism = ({
  bgColor = "bg-[#F5F1E8]",
  label = "PRECISION OIL THERAPY",
  title = "A therapy designed for one anatomical region, performed exactly as classical texts prescribed.",
  content = [],
  quote = "",
  image = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-7xl mx-auto">
        
        {/* Text Header - Centered */}
        <div className="text-center mb-16">
          <div className="text-[#C8975F] text-sm font-semibold tracking-wider mb-3">
            {label}
          </div>
          <h2 className="text-4xl text-[#1A1A1A]" style={{ fontFamily: 'var(--font-serif)' }}>
            {title}
          </h2>
        </div>

        {/* Content + Image */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* Text Content */}
          <div className="lg:w-[55%] space-y-6 text-gray-700 leading-relaxed">
            {content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}

            {/* Quote */}
            {quote && (
              <blockquote className="text-2xl italic text-[#C8975F] border-l-4 border-[#C8975F] pl-6 my-8" style={{ fontFamily: 'var(--font-serif)' }}>
                {quote}
              </blockquote>
            )}
          </div>

          {/* Image */}
          <div className="lg:w-[45%]">
            <img 
              src={image || "https://images.unsplash.com/photo-1664549760921-2198b054a592?w=600"} 
              alt="Therapist preparing Kativasti treatment" 
              className="w-full h-[400px] object-cover rounded-xl shadow-lg"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentMechanism;
