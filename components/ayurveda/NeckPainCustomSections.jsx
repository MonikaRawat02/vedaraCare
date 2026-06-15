import React from 'react';

export const NeckPainShouldYouSee = ({
  bgColor = "bg-[#F5F1E8]",
  label = "Self-Assessment",
  title = "Should you see a physiotherapist for your neck pain?",
  description = "",
  physiotherapyFirst = [],
  medicalFirst = [],
  imagingNote = ""
}) => {
  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        <div className="text-center mb-14">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#96741C' }}>
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Fraunces, serif', color: '#1C3D2E' }}>
            {title}
          </h2>
        </div>

        <div className="grid md:grid-cols-[60fr_40fr] gap-12">
          <div>
            <p className="text-lg mb-8" style={{ color: '#1A1916', lineHeight: '1.8' }}>
              {description}
            </p>

            <h3 className="text-xl font-semibold mb-5" style={{ fontFamily: 'Fraunces, serif', color: '#1C3D2E' }}>
              Physiotherapy is typically the right first step if:
            </h3>
            <div className="space-y-3 mb-8">
              {physiotherapyFirst.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5" style={{ background: '#E0EDE7' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ color: '#1C3D2E' }}>
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                  </div>
                  <p className="text-sm" style={{ color: '#1A1916', lineHeight: '1.75' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <h3 className="text-xl font-semibold mb-5" style={{ fontFamily: 'Fraunces, serif', color: '#8B3A3A' }}>
              Medical evaluation should come first if:
            </h3>
            <div className="space-y-3 mb-8">
              {medicalFirst.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: '#C0392B' }}>
                    <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path>
                    <path d="M12 9v4"></path>
                    <path d="M12 17h.01"></path>
                  </svg>
                  <p className="text-sm" style={{ color: '#1A1916', lineHeight: '1.75' }}>
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 border-l-[3px]" style={{ background: '#F0EDE4', borderColor: '#B8922A', borderRadius: '0px 8px 8px 0px' }}>
              <h4 className="text-sm font-semibold mb-2" style={{ color: '#1C3D2E' }}>
                A note on imaging
              </h4>
              <p className="text-sm" style={{ color: '#6B6455', lineHeight: '1.75' }}>
                {imagingNote}
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="border-2 p-6" style={{ borderColor: '#C0392B', borderRadius: '12px', background: '#FDF6F6' }}>
              <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#C0392B' }}>
                When to Seek Urgent Care
              </p>
              
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#C0392B' }}>
                  A&E immediately
                </p>
                <div className="space-y-1.5">
                  {[
                    "Severe headache with neck stiffness + fever",
                    "Sudden severe neck pain after significant trauma",
                    "Progressive arm weakness or numbness",
                    "Loss of bladder or bowel control",
                    "Severe vision changes with neck pain"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#8B3A3A' }}>
                      <span className="shrink-0">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#C07320' }}>
                  GP or specialist first
                </p>
                <div className="space-y-1.5">
                  {[
                    "Cancer history with new neck pain",
                    "Significant unexplained night pain",
                    "Severe radiating arm symptoms",
                    "Systemic symptoms (fever, weight loss)"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#1A1916' }}>
                      <span className="shrink-0">•</span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4" style={{ background: '#E0EDE7', borderRadius: '8px' }}>
                <p className="text-[10px] font-bold uppercase tracking-widest mb-2.5" style={{ color: '#1C3D2E' }}>
                  Physiotherapy first
                </p>
                <div className="space-y-1.5">
                  {[
                    "Mechanical neck pain",
                    "Postural neck pain",
                    "Whiplash without red flags",
                    "Chronic neck patterns",
                    "Cervicogenic headaches"
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs" style={{ color: '#1C3D2E' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5">
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="p-6" style={{ background: '#1C3D2E', borderRadius: '12px' }}>
              <p className="text-base font-semibold mb-2" style={{ fontFamily: 'Fraunces, serif', color: '#F5F1E8' }}>
                Ready to book an assessment?
              </p>
              <p className="text-xs mb-5" style={{ color: '#A5C2B0', lineHeight: '1.7' }}>
                60-minute initial assessment with a DPT-qualified physiotherapist. Same-week appointments typically available.
              </p>
              <a href="/book" className="w-full py-3 text-sm font-semibold mb-2.5 transition-all hover:opacity-90 flex items-center justify-center" style={{ background: '#F5F1E8', color: '#1C3D2E' }}>
                Book Neck Pain Assessment
              </a>
              <a href="https://wa.me/97142000000" className="w-full py-3 text-sm font-semibold border transition-all hover:opacity-70 flex items-center justify-center" style={{ borderColor: '#A5C2B0', color: '#A5C2B0', background: 'transparent' }}>
                WhatsApp Us First
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export const NeckPainPhases = ({
  bgColor = "bg-[#EDE8DE]",
  label = "Treatment Phases",
  title = "The four phases of neck pain physiotherapy.",
  description = "",
  phases = [],
  footer = ""
}) => {
  return (
    <section className={`${bgColor} py-24`}>
      <div className="max-w-4xl mx-auto px-6 md:px-8">
        <div className="text-center mb-16">
          <p className="text-[10px] font-semibold tracking-[0.22em] uppercase mb-3" style={{ color: '#96741C' }}>
            {label}
          </p>
          <h2 className="text-3xl md:text-4xl font-semibold" style={{ fontFamily: 'Fraunces, serif', color: '#1C3D2E' }}>
            {title}
          </h2>
        </div>
        
        <div>
          {phases.map((phase, index) => (
            <div key={index} className="relative flex gap-6">
              <div className="flex flex-col items-center">
                <div 
                  className="w-11 h-11 rounded-full flex items-center justify-center text-base font-semibold shrink-0"
                  style={{ background: '#1C3D2E', color: '#F5F1E8', fontFamily: 'Fraunces, serif' }}>
                  {phase.number}
                </div>
                {index < phases.length - 1 && (
                  <div className="w-px flex-1 my-2 min-h-[40px]" style={{ background: 'rgba(28, 61, 46, 0.157)' }}></div>
                )}
              </div>
              
              <div className="pb-10 flex-1">
                <div className="flex flex-wrap items-baseline gap-3 mb-4">
                  <h4 className="text-xl font-semibold" style={{ fontFamily: 'Fraunces, serif', color: '#1C3D2E' }}>
                    {phase.title}
                  </h4>
                  <span className="text-[10px] font-semibold tracking-widest uppercase px-2.5 py-1" style={{ background: 'rgba(184, 146, 42, 0.145)', color: '#96741C', borderRadius: '4px' }}>
                    {phase.duration}
                  </span>
                  {phase.frequency && (
                    <span className="text-xs" style={{ color: '#6B6455' }}>
                      {phase.frequency}
                    </span>
                  )}
                </div>
                
                <div className="grid sm:grid-cols-2 gap-2 mb-4">
                  {phase.items.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm" style={{ color: '#1A1916' }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 mt-0.5" style={{ color: '#B8922A' }}>
                        <path d="M20 6 9 17l-5-5"></path>
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                
                {phase.expected && (
                  <div className="p-4 text-sm" style={{ background: 'rgba(28, 61, 46, 0.063)', borderRadius: '8px', color: '#1C3D2E' }}>
                    <span className="font-semibold">Expected: </span>
                    {phase.expected}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        
        {footer && (
          <p className="text-xs text-center mt-2" style={{ color: '#6B6455' }}>
            {footer}
          </p>
        )}
      </div>
    </section>
  );
};
