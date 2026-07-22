import React from 'react';

const PanchakarmaTimeline = ({
  bgColor = "bg-[#FAF7F2]",
  label = "THE PRACTICAL REALITY",
  title = "What 14 days of Panchakarma actually looks like for a JVC resident.",
  subtitle = "The honest, practical version. Not the brochure version.",
  phases = [],
  footerNote = ""
}) => {
  return (
    <section className={`py-24 px-6 ${bgColor}`}>
      <div className="max-w-7xl mx-auto px 6">
        <div className="text-center mb-16 space-y-4">
          <p 
            className="text-sm font-medium tracking-wider uppercase"
            style={{ color: '#C9A567', fontFamily: '"DM Sans", sans-serif' }}
          >
            {label}
          </p>
          <h2 
            className="text-3xl md:text-4xl text-gray-900 mx-auto max-w-6xl"
            style={{ 
              fontFamily: 'Fraunces, serif', 
              fontWeight: '500', 
              lineHeight: '1.2' 
            }}
          >
            {title}
          </h2>
          <p className="text-lg text-gray-600 font-sans">
            {subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-16 ">
          {phases.map((phase, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl p-8 flex flex-col gap-6 shadow-sm border border-gray-100"
            >
              <div>
                <p 
                  className="text-sm font-medium mb-3"
                  style={{ color: '#C9A567', fontFamily: '"DM Sans", sans-serif' }}
                >
                  {phase.label}
                </p>
                <h3 
                  className="text-xl text-gray-900"
                  style={{ fontFamily: 'Fraunces, serif', fontWeight: '500' }}
                >
                  {phase.title}
                </h3>
              </div>

              <ul className="space-y-2 flex-1">
                {phase.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span 
                      className="w-1 h-1 rounded-full mt-2 shrink-0" 
                      style={{ backgroundColor: '#C9A567' }}
                    />
                    <span className="text-gray-600 text-sm leading-relaxed font-sans">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {footerNote && (
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-gray-500 text-sm leading-relaxed font-sans" dangerouslySetInnerHTML={{ __html: footerNote }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default PanchakarmaTimeline;
