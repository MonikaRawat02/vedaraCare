import React from 'react';

const TreatmentProtocolNew = ({ bgColor, label, title, description, phases, footer }) => {
  return (
    <section className={`${bgColor} px-6 md:px-24 py-24`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="text-[#C4A962] text-sm font-semibold tracking-wider">
            {label}
          </div>
          <h2 
            className="text-4xl md:text-5xl" 
            style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
          >
            {title}
          </h2>
          <p className="text-lg text-[#6B7280]">
            {description}
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {phases.map((phase, index) => (
            <div key={index} className="relative flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div 
                  className="w-12 h-12 rounded-full bg-[#C4A962] text-white flex items-center justify-center text-xl font-bold"
                  style={{ fontFamily: 'Fraunces, serif' }}
                >
                  {phase.number}
                </div>
                <div>
                  <div className="text-xs text-[#C4A962] font-semibold">
                    {phase.phaseName}
                  </div>
                  <h4 
                    className="text-lg" 
                    style={{ fontFamily: 'Fraunces, serif', fontWeight: 500 }}
                  >
                    {phase.title}
                  </h4>
                </div>
              </div>
              
              <div className="text-sm text-[#6B7280] mb-4 font-medium">
                {phase.duration}
              </div>
              
              <ul className="space-y-2 mb-4 flex-grow">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-[#6B7280] flex items-start gap-2">
                    <span className="text-[#C4A962] mt-1 flex-shrink-0">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              
              {phase.expected && (
                <div className="bg-white p-4 rounded-lg text-xs text-[#6B7280] border-l-4 border-[#C4A962] mt-auto">
                  {phase.expected}
                </div>
              )}
            </div>
          ))}
        </div>
        
        {footer && (
          <p className="text-sm text-[#6B7280] text-center">
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};

export default TreatmentProtocolNew;
