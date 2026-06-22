import React from 'react';

const SportsInjuryTypes = ({ label, title, items, footer, variant = 'condition', description = '', bgColor = 'rgb(248, 244, 238)', cardBgColor, lgColumns = 3 }) => {
  return (
    <section style={{ background: bgColor, padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(184, 150, 90)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(184, 150, 90)' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(184, 150, 90)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'Fraunces, serif', fontWeight: 500, color: 'rgb(28, 25, 23)' }}>
            {title}
          </h2>
          {description && (
            <p className="text-base leading-relaxed mt-6 max-w-2xl mx-auto" style={{ color: 'rgb(61, 52, 45)', fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${lgColumns} gap-5`}>
          {items.map((item, index) => {
            // Use cardBgColor if provided, otherwise use the default logic
            const cardBg = cardBgColor || (bgColor === 'rgb(255, 255, 255)' ? 'rgb(248, 244, 238)' : 'rgb(255, 255, 255)');
            
            return (
            variant === 'condition' ? (
              <div 
                key={index}
                className="rounded-lg p-6 transition-all hover:shadow-md"
                style={{ background: cardBg, borderLeft: '3px solid rgb(184, 150, 90)' }}
              >
                <div className="flex items-baseline gap-3 mb-3">
                  {item.number && (
                    <span className="text-2xl font-medium" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(184, 150, 90)' }}>
                      {item.number}
                    </span>
                  )}
                  <h4 className="text-base font-medium leading-snug" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgb(90, 79, 71)', fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.description }} />

                {item.typicalPatient && (
                  <p className="text-xs" style={{ color: 'rgb(184, 150, 90)', fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="font-semibold uppercase tracking-wide text-[10px]">Typical patient: </span>
                    {item.typicalPatient}
                  </p>
                )}
                
                {item.statistic && (
                  <div className="pt-3 border-t text-xs font-medium" style={{ fontFamily: '"DM Sans", system-ui, sans-serif', color: 'rgb(201, 168, 76)', borderColor: 'rgba(201, 168, 76, 0.3)' }}>
                    {item.statistic}
                  </div>
                )}
                           
                           
 </div>
            ) : (
              <div 
                key={index}
                className="rounded-lg p-7 transition-all hover:shadow-md"
                style={{ background: cardBg, borderTop: '4px solid rgb(184, 150, 90)' }}
              >
                <h4 className="text-lg font-medium mb-4" style={{ fontFamily: 'Fraunces, serif', color: 'rgb(28, 25, 23)' }}>
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed mb-5" style={{ color: 'rgb(90, 79, 71)', fontFamily: 'DM Sans, sans-serif' }} dangerouslySetInnerHTML={{ __html: item.description }} />

                {item.typicalRecovery && (
                  <div className="pt-4 border-t text-xs" style={{ borderColor: 'rgba(28, 25, 23, 0.08)', color: 'rgb(122, 110, 100)', fontFamily: 'DM Sans, sans-serif' }}>
                    <span className="font-semibold uppercase tracking-wide text-[10px]" style={{ color: 'rgb(184, 150, 90)' }}>Typical recovery: </span>
                    {item.typicalRecovery}
                  </div>
                )}
              </div>
            )
            );
          })}
        </div>
        {footer && (
          <div className="text-center mt-10">
            <p className="text-sm" style={{ color: 'rgb(107, 107, 107)' }} dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SportsInjuryTypes;
