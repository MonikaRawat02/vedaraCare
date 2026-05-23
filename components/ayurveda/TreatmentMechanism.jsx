import React from 'react';

const TreatmentMechanism = ({
  bgColor = "bg-[#F0E9DD]",
  label = "THE BASICS",
  title = "A 5,000-year-old medical system, practised seriously in modern Dubai.",
  content = [],
  quote = "",
  image = "",
  imageLeft = false
}) => {
  return (
    <section className={`${bgColor} py-24 px-6 relative overflow-hidden`}>
      <div className="max-w-[1280px] mx-auto px-6 lg:px-8">
        
        {/* Text Header - Centered */}
        <div className="text-center mb-14">
          <p className="text-[13px] font-sans font-semibold tracking-[0.12em] text-[#C9A961] uppercase block mb-4">
            {label}
          </p>
          <h2 className="mx-auto" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(24px, 3.5vw, 42px)', fontWeight: '500', color: 'rgb(26, 26, 26)', maxWidth: '700px' }}>
            {title}
          </h2>
        </div>

        {/* Content + Image Grid */}
        <div className="grid lg:grid-cols-[40fr_60fr] gap-12 lg:gap-20 items-start">
          {/* Image */}
          <div className={`${imageLeft ? 'lg:order-1' : 'lg:order-2'} rounded-[12px] overflow-hidden shadow-sm relative`} style={{ aspectRatio: '3 / 4', backgroundColor: 'rgb(221, 208, 184)' }}>
            <img 
              src={image || "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=800"} 
              alt={title} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Content */}
          <div className={`${imageLeft ? 'lg:order-2' : 'lg:order-1'} py-2`}>
            <div className="space-y-5 text-[16.5px] font-sans leading-[1.8]" style={{ color: 'rgb(26, 26, 26)' }}>
              {content.map((paragraph, index) => (
                <p key={index}>
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Quote */}
            {quote && (
              <div className="mt-10 pt-8 border-t" style={{ borderColor: 'rgb(229, 223, 211)' }}>
                <blockquote className="text-[24px] italic leading-[1.4]" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(201, 169, 97)' }}>
                  "{quote}"
                </blockquote>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default TreatmentMechanism;
