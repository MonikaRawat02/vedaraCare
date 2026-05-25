import React from 'react';

const TreatmentProtocol = ({
  bgColor = "bg-white",
  label = "THE TREATMENT PROTOCOL",
  title = "",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24 px-6`}>
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <div 
            className="text-sm font-semibold tracking-wider mb-3"
            style={{ color: 'rgb(200, 151, 95)' }}
          >
            {label}
          </div>
          <h2 
            className="text-4xl mb-4"
            style={{ fontFamily: 'Georgia, serif', color: 'rgb(26, 26, 26)' }}
          >
            {title}
          </h2>
          {description && (
            <p 
              className="max-w-2xl mx-auto"
              style={{ color: 'rgb(107, 114, 128)' }}
            >
              {description}
            </p>
          )}
        </div>

        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div 
              key={index} 
              className="flex gap-6 border-l-4 pl-8 py-4"
              style={{ borderColor: 'rgb(200, 151, 95)' }}
            >
              <div className="flex-shrink-0">
                <div 
                  className="font-semibold text-sm mb-1"
                  style={{ color: 'rgb(200, 151, 95)' }}
                >
                  {phase.time}
                </div>
              </div>

              <div>
                <h3 
                  className="text-xl font-semibold mb-2"
                  style={{ color: 'rgb(26, 26, 26)' }}
                >
                  {phase.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: 'rgb(75, 85, 99)' }}
                >
                  {phase.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {footer && (
          <p 
            className="text-center text-sm mt-12"
            style={{ color: 'rgb(107, 114, 128)' }}
          >
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocol;
