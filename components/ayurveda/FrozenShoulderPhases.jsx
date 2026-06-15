import React from 'react';

const FrozenShoulderPhases = ({ label, title, description, items }) => {
  return (
    <section style={{ background: 'rgb(255, 255, 255)', padding: '96px 24px' }}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: '#C9A84C' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: '#C9A84C' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: '#C9A84C' }}></span>
          </p>
          <h2 className="text-4xl" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
            {title}
          </h2>
          <p className="text-base mt-4 max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
            {description}
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-lg transition-all hover:shadow-md border-t-4"
              style={{
                background: 'rgb(248, 244, 238)',
                borderColor: index === 0 ? 'rgb(201, 168, 76)' : index === 1 ? 'rgb(184, 150, 90)' : 'rgb(100, 140, 100)'
              }}
            >
              <div className="flex items-baseline gap-3 mb-6">
                <span className="text-4xl font-medium" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(184, 150, 90)' }}>
                  {item.number}
                </span>
                <h3 className="text-xl font-medium leading-snug" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
                  {item.title}
                </h3>
              </div>
              {item.typicalDuration && (
                <p className="text-xs mb-6" style={{ color: 'rgb(150, 140, 130)', fontStyle: 'italic' }}>
                  {item.typicalDuration}
                </p>
              )}

              {item.typicalSymptoms && (
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgb(184, 150, 90)' }}>
                    Typical symptoms
                  </p>
                  <ul className="space-y-2">
                    {item.typicalSymptoms.map((symptom, i) => (
                      <li key={i} className="text-xs flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }}></span>
                        <span style={{ color: 'rgb(107, 107, 107)' }}>{symptom}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.treatmentFocus && (
                <div className="mb-6">
                  <p className="text-xs font-bold tracking-widest uppercase mb-3" style={{ color: 'rgb(184, 150, 90)' }}>
                    Treatment focus
                  </p>
                  <ul className="space-y-2">
                    {item.treatmentFocus.map((focus, i) => (
                      <li key={i} className="text-xs flex items-start gap-2">
                        <span className="mt-1 flex-shrink-0 w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }}></span>
                        <span style={{ color: 'rgb(107, 107, 107)' }}>{focus}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {item.whatToExpect && (
                <div className="pt-4 border-t" style={{ borderColor: 'rgba(28,25,23,0.08)' }}>
                  <p className="text-xs font-bold tracking-widest uppercase mb-2" style={{ color: 'rgb(184, 150, 90)' }}>
                    What to expect
                  </p>
                  <p className="text-xs" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.6' }}>
                    {item.whatToExpect}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
        <div className="mt-10 text-center max-w-2xl mx-auto">
          <p className="text-sm" style={{ color: 'rgb(107, 107, 107)', lineHeight: '1.7' }}>
            Most patients are in the frozen phase when they first present for specialist treatment — often having spent months in the freezing phase undiagnosed. Phase identification at initial assessment determines your specific treatment focus and realistic timeline.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FrozenShoulderPhases;