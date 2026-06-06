import React from 'react';

const SportsInjuryTypes = ({ label, title, items, footer }) => {
  return (
    <section className="bg-white" style={{ padding: '96px 24px' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {items.map((item, index) => (
            <div 
              key={index}
              className="rounded-lg p-6 cursor-pointer transition-all hover:-translate-y-1 hover:shadow-md group"
              style={{ background: 'rgb(250, 247, 242)', borderLeft: '3px solid rgb(201, 168, 76)' }}
            >
              <h4 className="text-base mb-1" style={{ fontFamily: 'var(--font-display, Fraunces, Georgia, serif)', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                {item.title}
              </h4>
              {item.subtitle && (
                <p className="text-xs mb-3" style={{ color: 'rgb(201, 168, 76)', fontStyle: 'italic' }}>
                  {item.subtitle}
                </p>
              )}
              <p className="text-sm leading-relaxed mb-3" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.6 }}>
                {item.description}
              </p>
              {item.age && (
                <p className="text-xs" style={{ color: 'rgb(26, 67, 50)', fontWeight: '500' }}>
                  {item.age}
                </p>
              )}
            </div>
          ))}
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
