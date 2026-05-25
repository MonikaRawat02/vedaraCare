import React from 'react';

const TreatmentOils = ({
  bgColor = "bg-[#FAF6EF]",
  label = "",
  title = "",
  description = "",
  oils = [],
  footer = ""
}) => {
  return (
    <section className="py-24" style={{ background: 'rgb(245, 240, 232)' }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-14">
          <p 
            className="text-xs font-semibold tracking-[0.18em] uppercase mb-4"
            style={{ color: 'rgb(184, 145, 90)', fontFamily: '"DM Sans", sans-serif' }}
          >
            {label}
          </p>
          <h2 
            className="mb-4"
            style={{ 
              fontFamily: 'Fraunces, serif', 
              fontWeight: 500, 
              fontSize: 'clamp(1.5rem, 3vw, 2.1rem)', 
              color: 'rgb(28, 28, 26)', 
              lineHeight: 1.25 
            }}
          >
            {title}
          </h2>
          <p 
            className="text-sm leading-relaxed"
            style={{ color: 'rgb(107, 99, 89)', maxWidth: 600, margin: '0px auto' }}
          >
            {description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          {oils.map((oil, index) => (
            <div 
              key={index} 
              className="rounded-xl p-8"
              style={{ background: 'rgb(255, 255, 255)' }}
            >
              <h3 
                className="mb-1"
                style={{ 
                  fontFamily: 'Fraunces, serif', 
                  fontWeight: 500, 
                  fontSize: '1.2rem', 
                  color: 'rgb(184, 145, 90)' 
                }}
              >
                {oil.name}
              </h3>
              <p 
                className="text-xs mb-4"
                style={{ color: 'rgb(138, 126, 116)' }}
              >
                {oil.description}
              </p>
              <p 
                className="text-sm leading-[1.85] mb-5"
                style={{ color: 'rgb(74, 67, 60)' }}
              >
                {oil.content}
              </p>
              <p 
                className="text-xs font-semibold uppercase tracking-wider mb-2"
                style={{ color: 'rgb(184, 145, 90)' }}
              >
                Typically prescribed for:
              </p>
              <div className="flex flex-wrap gap-2">
                {oil.indication.split(', ').map((item, i) => (
                  <span 
                    key={i}
                    className="text-xs px-3 py-1 rounded-full"
                    style={{ background: 'rgb(245, 240, 232)', color: 'rgb(90, 82, 72)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p 
            className="text-sm text-center leading-relaxed"
            style={{ color: 'rgb(107, 99, 89)', maxWidth: 640, margin: '2.5rem auto 0px' }}
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentOils;
