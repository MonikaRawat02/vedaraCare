import React from 'react';
import Link from 'next/link';

const SportsInjuryTypes = ({ label, title, items, footer, variant = 'condition', description = '', bgColor = 'rgb(248, 244, 238)', cardBgColor, lgColumns = 3 }) => {
  return (
    <section className="py-24 px-6" style={{ background: bgColor }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-[13px] font-sans font-semibold tracking-[0.15em] uppercase mb-4 text-[#C9A961]">
            {label}
          </p>
          <h2 className="text-3xl sm:text-4xl font-serif font-normal text-[#1A1A1A]">
            {title}
          </h2>
          {description && (
            <p className="text-base leading-relaxed mt-6 max-w-2xl mx-auto text-[#6B6B6B] font-sans" dangerouslySetInnerHTML={{ __html: description }} />
          )}
        </div>
        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-${lgColumns} gap-5`}>
          {items.map((item, index) => {
            // Use cardBgColor if provided, otherwise use the default logic
            const cardBg = cardBgColor || (bgColor === 'rgb(255, 255, 255)' ? 'rgb(248, 244, 238)' : 'rgb(255, 255, 255)');
            const CardContent = () => (
              <>
                <div className="flex items-baseline gap-3 mb-3">
                  {item.number && (
                    <span className="text-2xl font-medium font-serif text-[#C9A961]">
                      {item.number}
                    </span>
                  )}
                  <h4 className="text-base font-medium leading-snug font-serif text-[#1A1A1A]">
                    {item.title}
                  </h4>
                </div>
                <p className="text-sm leading-relaxed mb-4 text-[#6B6B6B] font-sans" dangerouslySetInnerHTML={{ __html: item.description }} />
                {item.typicalPatient && (
                  <p className="text-xs text-[#C9A961] font-sans">
                    <span className="font-semibold uppercase tracking-wide text-[10px]">Typical patient: </span>
                    {item.typicalPatient}
                  </p>
                )}
                
                {item.statistic && (
                  <div className="pt-3 border-t text-xs font-medium font-sans text-[#C9A961]" style={{ borderColor: 'rgba(201, 168, 76, 0.3)' }}>
                    {item.statistic}
                  </div>
                )}

                {item.linkText && (
                  <span 
                    className="inline-block text-[14px] font-sans mt-3 text-[#C9A961]"
                  >
                    {item.linkText}
                  </span>
                )}
              </>
            );

            const AestheticCardContent = () => (
              <>
                <h4 className="text-lg font-medium mb-4 font-serif text-[#1A1A1A]">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed mb-5 text-[#6B6B6B] font-sans" dangerouslySetInnerHTML={{ __html: item.description }} />

                {item.typicalRecovery && (
                  <div className="pt-4 border-t text-xs font-sans" style={{ borderColor: 'rgba(28, 25, 23, 0.08)', color: 'rgb(122, 110, 100)' }}>
                    <span className="font-semibold uppercase tracking-wide text-[10px] text-[#C9A961]">Typical recovery: </span>
                    {item.typicalRecovery}
                  </div>
                )}

                {item.linkText && (
                  <span 
                    className="inline-block text-[14px] font-sans mt-3 text-[#C9A961]"
                  >
                    {item.linkText}
                  </span>
                )}
              </>
            );

            const isExternalLink = item.linkHref && item.linkHref.startsWith('http');
            const hasLink = !!item.linkHref;
            
            return (
            variant === 'condition' ? (
              hasLink ? (
                isExternalLink ? (
                  <a 
                    key={index}
                    href={item.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] block no-underline"
                    style={{ background: cardBg, borderLeft: '3px solid #C9A961' }}
                  >
                    <CardContent />
                  </a>
                ) : (
                  <Link 
                    key={index}
                    href={item.linkHref}
                    className="rounded-lg p-6 transition-all duration-300 hover:shadow-md hover:scale-[1.02] block no-underline"
                    style={{ background: cardBg, borderLeft: '3px solid #C9A961' }}
                  >
                    <CardContent />
                  </Link>
                )
              ) : (
                <div 
                  key={index}
                  className="rounded-lg p-6 transition-all hover:shadow-md"
                  style={{ background: cardBg, borderLeft: '3px solid #C9A961' }}
                >
                  <CardContent />
                </div>
              )
            ) : (
              hasLink ? (
                isExternalLink ? (
                  <a 
                    key={index}
                    href={item.linkHref}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg p-7 transition-all duration-300 hover:shadow-md hover:scale-[1.02] block no-underline"
                    style={{ background: cardBg, borderTop: '4px solid #C9A961' }}
                  >
                    <AestheticCardContent />
                  </a>
                ) : (
                  <Link 
                    key={index}
                    href={item.linkHref}
                    className="rounded-lg p-7 transition-all duration-300 hover:shadow-md hover:scale-[1.02] block no-underline"
                    style={{ background: cardBg, borderTop: '4px solid #C9A961' }}
                  >
                    <AestheticCardContent />
                  </Link>
                )
              ) : (
                <div 
                  key={index}
                  className="rounded-lg p-7 transition-all hover:shadow-md"
                  style={{ background: cardBg, borderTop: '4px solid #C9A961' }}
                >
                  <AestheticCardContent />
                </div>
              )
            )
            );
          })}
        </div>
        {footer && (
          <div className="text-center mt-10">
            <p className="text-sm text-[#6B6B6B]" dangerouslySetInnerHTML={{ __html: footer }} />
          </div>
        )}
      </div>
    </section>
  );
};

export default SportsInjuryTypes;
