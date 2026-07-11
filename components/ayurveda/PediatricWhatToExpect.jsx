import React from 'react';
import Link from 'next/link';

const PediatricWhatToExpect = ({ label, title, description, sections, whatToBring, whoShouldCome, timingToAvoid }) => {
  return (
    <section style={{ padding: '96px 24px', background: 'rgb(255, 255, 255)' }}>
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
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-6">
            <p className="text-base" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.75 }}>
              {description}
            </p>

            <div className="space-y-6">
              <div>
                <p className="text-sm " style={{ color: 'rgba(112, 112, 112, 1)' }}>
The initial consultation is 60-75 minutes — longer than typical adult physiotherapy. Time is built in for the child to settle, for thorough family-centred history, for assessment that respects the child's pace, and for parent education at the end.
                </p>
              </div>

              {sections.map((section, idx) => (
                <div key={idx}>
                  <h4 className="text-lg mb-2" style={{ fontFamily: 'Fraunces, Georgia, serif', fontWeight: 500, color: 'rgb(26, 26, 26)' }}>
                    {section.title}
                  </h4>
                  <p className="text-sm" style={{ color: 'rgb(107, 107, 107)', lineHeight: 1.75 }}>
                    {section.content}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="p-6 rounded-lg" style={{ background: 'rgb(250, 246, 239)' }}>
              <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(8, 8, 8, 1)' }}>
                What to bring
              </p>
              <ul className="space-y-2 text-sm" style={{ color: 'rgb(107, 107, 107)' }}>
                {whatToBring.map((item, idx) => (
                  <li key={idx} className="flex gap-2">
                    <span style={{ color: 'rgb(201, 168, 76)' }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'rgb(250, 246, 239)' }}>
              <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(8, 8, 8, 1)' }}>
                Who should come
              </p>              <p className="text-sm" style={{ color: 'rgb(107, 107, 107)' }}>
                {whoShouldCome}
              </p>
            </div>

            <div className="p-6 rounded-lg" style={{ background: 'rgb(250, 246, 239)' }}>
              <p className="text-xs font-bold tracking-wider uppercase mb-3" style={{ color: 'rgba(8, 8, 8, 1)' }}>
                Timing to avoid
              </p>
              <div className="text-sm" style={{ color: 'rgb(107, 107, 107)' }}>
                {timingToAvoid.map((item, idx) => (
                  <div key={idx} className="flex gap-2">
                    <span style={{ color: 'rgba(8,8,8, 1)' }}>•</span>
                    {item}
                  </div>
                ))}
              </div>
            </div>

            <Link 
              href="/book" 
              className="w-full bg-[rgb(24,76,58)] hover:bg-[rgb(30,90,70)] text-white font-bold py-3 px-6 rounded transition-colors flex items-center justify-center"
            >
              Book a Paediatric Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PediatricWhatToExpect;
