import React from 'react';

const PediatricAgeGroups = ({ label, title, description, ageGroups, footer }) => {
  return (
    <section style={{ padding: '96px 24px', background: 'rgb(250, 246, 239)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgb(201, 168, 76)' }}>
            <span className="inline-block w-6 h-px mr-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
            {label}
            <span className="inline-block w-6 h-px ml-2 align-middle" style={{ background: 'rgb(201, 168, 76)' }}></span>
          </p>
          <h2 className="text-3xl sm:text-4xl mb-6" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
            {title}
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
            {description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {ageGroups.map((group, idx) => (
            <div key={idx} className="bg-white rounded-lg p-8 transition-all hover:shadow-lg" style={{ borderTop: '4px solid rgb(201, 168, 76)' }}>
              <p className="text-5xl mb-4" style={{ fontFamily: 'Fraunces, Georgia, serif', color: 'rgb(201, 168, 76)', fontWeight: 300 }}>
                {group.age}
              </p>
              <h3 className="text-xl mb-3" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                {group.label}
              </h3>
              <p className="text-sm mb-4 leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
                {group.desc}
              </p>
              <div className="pt-4 border-t border-black/5">
                <p className="text-xs leading-relaxed" style={{ color: 'rgb(107, 107, 107)' }}>
                  <span className="font-semibold" style={{ color: 'rgb(26, 26, 26)' }}>Common conditions:</span><br/>
                  {group.conditions}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-sm mt-12 max-w-2xl mx-auto" style={{ color: 'rgb(107, 107, 107)' }}>
          {footer}
        </p>
      </div>
    </section>
  );
};

export default PediatricAgeGroups;
